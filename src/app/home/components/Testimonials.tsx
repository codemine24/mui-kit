"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading2 } from "@/components/core/heading-2";
import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { Facebook, LinkedIn, X } from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface ITestimonial {
  name: string;
  title: string;
  message: string;
  platform: string;
  url?: string;
}

const testimonials: ITestimonial[] = [
  {
    name: "Rejown Ahmed Zisan",
    title: "Founder @ Web Makers LTD",
    message:
      "They have done an amazing thing! There was no open source UI Kit for the MUI in React. MUI is missing a lot of important components and features which needed to be written fully custom. However, Fazly Alahi and His team made this easier for us. Please like comment share and spread this library with your own community. ",
    platform: "linkedin",
    url: "/images/contributors_rejown.jpeg",
  },
  {
    name: "Arpit Awasthi",
    title: "CEO @ EdgeNRoots",
    message: "Great Fazly , Great to see such work",
    platform: "linkedin",
    url: "/images/contributors_arpit.jpeg",
  },
  {
    name: "Azim Uddin Ahamed",
    title: "Top rated plus @ Upwork",
    message:
      "It could be a game changer for material ui community. Will definitely use it for my next project.",
    platform: "linkedin",
    url: "/images/contributors_azim.jpg",
  },
  {
    name: "Minhajul Karim",
    title: "Software Engineer at Zaag",
    message:
      "Looks awesome, bhaiya. I've become a fan of the Blocks section, particularly.",
    platform: "facebook",
    url: "/images/contributors_Minhajul Karim.jpg",
  },

  {
    name: "Muhammad Rabbi",
    title: "Frontend developer",
    message:
      "Huge congrats on launching MUI Kit! 🎉 This is an amazing initiative for the open-source and MUI community. Love how you've extended core components, added missing elements, and included ready-made sections — super practical for real-world use. 🔥 Just bookmarked the repo and site — excited to explore and use it in future projects. Great work by the whole team! 🙌",
    platform: "linkedin",
    url: "/images/contributos_rabbi.jpeg",
  },
  {
    name: "Abu Bokkor Siddik",
    title: "MERN Stack Developer",
    message:
      "Do you realize what you've done?! Congrats, man! And congrats to everyone!",
    platform: "linkedin",
    url: "/images/contributors_abu.jpeg",
  },
  {
    name: "Serge A.",
    title: "Project manager @ Peppermint",
    message:
      "pretty cool tbh i always have a better time working when stuff like this pops up you think open source keeps getting stronger because more ppl contribute or because it lets anybody build whatever they want",
    platform: "linkedin",
    url: "/images/contributors_serge.jpeg",
  },
  {
    name: "Saffaullah Shuvo",
    title: "Web Developer",
    message: "The UI looks super cool.",
    platform: "linkedin",
    url: "/images/contributors_saffaullah.jpeg",
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  useFadeInOnScroll(".testimonial-animation");
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook sx={{ color: "#1877F2" }} />;
    case "linkedin":
      return <LinkedIn sx={{ color: "#0A66C2" }} />;
    case "twitter":
      return <X sx={{ color: (theme) => theme.palette.primary.main }} />;
    default:
      return <Facebook color="primary" />;
  }
};

export const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: { xs: "60px", md: "100px" },
        paddingBottom: { xs: "60px", md: "80px" },
        position: "relative",
        ":after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "radial-gradient(circle at center, #24a76b 0%, transparent 80%)",
        },
      }}
    >
      <Container maxWidth="xl">
        <Box mb={4}>
          <Heading2 text="Wall of love" sx={{ textAlign: "center" }} />
          <BodyText
            text={<>What people are saying about MUI Kit</>}
            sx={{
              textAlign: "center",
              px: { xs: "0%", md: "25%" },
            }}
          />
        </Box>

        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={1}
          sx={{ width: "auto", mx: -0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              className="testimonial-animation"
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--divider-color)",
                borderRadius: (theme) => theme.shape.borderRadius,
              }}
            >
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"start"}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mr: 2,
                      color: theme.palette.primary.contrastText,
                    }}
                    src={testimonial.url}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>

                <PlatformIcon platform={testimonial.platform} />
              </Stack>
              <Typography variant="body1" color="text.secondary" mb={2}>
                {testimonial.message}
              </Typography>
            </Box>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};
