export const subHeroSingleColTwoString = `import { Box, Typography } from "@mui/material";

export const SubHeroSingleColTwoPreview = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "common.primary",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      {/* New  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            gap: 2,
            marginBottom: "10px",
          }}
        >
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#2f78f5" }} />
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#2f78f5",
              whiteSpace: "nowrap",
              fontWeight: 600,
            }}
          >
            Sub Hero Text
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "#2f78f5" }} />
        </Box>

        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#2f78f5",
            fontSize: { xs: 24, md: 32 },
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          This is a section heading
        </Typography>
        <Typography
          sx={{
            color: "common.primary",
            textAlign: "center",
            fontWeight: 400,
            fontSize: { xs: 16, md: 16 },
            px: { xs: 0, md: "15%" },
            lineHeight: 1.5,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dicta omnis error veritatis sed assumenda dolores velit fugit
          necessitatibus, officia voluptatem, quidem rem mollitia et cum
          blanditiis soluta quae unde quo eum, quam similique ullam suscipit!
          Molestias illum neque nesciunt earum corporis delectus sed, natus hic
          non. Quod, in sunt.
        </Typography>
      </Box>
    </Box>
  );
};
`;
