export const strippedColumnTableString = `import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import React from "react";

const salesData = [
    { product: "Keyboard", jan: 120, feb: 95, mar: 130 },
    { product: "Mouse", jan: 140, feb: 110, mar: 150 },
    { product: "Monitor", jan: 80, feb: 75, mar: 95 },
    { product: "Laptop", jan: 60, feb: 65, mar: 70 },
];

export function StripedColumnTable() {
    const theme = useTheme();

    const getColumnBgColor = (index: number) =>
        index % 2 === 0
            ? theme.palette.primary.main
            : theme.palette.info.main;

    const headers = ["Product", "Jan Sales", "Feb Sales", "Mar Sales"];

    return (
        <Paper sx={{ width: "100%", overflowX: "auto" }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="striped column table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableCell
                                    key={header}
                                    sx={{ backgroundColor: getColumnBgColor(index) }}
                                >
                                    <Typography fontWeight="bold">{header}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {[row.product, row.jan, row.feb, row.mar].map((value, colIdx) => (
                                    <TableCell
                                        key={colIdx}
                                        sx={{ backgroundColor: getColumnBgColor(colIdx) }}
                                    >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
`;
