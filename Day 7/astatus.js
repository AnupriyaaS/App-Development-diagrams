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
import './result.css';
import { Assignment } from '@mui/icons-material';

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

function createData(sub, mark, per, grade) {
  return { sub, mark, per, grade };
}

const rows = [
  createData('Tamil', 90, '9%','A'),
  createData('English', 85, '8.5', 'B'),
  createData('Maths', 70, '7', 'C'),
  createData('Science', 50, '8.1',  'B'),
  createData('Social Science', 60, '9',  'A'),
];

function AssignmentStatus() {
  return (
    <div className='navigation'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">Marks</StyledTableCell>
            <StyledTableCell align="right">Percentage</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.sub}
              </StyledTableCell>
              <StyledTableCell align="right">{row.mark}</StyledTableCell>
              <StyledTableCell align="right">{row.per}</StyledTableCell>
              <StyledTableCell align="right">{row.grade}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div className='buttn'>
    <Link to='/home2'><button type='submit' className='buttonhome'>Home</button></Link>
    </div>
    </div>
   
  );
}
export default AssignmentStatus;