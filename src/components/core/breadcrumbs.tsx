import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface IBreadCrumbs {
  pathArr: {
    label: string;
    path?: string;
  }[];
}

export const CustomBreadCrumbs = ({ pathArr }: IBreadCrumbs) => {
  const breadcrumbs = pathArr?.map((item, index) => {
    if (!item.path) {
      return (
        <Typography color="text.secondary" key={index} fontSize={15}>
          {item.label}
        </Typography>
      );
    }
    return (
      <Link
        color="inherit"
        href={item.path}
        key={index}
        style={{
          fontSize: 15,
          textDecoration: "none",
          color: "text.secondary"
        }}>
        <Typography
          color="text.secondary"
          key={index}
          fontSize={15}
          sx={{ "&:hover": { textDecoration: "underline" } }}>
          {item.label}
        </Typography>
      </Link>
    );
  });
  return (
    <Stack spacing={1}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
