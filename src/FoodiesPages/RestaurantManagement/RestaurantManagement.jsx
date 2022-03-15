import React, { useState, useEffect } from 'react'
import HOC from '../../Common/HOC'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {useNavigate} from "react-router-dom"

import Paper from "@material-ui/core/Paper";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

const RestaurantManagement = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [adddata, setadddata] = useState([
    {
      id: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow=",
      name: "Leo's Pizzeria",
      email: "Delhi",
      Created: "2021-10-17",
      show: false,
    },
    {
      name: "Andhra Bhavan",
      id: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
      email: "Delhi",
      Created: "2021-10-17",
      show: false,
    },
    {
      id: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
      name: "Town Hall",
      email: "Delhi",
      Created: "2021-10-17",
      show: false,
    },
  ]);

  ///customer active

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");

  const filterData = adddata.filter((event) => {
    return event.name.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  const classes = "";


  return (
    <>
      <div className="Page_width content_padding" >
        <Grid className="Component_main_grid p-2 ">
          <Grid item md={4}>
            <h3 className='p-2'>Restaurant Management</h3>
          </Grid>
          <Grid item md={4}>
            <div className="d-flex">
              <span className="p-2">
                <i class="fa fa-search"></i>
              </span>
              <span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Restaurant Name"
                  value={titlename}
                  onChange={(e) => {
                    settitlename(e.target.value);
                  }}
                />
              </span>
            </div>
          </Grid>
        </Grid>

        <div>

          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Restaurant Name</TableCell>
                    <TableCell>Location</TableCell>

                    <TableCell>Created At</TableCell>
                    <TableCell>Status</TableCell>

                    <TableCell>Operations</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filterData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    : filterData
                  ).map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <img style={{ height: "80px", width: "80px" }} src={row.id} />
                      </TableCell>

                      <TableCell style={{cursor:"pointer"}} onClick={()=> navigate("/restaurant-managementList")}>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.Created}</TableCell>

                      <TableCell>
                        {row.show === false ? (
                          <button
                            type="button"
                            class="btn btn-info"
                            onClick={() => {
                              adddata[index].show = true;
                              setadddata([...adddata]);
                              console.log("setdata value", adddata);
                            }}
                          >
                            Activated
                          </button>
                        ) : (
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => {
                              adddata[index].show = false;
                              setadddata([...adddata]);
                            }}
                          >
                            Block
                          </button>
                        )}
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <button type="button" class="btn btn-info mr-4">
                            <i class="fa fa-edit"></i>
                          </button>
                          <button type="button" class="btn btn-info">
                            <i class="fa fa-trash"></i>
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                count={filterData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HOC(RestaurantManagement)