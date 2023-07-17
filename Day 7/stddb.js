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
  import './stddb.css';
  
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(sno, name, status, per) {
    return { sno, name, status, per };
  }
  
  const rows = [
    createData(1, 'John Doe', 'Complete','95%'),
    createData(2, 'Jane Smith', 'Incomplete', '85%'),
    createData(3, 'Mike Johnson', 'Complete ','99%'),
    createData(4, 'Nick', 'Incomplete',  '69%'),
    createData(5, 'Zindiya', 'InComplete',  '84%'),
  ];
  
  function StudentTable() {
    return (
      <div className='imageback'>
      <div className='navigation'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sl.No</StyledTableCell>
              <StyledTableCell align="right">NAME</StyledTableCell>
              <StyledTableCell align="right">COMPLETION STATUS</StyledTableCell>
              <StyledTableCell align="right">ATTENDANCE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.sno}>
                <StyledTableCell component="th" scope="row">
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.per}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <div className='buttn'>
      <Link to='/home2'><button type='submit' className='buttonhome'>Home</button></Link>
      </div>
      </div>
     </div>
    );
  }
  export default StudentTable;