"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading2 } from "@/components/core/heading-2";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

const contributors = [
  {
    name: "Yead",
    avatar: "https://avatars.githubusercontent.com/u/174150044?v=4",
    url: "https://github.com/Yead191",
  },
  {
    name: "Sumit",
    avatar: "https://avatars.githubusercontent.com/u/76784329?v=4",
    url: "https://github.com/sumit2401",
  },
  {
    name: "Rapu",
    avatar: "https://avatars.githubusercontent.com/u/108398425?v=4",
    url: "https://github.com/riyazulhaque64",
  },
  {
    name: "Rakib",
    avatar: "https://avatars.githubusercontent.com/u/107996751?v=4",
    url: "https://github.com/RakibMojumder",
  },
  {
    name: "Fazly",
    avatar: "https://avatars.githubusercontent.com/u/151907553?v=4",
    url: "https://github.com/fazlyalahi01",
  },
  {
    name: "Forhad",
    avatar: "https://avatars.githubusercontent.com/u/154924977?v=4",
    url: "https://github.com/devsman-forhad",
  },
];

export const ContributorsOverview = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",

        paddingTop: { xs: "40px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
        position: "relative",
        ":after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "radial-gradient(circle at center, #24a76b 0%, transparent 80%)",
        },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box mb={4}>
          <Heading2
            text="Community Contributors"
            sx={{ textAlign: "center" }}
          />
          <BodyText
            text={
              <>
                Here are the hand-picked contributors who had huge contribution
                in MUI Kit. If you are an open-source enthusiast and want to
                contribute, you can find us on{" "}
                <Link
                  href="https://github.com/codemine24/mui-kit"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  GitHub
                </Link>
              </>
            }
            sx={{
              textAlign: "center",
              px: { xs: "0%", md: "25%" },
            }}
          />
        </Box>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          mt={2}
          flexWrap={"wrap"}
        >
          {contributors?.map((contributor, index) => (
            <Avatar
              key={index}
              title={contributor?.name}
              src={contributor?.avatar}
              alt={contributor?.name}
              sx={{
                width: { xs: 48, md: 64 },
                height: { xs: 48, md: 64 },
                cursor: "pointer",
                boxShadow: 1,
              }}
              onClick={() => window.open(contributor?.url, "_blank")}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
