
import { Box, Card, Typography } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import { Iconify } from "@/components/iconify";

export const CardDownloadPreview = () => {
    return (
        <Card sx={{ maxWidth: 500, p: 2, textAlign: "center" }}>
            <Typography variant="h5">Work Fast From Anywhwere</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center", mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, bgcolor: "#1C1C1C", color: "#fff" }}>
                    <AppleIcon />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: "11px" }}>Download on the</Typography>
                        <Typography sx={{ fontSize: "12px" }}>App Store</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 1, bgcolor: "#1C1C1C", color: "#fff" }}>
                    <Iconify icon="mage:playstore" />
                    <Box sx={{ textAlign: "left" }}>
                        <Typography sx={{ fontSize: "11px" }}>Download on the</Typography>
                        <Typography sx={{ fontSize: "12px" }}>Play Store</Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}