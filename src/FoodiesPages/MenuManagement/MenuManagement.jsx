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

const MenuManagement = () => {

    const [EditDailogOpen, setEditDailogOpen] = useState(false);
    const [itemname, setitemname] = useState("")
    const [reaturentname, setreaturentname] = useState("")
    const [originalprice, setoriginalprice] = useState("")
    const [discountprice, setdiscountprice] = useState("")
    const [itemimage, setitemimage] = useState(null)
    const [avalibility, setavalibility] = useState("")
    const [EditId, setEditId] = useState("")

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const EditMenudata = (row, index) => {
        console.log("row", row)
        setEditDailogOpen(!EditDailogOpen)
        setitemname(row.itemname)
        setreaturentname(row.reaturentname)
        setoriginalprice(row.originalprice)
        setdiscountprice(row.discountprice)
        setitemimage(row.itemimage)
        setavalibility(row.avalibility)
        setEditId(index)
    }

    const updatemenudata = (index) => {
        setEditDailogOpen(!EditDailogOpen)

        adddata[EditId].itemname = itemname;
        setadddata([...adddata])
        adddata[EditId].reaturentname = reaturentname;
        setadddata([...adddata])
        adddata[EditId].originalprice = originalprice;
        setadddata([...adddata])
        adddata[EditId].discountprice = discountprice;
        setadddata([...adddata])
        adddata[EditId].itemimage = itemimage;
        setadddata([...adddata])
        adddata[EditId].avalibility = avalibility;
        setadddata([...adddata])

    }

    const deleteMenudata = (index) => {
        adddata.splice(index,1)
        setadddata([...adddata])
    }

    const [adddata, setadddata] = useState([
        {

            itemcode: "6545",
            itemname: "Burger",
            reaturentname: "KFC",
            originalprice: "₹-99/-",
            discountprice: "5%",
            itemimage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            avalibility: "Available",
            show: false,
        },
        {

            itemcode: "6545",
            itemname: "Burger",
            reaturentname: "KFC",
            originalprice: "₹-99/-",
            discountprice: "5%",
            itemimage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            avalibility: "Available",
            show: false,
        },
        {

            itemcode: "6545",
            itemname: "Burger",
            reaturentname: "KFC",
            originalprice: "₹-99/-",
            discountprice: "5%",
            itemimage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            avalibility: "Available",
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
        return event.itemname.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
    });

    const classes = "";


    return (
        <>
            <div className="Page_width" >
                <h3 className='p-2'>Menu Management
                </h3>
                <div>

                    <Card classname="main_card p-3">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item Code</TableCell>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Restaurant Name</TableCell>

                                        <TableCell>Original Price</TableCell>
                                        <TableCell>Discount Price</TableCell>
                                        <TableCell>Item Image</TableCell>
                                        <TableCell>Stock Availability</TableCell>


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
                                                {row.itemcode}
                                            </TableCell>

                                            <TableCell>{row.itemname}</TableCell>
                                            <TableCell>{row.reaturentname}</TableCell>
                                            <TableCell>{row.originalprice}</TableCell>
                                            <TableCell>{row.discountprice}</TableCell>
                                            <TableCell><img style={{ height: "80px", width: "90px" }} src={row.itemimage} /></TableCell>

                                            <TableCell>
                                                <span>{row.avalibility}</span>
                                                {/* {row.show === false ? (
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
                                                )} */}
                                            </TableCell>

                                            <TableCell>
                                                <div className="d-flex">
                                                    <button type="button" class="btn btn-info mr-4" onClick={() => EditMenudata(row, index)}>
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-info" onClick={() => deleteMenudata(row, index)}>
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
                                <div className="text_filed_heading">Item Name</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"

                                        className="form-control "
                                        placeholder="Item Name"
                                        autoComplete="off"
                                        value={itemname}
                                        onChange={(e) => setitemname(e.target.value)}
                                    />
                                </div>

                                <div className="text_filed_heading">Restaurant Name</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Restaurant Name"
                                        autoComplete="off"
                                        value={reaturentname}
                                        onChange={(e) => setreaturentname(e.target.value)}
                                    />
                                </div>
                                <div className="text_filed_heading">Original Price</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Original Price"
                                        autoComplete="off"
                                        value={originalprice}
                                        onChange={(e) => setoriginalprice(e.target.value)}
                                    />
                                </div>
                                <div className="text_filed_heading">Discount Price</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Discount Price"
                                        autoComplete="off"
                                        value={discountprice}
                                        onChange={(e) => setdiscountprice(e.target.value)}
                                    />
                                </div>
                                <div className="text_filed_heading">Item Image</div>
                                <div className=" mt-1">
                                    <input
                                        type="file"
                                        className="form-control "
                                        placeholder="Restaurant Name"
                                        autoComplete="off"

                                        onChange={(e) => setitemimage(e.target.files[0])}
                                    />
                                </div>
                                <div className="text_filed_heading">Stock Availability</div>
                                <div className=" mt-1">
                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Stock Availability"
                                        autoComplete="off"
                                        value={avalibility}
                                        onChange={(e) => setavalibility(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="mt-2 pb-3 ">
                                <Button
                                    variant="contained"
                                    className="button_formatting mt-3"
                                    onClick={() => updatemenudata()}

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

export default MenuManagement