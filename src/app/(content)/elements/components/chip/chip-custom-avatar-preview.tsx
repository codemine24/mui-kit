import Avatar from "@mui/material/Avatar";
import Chip, { chipClasses } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const ChipCustomAvatarPreview = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={{
          [`& .${chipClasses.avatar}`]: {
            border: "1px solid #111",
          },
        }}
        avatar={
          <Avatar
            alt="Fazly Alahi"
            src="https://avatars.githubusercontent.com/u/151907553?s=40&v=4"
          />
        }
        label="Fazly Alahi"
        variant="outlined"
      />
    </Stack>
  );
};
