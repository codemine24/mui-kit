"use client";

import { Box, Divider, Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import React from "react";

const MAX_PAGE = 50;
const DEFAULT_PAGE = 12;

export const PaginationSoftBgPreview = () => {
    const [page, setPage] = React.useState(DEFAULT_PAGE);

    return (
        <Box>
            {/* Soft Background */}
            <Typography variant="body2" sx={{ mb: 2 }}>Soft Background</Typography>
            <Pagination
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
                count={MAX_PAGE}
                page={page}
                onChange={(_, value) => setPage(value)}
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
};