export const transactionTableString = `import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const data = [
  {
    brand: "Spotify",
    logo: "/logos/spotify.png",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "PAID",
    account: "Visa 1234",
    cardType: "visa",
    expiry: "06/2026",
  },
  {
    brand: "Amazon",
    logo: "/logos/amazon.png",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "PAID",
    account: "Master Card 1234",
    cardType: "mastercard",
    expiry: "06/2026",
  },
  {
    brand: "Pinterest",
    logo: "/logos/pinterest.png",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "PENDING",
    account: "Master Card 1234",
    cardType: "mastercard",
    expiry: "06/2026",
  },
  {
    brand: "Google",
    logo: "/logos/google.png",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "PAID",
    account: "Visa 1234",
    cardType: "visa",
    expiry: "06/2026",
  },
  {
    brand: "Netflix",
    logo: "/logos/netflix.png",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "CANCELLED",
    account: "Visa 1234",
    cardType: "visa",
    expiry: "06/2026",
  },
];

const statusColors: Record<string, "success" | "warning" | "error"> = {
  PAID: "success",
  PENDING: "warning",
  CANCELLED: "error",
};

export function TransactionTablePreview() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transaction</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Account</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Avatar
                    src={row.logo}
                    alt={row.brand}
                    sx={{ width: 30, height: 30 }}
                  />
                  <Typography fontWeight={600}>{row.brand}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusColors[row.status]}
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    src={\`/cards/\${row.cardType}.png\`}
                    alt={row.cardType}
                    variant="square"
                    sx={{ width: 30, height: 20 }}
                  />
                  <Box>
                    <Typography fontSize={14}>{row.account}</Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {row.expiry}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`;
