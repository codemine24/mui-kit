import Box from "@mui/material/Box";

export const IndexLabel = ({ index }: { index: number }) => {
  return (
    <Box
      sx={[
        () => ({
          top: 16,
          left: 16,
          width: 24,
          zIndex: 9,
          height: 24,
          display: "flex",
          color: "grey.800",
          borderRadius: "50%",
          position: "absolute",
          alignItems: "center",
          bgcolor: "common.white",
          typography: "subtitle2",
          justifyContent: "center",
        }),
      ]}
    >
      {index}
    </Box>
  );
};
