export const skeletonAnimationString = `import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonAnimationPreview = () => {
  return (
    <Stack
      width={300}
      spacing={1}
      p={2}
      border={1}
      borderColor="divider"
      borderRadius={2}
    >
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Stack>
  );
};
`;