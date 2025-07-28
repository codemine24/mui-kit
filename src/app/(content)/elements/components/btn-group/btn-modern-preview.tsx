import * as React from "react";
import Button, { buttonClasses } from "@mui/material/Button";
import ButtonGroup, { buttonGroupClasses } from "@mui/material/ButtonGroup";
import { Box, Divider, dividerClasses, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const BtnModernPreview = () => {
  return (
    <Stack direction="column" gap={2}>
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{
            borderRadius: "30px",
            position: "relative",
            [`& .${buttonGroupClasses.grouped}:first-child`]: {
              bgcolor: "#0CC1BC",
              p: "10px 70px",
              borderRadius: "30px 0 0 30px",
            },
            [`& .${buttonGroupClasses.grouped}:last-child`]: {
              bgcolor: "#0281E3",
              p: "10px 70px",
              borderRadius: "0 30px 30px 0",
            },
          }}
        >
          <Button>One</Button>
          <Divider
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50px",
              bgcolor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            OR
          </Divider>
          <Button>Two</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{
            borderRadius: "30px",
            position: "relative",
            [`& .${buttonGroupClasses.grouped}:first-child`]: {
              bgcolor: "#6170DF",
              p: "10px 70px",
              borderRadius: "8px 0 0 8px",
            },
            [`& .${buttonGroupClasses.grouped}:last-child`]: {
              bgcolor: "#FF7878",
              p: "10px 70px",
              borderRadius: "0 8px 8px 0",
            },
          }}
        >
          <Button>One</Button>
          <Divider
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50px",
              bgcolor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            OR
          </Divider>
          <Button>Two</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          sx={{
            borderRadius: "30px",
            position: "relative",
            [`& .${buttonGroupClasses.grouped}:first-child`]: {
              bgcolor: "#FFB676",
              p: "10px 70px",
              borderRadius: "30px 0 0 30px",
            },
            [`& .${buttonGroupClasses.grouped}:last-child`]: {
              bgcolor: "#6758B4",
              p: "10px 70px",
              borderRadius: "0 30px 30px 0",
            },
          }}
        >
          <Button>One</Button>
          <Divider
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "50px",
              bgcolor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              [`& .${dividerClasses.root}:first-child`]: {
                display: "flex",
              },
            }}
          >
            <MenuIcon />
          </Divider>
          <Button>Two</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};
