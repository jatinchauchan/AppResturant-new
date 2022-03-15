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


function Complain(props) {
    const [EditDailogOpen, setEditDailogOpen] = useState("")
    const navigate = useNavigate();
    const classes = useStyles();

    const filterData = [
        // {
        //     name: "arun singh",
        //     phone: "12345678",
        //     source: "21-12-2021	",
        //     Enquirydate: "21-12-2021	",
        //     Lastdate: "Incoming",
         
        // },
        // {
        //     name: "Tarun singh",
        //     phone: "12345678",
        //     source: "21-12-2021	",
        //     Enquirydate: "21-12-2021	",
        //     Lastdate: "Outgoing",
         
        // },
        // {
        //     name: "arun singh",
        //     phone: "12345678",
        //     source: "21-12-2021	",
        //     Enquirydate: "21-12-2021	",
        //     Lastdate: "Incoming",
         
        // },
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
                                <h3> Add Complain</h3>
                                <Grid className="Component_main_grid">
                                    <Grid item md={12} >
                                        <div class="form-group pr-1">
                                            <label for="exampleInputEmail1">Complain Type *</label>

                                            <select class="form-control">
                                            <option>Select</option>
                                    <option>xyz</option>
                                </select>


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Source *</label>
                                            <select class="form-control">
                                            <option>Select</option>
                                    <option>Teachet</option>
                                </select>


                                        </div>
                                    </Grid>
                                  
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Complain By *</label>
                                            <input  type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Phone</label>
                                            <input type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Date</label>
                                            <input type="date" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                        <div class="form-group">
                                            <label >Description</label>
                                            <textarea row={2} type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                    <div class="form-group">
                                            <label >Action Taken</label>
                                            <input  type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                    <div class="form-group">
                                            <label >Assigned</label>
                                            <input  type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                    <div class="form-group">
                                            <label >Note</label>
                                            <input  type="text" class="form-control" placeholder="" />


                                        </div>
                                    </Grid>
                                    <Grid item md={12}>
                                    <div class="form-group">
                                            <label >Attach Document</label>
                                            <input  type="file" class="form-control" placeholder="" />


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
                                <h4>Complain List</h4>
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
                                                           Complain #
                                                        </StyledTableCell>
                                                        <StyledTableCell
                                                            align="left"
                                                            className="table_header"
                                                        >
                                                          Complain Type
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
                                                            Action
                                                        </StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                {filterData.length > 0 ? (  <TableBody>
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
                                                                {row.Lastdate}
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
                                                </TableBody>) : (<span className="text-danger mt-3 pt-3">No data available in table</span>)}
                                              
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

export default HOC(Complain)
