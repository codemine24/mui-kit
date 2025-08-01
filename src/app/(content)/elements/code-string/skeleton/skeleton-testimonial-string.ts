export const skeletonTestimonialString = `import { Box, Stack, Skeleton } from "@mui/material";

export const SkeletonTestimonialPreview = () => {
  return (
    <Stack
      width={[350, 450, 650]}
      p={2}
      border={1}
      borderColor="divider"
      borderRadius={2}
      spacing={1}
    >
      <Skeleton variant="text" width="100%" />
      <Skeleton
        variant="text"
        width="80%"
        height={10}
        sx={{ mx: "auto", transform: "none", display: "block" }}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2}
      >
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={200} height={15} />
        <Skeleton variant="text" width={200} height={15} />
      </Box>
    </Stack>
  );
};`;
