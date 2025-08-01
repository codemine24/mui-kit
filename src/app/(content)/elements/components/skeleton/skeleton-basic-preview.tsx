import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const SkeletonBasicPreview = () => {
  return (
    <Stack spacing={1} p={2} border={1} borderColor="divider" borderRadius={2}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
};
