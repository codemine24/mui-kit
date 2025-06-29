"use client";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";

interface Order {
  id: string;
  customer: string;
  date: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  amount: number;
}

const orders: Order[] = Array.from({ length: 42 }).map((_, i) => ({
  id: `ORD-${1000 + i}`,
  customer: `Customer ${i + 1}`,
  date: `2024-05-${((i % 30) + 1).toString().padStart(2, "0")}`,
  status: ["Pending", "Shipped", "Delivered", "Cancelled"][i % 4] as Order["status"],
  amount: Number((Math.random() * 500 + 50).toFixed(2))
}));

const rowsPerPage = 10;

export function CustomPaginationTablePreview() {
  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedOrders = orders.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Paper sx={{ width: "100%", overflowX: "auto", p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Orders
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="order table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Order ID</strong>
              </TableCell>
              <TableCell>
                <strong>Customer</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Amount ($)</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(orders.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Paper>
  );
}
