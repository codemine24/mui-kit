export const GroupVariantsCodeString = `
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Avatar, AvatarGroup, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: \`2px solid \${theme.palette.background.paper}\`,
}));

export default function GroupVariants() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={3}
    >
      {/* Basic Group */}
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
        <Avatar alt="Travis Howard" />
        <Avatar alt="Cindy Baker" src="/avatar-2.jpg" />
        <Avatar alt="Agnes Walker" src="/avatar-3.jpg" />
        <Avatar alt="Trevor Henderson" src="/avatar-4.jpg" />
      </AvatarGroup>

      {/* Surplus */}
      <AvatarGroup
        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
        total={4251}
      >
        <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
        <Avatar alt="Travis Howard" src="/avatar-2.jpg" />
        <Avatar alt="Agnes Walker" />
        <Avatar alt="Trevor Henderson" src="/avatar-4.jpg" />
      </AvatarGroup>

      {/* Custom Spacing */}
      <AvatarGroup spacing={24}>
        <Avatar alt="Remy Sharp" src="/avatar-1.jpg" />
        <Avatar alt="Travis Howard" src="/avatar-2.jpg" />
        <Avatar alt="Agnes Walker" />
        <Avatar alt="Trevor Henderson" src="/avatar-4.jpg" />
      </AvatarGroup>

      {/* Pair */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt="Remy Sharp" />}
      >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Badge>
    </Stack>
  );
}
`;
