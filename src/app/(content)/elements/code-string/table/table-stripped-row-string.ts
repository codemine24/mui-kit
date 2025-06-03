export const strippedRowTableString = `import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";

const employees = [
    { name: "Alice Johnson", role: "Frontend Developer", department: "Engineering" },
    { name: "Bob Smith", role: "Backend Developer", department: "Engineering" },
    { name: "Clara Davis", role: "HR Manager", department: "Human Resources" },
    { name: "Daniel Lee", role: "Product Manager", department: "Product" },
    { name: "Ella Brown", role: "UX Designer", department: "Design" },
];

export function StripedRowTable() {
    const theme = useTheme();

    return (
        <Paper sx={{ width: "100%", overflowX: "auto" }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="striped row table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                            <TableCell><Typography fontWeight="bold">Name</Typography></TableCell>
                            <TableCell><Typography fontWeight="bold">Role</Typography></TableCell>
                            <TableCell><Typography fontWeight="bold">Department</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    backgroundColor:
                                        index % 2 === 0
                                            ? theme.palette.info.main
                                            : theme.palette.primary.main,
                                }}
                            >
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.role}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
`
