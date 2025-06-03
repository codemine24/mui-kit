export const headlessTableString = `import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";

const data = [
  { id: 1, title: "System Update", time: "10:45 AM", status: "Completed" },
  { id: 2, title: "New User Signup", time: "11:15 AM", status: "Pending" },
  { id: 3, title: "Backup Success", time: "12:05 PM", status: "Success" },
  { id: 4, title: "Email Sent", time: "01:25 PM", status: "Completed" },
];

export function HeadlessTablePreview() {
  return (
    <Paper sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="table with no headers">
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} hover>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}`;
