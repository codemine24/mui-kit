export const highlightTableString = `import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme,
} from "@mui/material";
import { useMemo } from "react";

const employees = [
  {
    name: "Alice",
    department: "Engineering",
    location: "NY",
    age: 28,
    salary: "$95K",
  },
  {
    name: "Bob",
    department: "Marketing",
    location: "LA",
    age: 35,
    salary: "$85K",
  },
  {
    name: "Clara",
    department: "Design",
    location: "SF",
    age: 30,
    salary: "$90K",
  },
  {
    name: "Daniel",
    department: "HR",
    location: "Chicago",
    age: 40,
    salary: "$80K",
  },
  {
    name: "Eva",
    department: "Finance",
    location: "Seattle",
    age: 38,
    salary: "$100K",
  },
  {
    name: "Frank",
    department: "Sales",
    location: "Boston",
    age: 45,
    salary: "$110K",
  },
  {
    name: "Grace",
    department: "Engineering",
    location: "Austin",
    age: 27,
    salary: "$98K",
  },
  {
    name: "Henry",
    department: "Support",
    location: "Denver",
    age: 33,
    salary: "$75K",
  },
];

const fields = ["name", "department", "location", "age", "salary"] as const;

export function HighlightedFieldTablePreview() {
  const theme = useTheme();

  const highlightColors = useMemo(
    () => [
      theme.palette.success.light,
      theme.palette.warning.light,
      theme.palette.error.light,
      theme.palette.info.light,
      theme.palette.secondary.light,
    ],
    [theme]
  );

  const highlights = useMemo(() => {
    const highlightCount = Math.floor(Math.random() * 2) + 3;
    const highlights = new Map<string, string>();

    while (highlights.size < highlightCount) {
      const row = Math.floor(Math.random() * employees.length);
      const col = Math.floor(Math.random() * fields.length);
      const key = \`\${row}-\${col}\`;
      if (!highlights.has(key)) {
        const color =
          highlightColors[Math.floor(Math.random() * highlightColors.length)];
        highlights.set(key, color);
      }
    }

    return highlights;
  }, [highlightColors]);

  return (
    <Paper sx={{ width: "100%", overflowX: "auto", p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Randomly Highlighted Fields (each with its own color)
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {fields.map((field) => (
                <TableCell key={field}>
                  <Typography fontWeight="bold" textTransform="capitalize">
                    {field}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, rowIdx) => (
              <TableRow key={rowIdx} hover>
                {fields.map((field, colIdx) => {
                  const cellKey = \`\${rowIdx}-\${colIdx}\`;
                  const bgColor = highlights.get(cellKey) || "inherit";

                  return (
                    <TableCell
                      key={field}
                      sx={{
                        backgroundColor: bgColor,
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      {employee[field]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}`;
