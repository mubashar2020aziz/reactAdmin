import React from 'react';
import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table1 = () => {
  const rows = [
    {
      id: 1,
      product: 'headphone',
      img: '/assets/head.jpg',
      customer: 'M.Ahmad',
      date: '1 March',
      amount: 2000,
      method: 'Online',
      status: 'Panding',
    },
    {
      id: 2,
      product: 'headphone',
      img: '/assets/head1.jpg',
      customer: 'faham',
      date: '3 March',
      amount: 3000,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 3,
      product: 'jeans',
      img: '/assets/jeans1.png',
      customer: 'porter',
      date: '3 March',
      amount: 3000,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 4,
      product: 'jeans',
      img: '/assets/jeans2.jpg',
      customer: 'Sohail',
      date: '4 March',
      amount: 4000,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 5,
      product: 'I5 Laptop',
      img: '/assets/laptop1.jpg',
      customer: 'Shan',
      date: '5 March',
      amount: 5000,
      method: 'Online',
      status: 'Panding',
    },
    {
      id: 6,
      product: 'i7 Laptop',
      img: '/assets/laptop2.jpg',
      customer: 'Harry',
      date: '10 March',
      amount: 6000,
      method: 'Online',
      status: 'Approved',
    },
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="tablecell">Track ID</TableCell>
              <TableCell className="tablecell">product</TableCell>
              <TableCell className="tablecell">customer</TableCell>
              <TableCell className="tablecell">date</TableCell>
              <TableCell className="tablecell">amount</TableCell>
              <TableCell className="tablecell">method</TableCell>
              <TableCell className="tablecell">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tablecell">{row.id}</TableCell>
                <TableCell className="tablecell">
                  <div className="cellwrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tablecell">{row.customer}</TableCell>
                <TableCell className="tablecell">{row.date}</TableCell>
                <TableCell className="tablecell">{row.amount}</TableCell>
                <TableCell className="tablecell">{row.method}</TableCell>
                <TableCell className="tablecell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Table1;
