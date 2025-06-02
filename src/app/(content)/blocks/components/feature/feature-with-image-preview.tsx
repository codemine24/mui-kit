import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const listArr = [
  {
    id: 1,
    list: "Your Feature List 1",
  },
  {
    id: 2,
    list: "Your Feature List 2",
  },
  {
    id: 3,
    list: "Your Feature List 3",
  },
  {
    id: 4,
    list: "Your Feature List 4",
  },
];

export const FeatureWithImagePreview = () => {
  return (
    <Box>
      <Grid container sx={{ bgcolor: "background.paper", px: 2 }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ px: { xs: 0, md: 2 }, py: { xs: 2, md: 2 } }}
        >
          <Typography sx={{ color: "#DA9100", fontFamily: "cursive" }}>
            Sub Heading
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "text.primary",
              fontSize: { xs: 24, md: 32 },
              fontWeight: 600,
            }}
          >
            Feature & Benefits
          </Typography>
          <Divider
            sx={{
              my: 2,
              width: "10%",
              backgroundColor: "#DA9100",
              height: 4,
            }}
          />

          <Typography
            sx={{
              py: 2,
              fontSize: { xs: 16, md: 18 },
              color: "text.secondary",
              fontWeight: 200,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            esse quod nulla, nihil quae provident commodi dolores dolore earum
            quaerat sapiente laborum in nisi excepturi ipsam totam non nemo
            voluptatum, architecto, consequatur .
          </Typography>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {listArr.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  ":not(:last-child)": {
                    borderBottom: (theme) =>
                      `1px solid ${theme.palette.divider}`,
                  },
                }}
              >
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={item.list} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={"img"}
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
