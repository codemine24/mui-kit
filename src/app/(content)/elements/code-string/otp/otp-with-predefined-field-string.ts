export const OTPWithPredefinedFieldString = `import CheckCircle from "@mui/icons-material/CheckCircle";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useCallback, useEffect, useRef, useState } from "react";

const length = 6;
const fixedPositions = { 0: "G" };

export const OTPWithPredefinedFieldPreview = () => {
  const [otp, setOtp] = useState<string[]>(() => {
    const initialOtp = new Array(length).fill("");
    // Set fixed values
    Object.entries(fixedPositions).forEach(([pos, value]) => {
      initialOtp[Number.parseInt(pos)] = value;
    });
    return initialOtp;
  });
  const [isComplete, setIsComplete] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onComplete = useCallback((value: string) => {
    console.log(value);
  }, []);

  const isFixedPosition = (index: number) => {
    return fixedPositions.hasOwnProperty(index);
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isFixedPosition(index)) return; // Don't allow changes to fixed positions
    if (isNaN(Number(element.value))) return false;

    const newOtp = [
      ...otp.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setOtp(newOtp);

    // Move to next editable field
    if (element.value !== "") {
      let nextIndex = index + 1;
      while (nextIndex < length && isFixedPosition(nextIndex)) {
        nextIndex++;
      }
      if (nextIndex < length) {
        inputRefs.current[nextIndex]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (isFixedPosition(index)) return;

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Find previous editable field
      let prevIndex = index - 1;
      while (prevIndex >= 0 && isFixedPosition(prevIndex)) {
        prevIndex--;
      }
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    if (isFixedPosition(index)) return;

    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // Remove non-digits

    const newOtp = [...otp];
    let pasteIndex = 0;

    for (let i = index; i < length && pasteIndex < pasteData.length; i++) {
      if (!isFixedPosition(i)) {
        newOtp[i] = pasteData[pasteIndex];
        pasteIndex++;
      }
    }

    setOtp(newOtp);

    // Focus on next available field
    let nextIndex = index + pasteIndex;
    while (nextIndex < length && isFixedPosition(nextIndex)) {
      nextIndex++;
    }
    if (nextIndex < length) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isFixedPosition(index)) {
      // If trying to focus on fixed field, move to next editable field
      let nextIndex = index + 1;
      while (nextIndex < length && isFixedPosition(nextIndex)) {
        nextIndex++;
      }
      if (nextIndex < length) {
        inputRefs.current[nextIndex]?.focus();
      } else {
        // If no next field, go to previous editable field
        let prevIndex = index - 1;
        while (prevIndex >= 0 && isFixedPosition(prevIndex)) {
          prevIndex--;
        }
        if (prevIndex >= 0) {
          inputRefs.current[prevIndex]?.focus();
        }
      }
      return;
    }
    e.target.select();
  };

  useEffect(() => {
    const editableFields = otp.filter((_, index) => !isFixedPosition(index));
    const isAllEditableFilled = editableFields.every((digit) => digit !== "");
    setIsComplete(isAllEditableFilled);

    if (isAllEditableFilled && onComplete) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

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
                cursor: isFixedPosition(index) ? "not-allowed" : "text",
              },
              readOnly: isFixedPosition(index),
            }}
            value={data}
            onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus(e, index)
            }
            variant="outlined"
            sx={{
              width: { xs: 35, md: 45, lg: 60 },
              "& input": {
                fontSize: { xs: "1rem", md: "1.5rem" },
                padding: { xs: 0.8, md: 1, lg: 2 },
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: isFixedPosition(index)
                    ? "#9e9e9e"
                    : data
                    ? "#4caf50"
                    : "#9e9e9e",
                  borderWidth: isFixedPosition(index)
                    ? "1px"
                    : data
                    ? "2px"
                    : "1px",
                  borderStyle: isFixedPosition(index) ? "dashed" : "solid",
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
          Complete OTP: {otp.join("")}
        </Alert>
      )}
    </Box>
  );
};`;
