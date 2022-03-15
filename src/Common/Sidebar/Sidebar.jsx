import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faLaptopHouse,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>

            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                        <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                        {/* <SubMenu title="Front Office" icon={<FontAwesomeIcon icon={faPeopleArrows} />}> */}
                        <MenuItem onClick={() => navigate("/dispatcher")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Dispatcher</MenuItem>
                        <MenuItem onClick={() => navigate("/dispute")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Dispute</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Dispute Manager</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Delivery
                            Executives
                        </MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Cuisines
                        </MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Notice Board
                        </MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>User</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Page</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Leads</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Email Templates
                        </MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Deliveries
                        </MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>LogOut
                        </MenuItem>

                        {/* </SubMenu> */}

                        {/* <SubMenu title="Bussiness Group" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>New Bussiness Group</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit Bussiness Group</MenuItem>
                          

                        </SubMenu>



                        <SubMenu title="Associates/Partners" icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
                            <MenuItem onClick={() => navigate("#")}>Add Associates</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit Associates</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Associates Details</MenuItem>
                           

                        </SubMenu>


                        <SubMenu title="Academics" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Board</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Class</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Sections</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Subject</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Chapter</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Topics</MenuItem>


                        </SubMenu>

                        <SubMenu title="Cources" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Add Cource</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit Cource</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Cource Details</MenuItem>


                        </SubMenu>

                        <SubMenu title="Control" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Role</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>User Managements</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Password Managements</MenuItem>


                        </SubMenu>
                        <SubMenu title="Subscription" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Master</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Plan</MenuItem>
                          
                        </SubMenu>

                        <SubMenu title="Students Report" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Registered Students</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Unregistered Student</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Suspended Student</MenuItem>
                           
                        </SubMenu>

                        <SubMenu title="Teachers Report" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Registered Teachers</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>unregistered Teachers</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Suspended Teachers</MenuItem>

                        </SubMenu>
                        <SubMenu title="Lesson Plan" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Manage Lesson Plan</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Manage Syllabus Status</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Lesson</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Topic</MenuItem>

                        </SubMenu>
                        <SubMenu title="Query" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Manual Query</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Current Query</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Completed Query</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Content Management</MenuItem>
                          

                        </SubMenu>
                        <SubMenu title="Accounts" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>Invoicing</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Collection & Validation</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Dealers Accounts</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Periodic/Automatic Payment <br /> Receipt Details</MenuItem>
                           
                        </SubMenu>

                        <SubMenu title="Dealer Management" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>View</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Delete</MenuItem>


                        </SubMenu>

                        <SubMenu title="Inventories" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>View</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Delete</MenuItem>
                           


                        </SubMenu>
                        <SubMenu title="Reports" icon={<FontAwesomeIcon icon={faFile} />}>
                            <MenuItem onClick={() => navigate("#")}>View</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Add</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Edit</MenuItem>
                            <MenuItem onClick={() => navigate("#")}>Delete</MenuItem>
                          


                        </SubMenu> */}





                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
