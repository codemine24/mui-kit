export const buttonLabelString = `import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const ButtonLabelPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                <Button variant="contained" color="primary">
                    Message{' '}
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.main',
                            bgcolor: '#ffffff',
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            marginLeft: '5px',
                            fontSize: '12px',
                        }}
                    >
                        3
                    </Typography>
                </Button>

                <Button variant="contained" sx={{ bgcolor: "#E60076" }}>
                    Orders{' '}
                    <Typography
                        component="span"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#E60076',
                            bgcolor: '#ffffff',
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            marginLeft: '5px',
                            fontSize: '12px',
                        }}
                    >
                        23
                    </Typography>
                </Button>
            </Stack>
        </Box>
    )
}`;
