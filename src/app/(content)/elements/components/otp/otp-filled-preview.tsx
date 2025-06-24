import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";

const length = 6;

export const OTPFilledPreview = () => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
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
    <Box display="flex" gap={{ xs: 0.5, md: 1 }}>
      {otp.map((data, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              fontWeight: "bold",
            },
          }}
          value={data}
          onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          variant="filled"
          sx={{
            width: { xs: 35, md: 45, lg: 60 },
            "& input": {
              fontSize: { xs: "1rem", md: "1.5rem" },
              padding: { xs: 0.8, md: 1, lg: 2 },
            },
            "& .MuiFilledInput-root": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[300]
                    : theme.palette.grey[700],
              },
              "&.Mui-focused": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              },
            },
          }}
          autoComplete="one-time-code"
          inputMode="numeric"
        />
      ))}
    </Box>
  );
};
