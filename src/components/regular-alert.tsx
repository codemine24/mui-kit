import { Alert } from "@mui/material";

export const RegularAlert = ({ message }: { message: string }) => {
  return (
    <Alert
      severity="success"
      sx={{
        padding: "0 1rem",
        mb: 2,
        borderRadius: (theme) => theme.shape.borderRadius,
        py: 2,
      }}
    >
      {message}
    </Alert>
  );
};
