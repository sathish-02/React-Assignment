import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const pageRoute = ["Country", "City"];

const Navbar = () => {
  const [data, setdata] = useState(null);

  const handleCloseNavMenu = () => {
    setdata(null);
  };

  return (
    <>
      <div className="container-fluid">
        <Link to="/" className="text-center text-dark py-1 display-6">
          POPULATION LIST
        </Link>
      </div>

      <div className="container-fluid">
        {pageRoute.map((page) => (
          <Link to={`/add-${page}`}>
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              className="text-center"
            >
              {page}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Navbar;
