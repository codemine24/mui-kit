export const skeletonCardActionButtonString = `import { Box, Skeleton } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

export const SkeletonCardActionButtonPreview = () => {
  return (
    <Box
      width={[350, 400]}
      p={2}
      border={1}
      borderColor="divider"
      borderRadius={2}
      gap={2}
    >
      <Box sx={{ position: "relative", width: "100%", height: 250, mb: 2 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius: 5 }}
        />
        <ImageIcon
          sx={{
            fontSize: 50,
            color: "text.disabled",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>

      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "60%" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      <Box mt={1}>
        <Skeleton height={60} width={150} sx={{ borderRadius: 3 }} />
      </Box>
    </Box>
  );
};`;
