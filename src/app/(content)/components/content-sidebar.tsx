"use client";

import { Logo } from "@/components/core/logo";
import { Iconify } from "@/components/iconify";
import { contentSidebarPathGroups } from "@/router/router";
import { TContentSidebarMode } from "@/types/content.types";
import { getActiveToggle } from "@/utils/activeToggle";
import { getRandomColor } from "@/utils/colors";
import { pxToRem } from "@/utils/pxToRem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type ContentSidebarProps = {
  variant?: "sidebar" | "drawer";
  onClose?: () => void;
};

export const ContentSidebar = ({ variant = "sidebar", onClose }: ContentSidebarProps) => {
  const pathname = usePathname();
  const theme = useTheme();
  const [open, setOpen] = useState<TContentSidebarMode | "">("ELEMENTS");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { key: string; label: string; path: string }[]
  >([]);

  const handleClick = (mode: TContentSidebarMode) => {
    setOpen((prev) => (prev === mode ? "" : mode));
  };

  const isActive = (path: string) => pathname === path;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      const results = contentSidebarPathGroups
        .flatMap((group) =>
          group.items.length > 0
            ? group.items.map((item) => ({
                key: item.path,
                label: item.label,
                path: item.path
              }))
            : [{ key: group.key, label: group.label, path: group.path || "" }]
        )
        .filter((item) => item.label.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const delayedSidebarClose = () => {
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  useEffect(() => {
    setSearchValue("");
    setSearchResults([]);
    setOpen(getActiveToggle(pathname) || "");
  }, [pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", xl: "16rem" },
        overflow: "auto",
        height: "100%",
        borderColor: { xl: "divider" },
        display: "flex",
        flexDirection: "column",
        p: variant === "drawer" ? 3 : 0,
        pt: variant === "drawer" ? 3 : 0,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      {variant === "drawer" && (
        <Box sx={{ mb: 0 }}>
          <Logo />
        </Box>
      )}

      {/* Search */}
      <Box
        sx={(theme) => ({
          py: variant === "drawer" ? 0 : 2,
          pt: 2,
          mb: variant === "drawer" ? 2 : 0,
          px: variant === "drawer" ? 0 : 0.5,
          position: "sticky",
          top: variant === "drawer" ? -26 : 0,
          zIndex: 10,
          backgroundColor:
            variant === "drawer" ? theme.palette.background.paper : theme.palette.background.default
        })}>
        <TextField
          placeholder="Search components..."
          size="small"
          variant="outlined"
          value={searchValue}
          onChange={handleSearch}
          fullWidth
          InputProps={{
            startAdornment: (
              <Iconify icon="eva:search-outline" width={20} style={{ marginRight: "10px" }} />
            )
          }}
          sx={{
            mb: 0,

            backgroundColor: theme.palette.background.paper,
            "& .MuiOutlinedInput-root": {
              borderRadius: theme.shape.borderRadius,
              paddingLeft: 1,
              fontSize: { md: pxToRem(14), lg: pxToRem(15) },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                boxShadow: theme.shadows[1]
              }
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.divider
            }
          }}
        />
      </Box>
      <List>
        {/* search results */}
        {searchValue ? (
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary" }}>
              Results
            </Typography>
            {searchResults.length > 0 ? (
              <List>
                {searchResults.map((item) => (
                  <ListItem key={item.key} disablePadding>
                    <Link href={item.path} legacyBehavior passHref>
                      <ListItemButton
                        disableRipple
                        sx={{
                          borderRadius: 1,
                          position: "relative",
                          "&:hover": {
                            bgcolor: "transparent"
                          },
                          "&:hover .MuiTypography-root": {
                            color: "primary.main"
                          },
                          "&:hover:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "25%",
                            height: "50%",
                            width: "4px",
                            bgcolor: "primary.main",
                            borderRadius: "0 2px 2px 0"
                          },
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "25%",
                            height: "50%",
                            width: "4px",
                            bgcolor: isActive(item.path) ? "primary.main" : "transparent",
                            borderRadius: "0 2px 2px 0"
                          }
                        }}>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            variant: "body2",
                            color: "text.primary"
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                No components found
              </Typography>
            )}
          </Box>
        ) : (
          contentSidebarPathGroups.map(({ key, label, items, path, type, icon }, index) => {
            return (
              <React.Fragment key={key}>
                {type === "button" && (
                  <ListItem key={path || key} disablePadding onClick={delayedSidebarClose}>
                    <Link href={path || ""} legacyBehavior passHref>
                      <ListItemButton
                        disableRipple
                        sx={{
                          px: 0,
                          pt: 0,
                          gap: 1.5,
                          mb: 1,
                          alignItems: "center",

                          color: "text.primary",
                          "&:hover": {
                            bgcolor: "transparent",
                            color: getRandomColor(index)
                          },
                          ".MuiTypography-root": {
                            fontSize: { md: pxToRem(14), lg: pxToRem(15) }
                          }
                        }}>
                        {/* Icon with background */}
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 1,
                            bgcolor: isActive(path || "") ? getRandomColor(index) : "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: isActive(path || "") ? "white" : getRandomColor(index),
                            border: ".5px solid",
                            borderColor: theme.palette.divider
                          }}>
                          <Iconify icon={icon} />
                        </Box>

                        <ListItemText
                          primary={label}
                          primaryTypographyProps={{
                            variant: "body2",
                            fontWeight: isActive(path || "") ? 500 : 400
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}

                {type === "single" && (
                  <ListItem key={path || key} disablePadding onClick={delayedSidebarClose}>
                    <Link href={path || ""} legacyBehavior passHref>
                      <ListItemButton
                        disableRipple
                        sx={{
                          borderRadius: 1,
                          position: "relative",
                          pl: 2,
                          px: 0,

                          "&:hover": {
                            bgcolor: "transparent"
                          },
                          "&:hover .MuiTypography-root": {
                            color: "primary.main"
                          },
                          ".MuiTypography-root": {
                            fontSize: { md: pxToRem(14), lg: pxToRem(15) }
                          }
                        }}>
                        <ListItemText
                          primary={label}
                          primaryTypographyProps={{
                            variant: "body2",
                            color: isActive(path || "") ? "primary.main" : "text.primary",
                            fontWeight: isActive(path || "") ? 500 : 400
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}

                {type === "group" && (
                  <>
                    <ListItemButton
                      onClick={() => handleClick(key)}
                      disableRipple
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        px: 0,
                        py: 0,
                        "&:hover": {
                          bgcolor: "transparent"
                        },
                        "&:hover .MuiTypography-root": {
                          color: "primary.main"
                        },
                        ".MuiTypography-root": {
                          fontSize: { md: pxToRem(14), lg: pxToRem(15) }
                        }
                      }}>
                      <ChevronRightIcon
                        sx={{
                          transform: open === key ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 200ms",
                          color: "primary.main",
                          fontSize: 16,
                          mr: 1
                        }}
                      />
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "text.primary",
                          fontWeight: open === key ? 500 : 400,
                          fontSize: { md: pxToRem(14), lg: pxToRem(15) }
                        }}
                      />
                    </ListItemButton>
                    <Collapse in={open === key} timeout="auto" unmountOnExit>
                      <List
                        sx={{
                          position: "relative",
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            left: "8.5px",
                            top: 0,
                            height: "100%",
                            width: "1px",
                            bgcolor: "divider"
                          }
                        }}>
                        {items.map((item) => (
                          <ListItem key={item.path} disablePadding onClick={delayedSidebarClose}>
                            <Link href={item.path} legacyBehavior passHref>
                              <ListItemButton
                                disableRipple
                                sx={{
                                  borderRadius: 1,
                                  position: "relative",
                                  ml: 1,
                                  "&:hover": {
                                    bgcolor: "transparent"
                                  },
                                  "&:hover .MuiTypography-root": {
                                    color: "primary.main"
                                  },
                                  "&:hover:before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "25%",
                                    height: "50%",
                                    width: "2px",
                                    bgcolor: "primary.main",
                                    borderRadius: "0 2px 2px 0"
                                  },
                                  "&:before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "25%",
                                    height: "50%",
                                    width: "2px",
                                    bgcolor: isActive(item.path) ? "primary.main" : "transparent",
                                    borderRadius: "0 2px 2px 0"
                                  },
                                  ".MuiTypography-root": {
                                    fontSize: {
                                      md: pxToRem(14),
                                      lg: pxToRem(15)
                                    }
                                  }
                                }}>
                                <ListItemText
                                  primary={item.label}
                                  primaryTypographyProps={{
                                    variant: "body2",
                                    color: "text.primary",
                                    fontWeight: isActive(item.path) ? 500 : 400,

                                    fontSize: {
                                      md: pxToRem(14),
                                      lg: pxToRem(15)
                                    }
                                  }}
                                />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                )}
              </React.Fragment>
            );
          })
        )}
      </List>
    </Box>
  );
};
