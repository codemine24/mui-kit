import { Box, InputBase, Typography } from '@mui/material';
import CommandIcon from '@mui/icons-material/KeyboardCommandKey';
import React from 'react';
import { Iconify } from '@/components/iconify';

export const SearchBox = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 280,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                bgcolor: 'background.paper',
            }}
        >
            {/* Search Icon */}
            <Iconify
                icon="lets-icons:search-light"
                style={{
                    height: '1.7rem',
                    width: '1.7rem',
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'text.secondary'
                }}
            />
            {/* <CiSearch
                style={{
                    position: 'absolute',
                    left: '12px',
                    top: '0.7rem',
                    fontSize: '1.5rem',
                    color: 'text.secondary',
                }}
            /> */}

            <Typography
                variant="body2"
                sx={{
                    position: 'absolute',
                    left: 50,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'text.secondary',
                    fontSize: '1rem',
                    fontWeight: 400,
                }}
            >
                Search
            </Typography>

            {/* Input */}
            <InputBase
                readOnly
                type="search"
                sx={{
                    paddingY: 0.5,
                    paddingLeft: '2.5rem',
                    width: '100%',
                    fontSize: '1rem',
                    borderRadius: 'inherit',
                }}
                inputProps={{ 'aria-label': 'search' }}
            />

            {/* Command Shortcut Icon */}
            <Box
                sx={{
                    position: 'absolute',
                    right: '6px',
                    top: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    height: '75%',
                    px: 1,
                    fontSize: '1rem',
                    fontWeight: 400,
                    borderRadius: '6px',
                    color: 'text.secondary',
                    transition: 'all 0.5s',
                }}
            >
                <CommandIcon fontSize="small" />
                S
            </Box>
        </Box>
    );
};
