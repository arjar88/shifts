import { useState } from "react";
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
import { updateWorker } from "../../helpers/redux/slices/workers";
import { useDispatch } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
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

const ShiftDataTable = () => {
  const rows = [];
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const [temp, setTemp] = useState("");
  const dispatch = useDispatch();

  const headers = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handlePropertyChange = (propName, value, workerId) => {
    dispatch(updateWorker({ workerId, propName, value }));
  };

  const handleExit = (workerId, propName) => {
    setRowIndex(-1);
    setColumnIndex(-1);
    handlePropertyChange(propName, temp, workerId);
    setTemp("");
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
            <StyledTableRow>
              {headers.map((day, index) => (
                <StyledTableCell key={index}>
                  <TextField
                    placeholder={"Number Of Shifts"}
                    // You can set the value and onChange handlers here
                    // value={rows[rowIndex][day]} for example
                    // onChange={(event) => handleInputChange(event, day)}
                  />
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ClickAwayListener>
  );
};

export default ShiftDataTable;
