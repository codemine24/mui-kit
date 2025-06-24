import {
  CheckCircle,
  Error,
  Refresh,
  Security,
  Timer,
} from "@mui/icons-material";
import { Alert, Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const length = 6;
const time = 60; // seconds

export default function OTPWithTimerAndResend() {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [timer, setTimer] = useState(time);
  const [canResend, setCanResend] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    setError("");
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    e.preventDefault();
    setError("");
    const pasteData = e.clipboardData.getData("text");
    const pasteArray = pasteData.slice(0, length - index).split("");

    if (pasteArray.every((char) => !isNaN(Number(char)))) {
      const newOtp = [...otp];
      pasteArray.forEach((char, i) => {
        if (index + i < length) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);

      const nextIndex = Math.min(index + pasteArray.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    } else {
      setError("Invalid OTP, should be numeric only.");
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

  const handleResend = () => {
    setError("");
    setTimer(time);
    setCanResend(false);
    setOtp(new Array(length).fill(""));
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  useEffect(() => {
    setIsComplete(otp.every((digit) => digit !== ""));
  }, [otp]);

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Security color="primary" />
        <Typography variant="h6">Enter Verification Code</Typography>
        {!isComplete && (
          <Chip
            icon={<Timer />}
            label={formatTime(timer)}
            color={timer < 30 ? "error" : "primary"}
            variant="outlined"
          />
        )}
      </Box>

      <Box display="flex" gap={1} mb={3}>
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
            onFocus={(e) => e.target.select()}
            onPaste={(e) => handlePaste(e, index)}
            variant="outlined"
            sx={{ width: "60px" }}
          />
        ))}
      </Box>

      {!error && !isComplete && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {"Didn't receive the code?"}
          </Typography>
          <Button
            variant="text"
            onClick={handleResend}
            disabled={!canResend}
            startIcon={<Refresh />}
          >
            Resend Code
          </Button>
        </Box>
      )}

      {isComplete && (
        <Alert severity="success" icon={<CheckCircle />}>
          OTP entered successfully!
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
          icon={<Error />}
          action={
            <Button
              aria-label="resend"
              color="error"
              size="small"
              variant="contained"
              onClick={handleResend}
            >
              Resend
            </Button>
          }
        >
          {error}
        </Alert>
      )}
    </Box>
  );
}
