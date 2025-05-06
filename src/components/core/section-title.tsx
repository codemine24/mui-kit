import { Box, Typography } from "@mui/material";

interface RichTextPart {
  text: string;
  highlight?: boolean;
}

interface IProps {
  title: string;
  description?: string | RichTextPart[];
  id?: string;
}

export const SectionTitle = ({ title, description, id }: IProps) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography id={id} variant="h5" gutterBottom>
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
