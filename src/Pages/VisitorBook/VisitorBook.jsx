import React from 'react';
import HOC from "../../Common/HOC.jsx"
import "../../Pages/AdmissionEnquiry/AdminsionEnquiry.css"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

import { useNavigate } from 'react-router-dom';
//dialog box
import {

    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";
import { useState } from 'react';


function VisitorBook(props) {
    const [EditDailogOpen, setEditDailogOpen] = useState("")
    const navigate = useNavigate();
    const classes = useStyles();

    const filterData = [
        {
            name: "Admission",
            phone: "arun singh",
            source: "12345678	",
            Enquirydate: "21-12-2021	",
            Lastdate: "11:15 AM",
            Nextdate: "11:15 AM",
            status: "11:15 AM",
        },
        {
            name: "Admission",
            phone: "Tarun singh",
            source: "12345678	",
            Enquirydate: "21-12-2021	",
            Lastdate: "11:15 AM",
            Nextdate: "11:15 AM",
            status: "11:15 AM",
        },
        {
            name: "Admission",
            phone: "arun singh",
            source: "12345678	",
            Enquirydate: "21-12-2021	",
            Lastdate: "11:15 AM",
            Nextdate: "11:15 AM",
            status: "11:15 AM",
        }

    ];

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

    return (
        <>
            <div className="Page_width content_padding" >
                {/* <div className="pl-1 mr-3" >
                    <div className="Content_topHeading">
                        <h3> Add Visitor</h3>
                    </div>
                </div> */}
                <div>

                    <div className='Criteria_class'>
                
                        <Grid className="Component_main_grid">
                            <Grid item md={4} className="p-2">
                            <h3> Add Visitor</h3>
                                <Grid className="Component_main_grid">
                                    <Grid item md={12} >
                                        <div class="form-group pr-1">
                                            <label for="exampleInputEmail1">Purpose *</label>

                                            <select class="form-control">
                                                <option>Admission</option>
                                            </select>


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name *</label>
                                            <input type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Phone</label>
                                            <input type="number" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">ID Card</label>
                                            <input type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Number Of Person</label>
                                            <input type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Date</label>
                                            <input type="date" class="form-control" placeholder="Enter email" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >In Time</label>
                                            <input type="time" class="form-control" placeholder="Enter email" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Out Time</label>
                                            <input type="time" class="form-control" placeholder="Enter email" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Note</label>
                                            <textarea type="time" rows={2} class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Attach Document</label>
                                            <input type="file" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid className="Component_main_grid">
                                    <Grid item md={12} className="p-2">
                                        <div className="text-right"><Button className="add_button" onClick={() => navigate("#")}>Save</Button></div>
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item md={8} className="p-2">
                            <h4>Visitor List</h4>
                                <div className="mb-3">
                                    <Card className="p-2 Card_shadow mt-2 card_height">
                                  
                                        <Grid className="Component_main_grid">
                                            <Grid item md={3} className="p-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    className="form-control"
                                                />
                                            </Grid>
                                            <Grid item md={9} className="p-3"></Grid>
                                        </Grid>
                                        <TableContainer component={Paper}>
                                            <Table
                                                className={classes.table}
                                                aria-label="customized table"

                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                            Purpose
                                                        </StyledTableCell>
                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                            Name
                                                        </StyledTableCell>

                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                            Phone
                                                        </StyledTableCell>

                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                            Date
                                                        </StyledTableCell>


                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                           In Time
                                                        </StyledTableCell>

                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                           Out Time
                                                        </StyledTableCell>


                                                    
                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                            Action
                                                        </StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {(rowsPerPage > 0
                                                        ? filterData.slice(
                                                            page * rowsPerPage,
                                                            page * rowsPerPage +
                                                            rowsPerPage
                                                        )
                                                        : filterData
                                                    ).map((row) => (
                                                        <StyledTableRow>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.name}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.phone}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.source}
                                                            </StyledTableCell>

                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.Enquirydate}
                                                            </StyledTableCell>
                                                          
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.Nextdate}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                {row.status}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="left"
                                                            >
                                                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                                </div>
                                                            </StyledTableCell>

                                                        </StyledTableRow>
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
                                                onChangeRowsPerPage={
                                                    handleChangeRowsPerPage
                                                }
                                            />
                                        </TableContainer>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </div>





                </div>
                <Dialog
                    aria-labelledby="form-dialog-title"
                    open={EditDailogOpen}
                    maxWidth="md"
                    fullWidth="fullWidth"
                >
                    <DialogTitle>
                        Admission Enquiry
                        <span
                            className="float-right icon_color"
                            onClick={() => setEditDailogOpen(!EditDailogOpen)}
                        >
                            <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
                        </span>
                    </DialogTitle>
                    <DialogContent>
                        <div className='container'>
                            <Grid className="Component_main_grid">
                                <Grid item md={4} className="p-2">
                                    <label>Name *</label>
                                    <input type="text" class="form-control" placeholder="Enter Name" />

                                </Grid>

                                <Grid item md={4} className="p-2">
                                    <label>Phone *</label>
                                    <input type="number" class="form-control" placeholder="" />
                                </Grid>
                                <Grid item md={4} className="p-2">

                                    <label>Email *</label>
                                    <input type="email" class="form-control" placeholder="Enter Email" />
                                </Grid>
                            </Grid>
                            <div>
                                <Grid className="Component_main_grid">
                                    <Grid item md={4} className="p-2">
                                        <label>Address *</label>
                                        <textarea rows={2} type="text" class="form-control" placeholder="Enter Address" />

                                    </Grid>

                                    <Grid item md={4} className="p-2">
                                        <label>Description *</label>
                                        <textarea rows={2} type="text" class="form-control" placeholder="Enter Description" />
                                    </Grid>
                                    <Grid item md={4} className="p-2">

                                        <label>Note *</label>
                                        <textarea rows={2} type="text" class="form-control" placeholder="Enter Note" />
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid className="Component_main_grid">
                                    <Grid item md={4} className="p-2">
                                        <label>Date *</label>
                                        <input type="date" class="form-control" placeholder="Enter Name" />

                                    </Grid>

                                    <Grid item md={4} className="p-2">
                                        <label>Next Follow Up Date *</label>
                                        <input type="date" class="form-control" placeholder="Enter Phone no" />
                                    </Grid>
                                    <Grid item md={4} className="p-2">

                                        <label>Assigned *</label>
                                        <input type="email" class="form-control" placeholder="" />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className='mb-3'>
                                <Grid className="Component_main_grid">
                                    <Grid item md={3} className="p-2">
                                        <label>Reference *</label>
                                        <select class="form-control">
                                            <option>Select</option>
                                        </select>

                                    </Grid>

                                    <Grid item md={3} className="p-2">
                                        <label>Source *</label>
                                        <select class="form-control">
                                            <option>Teachet</option>
                                        </select>
                                    </Grid>
                                    <Grid item md={3} className="p-2">

                                        <label>Class *</label>
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>NUR</option>
                                            <option>LKG</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>UKG</option>
                                            <option>To be Deleted</option>
                                        </select>
                                    </Grid>
                                    <Grid item md={3} className="p-2">

                                        <label>Number Of Child *</label>
                                        <select class="form-control">
                                            <option>Teachet</option>
                                        </select>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                    </DialogContent>
                </Dialog>

            </div>


        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },

});

export default HOC(VisitorBook)
