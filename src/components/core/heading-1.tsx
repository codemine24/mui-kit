import { Typography } from "@mui/material";

export const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="h1"
      gutterBottom
      sx={{
        "& span": { color: "primary.main" },
      }}
    >
      {children}
    </Typography>
  );
};
