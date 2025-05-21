import { East, KeyboardBackspace } from '@mui/icons-material';
import { Box, Divider, Pagination, PaginationItem, Typography } from '@mui/material';

export const PaginationSolidPreview = () => {
    return (
        <Box sx={{ py: 2 }}>
            {/* Default */}
            <Typography variant="body2" sx={{ mb: 2 }}>Default</Typography>
            <Pagination
                count={50}
                defaultPage={6}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                    },
                }}
            />

            <Divider sx={{ my: 4 }} />

            {/* Rounded */}
            <Typography variant="body2" sx={{ mb: 2 }}>Rounded</Typography>
            <Pagination
                count={50}
                defaultPage={14}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: "50%",
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                    },
                }}
            />

            <Divider sx={{ my: 4 }} />

            {/* Custom Icon */}
            <Typography variant="body2" sx={{ mb: 2 }}>Custom Icon</Typography>
            <Pagination
                count={50}
                defaultPage={4}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                    },
                }}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        slots={{
                            previous: () => <KeyboardBackspace />,
                            next: () => <East />,
                        }}
                        sx={{
                            margin: 0,
                        }}
                    />
                )}
            />

            <Divider sx={{ my: 4 }} />

            {/* Custom Text */}
            <Typography variant="body2" sx={{ mb: 2 }}>Custom Text</Typography>
            <Pagination
                count={50}
                defaultPage={19}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                        border: 'none !important',
                        color: '#ffffff',
                    },
                }}

                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        slots={{
                            previous: () => <span>Prev</span>,
                            next: () => <span>Next</span>,
                        }}
                        sx={{
                            margin: 0,
                        }}
                    />
                )}
            />

            <Divider sx={{ my: 4 }} />

            {/* Hide Buttons */}
            <Typography variant="body2" sx={{ mb: 2 }}>Hide Previous and Next Buttons</Typography>
            <Pagination
                count={50}
                defaultPage={2}
                hidePrevButton
                hideNextButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                        color: '#ffffff',
                    },
                }}
            />

            <Divider sx={{ my: 4 }} />

            {/* Show First and Last Button */}
            <Typography variant="body2" sx={{ mb: 2 }}>Show First and Last Button</Typography>
            <Pagination
                count={50}
                defaultPage={12}
                showFirstButton
                showLastButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: "primary.main",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'warning.main',
                        color: '#ffffff',
                    },
                }}
            />
        </Box>
    );
}