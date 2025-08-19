'use client';

import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Contributor {
    name: string;
    avatar: string;
    url: string;
}

const contributors: Contributor[] = [
    {
        name: 'Yead',
        avatar: 'https://avatars.githubusercontent.com/u/174150044?v=4',
        url: 'https://github.com/Yead191',
    },
    {
        name: 'Sumit',
        avatar: 'https://avatars.githubusercontent.com/u/76784329?v=4',
        url: 'https://github.com/sumit2401',
    },
    {
        name: 'Rapu',
        avatar: 'https://avatars.githubusercontent.com/u/108398425?v=4',
        url: 'https://github.com/riyazulhaque64',
    },
    {
        name: 'Rakib',
        avatar: 'https://avatars.githubusercontent.com/u/107996751?v=4',
        url: 'https://github.com/RakibMojumder',
    },
    {
        name: 'Fazly',
        avatar: 'https://avatars.githubusercontent.com/u/151907553?v=4',
        url: 'https://github.com/fazlyalahi01',
    },
    {
        name: 'Forhad',
        avatar: 'https://avatars.githubusercontent.com/u/154924977?v=4',
        url: 'https://github.com/devsman-forhad',
    },
];

const GalleryContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}));

const SlideCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
    position: 'relative',
    height: 360,
    width: open ? 280 : 90,
    transition: 'width 0.4s ease-out',
    backgroundColor: theme.palette.grey[300],
    borderRadius: 24,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
        width: open ? 280 : 100,
        height: 400,
    },
    [theme.breakpoints.up('md')]: {
        width: open ? 300 : 100,
        height: 420,
    },
    cursor: 'pointer',
}));

const SlideImage = styled(Image)({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
});

const OverlayAvatar = styled(Avatar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
    position: 'absolute',
    bottom: 20,
    left: open ? 16 : '50%',
    transform: open ? 'translateX(0)' : 'translateX(-50%)',
    transition: 'all 0.4s',
    height: 40,
    width: 40,
    border: '2px solid white',
    zIndex: 2,
    '@media (min-width: 768px)': {
        height: 50,
        width: 50,
    },
}));

const SlideText = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
    position: 'absolute',
    bottom: 30,
    left: open ? 80 : '50%',
    transform: open ? 'translateX(0)' : 'translateX(-50%)',
    opacity: open ? 1 : 0,
    transition: 'all 0.5s ease-in-out',
    color: '#fff',
    textAlign: open ? 'left' : 'center',
    zIndex: 2,
}));

const BottomOverlay = styled(Box)({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '180px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
    zIndex: 1,
});

const TopRightIcon = styled(Box)({
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
});

export const Contributors = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const toggle = (currentIdx: number) =>
        setIsOpen((prevIdx) => (prevIdx === currentIdx ? null : currentIdx));

    return (
        <GalleryContainer>
            {contributors.map((contributor, idx) => {
                const open = isOpen === idx;

                return (
                    <SlideCard
                        key={idx}
                        open={open}
                        elevation={4}
                        onClick={() => toggle(idx)}
                    >
                        <SlideImage
                            src={contributor.avatar}
                            alt={contributor.name}
                            width={640}
                            height={540}
                        />

                        {/* GitHub icon top right */}
                        {open && (
                            <TopRightIcon>
                                <IconButton
                                    size="small"
                                    href={contributor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: '#fff',
                                        backgroundColor: '#000000',
                                        '&:hover': {
                                            backgroundColor: '#000000',
                                        },
                                    }}
                                >
                                    <GitHubIcon fontSize="small" />
                                </IconButton>
                            </TopRightIcon>
                        )}

                        <OverlayAvatar open={open} src={contributor.avatar} alt={contributor.name} />

                        <SlideText open={open}>
                            <Typography variant="h5" fontWeight={600}>
                                {contributor.name}
                            </Typography>
                        </SlideText>

                        {/* Bottom overlay for readability */}
                        {open && <BottomOverlay />}
                    </SlideCard>
                );
            })}
        </GalleryContainer>
    );
}
