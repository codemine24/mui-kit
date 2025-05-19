export const drawerFiltersPanelString = `import React from 'react';
import {
    Drawer, Box, Typography, Divider, Button, FormControl, InputLabel, Select, MenuItem,
    Slider, Checkbox, FormControlLabel
} from '@mui/material';

export const DrawerFiltersPanel = () => {
    const [open, setOpen] = React.useState(false);

    const onClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer anchor="left" open={open} onClose={onClose}>
                <Box sx={{ width: 320, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Header */}
                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">Filter Options</Typography>
                        <Button size="small" onClick={onClose}>Reset</Button>
                    </Box>
                    <Divider />

                    {/* Content */}
                    <Box sx={{ p: 2, overflowY: 'auto', flex: 1 }}>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel>Category</InputLabel>
                            <Select defaultValue="all">
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="electronics">Electronics</MenuItem>
                                <MenuItem value="fashion">Fashion</MenuItem>
                                <MenuItem value="books">Books</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography gutterBottom>Price Range</Typography>
                        <Slider
                            value={[20, 200]}
                            min={0}
                            max={500}
                            valueLabelDisplay="auto"
                            sx={{ mb: 3 }}
                        />

                        <FormControlLabel control={<Checkbox defaultChecked />} label="In Stock Only" />
                        <FormControlLabel control={<Checkbox />} label="On Sale" />
                    </Box>

                    {/* Footer */}
                    <Box sx={{ p: 2 }}>
                        <Button fullWidth variant="contained" onClick={onClose}>Apply Filters</Button>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
`;