import { CheckCircle } from "@mui/icons-material";
import { Alert, Box, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const firstLength = 2;
const secondLength = 4;

export const OTPFractionPreview = () => {
  const [firstGroup, setFirstGroup] = useState<string[]>(
    new Array(firstLength).fill("")
  );
  const [secondGroup, setSecondGroup] = useState<string[]>(
    new Array(secondLength).fill("")
  );
  const [isComplete, setIsComplete] = useState(false);

  const firstGroupRefs = useRef<(HTMLInputElement | null)[]>([]);
  const secondGroupRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFirstGroupChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newFirstGroup = [
      ...firstGroup.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setFirstGroup(newFirstGroup);

    // Move to next input in first group or jump to second group
    if (element.value !== "") {
      if (index < firstLength - 1) {
        firstGroupRefs.current[index + 1]?.focus();
      } else {
        // Jump to first input of second group
        secondGroupRefs.current[0]?.focus();
      }
    }
  };

  const handleSecondGroupChange = (
    element: HTMLInputElement,
    index: number
  ) => {
    if (isNaN(Number(element.value))) return false;

    const newSecondGroup = [
      ...secondGroup.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setSecondGroup(newSecondGroup);

    // Move to next input in second group
    if (element.value !== "" && index < secondLength - 1) {
      secondGroupRefs.current[index + 1]?.focus();
    }
  };

  const handleFirstGroupKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !firstGroup[index] && index > 0) {
      firstGroupRefs.current[index - 1]?.focus();
    }
  };

  const handleSecondGroupKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !secondGroup[index]) {
      if (index > 0) {
        secondGroupRefs.current[index - 1]?.focus();
      } else {
        // Jump back to last input of first group
        firstGroupRefs.current[firstLength - 1]?.focus();
      }
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent,
    isFirstGroup: boolean,
    index: number
  ) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // Remove non-digits

    if (pasteData.length === firstLength + secondLength) {
      // Full OTP pasted
      const firstPart = pasteData.slice(0, firstLength).split("");
      const secondPart = pasteData
        .slice(firstLength, firstLength + secondLength)
        .split("");

      setFirstGroup(firstPart);
      setSecondGroup(secondPart);
      secondGroupRefs.current[secondLength - 1]?.focus();
    } else if (isFirstGroup) {
      // Paste in first group
      const pasteArray = pasteData.slice(0, firstLength - index).split("");
      const newFirstGroup = [...firstGroup];
      pasteArray.forEach((char, i) => {
        if (index + i < firstLength) {
          newFirstGroup[index + i] = char;
        }
      });
      setFirstGroup(newFirstGroup);

      if (pasteArray.length >= firstLength - index) {
        secondGroupRefs.current[0]?.focus();
      } else {
        const nextIndex = Math.min(index + pasteArray.length, firstLength - 1);
        firstGroupRefs.current[nextIndex]?.focus();
      }
    } else {
      // Paste in second group
      const pasteArray = pasteData.slice(0, secondLength - index).split("");
      const newSecondGroup = [...secondGroup];
      pasteArray.forEach((char, i) => {
        if (index + i < secondLength) {
          newSecondGroup[index + i] = char;
        }
      });
      setSecondGroup(newSecondGroup);

      const nextIndex = Math.min(index + pasteArray.length, secondLength - 1);
      secondGroupRefs.current[nextIndex]?.focus();
    }
  };

  useEffect(() => {
    const isFirstComplete = firstGroup.every((digit) => digit !== "");
    const isSecondComplete = secondGroup.every((digit) => digit !== "");
    setIsComplete(isFirstComplete && isSecondComplete);
  }, [firstGroup, secondGroup]);

  const getCompleteOTP = () => {
    return `${firstGroup.join("")}-${secondGroup.join("")}`;
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }}>
        {/* First Group */}
        <Box display="flex" gap={1}>
          {firstGroup.map((data, index) => (
            <TextField
              key={`first-${index}`}
              inputRef={(el) => (firstGroupRefs.current[index] = el)}
              type="text"
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontWeight: "bold",
                },
              }}
              value={data}
              onChange={(e) =>
                handleFirstGroupChange(e.target as HTMLInputElement, index)
              }
              onKeyDown={(e) => handleFirstGroupKeyDown(e, index)}
              onPaste={(e) => handlePaste(e, true, index)}
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
                    borderColor: data ? "#4caf50" : "grey.400",
                    borderWidth: data ? "2px" : "1px",
                  },
                },
              }}
              autoComplete="one-time-code"
              inputMode="numeric"
            />
          ))}
        </Box>

        {/* Separator */}
        <Typography
          variant="h4"
          sx={{ color: "text.secondary", fontWeight: "bold", mx: 1 }}
        >
          -
        </Typography>

        {/* Second Group */}
        <Box display="flex" gap={1}>
          {secondGroup.map((data, index) => (
            <TextField
              key={`second-${index}`}
              inputRef={(el) => (secondGroupRefs.current[index] = el)}
              type="text"
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontWeight: "bold",
                },
              }}
              value={data}
              onChange={(e) =>
                handleSecondGroupChange(e.target as HTMLInputElement, index)
              }
              onKeyDown={(e) => handleSecondGroupKeyDown(e, index)}
              onPaste={(e) => handlePaste(e, false, index)}
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
                    borderColor: data ? "#4caf50" : "grey.400",
                    borderWidth: data ? "2px" : "1px",
                  },
                },
              }}
              autoComplete="one-time-code"
              inputMode="numeric"
            />
          ))}
        </Box>
      </Box>

      {isComplete && (
        <Alert severity="success" icon={<CheckCircle />} sx={{ mt: 2 }}>
          Complete OTP: {getCompleteOTP()}
        </Alert>
      )}
    </Box>
  );
};
