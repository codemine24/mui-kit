import { Box, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const length = 6;

export default function OTPBasicPreview() {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [completedOTP, setCompletedOTP] = useState<string>("");

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

  useEffect(() => {
    if (otp.every((digit) => digit !== "") && setCompletedOTP) {
      setCompletedOTP(otp.join(""));
    } else {
      setCompletedOTP("");
    }
  }, [otp, setCompletedOTP]);

  return (
    <Stack alignItems="center" spacing={2} sx={{ width: "100%", py: 6 }}>
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
                // fontSize: {},
                fontWeight: "bold",
              },
            }}
            value={data}
            onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            variant="outlined"
            sx={{
              width: { xs: 35, md: 45, lg: 60 },
              "& input": {
                fontSize: { xs: "1rem", md: "1.5rem" },
                padding: { xs: 0.5, md: 1, lg: 2 },
              },
            }}
            autoComplete="one-time-code"
            inputMode="numeric"
          />
        ))}
      </Box>
      {completedOTP && (
        <Typography variant="body2" sx={{ mt: 2, color: "success.main" }}>
          Your OTP is: {completedOTP}
        </Typography>
      )}
    </Stack>
  );
}
