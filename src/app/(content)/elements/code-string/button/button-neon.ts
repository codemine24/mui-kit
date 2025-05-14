export const ButtonNeonCodeString = `import { ArrowForward, Download, LiveTv, Star } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

export const ButtonNeonPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}>

                {/* Cyan Neon Button */}
                <Button
                    variant="outlined"
                    sx={{
                        color: "#fff",
                        border: "2px solid #0ff",
                        backgroundColor: "#0ff",
                        textShadow: "0 0 5px #0ff, 0 0 10px #0ff",
                        boxShadow: "0 0 5px #0ff, 0 0 20px #0ff",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#0ff",
                            boxShadow: "0 0 10px #0ff, 0 0 30px #0ff",
                        },
                    }}
                >
                    Cyan
                </Button>

                {/* Green Neon Button */}
                <Button
                    variant="outlined"
                    sx={{
                        color: "#fff",
                        border: "2px solid #0f0",
                        backgroundColor: "#0f0",
                        textShadow: "0 0 5px #0f0, 0 0 10px #0f0",
                        boxShadow: "0 0 5px #0f0, 0 0 20px #0f0",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#0f0",
                            boxShadow: "0 0 10px #0f0, 0 0 30px #0f0",
                        },
                    }}
                >
                    Green
                </Button>

                {/* Blue Neon Button */}
                <Button
                    variant="outlined"
                    sx={{
                        color: "#fff",
                        border: "2px solid #00f",
                        backgroundColor: "#00f",
                        textShadow: "0 0 5px #00f, 0 0 10px #00f",
                        boxShadow: "0 0 5px #00f, 0 0 20px #00f",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#00f",
                            boxShadow: "0 0 10px #00f, 0 0 30px #00f",
                        },
                    }}
                >
                    Blue
                </Button>

                {/* Purple Neon Button */}
                <Button
                    variant="outlined"
                    sx={{
                        color: "#fff",
                        border: "2px solid #f0f",
                        backgroundColor: "#f0f",
                        textShadow: "0 0 5px #f0f, 0 0 10px #f0f",
                        boxShadow: "0 0 5px #f0f, 0 0 20px #f0f",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "#f0f",
                            boxShadow: "0 0 10px #f0f, 0 0 30px #f0f",
                        },
                    }}
                >
                    Purple
                </Button>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Neon Button with Icon */}
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                {/* Cyan Glow Button */}
                <Button
                    endIcon={<ArrowForward />}
                    sx={{
                        color: "#fff",
                        border: "2px solid #00f0ff",
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        backgroundColor: "#1697a0",
                        textShadow: "0 0 5px #00f0ff",
                        boxShadow: "0 0 8px #00f0ff, 0 0 20px #00f0ff",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#00f0ff",
                            color: "#000",
                            boxShadow: "0 0 12px #00f0ff, 0 0 25px #00f0ff",
                        },
                    }}
                >
                    Learn Now
                </Button>

                {/* Pink Glow Button */}
                <Button
                    endIcon={<ArrowForward />}
                    sx={{
                        color: "#fff",
                        border: "2px solid #ff00f0",
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        backgroundColor: "#88057f",
                        textShadow: "0 0 5px #ff00f0",
                        boxShadow: "0 0 8px #ff00f0, 0 0 20px #ff00f0",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#ff00f0",
                            color: "#000",
                            boxShadow: "0 0 12px #ff00f0, 0 0 25px #ff00f0",
                        },
                    }}
                >
                    Read More
                </Button>

                {/* Green Glow Button */}
                <Button
                    endIcon={<Download />}
                    sx={{
                        color: "#fff",
                        border: "2px solid #00ff6a",
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        backgroundColor: "#027532",
                        textShadow: "0 0 5px #00ff6a",
                        boxShadow: "0 0 8px #00ff6a, 0 0 20px #00ff6a",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#00ff6a",
                            color: "#000",
                            boxShadow: "0 0 12px #00ff6a, 0 0 25px #00ff6a",
                        },
                    }}
                >
                    Download
                </Button>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >

                {/* Download Button */}
                <Button
                    disableRipple
                    sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: "999px",
                        background:
                            "linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%)",
                        boxShadow:
                            "0 4px 10px rgba(255, 65, 108, 0.5), 0 0 20px rgba(255, 75, 43, 0.7)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow:
                                "0 6px 15px rgba(255, 65, 108, 0.6), 0 0 25px rgba(255, 75, 43, 0.8)",
                        },
                    }}
                >
                    <Typography variant="button">Download</Typography>
                    <Box
                        sx={{
                            backgroundColor: "#1B1B3A",
                            borderRadius: "999px",
                            p: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <Download fontSize="small" sx={{ color: "#fff" }} />
                    </Box>
                </Button>

                {/* Try Now Button */}
                <Button
                    disableRipple
                    sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #F7971E 0%, #FFD200 100%)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 6px 20px rgba(255, 210, 0, 0.7)",
                        },
                    }}
                >
                    <Typography variant="button">Try Now</Typography>
                    <Box
                        sx={{
                            backgroundColor: "#1B1B3A",
                            borderRadius: "999px",
                            p: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <Star fontSize="small" sx={{ color: "#fff" }} />
                    </Box>
                </Button>

                {/* Watch Now Button */}
                <Button
                    disableRipple
                    sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: "999px",
                        background: "linear-gradient(90deg, #00b09b 0%, #96c93d 100%)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 6px 20px rgba(150, 201, 61, 0.7)",
                        },
                    }}
                >
                    <Typography variant="button">Watch Now</Typography>
                    <Box
                        sx={{
                            backgroundColor: "#1B1B3A",
                            borderRadius: "999px",
                            p: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <LiveTv fontSize="small" sx={{ color: "#fff" }} />
                    </Box>
                </Button>
            </Stack>
        </Box>
    );
};
`;
