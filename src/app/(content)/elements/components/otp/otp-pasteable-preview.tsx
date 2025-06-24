import { CheckCircle, Error } from "@mui/icons-material";
import { Alert, Box, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const length = 6;

export const OTPPasteablePreview = () => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    setError("");

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

  useEffect(() => {
    setIsComplete(otp.every((digit) => digit !== ""));
  }, [otp]);

  return (
    <Box>
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
            onPaste={(e) => handlePaste(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            variant="outlined"
            sx={{
              width: { xs: 35, md: 45, lg: 60 },
              "& input": {
                fontSize: { xs: "1rem", md: "1.5rem" },
                padding: { xs: 0.8, md: 1, lg: 2 },
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: data ? "#4caf50" : "grey.500",
                  borderWidth: data ? "2px" : "1px",
                },
              },
            }}
            autoComplete="one-time-code"
            inputMode="numeric"
          />
        ))}
      </Box>
      {isComplete && (
        <Alert severity="success" icon={<CheckCircle />}>
          OTP entered successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" icon={<Error />}>
          {error}
        </Alert>
      )}
    </Box>
  );
};
