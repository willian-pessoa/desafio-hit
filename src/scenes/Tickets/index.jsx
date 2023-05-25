import React, { useMemo, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Header from "components/Header/Header";

import { dataToTicketsTable, formatDate } from "utils/helpers";
import CenterBox from "components/CustomBoxs/CenterBox";

const Tickets = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const tickets = useMemo(() => {
    return dataToTicketsTable();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Criado Em",
      flex: 0.5,
      renderCell: (params) => {
        let date = new Date(params.value);
        return formatDate(date);
      },
    },
    {
      field: "contact",
      headerName: "Contato",
      flex: 0.5,
    },
  ];

  return (
    <Box m={`1.5rem ${isNonMobile ? "2.5rem" : "0.5rem"}`}>
      <Header title="TICKETS" subtitle="Lista de Tickets" />
      <CenterBox width="100%">
        <Box
          mt="40px"
          width="90%"
          maxWidth="600px"
          height="60vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              alignContent: "center",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f0c284",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "antiquewhite",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "antiquewhite",
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "black",
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row.id}
            rows={tickets || []}
            columns={columns}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Box>
      </CenterBox>
    </Box>
  );
};

export default Tickets;
