import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useSelector, useDispatch } from "react-redux";
import { updateShiftStructure } from "../../helpers/redux/slices/shiftStructures";

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

const ShiftDataTable = ({ shiftStructures, selectedStructureId }) => {
  //const [rowIndex, setRowIndex] = useState(-1);
  //const [columnIndex, setColumnIndex] = useState(-1);
  //const rows = useSelector((state) => state.shiftStructures.shiftStructures);

  const selectedStructure = shiftStructures.find(
    (s) => s.id === selectedStructureId
  );
  const structure = selectedStructure ? selectedStructure.structure : [];
  console.log(structure, "structure");

  const dispatch = useDispatch();
  const numOfShifts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const headers = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handlePropertyChange = (id, day, propName, value) => {
    dispatch(updateShiftStructure({ id, day, propName, value }));
  };

  const handleExit = (id, day, propName, value) => {
    //setRowIndex(-1);
    //setColumnIndex(-1);
    handlePropertyChange(id, day, propName, value);
  };

  const styles = {
    buttonStyles: {
      height: "1.6em",
      width: "12.5em",
      textTransform: "none",
      color: "white",
      backgroundColor: "#42adf5",
      marginTop: "1em",
    },
    selectStyle: {
      width: "11em",
      height: "3em",
    },
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "3em",
      },
    },
  };

  return (
    // <ClickAwayListener onClickAway={() => handleExit()}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((h, index) => (
              <StyledTableCell sx={{ margin: "2em" }} key={index} align="left">
                {h}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {structure &&
              structure.map((struc) => (
                <StyledTableCell key={struc.id}>
                  <Select
                    sx={styles.selectStyle}
                    placeholder={"Number Of Shifts"}
                    defaultValue={struc.numOfShifts}
                    MenuProps={MenuProps}
                    input={<OutlinedInput label="Name" />}
                    onChange={(event) =>
                      handleExit(
                        selectedStructureId,
                        struc.day,
                        "numOfShifts",
                        event.target.value
                      )
                    }
                  >
                    {numOfShifts.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                  {struc["numOfShifts"] && (
                    <Button
                      size="large"
                      variant="contained"
                      sx={styles.buttonStyles}
                    >
                      Number Of Workers
                    </Button>
                  )}
                </StyledTableCell>
              ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    //</ClickAwayListener>
  );
};

export default ShiftDataTable;
