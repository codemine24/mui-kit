export const paginationGoToPageString = `import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const MAX_PAGE = 50;
const DEFAULT_PAGE = 6;

export const PaginationGoToPage = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const NoArrowTextField = styled(TextField)({
    // For Chrome, Safari, Edge, Opera
    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
    {
      WebkitAppearance: "none",
      margin: 0,
    },
    // For Firefox
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(Number(e.currentTarget.page.value));
  };

  return (
    <Box sx={{ py: 2 }}>
      <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
        <Pagination
          count={MAX_PAGE}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              height: "32px",
              margin: 0,
              backgroundColor: "rgba(230, 0, 118, 0.2)",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#E60076",
              },
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#E60076",
              color: "#ffffff",
            },
          }}
          renderItem={(item) => {
            const isPrev = item.type === 'previous';
            const isNext = item.type === 'next';

            return (
              <PaginationItem
                {...item}
                slots={{
                  previous: () => (
                    <Box
                      component={"span"}
                      sx={{
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ArrowBackIcon fontSize="small" />
                      Prev
                    </Box>
                  ),
                  next: () => (
                    <Box
                      component={"span"}
                      sx={{
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      Next
                      <ArrowForwardIcon fontSize="small" />
                    </Box>
                  ),
                }}
                sx={{
                  ...(isPrev || isNext
                    ? {
                      backgroundColor: "#E60076 !important",
                    }
                    : {}),
                }}
              />
            );
          }}
        />



        <Divider
          orientation="vertical"
          sx={{ height: 32, borderColor: "divider" }}
        />

        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: 14 }}>
          Go To Page:{" "}
          <form onSubmit={handleFormSubmit}>
            <NoArrowTextField
              type="number"
              name="page"
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: 50,
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 35,
                  width: 50,
                },
                "& .MuiInputBase-input": {
                  fontSize: 14,
                },
              }}
            />
          </form>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
        <Pagination
          count={MAX_PAGE}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{
            "& .MuiPaginationItem-root": {
              height: "32px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "divider",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "#E60076 !important",
              color: "#ffffff",
            },
          }}
        />

        <Divider
          orientation="vertical"
          sx={{ height: 32, borderColor: "divider" }}
        />

        <Box display="flex" alignItems="center" gap={1} sx={{ fontSize: 14 }}>
          Go To Page:{" "}
          <form onSubmit={handleFormSubmit}>
            <NoArrowTextField
              type="number"
              name="page"
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: 50,
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: 35,
                  width: 50,
                },
                "& .MuiInputBase-input": {
                  fontSize: 14,
                },
              }}
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};
`;
