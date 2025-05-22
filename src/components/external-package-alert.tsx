import { Icon } from "@iconify/react/dist/iconify.js";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";

interface IProps {
  packages: {
    name: string;
    url: string;
  }[];
}
export const ExternalPackageAlert = ({ packages }: IProps) => {
  return (
    <Alert
      severity="warning"
      icon={<Icon icon="typcn:info-outline" width={24} height={24} />}
      sx={{
        padding: "0 1rem",
        mb: 2,
        borderRadius: (theme) => theme.shape.borderRadius,
        py: 2,
      }}
    >
      Following external package(s) in used:
      {packages.map((item, index) => (
        <Box
          key={index}
          component={"a"}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "underline", color: "inherit", ml: 1 }}
        >
          {item.name}
        </Box>
      ))}
    </Alert>
  );
};
