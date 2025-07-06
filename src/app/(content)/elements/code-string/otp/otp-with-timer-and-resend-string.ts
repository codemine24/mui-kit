export const OTPWithTimerAndResendString = `import CheckCircle from "@mui/icons-material/CheckCircle";
import Error from "@mui/icons-material/Error";
import Refresh from "@mui/icons-material/Refresh";
import Security from "@mui/icons-material/Security";
import Timer from "@mui/icons-material/Timer";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";

const length = 6;
const time = 60; // seconds

export const OTPWithTimerAndResendPreview = () => {
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
    return \`\${mins}:\${secs.toString().padStart(2, "0")}\`;
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
      <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }} mb={3}>
        <Stack direction={"row"} gap={0.5}>
          <Security
            color="primary"
            sx={{ fontSize: { xs: "15px", md: "22px" } }}
          />
          <Typography
            sx={{ fontSize: { xs: "12px", md: "16px", fontWeight: "bold" } }}
          >
            Enter Verification Code
          </Typography>
        </Stack>
        {!isComplete && (
          <Chip
            icon={<Timer sx={{ fontSize: { xs: "15px", md: "22px" } }} />}
            label={formatTime(timer)}
            color={timer < Math.round(time / 4) ? "error" : "primary"}
            variant="outlined"
          />
        )}
      </Box>

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
            onPaste={(e) => handlePaste(e, index)}
            variant="outlined"
            sx={{
              width: { xs: 35, md: 45, lg: 60 },
              "& input": {
                fontSize: { xs: "1rem", md: "1.5rem" },
                padding: { xs: 0.8, md: 1, lg: 2 },
              },
            }}
            autoComplete="one-time-code"
            inputMode="numeric"
          />
        ))}
      </Box>

      {/* show resend button if otp is not received */}
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
            sx={{ fontSize: { xs: "12px", md: "14px", textTransform: "none" } }}
          >
            Resend Code
          </Button>
        </Box>
      )}

      {/* Show success message when otp is completed */}
      {isComplete && (
        <Alert severity="success" icon={<CheckCircle />}>
          OTP entered successfully!
        </Alert>
      )}

      {/* Show error message with resend button */}
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
};`;
