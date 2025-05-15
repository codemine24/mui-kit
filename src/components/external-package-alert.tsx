import { Icon } from "@iconify/react/dist/iconify.js";
import { Alert } from "@mui/material";
import { Box } from "@mui/system";

interface IProps {
  packageName: string;
  packageUrl: string;
}
export const ExternalPackageAlert = ({ packageName, packageUrl }: IProps) => {
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
      Some components may use an external package{" "}
      <Box
        component={"a"}
        href={packageUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "underline", color: "inherit" }}
      >
        {packageName}
      </Box>
      . You may install it or replace it with a similar package.
    </Alert>
  );
};
