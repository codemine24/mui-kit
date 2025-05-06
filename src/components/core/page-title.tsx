import { Box, Typography } from "@mui/material";

interface RichTextPart {
  text: string;
  highlight?: boolean;
}

interface IProps {
  title: string;
  description?: string | RichTextPart[];
}

export const PageTitle = ({ title, description }: IProps) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 1, md: 1.5 } }}
      >
        {title}
      </Typography>

      {description && (
        <Typography variant="body1" color="text.secondary">
          {typeof description === "string"
            ? description
            : description.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    color: part.highlight ? "primary.main" : "text.secondary",
                    fontWeight: part.highlight ? 500 : "normal",
                  }}
                >
                  {part.text}
                </Box>
              ))}
        </Typography>
      )}
    </Box>
  );
};
