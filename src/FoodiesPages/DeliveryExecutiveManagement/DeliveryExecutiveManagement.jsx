import React, { useState, useEffect } from 'react'
import HOC from '../../Common/HOC'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

const DeliveryExecutiveManagement = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [adddata, setadddata] = useState([
        {

            name: "https://statinfer.com/wp-content/uploads/dummy-user.png",
            email: "Rahul Chauhan",

            address: "West Delhi, Delhi, India",
            show: false,
        },
        {
            name: "https://statinfer.com/wp-content/uploads/dummy-user.png",

            email: "Amit singh",
            address: "West Delhi, Delhi, India",
            show: false,
        },
        {

            name: "https://statinfer.com/wp-content/uploads/dummy-user.png",

            email: "Rahul Chauhan   ",
            address: "West Delhi, Delhi, India",
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

    const deletedata = (index) =>{
        adddata.splice(index,1);
        setadddata([...adddata])

    }


    return (
        <>
            <div className="Page_width" >
                <div>
                    <Grid className="Component_main_grid">
                        <Grid item md={8}> <h3 className='p-2'>Delivery Executive Management
                        </h3></Grid>
                        </Grid>

                </div>
                <div>

                    <Card classname="main_card p-3">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Action</TableCell>
                                      

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


                                            <TableCell><img style={{height:"80px", width:"90px"}} src={row.name} /></TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.address}</TableCell>
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
                                                        Active

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
                                                    <button type="button" class="btn btn-info" onClick={()=> deletedata(index)}>
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

export default DeliveryExecutiveManagement