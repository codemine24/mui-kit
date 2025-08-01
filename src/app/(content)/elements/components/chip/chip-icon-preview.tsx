import FaceIcon from "@mui/icons-material/Face";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/system";

export const ChipIconPreview = () => {
  return (
    <Stack
      sx={{ flexWrap: "wrap", gap: 1 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip
        variant="outlined"
        sx={{
          [`& .${chipClasses.label}`]: {
            display: "flex",
            gap: 1,
            alignItems: "center",
          },
        }}
        label={
          <>
            <span>With Icon</span>
            <FaceIcon />
          </>
        }
      />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      <Chip
        sx={{
          color: "#ffffff",
          background: "linear-gradient(136deg,#9810FA 0%,#0077e6 100%)",
          [`& .${chipClasses.icon}`]: {
            color: "#ffffff",
          },
        }}
        icon={<FaceIcon />}
        label="With Icon"
        variant="outlined"
      />
      <Chip
        sx={{
          color: "#000000",
          bgcolor: `${alpha("#367BF5", 0.3)}`,
          [`& .${chipClasses.icon}`]: {
            color: "#000000",
          },
        }}
        icon={<FaceIcon />}
        label="With Icon"
      />
    </Stack>
  );
};
