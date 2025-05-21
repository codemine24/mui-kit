export const paginationSolidString = `import { East, KeyboardBackspace } from '@mui/icons-material';
import { Box, Divider, Pagination, PaginationItem, Typography } from '@mui/material';
import React from 'react';

const MAX_PAGE = 50;
const DEFAULT_PAGE = 6;

export const PaginationSolid = () => {
    const [page, setPage] = React.useState(DEFAULT_PAGE);

    return (
        <Box sx={{ py: 2 }}>
            {/* Default */}
            <Typography variant="body2" sx={{ mb: 2 }}>Default</Typography>
            <Pagination
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
}`