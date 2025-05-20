import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    Button,
    ClickAwayListener,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popover,
    Popper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { MouseEvent, useState } from 'react';

// Define menu structure type
interface MenuItemType {
    label: string;
    subItems?: MenuItemType[];
}

// Define submenu props
interface SubMenuProps {
    item: MenuItemType;
    parentEl: HTMLElement | null;
}

// Styled components
const MenuItemWithArrow = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '200px',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

// SubMenu component
const SubMenu: React.FC<SubMenuProps> = ({ item, parentEl }) => {

    if (!item.subItems) return null;

    return (
        <Popper
            open={Boolean(parentEl)}
            anchorEl={parentEl}
            placement="right-start"
            transition
            disablePortal
        >
            {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
                    <Paper elevation={3}>
                        <MenuList>
                            {item.subItems?.map((subItem, index) => (
                                <MenuItemWithArrow
                                    key={index}
                                >
                                    {subItem.label}
                                </MenuItemWithArrow>
                            ))}
                        </MenuList>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};

// Main component
export const PopoverMultiLayerPreview = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [hoveredItem, setHoveredItem] = useState<MenuItemType | null>(null);
    const [hoverAnchorEl, setHoverAnchorEl] = useState<HTMLElement | null>(null);

    // Sample menu data
    const menuItems: MenuItemType[] = [
        {
            label: 'Electronics',
            subItems: [
                { label: 'Computers' },
                { label: 'Phones' },
            ]
        },
        {
            label: 'Clothing',
            subItems: [
                { label: 'Men' },
                { label: 'Women' },
            ]
        },
        {
            label: 'Women',
            subItems: [
                { label: 'Dresses' },
                { label: 'Tops' },
                { label: 'Accessories' }
            ]
        },
        { label: 'Books' },
        { label: 'Sports Equipment' }
    ];

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setHoveredItem(null);
        setHoverAnchorEl(null);
    };

    const handleMouseEnter = (event: MouseEvent<HTMLElement>, menuItem: MenuItemType) => {
        if (menuItem.subItems && menuItem.subItems.length > 0) {
            setHoveredItem(menuItem);
            setHoverAnchorEl(event.currentTarget);
        } else {
            setHoveredItem(null);
            setHoverAnchorEl(null);
        }
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Menu
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper>
                        <MenuList>
                            {menuItems.map((item, index) => (
                                <MenuItemWithArrow
                                    key={index}
                                    onMouseEnter={(e) => handleMouseEnter(e, item)}
                                >
                                    {item.label}
                                    {item.subItems && item.subItems.length > 0 && <ArrowRightIcon fontSize="small" />}
                                </MenuItemWithArrow>
                            ))}
                        </MenuList>
                    </Paper>
                </ClickAwayListener>
            </Popover>

            {hoveredItem && hoveredItem.subItems && (
                <SubMenu
                    item={hoveredItem}
                    parentEl={hoverAnchorEl}
                />
            )}
        </>
    );
};