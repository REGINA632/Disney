import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "./List.css";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";
import MySkeleton from "../../Skeleton/MySkeleton";

const List = () => {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (prod) => {
    deleteProduct(prod);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      {products && products.length > 0 ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="list-page"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Имя</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Фамилия
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Отчество
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Дата Рождения
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Номер телефона
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Врач
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Дата
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Удалить/Редактировать
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.имя}
                  </TableCell>
                  <TableCell align="left">{item.фамилия}</TableCell>
                  <TableCell align="left">{item.отчество}</TableCell>
                  <TableCell align="left">{item.дата_рождение}</TableCell>
                  <TableCell align="left">{item.телефон}</TableCell>
                  <TableCell align="left">{item.врач}</TableCell>
                  <TableCell align="left">{item.data}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => handleDelete(item)}
                      // sx={{ bgcolor: "warning.main" }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                    <Link to={`edit/${item.id}`}>
                      <IconButton
                      // sx={{ bgcolor: "warning.main" }}
                      >
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MySkeleton />
      )}
    </div>
  );
};

export default List;
