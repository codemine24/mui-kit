export const buttonSocialLoginString = `import { Icon } from "@iconify/react/dist/iconify.js";
import Apple from "@mui/icons-material/Apple";
import Facebook from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import Google from "@mui/icons-material/Google";
import Microsoft from "@mui/icons-material/Microsoft";
import X from "@mui/icons-material/X";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export const ButtonSocialLoginPreview = () => {
  return (
    <Box>
      {/* Contained Social Login buttons*/}
      <Stack
        direction="row"
        spacing={0.5}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Button
          variant="contained"
          startIcon={<Facebook />}
          sx={{
            bgcolor: "#3C5997",
            color: "#fff",
            "&:hover": {
              bgcolor: "#1f56cc",
            },
          }}
        >
          Sign In With Facebook
        </Button>

        <Button
          variant="contained"
          startIcon={<X />}
          sx={{
            bgcolor: "#1EA1F2",
            color: "#fff",
            "&:hover": {
              bgcolor: "#0378c2",
            },
          }}
        >
          Sign In With X
        </Button>

        <Button
          variant="contained"
          startIcon={<GitHub />}
          sx={{
            bgcolor: "#34383e",
            color: "#fff",
            "&:hover": {
              bgcolor: "#16191d",
            },
          }}
        >
          Sign In With Github
        </Button>

        <Button
          variant="contained"
          startIcon={<Google />}
          sx={{
            bgcolor: "#4081EC",
            color: "#fff",
            "&:hover": {
              bgcolor: "#1865e2",
            },
          }}
        >
          Sign In With Google
        </Button>

        <Button
          variant="contained"
          startIcon={<Apple />}
          sx={{
            bgcolor: "#050708",
            color: "#fff",
            "&:hover": {
              bgcolor: "#090c0e",
            },
          }}
        >
          Sign In With Apple
        </Button>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {/* Outlined Social Login buttons */}
      <Stack
        direction="row"
        spacing={0.5}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <Button
          variant="outlined"
          startIcon={<Apple />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign in with Apple
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="logos:dropbox" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign in with Dropbox
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="logos:discord-icon" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign in with Discord
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="devicon:facebook" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign in with Facebook
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign in with Github
        </Button>

        <Button
          variant="outlined"
          startIcon={<Icon icon="material-icon-theme:gitlab" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Gitlab
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="flat-color-icons:google" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="logos:linkedin-icon" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Linkedin
        </Button>
        <Button
          variant="outlined"
          startIcon={<Microsoft />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Microsoft
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="mdi:twitch" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Twitch
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="mdi:spotify" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Spotify
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="ic:baseline-tiktok" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Tiktok
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="fa6-brands:square-x-twitter" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Twitter
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="simple-icons:roblox" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Roblox
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="akar-icons:vk-fill" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With VK
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon icon="bxl:zoom" />}
          sx={{
            color: "text.primary",
            textTransform: "none",
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          Sign In With Zoom
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Icon only Social Login Button */}

      <Stack
        direction="row"
        spacing={0.5}
        flexWrap="wrap"
        alignItems={"center"}
        rowGap={2}
      >
        <IconButton
          title="Sign in with Apple"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Apple />
        </IconButton>
        <IconButton
          title="Sign in with Dropbox"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="mingcute:dropbox-fill" />
        </IconButton>
        <IconButton
          title="Sign in with Discord"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="ic:baseline-discord" />
        </IconButton>
        <IconButton
          title="Sign in with Facebook"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="uil:facebook" />
        </IconButton>
        <IconButton
          title="Sign in with GitHub"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          title="Sign in with GitLab"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="ri:gitlab-fill" />
        </IconButton>
        <IconButton
          title="Sign in with Google"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="ri:google-fill" />
        </IconButton>
        <IconButton
          title="Sign in with Instagram"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="devicon-plain:linkedin" />
        </IconButton>
        <IconButton
          title="Sign in with Microsoft"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Microsoft />
        </IconButton>
        <IconButton
          title="Sign in with Twitch"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="mdi:twitch" />
        </IconButton>
        <IconButton
          title="Sign in with Spotify"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="mdi:spotify" />
        </IconButton>
        <IconButton
          title="Sign in with TikTok"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="ic:baseline-tiktok" />
        </IconButton>
        <IconButton
          title="Sign in with Twitter"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="fa6-brands:square-x-twitter" />
        </IconButton>
        <IconButton
          title="Sign in with Roblox"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="simple-icons:roblox" />
        </IconButton>
        <IconButton
          title="Sign in with VK"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="akar-icons:vk-fill" />
        </IconButton>
        <IconButton
          title="Sign in with Zoom"
          sx={{
            border: (theme) => \`1px solid \${theme.palette.divider}\`,
            borderRadius: "3px",
            paddingX: 4,
            paddingY: 0.5,
            color: "text.primary",
          }}
        >
          <Icon icon="hugeicons:zoom" />
        </IconButton>
      </Stack>
    </Box>
  );
};`;
