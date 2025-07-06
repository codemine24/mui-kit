export const shoppingCartTableString = `import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import * as React from "react";

type Order = "asc" | "desc";

interface Product {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

const initialCart: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    image: "https://via.placeholder.com/50",
    price: 29.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    image: "https://via.placeholder.com/50",
    price: 59.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Laptop Stand",
    image: "https://via.placeholder.com/50",
    price: 19.99,
    quantity: 3,
  },
  {
    id: 4,
    name: "Webcam",
    image: "https://via.placeholder.com/50",
    price: 39.99,
    quantity: 1,
  },
  {
    id: 5,
    name: "USB-C Hub",
    image: "https://via.placeholder.com/50",
    price: 24.99,
    quantity: 2,
  },
  {
    id: 6,
    name: "AirPods",
    image: "https://via.placeholder.com/50",
    price: 199.99,
    quantity: 1,
  },
  {
    id: 7,
    name: "Smartphone",
    image: "https://via.placeholder.com/50",
    price: 399.99,
    quantity: 1,
  },
  {
    id: 8,
    name: "Smartwatch",
    image: "https://via.placeholder.com/50",
    price: 199.99,
    quantity: 1,
  },
];

export function ShoppingCartTablePreview() {
  const [cart, setCart] = React.useState<Product[]>(initialCart);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Product | "totalPrice">(
    "name"
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSort = (property: keyof Product | "totalPrice") => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const comparator = (a: Product, b: Product) => {
    let aValue: string | number = "";
    let bValue: string | number = "";

    if (orderBy === "totalPrice") {
      aValue = a.price * a.quantity;
      bValue = b.price * b.quantity;
    } else if (orderBy === "name") {
      aValue = a.name.toLowerCase();
      bValue = b.name.toLowerCase();
    } else {
      // price or quantity
      aValue = a[orderBy];
      bValue = b[orderBy];
    }

    if (aValue < bValue) {
      return order === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  const sortedCart = [...cart].sort(comparator);
  const paginatedCart = sortedCart.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="shopping cart table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell sortDirection={orderBy === "name" ? order : false}>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell sortDirection={orderBy === "price" ? order : false}>
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={() => handleSort("price")}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell
                sortDirection={orderBy === "totalPrice" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "totalPrice"}
                  direction={orderBy === "totalPrice" ? order : "asc"}
                  onClick={() => handleSort("totalPrice")}
                >
                  Total Price
                </TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCart.map((product) => (
              <TableRow key={product.id} hover>
                <TableCell>
                  <Avatar src={product.image} alt={product.name} />
                </TableCell>
                <TableCell>
                  <Typography>{product.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{product.quantity}</Typography>
                </TableCell>
                <TableCell>\${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  \${(product.price * product.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => handleRemove(product.id)}
                    size="small"
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {cart.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Your cart is empty.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={cart.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}`;
