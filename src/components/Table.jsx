import { styled } from "@mui/material/styles";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";



const Row = styled(TableRow)(({ theme }) => ({
  
}));

export default function HomeContent() {
  const [Data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/city").then((e) => {
      setData([...e.data]);
    });
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/city/${id}`).then((el) => {
      fetchData();
    });
  };

  const handleSort = (value) => {
    let sorted = [...Data];
    if (value === "ascending")
      sorted.sort((a, b) => +a.population - +b.population);
    else sorted.sort((a, b) => +b.population - +a.population);

    setData(sorted);
  };

  return (
    <>
      <div >
        <Button
          onClick={() => handleSort("ascending")}
        >
          Sort Ascending
        </Button>
        <Button
          onClick={() => handleSort("descending")}
        >
          Sort descending
        </Button>
        <Button
        
          onClick={() => fetchData()}
        >
          Clear
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <td>ID </td>
              <td>Country</td>
              <td>City</td>
              <td>Population</td>
              <td>Edit</td>
              <td>Delete</td>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((el, index) => (
              <Row key={el.id}>
                <td component="th" scope="el">
                  {index + 1}
                </td>
                <td>{el.country}</td>
                <td>{el.city}</td>
                <td>{el.population}</td>

                <td>
                  <Link
                    to={`/add-city/${el.id}`}
                    className="btn btn-sm mr-1"
                  >
                    {"Edit"}
                  </Link>
                </td>

                <td onClick={() => handleDelete(el.id)}>
                  <button type="button" className="btn btn-sm">
                    {"Delete"}
                  </button>
                </td>
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
