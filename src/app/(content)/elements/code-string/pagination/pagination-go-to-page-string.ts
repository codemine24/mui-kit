export const paginationGoToPageString = `import { Box, Divider, Pagination, PaginationItem, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MAX_PAGE = 50;
const DEFAULT_PAGE = 6;

export const PaginationGoToPage = () => {
    const [page, setPage] = useState(DEFAULT_PAGE);

    const NoArrowTextField = styled(TextField)({
        // For Chrome, Safari, Edge, Opera
        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
        // For Firefox
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    });

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPage(Number(e.currentTarget.page.value));
    };

    return (
        <Box sx={{ py: 2 }}>
            <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
                <Pagination
                    count={MAX_PAGE}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    sx={{
                        '& .MuiPagination-ul': {
                            gap: 0,
                        },
                    }}
                    renderItem={(item) => {
                        const isPrevOrNext = item.type === 'previous' || item.type === 'next';

                        return (
                            <PaginationItem
                                {...item}
                                slots={{
                                    previous: () => (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <ArrowBackIcon fontSize="small" />
                                            Prev
                                        </span>
                                    ),
                                    next: () => (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            Next
                                            <ArrowForwardIcon fontSize="small" />
                                        </span>
                                    ),
                                }}
                                sx={{
                                    height: '32px',
                                    margin: 0,
                                    borderRadius: 0,
                                    bgcolor: isPrevOrNext ? '#E60076' : 'rgba(230, 0, 118, 0.1)',
                                    '&:hover': {
                                        backgroundColor: '#E60076',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#E60076',
                                        color: '#ffffff',
                                    },
                                }}
                            />
                        );
                    }}
                />

                <Divider orientation="vertical" sx={{ height: 32, borderColor: 'divider' }} />

                <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: 14 }}>
                    Go To Page: <form onSubmit={handleFormSubmit}>
                        <NoArrowTextField
                            type="number"
                            name="page"
                            slotProps={{
                                htmlInput: {
                                    min: 1,
                                    max: 50,
                                },
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: 35,
                                    width: 50,
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: 14,
                                },
                            }}
                        />
                    </form>
                </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
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

                <Divider orientation="vertical" sx={{ height: 32, borderColor: 'divider' }} />

                <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: 14 }}>
                    Go To Page: <form onSubmit={handleFormSubmit}>
                        <NoArrowTextField
                            type="number"
                            name="page"
                            slotProps={{
                                htmlInput: {
                                    min: 1,
                                    max: 50,
                                },
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: 35,
                                    width: 50,
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: 14,
                                },
                            }}
                        />
                    </form>
                </Box>
            </Box>
        </Box>
    );
}`