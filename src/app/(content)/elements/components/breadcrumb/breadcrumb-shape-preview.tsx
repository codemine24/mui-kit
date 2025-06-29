import CollectionsIcon from "@mui/icons-material/Collections";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { alpha, styled } from "@mui/material/styles";

// Chevron item style
const ChevronItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "first" && prop !== "last"
})<{
  active?: boolean;
  first?: boolean;
  last?: boolean;
  component?: React.ElementType;
  href?: string;
}>(({ active, first, last }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "6px 28px",
  marginRight: "-10px",
  backgroundColor: active ? "#0E6BA8" : alpha("#0E6BA8", 0.1),
  color: active ? "#fff" : "#0E6BA8",
  textDecoration: "none",
  clipPath: first
    ? "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 1px 50%)"
    : last
    ? "polygon(0 0, calc(100% - 1px) 0, 100% 50%, calc(100% - 1px) 100%, 0 100%, 15px 50%)"
    : "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%, 15px 50%)",
  minHeight: "36px",
  whiteSpace: "nowrap",
  fontSize: 14,
  "& svg": {
    marginRight: 1,
    fontSize: 20
  }
}));

export const BreadcrumbShapePreview = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", py: 6 }}
      spacing={2}>
      <Breadcrumbs
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiBreadcrumbs-separator": { display: "none" },
          "& .css-1uwp4ue-MuiBreadcrumbs-ol": {
            gap: { xs: 0.5, sm: 0 }
          }
        }}
        separator={false}>
        <ChevronItem first component={Link} href="#">
          Home
        </ChevronItem>
        <ChevronItem component={Link} href="#">
          Gallary
        </ChevronItem>
        <ChevronItem active component={Link} href="#">
          Web
        </ChevronItem>
        <ChevronItem last component={Link} href="#">
          Project
        </ChevronItem>
      </Breadcrumbs>

      <Divider sx={{ my: 4 }} />

      <Breadcrumbs
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiBreadcrumbs-separator": { display: "none" },
          "& .css-1uwp4ue-MuiBreadcrumbs-ol": {
            gap: { xs: 0.5, sm: 0 }
          }
        }}
        separator={false}>
        <ChevronItem first component={Link} href="#">
          <HomeIcon />
          Home
        </ChevronItem>
        <ChevronItem component={Link} href="#">
          <CollectionsIcon />
          Gallary
        </ChevronItem>
        <ChevronItem active component={Link} href="#">
          <WebIcon />
          Web
        </ChevronItem>
        <ChevronItem last component={Link} href="#">
          <FolderSpecialIcon />
          Project
        </ChevronItem>
      </Breadcrumbs>
    </Stack>
  );
};
