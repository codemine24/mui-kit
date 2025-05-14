export const ButtonSocialIconCodeString = `import { Box, Stack, IconButton } from "@mui/material";
import {
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const ButtonSocialIconPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                rowGap={2}
                flexWrap="wrap"
                alignItems="center"
            >

                {/* Facebook */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#385caa",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#4372d6",
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#1F56CC",
                        },
                    }}
                >
                    <FaFacebookF />
                </IconButton>

                {/* Youtube */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#cf2849",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#cf2849",
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#FF0033",
                        },
                    }}
                >
                    <FaYoutube />
                </IconButton>

                {/* Twitter */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#000",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#000",
                        padding: 1,
                        "&:hover": {
                            color: "#000",
                        },
                    }}
                >
                    <FaXTwitter />
                </IconButton>

                {/* Instagram */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#FF4740",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#FF4740",
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#de0b04",
                        },
                    }}
                >
                    <FaInstagram />
                </IconButton>

                {/* Linkedin */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#2c8fc4",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#2c8fc4",
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#005580",
                        },
                    }}
                >
                    <FaLinkedin />
                </IconButton>

                {/* Pinterest */}
                <IconButton
                    sx={{
                        border: "1px solid",
                        borderColor: "#d72e47",
                        borderRadius: "50%",
                        color: "#fff",
                        backgroundColor: "#de0b04",
                        padding: 1,
                        "&:hover": {
                            backgroundColor: "#de0b04",
                        },
                    }}
                >
                    <FaPinterest />
                </IconButton>
            </Stack>
        </Box>
    );
};

`;