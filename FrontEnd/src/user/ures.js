import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './ures.css';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(sub, course, marks) {
  return { sub, course, marks };
}

const rows = [
  createData('Tamil', '22ta301',90,),
  createData('English', '22en404', 80),
  createData('Maths', '22mt540', 89),
  createData('Science', '22bs390',92),
  createData('Social Science','22ss420',95),
];

function Customized() {
  return (
    <div className='navigation'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">Course Id</StyledTableCell>
            <StyledTableCell align="right">Marks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sub}>
              <StyledTableCell component="th" scope="row">
                {row.sub}
              </StyledTableCell>
              <StyledTableCell align="right">{row.course}</StyledTableCell>
              <StyledTableCell align="right">{row.marks}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div className='buttn'>
    <Link to='/Feedback'><button type='submit' className='buttonhome'>Home</button></Link>
    </div>
    </div>
   
  );
}
export default Customized;