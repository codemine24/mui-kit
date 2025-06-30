export const paginationOutlinedString = `import East from "@mui/icons-material/East";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Typography from "@mui/material/Typography";
import React from "react";

const MAX_PAGE = 50;
const DEFAULT_PAGE = 6;

export const PaginationOutlined = () => {
    const [page, setPage] = React.useState(DEFAULT_PAGE);

    return (
        <Box sx={{ py: 2 }}>
            {/* Default */}
            <Typography variant="body2" sx={{ mb: 2 }}>Default</Typography>
            <Pagination
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        borderColor: '#E60076 !important',
                        color: '#ffffff',
                    },
                }}
            />

            <Divider sx={{ my: 4 }} />

            {/* No Border */}
            <Typography variant="body2" sx={{ mb: 2 }}>No Border</Typography>
            <Pagination
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        color: '#ffffff',
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
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderColor: "divider",
                        borderRadius: "50%",
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        borderColor: '#E60076 !important',
                        color: '#ffffff',
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
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        margin: 0,
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        borderColor: '#E60076 !important',
                        color: '#ffffff',
                    },
                }}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        slots={{
                            previous: () => <KeyboardBackspace />,
                            next: () => <East />,
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
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        margin: 0,
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
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
                variant="outlined"
                hidePrevButton
                hideNextButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        border: 'none !important',
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
                variant="outlined"
                showFirstButton
                showLastButton
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076 !important',
                        border: 'none !important',
                        color: '#ffffff',
                    },
                }}
            />
        </Box>
    );
}`;
