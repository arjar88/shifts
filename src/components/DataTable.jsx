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

  //make the table reactive
  const handleTextFieldChange = (rowId, colName, value) => {
    rows[rowId][colName] = value;
    setRows([...rows]);
  };

  const handleExit = (rowId, columnName) => {
    debugger;
    setRowIndex(-1);
    setColumnIndex(-1);
    handleTextFieldChange(rowId, columnName, temp);
    setTemp("");
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
                          //the e.target.value here is not the same onchnge event
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
                    setColumnIndex(0);
                  }}
                  scope="row"
                >
                  {rowIndex === index && columnIndex === 0 ? (
                    <TextField
                      placeholder={row.fName}
                      defaultValue={rows[index]["lName"]}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          //the e.target.value here is not the same onchnge event
                          handleExit(index, "lName", e.target.value);
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
                    setColumnIndex(1);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 1 ? (
                    <TextField
                      placeholder={row.age}
                      defaultValue={rows[index]["age"]}
                      onChange={(event) =>
                        handleTextFieldChange(index, "age", event.target.value)
                      }
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit();
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
                    setColumnIndex(2);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 2 ? (
                    <TextField
                      placeholder={row.salary}
                      defaultValue={rows[index]["salary"]}
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          "salary",
                          event.target.value
                        )
                      }
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit();
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
                    setColumnIndex(0);
                  }}
                  scope="row"
                >
                  {rowIndex === index && columnIndex === 3 ? (
                    <TextField
                      placeholder={row.travel}
                      defaultValue={rows[index]["travel"]}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          //the e.target.value here is not the same onchnge event
                          handleExit(index, "age", e.target.value);
                        }
                      }}
                    />
                  ) : (
                    row.travel
                  )}
                </StyledTableCell>
                <StyledTableCell
                  onClick={() => {
                    setRowIndex(index);
                    setColumnIndex(3);
                  }}
                  align="left"
                >
                  {rowIndex === index && columnIndex === 4 ? (
                    <TextField
                      placeholder={row.location}
                      defaultValue={rows[index]["location"]}
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          "location",
                          event.target.value
                        )
                      }
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          handleExit();
                        }
                      }}
                    />
                  ) : (
                    row.location
                  )}
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
