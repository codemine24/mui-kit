import {
    Box,
    Avatar,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Checkbox,
    TableSortLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
} from "@mui/material";
import * as React from "react";

type Order = "asc" | "desc";

interface User {
    name: string;
    email: string;
    profile: string;
    status: string;
    position: string;
}

function createData(
    name: string,
    email: string,
    profile: string,
    status: string,
    position: string
): User {
    return { name, email, profile, status, position };
}

const initialRows: User[] = [
    createData("Alice Smith", "alice.smith@example.com", "https://randomuser.me/api/portraits/women/1.jpg", "Active", "Manager"),
    createData("Bob Johnson", "bob.johnson@example.com", "https://randomuser.me/api/portraits/men/2.jpg", "Inactive", "Team Lead"),
    createData("Charlie Brown", "charlie.brown@example.com", "https://randomuser.me/api/portraits/men/3.jpg", "Active", "Developer"),
    createData("David Lee", "david.lee@example.com", "https://randomuser.me/api/portraits/men/4.jpg", "Inactive", "Designer"),
    createData("Eva Green", "eva.green@example.com", "https://randomuser.me/api/portraits/women/5.jpg", "Active", "Product Owner"),
    createData("Fiona White", "fiona.white@example.com", "https://randomuser.me/api/portraits/women/6.jpg", "Active", "HR Manager"),
    createData("George Hall", "george.hall@example.com", "https://randomuser.me/api/portraits/men/7.jpg", "Inactive", "Support Engineer"),
    createData("Hannah Scott", "hannah.scott@example.com", "https://randomuser.me/api/portraits/women/8.jpg", "Active", "UX Researcher"),
    createData("Ian Moore", "ian.moore@example.com", "https://randomuser.me/api/portraits/men/9.jpg", "Active", "DevOps Engineer"),
    createData("Jill Adams", "jill.adams@example.com", "https://randomuser.me/api/portraits/women/10.jpg", "Inactive", "Scrum Master"),
];

export function UserTablePreview() {
    const [rows, setRows] = React.useState<User[]>(initialRows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof User>("name");
    const [selected, setSelected] = React.useState<string[]>([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);

    const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRequestSort = (property: keyof User) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked ? rows.map((r) => r.name) : []);
    };

    const handleClick = (name: string) => {
        const selectedIndex = selected.indexOf(name);
        const newSelected = [...selected];
        selectedIndex === -1 ? newSelected.push(name) : newSelected.splice(selectedIndex, 1);
        setSelected(newSelected);
    };

    const isSelected = (name: string) => selected.includes(name);

    const getComparator = <Key extends keyof User>(
        order: Order,
        orderBy: Key
    ) => (a: User, b: User) =>
            order === "desc"
                ? b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0
                : a[orderBy] < b[orderBy] ? -1 : a[orderBy] > b[orderBy] ? 1 : 0;

    const handleEditClick = (user: User) => {
        setCurrentUser(user);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setCurrentUser(null);
    };

    const handleInputChange = (key: keyof User, value: string) => {
        if (!currentUser) return;
        setCurrentUser({ ...currentUser, [key]: value });
    };

    const handleSave = () => {
        if (!currentUser) return;
        setRows(rows.map((row) => (row.name === currentUser.name ? currentUser : row)));
        handleCloseModal();
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" sx={{ backgroundColor: "#E60076", color: "#fff" }}>
                                <Checkbox
                                    checked={selected.length === rows.length}
                                    indeterminate={selected.length > 0 && selected.length < rows.length}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E60076", color: "#fff" }} sortDirection={orderBy === "name" ? order : false}>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleRequestSort("name")}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E60076", color: "#fff" }}>
                                <TableSortLabel
                                    active={orderBy === "position"}
                                    direction={order}
                                    onClick={() => handleRequestSort("position")}
                                >
                                    Position
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E60076", color: "#fff" }}>
                                <TableSortLabel
                                    active={orderBy === "status"}
                                    direction={order}
                                    onClick={() => handleRequestSort("status")}
                                >
                                    Status
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{ backgroundColor: "#E60076", color: "#fff" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice()
                            .sort(getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                const isItemSelected = isSelected(row.name);
                                return (
                                    <TableRow key={row.name} hover selected={isItemSelected}>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                onClick={() => handleClick(row.name)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <Avatar src={row.profile} alt={row.name} />
                                                <Box>
                                                    <Typography>{row.name}</Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {row.email}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>

                                        <TableCell>{row.position}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>
                                            <Button variant="outlined" size="small" onClick={() => handleEditClick(row)}>
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>

            {/* Edit Modal */}
            <Dialog fullWidth open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1, }}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={currentUser?.name || ""}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        value={currentUser?.email || ""}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <TextField
                        label="Profile Image URL"
                        fullWidth
                        value={currentUser?.profile || ""}
                        onChange={(e) => handleInputChange("profile", e.target.value)}
                    />
                    <TextField
                        label="Position"
                        fullWidth
                        value={currentUser?.position || ""}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                    />
                    <TextField
                        label="Status"
                        fullWidth
                        value={currentUser?.status || ""}
                        onChange={(e) => handleInputChange("status", e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
