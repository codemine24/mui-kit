export const OTPUnderlinedString = `
import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";

const length = 6;

export default function OTPUnderlined() {
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
    <Box display="flex" gap={2}>
      {otp.map((data, index) => (
        <TextField
          key={index}
          inputRef={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputProps={{
            maxLength: 1,
            style: {
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            },
          }}
          value={data}
          onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          variant="standard"
          sx={{
            width: "60px",
            "& .MuiInput-underline:before": {
              borderBottomWidth: "2px",
            },
            "& .MuiInput-underline:after": {
              borderBottomWidth: "3px",
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
