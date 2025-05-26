"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading2 } from "@/components/core/heading-2";
import { Avatar, Box, Container, Stack } from "@mui/material";

const contributors = [
  {
    name: "Asadur Rahman Yead",
    avatar: "https://avatars.githubusercontent.com/u/174150044?v=4",
    url: "https://github.com/Yead191",
  },
  {
    name: "Fazly",
    avatar: "https://avatars.githubusercontent.com/u/151907553?v=4",
    url: "https://github.com/fazlyalahi01",
  },
  {
    name: "Dhruv",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    url: "https://github.com/dhruv-rajput",
  },
];

export const ContributorsOverview = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box>
          <Heading2
            text="Community contributors"
            sx={{ textAlign: "center" }}
          />
          <BodyText
            text="Join a community of open-source contributors by tuning in with the Flowbite React community and become one of the highlighted members"
            sx={{
              textAlign: "center",
              px: { xs: "10%", md: "25%" },
            }}
          />
        </Box>
        <Stack direction={"row"} spacing={2} justifyContent={"center"} mt={2}>
          {contributors?.map((contributor, index) => (
            <Avatar
              key={index}
              title={contributor?.name}
              src={contributor?.avatar}
              alt={contributor?.name}
              sx={{ width: 64, height: 64, cursor: "pointer" }}
              onClick={() => window.open(contributor?.url, "_blank")}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
