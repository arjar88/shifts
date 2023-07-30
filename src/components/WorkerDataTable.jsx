import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DataTable = () => {
  const headers = [
    "First Name",
    "Last Name",
    "Age",
    "Salary",
    "Travel",
    "Location",
    "Phone Number",
    "Email",
    "101 Form",
  ];
  const [rows, setRows] = useState([
    {
      fName: "Chana leah",
      lName: "Levin",
      age: 23,
      salary: 50,
      travel: true,
      location: "Ashdod",
      pNumber: "0503323456",
      email: "worker@gmail.com",
      formFilled: true,
    },
  ]);

  console.log("re rendered");

  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const [temp, setTemp] = useState("");

  const handleTextFieldChange = (rowId, colName, value) => {
    rows[rowId][colName] = value;
    setRows([...rows]);
  };

  const handleExit = (rowId, columnName) => {
    setRowIndex(-1);
    setColumnIndex(-1);
    handleTextFieldChange(rowId, columnName, temp);
    setTemp("");
  };

  const handleCheckbox = (rowId, columnId, value) => {
    rows[rowId][columnId] = value;
    setRows([...rows]);
  };

  return (
    <ClickAwayListener onClickAway={() => handleExit()}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((h, index) => (
                <StyledTableCell key={index} align="left">
                  {h}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(0);
                  }}
                  scope="row"
                >
                  {rowIndex === index && columnIndex === 0 ? (
                    <TextField
                      placeholder={row.fName}
                      defaultValue={rows[index]["fName"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "fName");
                        }
                      }}
                    />
                  ) : (
                    row.fName
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(1);
                  }}
                  scope="row"
                >
                  {rowIndex === index && columnIndex === 1 ? (
                    <TextField
                      placeholder={row.fName}
                      defaultValue={rows[index]["lName"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "lName");
                        }
                      }}
                    />
                  ) : (
                    row.lName
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(2);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 2 ? (
                    <TextField
                      placeholder={row.age}
                      defaultValue={rows[index]["age"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "age");
                        }
                      }}
                    />
                  ) : (
                    row.age
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(3);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 3 ? (
                    <TextField
                      placeholder={row.salary}
                      defaultValue={rows[index]["salary"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "salary");
                        }
                      }}
                    />
                  ) : (
                    row.salary
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(4);
                  }}
                  scope="row"
                >
                  <Checkbox
                    checked={row.travel}
                    onClick={() => handleCheckbox(index, "travel", !row.travel)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(5);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 5 ? (
                    <TextField
                      placeholder={row.location}
                      defaultValue={rows[index]["location"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "location");
                        }
                      }}
                    />
                  ) : (
                    row.location
                  )}
                </StyledTableCell>

                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(6);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 6 ? (
                    <TextField
                      placeholder={row.pNumber}
                      defaultValue={rows[index]["pNumber"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "pNumber");
                        }
                      }}
                    />
                  ) : (
                    row.pNumber
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(6);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 6 ? (
                    <TextField
                      placeholder={row.email}
                      defaultValue={rows[index]["email"]}
                      onChange={(event) => setTemp(event.target.value)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit(index, "email");
                        }
                      }}
                    />
                  ) : (
                    row.email
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(7);
                  }}
                  align="left"
                >
                  <Checkbox
                    checked={row.formFilled}
                    onClick={() =>
                      handleCheckbox(index, "formFilled", !row.formFilled)
                    }
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ClickAwayListener>
  );
};

export default DataTable;
