import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="flex justify-center items-center my-3">
      <Pagination
        count={10}
        page={page}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
      />
    </div>
  );
}

// [0.99]
// page 1 => [0,10]
// page 2 => [10,20]
// page 3 => [20,30]
// ......

// page 10 => [90,100]

// page 1 => coins.slice(0,10)
// var page = 1
// var initialIndex = page - 1 * 10
// coins.slice(initialIndex,initialIndex+10)
