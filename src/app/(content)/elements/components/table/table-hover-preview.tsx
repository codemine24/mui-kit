import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import React from "react";

const users = [
    { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
    { name: "Clara Davis", email: "clara@example.com", role: "Viewer" },
    { name: "Daniel Lee", email: "daniel@example.com", role: "Editor" },
];

export function HoverTablePreview() {
    return (
        <Paper
            sx={{
                width: "100%",
                overflowX: "auto",
                backgroundColor: "primary.main",
                color: "primary.contrastText",
            }}
        >
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="primary styled table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: "primary.contrastText" }}>Name</TableCell>
                            <TableCell sx={{ color: "primary.contrastText" }}>Email</TableCell>
                            <TableCell sx={{ color: "primary.contrastText" }}>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    transition: "background-color 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                <TableCell sx={{ color: "primary.contrastText" }}>{user.name}</TableCell>
                                <TableCell sx={{ color: "primary.contrastText" }}>{user.email}</TableCell>
                                <TableCell sx={{ color: "primary.contrastText" }}>{user.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
