import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { PATHS } from "@/router/paths";
import { useState, useMemo, useRef, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import { Iconify } from "@/components/iconify";
import { useRouter } from "next/navigation";

const generateDescription = (key: string) => {
    const type = key.toLowerCase().includes("component") ? "component" : "element";
    const label = key.toLowerCase().split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return `${label} is a reusable ${type} designed for consistent UI behavior and styling across the application.`;
};

interface ISearchModal {
    open: boolean;
    onClose: () => void;
}

export const SearchModal = ({ open, onClose }: ISearchModal) => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Flatten and prepare search items
    const items = useMemo(() => {
        return Object.entries(PATHS).flatMap(([groupKey, groupValue]) =>
            Object.entries(groupValue).map(([key, value]) => {
                const label = key
                    .toLowerCase()
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                return {
                    label,
                    path: value,
                    description: generateDescription(key),
                    category: groupKey.toLowerCase().split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
                };
            })
        ).filter(item => item.category !== 'About' && item.category !== 'Footer');
    }, []);

    // Filter items by search query
    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, items]);

    const handleClose = () => {
        setQuery("");
        onClose();
    }

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [open]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="search-modal-title"
            aria-describedby="search-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '95%',
                maxWidth: 600,
                maxHeight: '90vh',
                minHeight: 250,
                bgcolor: 'background.paper',
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box sx={{
                    overflowY: 'auto',
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 transparent",
                    "&::-webkit-scrollbar-button": {
                        display: "none",
                        height: 0,
                        width: 0,
                    }
                }}
                >
                    {/* Search Box */}
                    <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper' }}>
                        <TextField
                            fullWidth
                            variant="standard"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            inputRef={inputRef}
                            slotProps={{
                                input: {
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Iconify
                                                icon="eva:search-outline"
                                                style={{ height: 24, width: 24, color: "gray" }}
                                            />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        p: 2,
                                        borderBottom: '1px solid',
                                        borderBottomColor: 'divider',
                                    },
                                }
                            }}
                        />


                    </Box>

                    <Box>
                        {filteredItems.length > 0 ? (
                            <List dense>
                                {filteredItems.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' }, transition: 'all 0.3s' }}
                                        onClick={() => {
                                            router.push(item.path);
                                            handleClose();
                                        }}
                                    >
                                        <ListItemText
                                            primary={<Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Typography variant="subtitle2">{item.label}</Typography>
                                                <Chip variant="outlined" label={item.category} size="small" sx={{ fontSize: 10 }} />
                                            </Box>}
                                            secondary={item.description}
                                            slotProps={{
                                                secondary: {
                                                    noWrap: true,
                                                    sx: {
                                                        mt: 0.5,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        display: 'block',
                                                        width: '100%',
                                                    },
                                                }
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <NotFound />
                        )}
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};


const NotFound = () => {
    return (
        <Box mt={5} display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={1}>
            <Iconify style={{ height: '3rem', width: '3rem', color: 'gray' }} icon="eva:search-outline" />
            <Typography variant="h6" color="text.secondary">No results found</Typography>
        </Box>
    )
}