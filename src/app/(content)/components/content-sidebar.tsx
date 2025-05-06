"use client";

import { Logo } from "@/components/core/logo";
import { contentSidebarPathGroups } from "@/router/router";
import { TContentSidebarMode } from "@/types/content.types";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type ContentSidebarProps = {
  variant?: "sidebar" | "drawer";
};

export const ContentSidebar = ({
  variant = "sidebar",
}: ContentSidebarProps) => {
  const [open, setOpen] = useState<TContentSidebarMode | "">("DOCS");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<
    { key: string; label: string; path: string }[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    setSearchValue("");
    setSearchResults([]);
  }, [pathname]);

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
                path: item.path,
              }))
            : [{ key: group.key, label: group.label, path: group.path || "" }]
        )
        .filter((item) =>
          item.label.toLowerCase().includes(value.toLowerCase())
        );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

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
        p: variant === "drawer" ? 3 : 1,
        pt: variant === "drawer" ? 3 : 3,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // backgroundColor: "background.paper",
      }}
    >
      {variant === "drawer" && (
        <Box sx={{ mb: 2 }}>
          <Logo />
        </Box>
      )}

      {/* Search */}
      <TextField
        placeholder="Search..."
        id="outlined-size-small"
        size="small"
        sx={{ width: "100%" }}
        onChange={handleSearch}
        value={searchValue}
      />

      <List sx={{ flexGrow: 1, mt: 2 }}>
        {searchValue ? (
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ mb: 2, color: "text.secondary" }}
            >
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
                            bgcolor: "transparent",
                          },
                          "&:hover .MuiTypography-root": {
                            color: "primary.main",
                          },
                          // pl: 2,
                          "&:hover:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "25%",
                            height: "50%",
                            width: "4px",
                            bgcolor: "primary.main",
                            borderRadius: "0 2px 2px 0",
                          },
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "25%",
                            height: "50%",
                            width: "4px",
                            bgcolor: isActive(item.path)
                              ? "primary.main"
                              : "transparent",
                            borderRadius: "0 2px 2px 0",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            variant: "body2",
                            color: "text.primary",
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
          contentSidebarPathGroups.map(({ key, label, items, path }) => {
            const hasChildren = items.length > 0;

            return (
              <React.Fragment key={key}>
                {hasChildren ? (
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
                          bgcolor: "transparent",
                        },
                        "&:hover .MuiTypography-root": {
                          color: "primary.main",
                        },
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          px: 0,
                          py: 1,
                          color: "text.secondary",
                          textTransform: "uppercase",
                          fontWeight: "medium",
                        }}
                      >
                        {label}
                      </Typography>
                      <ChevronRightIcon
                        sx={{
                          transform:
                            open === key ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 200ms",
                          color: "text.secondary",
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
                            left: "5px",
                            top: 0,
                            height: "100%",
                            width: "1px",
                            bgcolor: "divider",
                          },
                        }}
                      >
                        {items.map((item) => (
                          <ListItem key={item.path} disablePadding>
                            <Link href={item.path} legacyBehavior passHref>
                              <ListItemButton
                                disableRipple
                                sx={{
                                  borderRadius: 1,
                                  position: "relative",
                                  ml: 1,
                                  "&:hover": {
                                    bgcolor: "transparent",
                                  },
                                  "&:hover .MuiTypography-root": {
                                    color: "primary.main",
                                  },
                                  "&:hover:before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "25%",
                                    height: "50%",
                                    width: "4px",
                                    bgcolor: "primary.main",
                                    borderRadius: "0 2px 2px 0",
                                  },
                                  "&:before": {
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    top: "25%",
                                    height: "50%",
                                    width: "4px",
                                    bgcolor: isActive(item.path)
                                      ? "primary.main"
                                      : "transparent",
                                    borderRadius: "0 2px 2px 0",
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={item.label}
                                  primaryTypographyProps={{
                                    variant: "body2",
                                    color: "text.primary",
                                    fontSize: { xs: 15, sm: 16 },
                                  }}
                                />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem key={path || key} disablePadding>
                    <Link href={path || ""} legacyBehavior passHref>
                      <ListItemButton
                        disableRipple
                        sx={{
                          borderRadius: 1,
                          position: "relative",
                          pl: 2,
                          px: 0,
                          color: "text.secondary",
                          textTransform: "uppercase",
                          "&:hover": {
                            bgcolor: "transparent",
                          },
                          "&:hover .MuiTypography-root": {
                            color: "primary.main",
                          },
                        }}
                      >
                        <ListItemText
                          sx={{ fontWeight: "bold" }}
                          primary={label}
                          primaryTypographyProps={{
                            variant: "body2",
                            color: isActive(path || "")
                              ? "primary.main"
                              : "text.secondary",
                            fontWeight: 600,
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )}
              </React.Fragment>
            );
          })
        )}
      </List>

      <Box
        sx={{
          mt: "auto",
          p: 2,
          bgcolor: "background.paper",
          border: `.5px solid`,
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Want to contribute?
        </Typography>
        <Link href="/contribute" passHref>
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Join our community!
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
