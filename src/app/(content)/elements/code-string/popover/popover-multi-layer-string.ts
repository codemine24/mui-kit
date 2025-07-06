export const popoverMultiLayerString = `import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import React, { MouseEvent, useState } from "react";

// Define menu structure type
interface MenuItemType {
    label: string;
    subItems?: MenuItemType[];
}

// Define submenu props
interface SubMenuProps {
    item: MenuItemType;
    parentEl: HTMLElement | null;
    onClose: () => void;
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
const SubMenu: React.FC<SubMenuProps> = ({ item, parentEl, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState<MenuItemType | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleMouseEnter = (event: MouseEvent<HTMLElement>, menuItem: MenuItemType) => {
        if (menuItem.subItems && menuItem.subItems.length > 0) {
            setHoveredItem(menuItem);
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setAnchorEl(null);
    };

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
                        <MenuList onMouseLeave={handleMouseLeave}>
                            {item.subItems?.map((subItem, index) => (
                                <MenuItemWithArrow
                                    key={index}
                                    onMouseEnter={(e) => handleMouseEnter(e, subItem)}
                                >
                                    {subItem.label}
                                </MenuItemWithArrow>
                            ))}
                        </MenuList>
                        {hoveredItem && hoveredItem.subItems && (
                            <SubMenu
                                item={hoveredItem}
                                parentEl={anchorEl}
                                onClose={onClose}
                            />
                        )}
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};

// Main component
export const PopoverMultiLayer = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [hoveredItem, setHoveredItem] = useState<MenuItemType | null>(null);
    const [hoverAnchorEl, setHoverAnchorEl] = useState<HTMLElement | null>(null);

    // Sample menu data
    const menuItems: MenuItemType[] = [
        {
            label: 'Electronics',
            subItems: [
                {
                    label: 'Computers',
                    subItems: [
                        { label: 'Laptops' },
                        { label: 'Desktops' },
                        { label: 'Tablets' }
                    ]
                },
                {
                    label: 'Phones',
                    subItems: [
                        { label: 'Apple' },
                        { label: 'Samsung' },
                        { label: 'Google' }
                    ]
                }
            ]
        },
        {
            label: 'Clothing',
            subItems: [
                {
                    label: 'Men',
                    subItems: [
                        { label: 'Shirts' },
                        { label: 'Pants' },
                        { label: 'Shoes' }
                    ]
                },
                {
                    label: 'Women',
                    subItems: [
                        { label: 'Dresses' },
                        { label: 'Tops' },
                        { label: 'Accessories' }
                    ]
                }
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
                    onClose={handleClose}
                />
            )}
        </>
    );
};`;
