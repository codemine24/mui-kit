'use client';

import { Box, Pagination } from '@mui/material';

export const PaginationSolidPreview = () => {
    return (
        <Box>
            <Pagination count={10}
                sx={{
                    '& .MuiPaginationItem-root': {
                        height: "32px",
                        backgroundColor: 'transparent',
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 0,
                        '&:hover': {
                            backgroundColor: 'divider'
                        },
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#E60076',
                        color: '#ffffff',
                    },
                }}
            />
        </Box>
    );
}