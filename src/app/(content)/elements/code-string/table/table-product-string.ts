export const productTableString = `import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    IconButton,
    Typography,
    Avatar,
    TablePagination,
} from "@mui/material";
import * as React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

type Order = "asc" | "desc";

interface Product {
    id: number;
    image: string;
    name: string;
    quantity: number;
    price: number;
}

function createProduct(id: number, name: string, image: string, price: number, quantity: number): Product {
    return { id, name, image, price, quantity };
}

const initialProducts: Product[] = [
    createProduct(1, "Wireless Mouse", "https://via.placeholder.com/50", 29.99, 1),
    createProduct(2, "Bluetooth Headphones", "https://via.placeholder.com/50", 59.99, 2),
    createProduct(3, "Laptop Stand", "https://via.placeholder.com/50", 19.99, 1),
    createProduct(4, "Webcam", "https://via.placeholder.com/50", 39.99, 3),
    createProduct(5, "USB-C Hub", "https://via.placeholder.com/50", 24.99, 1),
    createProduct(6, "AirPods", "https://via.placeholder.com/50", 199.99, 1),
    createProduct(7, "Smartphone", "https://via.placeholder.com/50", 399.99, 1),
    createProduct(8, "Smartwatch", "https://via.placeholder.com/50", 199.99, 1),
];

export function ProductTable() {
    const [products, setProducts] = React.useState<Product[]>(initialProducts);
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Product>("name");

    // Pagination states
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleSort = (property: keyof Product) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const getComparator = <Key extends keyof Product>(
        order: Order,
        orderBy: Key
    ) => (a: Product, b: Product) =>
            order === "desc"
                ? b[orderBy] < a[orderBy] ? -1 : 1
                : a[orderBy] < b[orderBy] ? -1 : 1;

    const handleQuantityChange = (id: number, delta: number) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, quantity: Math.max(1, p.quantity + delta) }
                    : p
            )
        );
    };

    const handleRemove = (id: number) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    // Pagination handlers
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedProducts = [...products].sort(getComparator(order, orderBy));

    // Slice for pagination
    const paginatedProducts = sortedProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Paper sx={{ width: "100%", overflowX: "auto" }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell sortDirection={orderBy === "name" ? order : false}>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleSort("name")}
                                >
                                    Product
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell sortDirection={orderBy === "price" ? order : false}>
                                <TableSortLabel
                                    active={orderBy === "price"}
                                    direction={order}
                                    onClick={() => handleSort("price")}
                                >
                                    Price
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedProducts.map((product) => (
                            <TableRow hover key={product.id}>
                                <TableCell>
                                    <Avatar src={product.image} alt={product.name} />
                                </TableCell>
                                <TableCell>
                                    <Typography>{product.name}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <IconButton onClick={() => handleQuantityChange(product.id, -1)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography>{product.quantity}</Typography>
                                        <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                                <TableCell>\${product.price.toFixed(2)}</TableCell>
                                <TableCell>
                                    <IconButton color="error" onClick={() => handleRemove(product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        {products.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No products in the list.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={products.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
`
