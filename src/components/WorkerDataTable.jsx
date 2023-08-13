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
import { updateWorker } from "../helpers/redux/slices/workers";
import { useDispatch } from "react-redux";

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

const DataTable = ({ worker, headers }) => {
  const rows = Array.isArray(worker) ? worker : [worker];

  //const [rows, setRows] = useState([]);
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const [temp, setTemp] = useState("");
  const dispatch = useDispatch();

  const handleTextFieldChange = (propName, value, workerId) => {
    dispatch(updateWorker({ workerId, propName, value }));
  };

  const handleExit = (workerId, propName) => {
    setRowIndex(-1);
    setColumnIndex(-1);
    handleTextFieldChange(propName, temp, workerId);
    setTemp("");
  };

  //need to change this
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
                <StyledTableCell
                  sx={{ margin: "2em" }}
                  key={index}
                  align="left"
                >
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
                          handleExit(worker.id, "fName");
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
                          handleExit(worker.id, "lName");
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
                          handleExit(worker.id, "age");
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
                          handleExit(worker.id, "salary");
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
                          handleExit(worker.id, "location");
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
                          handleExit(worker.id, "pNumber");
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
                          handleExit(worker.id, "email");
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
