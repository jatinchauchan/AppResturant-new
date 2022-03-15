import * as React from 'react';
import HOC from '../../Common/HOC'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useNavigate } from "react-router-dom"

import Paper from "@material-ui/core/Paper";
import { Card, Grid } from "@material-ui/core";
//pagination
import TablePagination from "@material-ui/core/TablePagination";
//tabs 

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserManagement from '../UserManagement/UserManagement';
import CategoryManagement from '../CategoryManagement/CategoryManagement';
import MenuManagement from '../MenuManagement/MenuManagement';
import DeliveryExecutiveManagement from '../DeliveryExecutiveManagement/DeliveryExecutiveManagement';


const RestaurantManagement = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <>
            <div className="Page_width content_padding" >
                <Grid className="Component_main_grid p-2 ">
                    <Grid item md={4}>
                        <h3 className='p-2'>Restaurant Details</h3>
                    </Grid>
                  
                </Grid>

                <Grid className="Component_main_grid p-2 ">
                    <Grid item md={6}>
                        <div>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ width: "100%", height: "400px" }} class="d-block w-100" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ width: "100%", height: "400px" }} class="d-block w-100" src="https://images.creativemarket.com/0.1.0/ps/7297695/1820/1213/m1/fpnw/wm1/f0jwuwgisltcn5urrbfama0svoxrxlfztotbwmeon7lr4ysa4f44djvp6nmkjegd-.jpg?1573744674&s=3c46b7bd229883c7283c2b37529a9d30" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ width: "100%", height: "400px" }} class="d-block w-100" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/07/989429-foodie.jpg" alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <div className='p-3'>
                            <h3>The best food in town at one of the best locations!!!</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.
                                Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
                        </div>
                    </Grid>
                </Grid>


                <div>

                </div>


              

                <Grid className="Component_main_grid p-2" >
                <Grid item md={12}>
                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'block' }}
                        >
                            <Tabs
                                orientation="horizontal"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="horizontal tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab label="User Management" {...a11yProps(0)} />
                                <Tab label="Menu Management" {...a11yProps(1)} />
                                <Tab label="Category Management(cuisine)" {...a11yProps(2)} />
                                <Tab label="Cuisine Management" {...a11yProps(3)} />
                                <Tab label="Revenue Management" {...a11yProps(4)} />
                                <Tab label="Executive Management" {...a11yProps(5)} />
                                {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
                            </Tabs>
                            <TabPanel value={value} index={0}>
                            <UserManagement />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            <MenuManagement />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <CategoryManagement />
                             </TabPanel>
                            <TabPanel value={value} index={3}>
                            Cuisine Management
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                            Revenue Management
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                            <DeliveryExecutiveManagement />
                            </TabPanel>
                           
                        </Box>
                    </Grid>
                    </Grid>

                    <div>
                    <Grid className="Component_main_grid p-2" >
                        <Grid item md={12}>
                            <h3 className='text-center' style={{ color: "black", fontweight: "700px" }}>MAIN MENU</h3>

                        </Grid>
                    </Grid>
                    <Grid className="Component_main_grid p-2 " >
                        <Grid item md={4}>
                            <div class="card d-flex" style={{ width: "18rem", justifyContent: "space-around" }}>
                                <img class="card-img-top" src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/in-this-photo-illustration-an-impossible-whopper-sits-on-a-news-photo-1574457000.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={4}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/c/829/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </div>

                <Grid className="Component_main_grid p-2" >
                    <Grid item md={3}>
                        <div>

                            <div class="card" style={{ width: "18rem" }}>
                                <span className='text-center'><i style={{ fontSize: "40px" }} class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Contact Address</h5>
                                    <p class="card-text text-center">301 The Greenhouse, Custard,
                                        Factory, London, E2 8DY.</p>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>

                    </Grid>
                    <Grid item md={3}>
                        <div>

                            <div class="card" style={{ width: "18rem" }}>
                                <span className='text-center'><i style={{ fontSize: "40px" }} class="fa fa-mobile" aria-hidden="true"></i></span>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Call Us Today!</h5>
                                    <p class="card-text text-center">(M) +44 (0) 123 XXXXXX</p>
                                    <p class="card-text text-center">(M) +44 (0) 123 XXXXXX</p>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>


                    </Grid>
                    <Grid item md={3}>
                        <div>

                            <div class="card" style={{ width: "18rem" }}>
                                <span className='text-center'><i style={{ fontSize: "40px" }} class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Email</h5>
                                    <p class="card-text text-center">no-reply@domain.com</p>
                                    <p class="card-text text-center">no-reply@domain.com</p>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>


                    </Grid>
                    <Grid item md={3}>
                        <div>

                            <div class="card" style={{ width: "18rem" }}>
                                <span className='text-center'><i style={{ fontSize: "40px" }} class="fa fa-clock-o" aria-hidden="true"></i></span>
                                <div class="card-body">
                                    <h5 class="card-title text-center">Opening Hour</h5>
                                    <p class="text-center">Mon to Sat - 9 AM to 11 PM</p>
                                    <p class="card-text text-center">Sunday 8 AM to 12 PM</p>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>


                    </Grid>
                </Grid>

            </div>
        </>
    )
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }
      
    
    }


export default HOC(RestaurantManagement)