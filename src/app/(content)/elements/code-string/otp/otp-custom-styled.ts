export const OTPCustomStyledCodeString = `
import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";

const length = 6;

export default function OTPCustomStyled() {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Box display="flex" gap={1}>
      {otp.map((data, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            },
          }}
          value={data}
          onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => {
            e.target.select();
            setFocusedIndex(index);
          }}
          onBlur={() => setFocusedIndex(null)}
          variant="outlined"
          sx={{
            width: "60px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              transition: "all 0.3s ease",
              transform: focusedIndex === index ? "scale(1.05)" : "scale(1)",
              boxShadow:
                focusedIndex === index
                  ? "0 4px 12px rgba(25, 118, 210, 0.3)"
                  : "none",
              "& fieldset": {
                borderWidth: "2px",
                borderColor: (theme) =>
                  data ? theme.palette.primary.main : theme.palette.grey[400],
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
                borderWidth: "3px",
              },
            },
          }}
          autoComplete="one-time-code"
          inputMode="numeric"
        />
      ))}
    </Box>
  );
}
`;
