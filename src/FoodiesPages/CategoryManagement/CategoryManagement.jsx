import React, { useState, useEffect } from 'react'
import HOC from '../../Common/HOC'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//dialog box
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

const CategoryManagement = (props) => {
    const [EditDailogOpen,setEditDailogOpen] = useState(false)

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    const [adddata, setadddata] = useState([
        {

            name: "Fruits Juice",
            email: "Apples,Bananas,Grapes,Citrus fruits.",

            Created: "Facebook",
            show: false,
        },
        {
            name: "Fruits Juice",
            email: "Apples,Bananas,Grapes,Citrus fruits.",
            Created: "Google",
            show: false,
        },
        {

            name: "Fruits Juice",
            email: "Apples,Bananas,Grapes,Citrus fruits.",
            Created: "Normal",
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

    const deleteMenudata = (index)=>{
        adddata.splice(index,1)
        setadddata([...adddata])

    }


    return (
        <>
            <div className="Page_width " >
                <div>
                    <Grid className="Component_main_grid">
                        <Grid item md={8}> <h3 className='p-2'>Category Management
                        </h3></Grid>
                        {/* <Grid item md={4}>  <button type="button" class="btn btn-info"  onClick={()=> props.histroy.goBack("")}>
                        <i class="fa fa-arrow-left pr-2" aria-hidden="true"></i>Go Back
                        </button></Grid> */}
                    </Grid>

                </div>
                <div>

                    <Card classname="main_card p-3">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Major Category</TableCell>
                                        <TableCell>Subcategory</TableCell>

                                       

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


                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                          



                                            <TableCell>
                                                <div className="d-flex">
                                                    <button type="button" class="btn btn-info mr-4"  onClick={() => setEditDailogOpen(!EditDailogOpen)}>
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-info" onClick={()=> deleteMenudata(index)}>
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

            <Dialog
                open={EditDailogOpen}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth="fullWidth"
                onClose={() => setEditDailogOpen(!EditDailogOpen)}
            >
                <DialogTitle>
                    Edit User
                    <span
                        className="float-right icon_color"
                        onClick={() => setEditDailogOpen(!EditDailogOpen)}
                    >
                        <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
                    </span>
                </DialogTitle>
                <DialogContent>
                    <div className="card_admissiondetails_height">
                        <div className="textfiled_margin">
                            <div className="card_content_instition">
                                <div className="text_filed_heading">Major Category</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"

                                        className="form-control "
                                        placeholder="Major Category"
                                        autoComplete="off"
                                        // value={itemname}
                                        // onChange={(e) => setitemname(e.target.value)}
                                    />
                                </div>

                               
                                <div className="text_filed_heading">Subcategory</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Subcategory"
                                        autoComplete="off"
                                        // value={discountprice}
                                        // onChange={(e) => setdiscountprice(e.target.value)}
                                    />
                                </div>
                               

                            </div>

                            <div className="mt-2 pb-3 ">
                                <Button
                                    variant="contained"
                                    className="button_formatting mt-3"
                                   

                                >
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CategoryManagement