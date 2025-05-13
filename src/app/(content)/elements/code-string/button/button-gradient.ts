export const ButtonGradientCodeString = `import { Box, Button, Stack } from "@mui/material";

export const ButtonGradientPreview = () => {
    return (
        <Box>
            {/* Button gradient */}
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#d55296 0%,#e60077 100%)",
                    }}
                >
                    Pink
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#6da0d1 0%,#0077e6 100%)",
                    }}
                >
                    Blue
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#6fb9ca 0%,#0092B8 100%)",
                    }}
                >
                    Cyan
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#67d4c9 0%,#009689 100%)",
                    }}
                >
                    Teal
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#afd67c 0%,#5EA500 100%)",
                    }}
                >
                    Lime
                </Button>
                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#ac84c9 0%,#9810FA 100%)",
                    }}
                >
                    Purple
                </Button>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Double Gradient */}
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#9810FA 0%,#0077e6 100%)",
                    }}
                >
                    Purple To Blue
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#2298b5 0%,#0077e6 100%)",
                    }}
                >
                    Cyan To Blue
                </Button>

                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#5510ce 0%,#cc086d 100%)",
                    }}
                >
                    Purple To Pink
                </Button>
                <Button
                    sx={{
                        color: "#fff",
                        background: "linear-gradient(136deg,#cc086d 0%,#F54A00 100%)",
                    }}
                >
                    Pink To Orange
                </Button>
            </Stack>
        </Box>
    );
};`
