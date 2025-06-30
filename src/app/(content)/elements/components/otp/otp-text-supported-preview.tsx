import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";

const length = 6;

export const OTPTextSupportedPreview = () => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [completedOTP, setCompletedOTP] = useState<string>("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    e.preventDefault();

    const pasteData = e.clipboardData.getData("text");
    const pasteArray = pasteData.slice(0, length - index).split("");

    const newOtp = [...otp];
    pasteArray.forEach((char, i) => {
      if (index + i < length) {
        newOtp[index + i] = char;
      }
    });
    setOtp(newOtp);

    const nextIndex = Math.min(index + pasteArray.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "") && setCompletedOTP) {
      setCompletedOTP(otp.join(""));
    } else {
      setCompletedOTP("");
    }
  }, [otp, setCompletedOTP]);

  return (
    <Stack alignItems="center" spacing={2} sx={{ width: "100%" }}>
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
                fontWeight: "bold"
              }
            }}
            value={data}
            onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            onFocus={(e) => e.target.select()}
            variant="outlined"
            sx={{
              width: { xs: 35, md: 45, lg: 60 },
              "& input": {
                fontSize: { xs: "1rem", md: "1.5rem" },
                padding: { xs: 0.8, md: 1, lg: 2 }
              }
            }}
            autoComplete="one-time-code"
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
};
