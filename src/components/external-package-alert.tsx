import { Icon } from "@iconify/react/dist/iconify.js";
import { Alert } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";

interface IProps {
  packages: {
    name: string;
    url: string;
  }[];
  force?: boolean;
}
export const ExternalPackageAlert = ({ packages, force = false }: IProps) => {
  const [icon, setIcon] = useState<string>("solar:copy-line-duotone");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `npm install ${packages.map((pkg) => pkg.name).join(" ")} ${
          force ? "--force" : ""
        }`
      );
      setIcon("eva:checkmark-fill");
      setTimeout(() => {
        setIcon("solar:copy-line-duotone");
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  return (
    <Alert
      severity="warning"
      icon={
        <Box
          sx={{ title: "Copy to clipboard", cursor: "pointer" }}
          onClick={handleCopy}
        >
          <Icon icon={icon} width={24} height={24} />
        </Box>
      }
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
