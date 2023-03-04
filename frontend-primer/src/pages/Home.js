import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Button} from "@mui/material";
import { useEffect, useState } from "react";

// function createData(name, description, price) {
//   return { name, description, price };
// }

export const Home = () => {
  const [rows, setRow] = useState([]);

  const getData = async () => {
    await fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setRow(data.products));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <Button sx={{margin:'0px 10px'}} variant="contained">Update</Button>
                <Button variant="contained" color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};
