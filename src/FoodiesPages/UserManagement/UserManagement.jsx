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
//dialog box
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";





const UserManagement = () => {
    const [Editcategries, setEditcategries] = useState(false)
    const [EditDailogOpen, setEditDailogOpen] = useState(false);
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [Editid, setEditid] = useState("")

    ///edit user data
     const edituser = (row,index) => {
        console.log("edituserdata", row)
        setEditDailogOpen(!EditDailogOpen);
        setname(row.name)
        setaddress(row.addres)
        setEditid(index)
       
        }

    const updatedata = ()=> {
        console.log("id", Editid)
        setEditDailogOpen(false)
        adddata[Editid].name = name;
        setadddata([...adddata]);
        adddata[Editid].addres = address;
        setadddata([...adddata]);
    }

    const userdelete = (index)=>{
        // adddata[index] =
        adddata.splice(index,1)
        setadddata([...adddata]);
        

    }

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    const [adddata, setadddata] = useState([
        {
            
            name: "Leo's Pizzeria",
            email: "Delhi",
            addres: "2973 Dale Avenue Seattle, WA 98161",
            Created: "Facebook",
            show: false,
        },
        {
            name: "Andhra Bhavan",
            addres: "2973 Dale Avenue Seattle, WA 98161",
            email: "Delhi",
            Created: "Google",
            show: false,
        },
        {

            name: "Town Hall",
            addres: "2973 Dale Avenue Seattle, WA 98161",
            email: "Delhi",
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


    return (
        <>
            <div className="Page_width" >
                <h3 className='p-2'>User Management
                </h3>
                <div>

                    <Card classname="main_card p-3">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Address</TableCell>

                                        <TableCell>Method of sign in</TableCell>
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
                                                {index + 1}
                                            </TableCell>

                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.addres}</TableCell>
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
                                                    <button type="button" class="btn btn-info mr-4" onClick={() => edituser(row,index)}>
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-info" onClick={()=> userdelete(index)}>
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
                                <div className="text_filed_heading">Name</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"

                                        className="form-control "
                                        placeholder="Name"
                                        autoComplete="off"
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                </div>

                                <div className="text_filed_heading">Address</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Address"
                                        autoComplete="off"
                                        value={address}
                                        onChange={(e) => setaddress(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="mt-2 pb-3 ">
                                <Button
                                    variant="contained"
                                    className="button_formatting mt-3"
                                    onClick={()=> updatedata(Editid)}

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

export default UserManagement