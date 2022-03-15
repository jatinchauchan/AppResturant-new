import React from 'react'
import HOC from "../../Common/HOC.jsx"
import { Card } from "@material-ui/core";
import "./Dashboard.css";
import {useNavigate} from "react-router-dom"

function Dashboard(props) {
  const navigate = useNavigate();
    const home = [
        // { show: "Orders", link: "orders", data: "20" },
    
        // { show: "Customers ", link: "customers", data: "160" },
      
        { show: "Master Dashboard", link:"/master-dashboard", data: "250" },
        { show: "Restaurant Management", link: "/restaurant-management" },
        { show: "User Management", link: "#" },
        { show: "Delivery Executive Management", link: "/deliver-executive-management" },
        { show: "Category Management ", link: "/category-management" },
        { show: "Cuisine Management", link: "#" },
        { show: "Menu Management", link: "#" },
        { show: "Revenue Management", link: "#" },
        { show: "Analytical Reports", link: "#" },
        { show: "ETA Report", link: "#" },
        { show: "Multiple Order", link: "#" },
        { show: "ETA Report", link: "#" },
        { show: "Multiple Order", link: "#" }, 
        { show: "Social Sharing", link: "#" },
        { show: "Delivery Radius", link: "#" }, 
        { show: "E-Wallet", link: "#" },
       
      ];

    return (
        <>
            <div className="content_padding Page_width">
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                     <div className="main_div ">
          <div className="container">
            <div className="row">
              {home.map((item, index) => (
                <div className="col-md-4  col-lg-4">
                  <Card
                    className="main_card Card_shadow "
                     onClick={() => navigate(`${item.link}`)}
                  >
                    <div className="main_content d-flex justify-content-between">
                      <p>
                        <span className="">
                          <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                        </span>
                        {item.show}
                      </p>
                      <span className="">{item.data}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
                    </div>
                    <hr />

                
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)
