export const button1CodeString = `import {
  ChevronLeft,
  ChevronRight,
  Close,
  Facebook,
  Favorite,
  GitHub,
  Google,
  Twitter,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ClipboardIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, IconButton } from "@mui/material";

export const Button1Preview = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 2 }}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Trash
      </Button>

      <Button
        variant="contained"
        startIcon={<Favorite />}
        sx={{
          borderRadius: "50px",
          background: (theme) =>\`linear-gradient(to right, \${theme.palette.primary.light}, \${theme.palette.primary.main})\`,
        }}
      >
        Rounded
      </Button>

      <Button
        variant="contained"
        startIcon={<ClipboardIcon />}
        sx={{ boxShadow: 3, backgroundColor: "error.main" }}
      >
        Raised
      </Button>

      <Button variant="outlined" startIcon={<VisibilityIcon />}>
        Icon Visible
      </Button>

      <IconButton
        sx={{ backgroundColor: "primary.main", color: "common.white" }}
      >
        <AddIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "grey.300", color: "common.black" }}>
        <Close />
      </IconButton>

      <IconButton
        sx={{ backgroundColor: "common.black", color: "common.white" }}
      >
        <PersonIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "grey.300", color: "common.black" }}>
        <DeleteIcon />
      </IconButton>

      <IconButton sx={{ backgroundColor: "grey.300", color: "common.black" }}>
        <SearchIcon />
      </IconButton>

      <IconButton sx={{ backgroundColor: "grey.300", color: "common.black" }}>
        <MenuIcon />
      </IconButton>

      <Button
        variant="outlined"
        startIcon={<DownloadIcon />}
        sx={{ borderRadius: "50px" }}
      />

      <Button
        variant="text"
        startIcon={<ChevronLeft />}
        sx={{ color: "primary.main" }}
      >
        Back
      </Button>
      <Button
        variant="text"
        endIcon={<ChevronRight />}
        sx={{ color: "primary.main" }}
      >
        Next
      </Button>
      {/* New social sign-in buttons */}
      <Button
        variant="outlined"
        startIcon={<Google />}
        sx={{
          borderColor: "#DADCE0",
          color: "#3C4043",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#F8F9FA",
            borderColor: "#DADCE0",
          },
        }}
      >
        Sign in with Google
      </Button>

      <Button
        variant="contained"
        startIcon={<Facebook />}
        sx={{
          backgroundColor: "#1877F2",
          color: "common.white",
          "&:hover": {
            backgroundColor: "#166FE5",
          },
        }}
      >
        Sign in with Facebook
      </Button>

      <Button
        variant="contained"
        startIcon={<GitHub />}
        sx={{
          backgroundColor: "#24292E",
          color: "common.white",
          "&:hover": {
            backgroundColor: "#1F2428",
          },
        }}
      >
        Sign in with GitHub
      </Button>

      <Button
        variant="contained"
        startIcon={<Twitter />}
        sx={{
          backgroundColor: "#1DA1F2",
          color: "common.white",
          "&:hover": {
            backgroundColor: "#1A91DA",
          },
        }}
      >
        Sign in with Twitter
      </Button>
    </Box>
  );
};
`