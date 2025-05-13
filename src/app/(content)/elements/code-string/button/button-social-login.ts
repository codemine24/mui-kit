export const ButtonSocialLoginCodeString = `import { Box, Button, Stack } from "@mui/material";
import { Apple, Facebook, GitHub, Google, X } from "@mui/icons-material";

export const ButtonSocialLoginPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    sx={{
                        bgcolor: "#3C5997",
                        color: "#fff",
                        "&:hover": {
                            bgcolor: "#1f56cc",
                        },
                    }}
                >
                    Sign In With Facebook
                </Button>

                <Button
                    variant="contained"
                    startIcon={<X />}
                    sx={{
                        bgcolor: "#1EA1F2",
                        color: "#fff",
                        "&:hover": {
                            bgcolor: "#0378c2",
                        },
                    }}
                >
                    Sign In With Twitter
                </Button>

                <Button
                    variant="contained"
                    startIcon={<GitHub />}
                    sx={{
                        bgcolor: "#34383e",
                        color: "#fff",
                        "&:hover": {
                            bgcolor: "#16191d",
                        },
                    }}
                >
                    Sign In With Github
                </Button>

                <Button
                    variant="contained"
                    startIcon={<Google />}
                    sx={{
                        bgcolor: "#4081EC",
                        color: "#fff",
                        "&:hover": {
                            bgcolor: "#1865e2",
                        },
                    }}
                >
                    Sign In With Google
                </Button>

                <Button
                    variant="contained"
                    startIcon={<Apple />}
                    sx={{
                        bgcolor: "#050708",
                        color: "#fff",
                        "&:hover": {
                            bgcolor: "#090c0e",
                        },
                    }}
                >
                    Sign In With Apple
                </Button>
            </Stack>
        </Box>
    );
};`
