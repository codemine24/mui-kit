export const paginationSoftBgString = `import { Box, Divider, Typography } from "@mui/material";
import { Pagination } from "@mui/material";

export const PaginationSoftBg = () => {
    return (
        <Box>
            {/* Soft Background */}
            <Typography variant="body2" sx={{ mb: 2 }}>Soft Background</Typography>
            <Pagination
                count={50}
                defaultPage={12}
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        bgcolor: 'rgba(230, 0, 118, 0.1)',
                        borderColor: "#E60076",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: '#E60076 !important',
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        borderColor: '#E60076',
                        color: '#ffffff',
                    },
                }}
            />

            <Divider sx={{ my: 4 }} />

            {/* Soft Background No Gap */}
            <Typography variant="body2" sx={{ mb: 2 }}>Soft Background With No Gap</Typography>
            <Pagination
                count={50}
                defaultPage={12}
                sx={{
                    '& .MuiPagination-ul': {
                        gap: 0,
                    },
                    '& .MuiPaginationItem-root': {
                        height: '32px',
                        bgcolor: 'rgba(230, 0, 118, 0.1)',
                        margin: 0,
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: '#E60076',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#E60076',
                            color: '#ffffff',
                        },
                    },
                }}
            />


            <Divider sx={{ my: 4 }} />

            {/* Soft Active Background */}
            <Typography variant="body2" sx={{ mb: 2 }}>Soft Active Background</Typography>
            <Pagination
                count={50}
                defaultPage={12}
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'rgba(230, 0, 118, 0.1)',
                        borderColor: '#E60076',
                        color: '#E60076',
                        '&:hover': {
                            backgroundColor: '#E60076 !important',
                            color: '#ffffff',
                        },
                    },
                }}
            />
        </Box>
    );
};`;
