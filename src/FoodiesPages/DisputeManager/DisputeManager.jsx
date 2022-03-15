import React from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';

function DisputeManager(props) {


    return (
        <>
            <div className="Page_width content_padding" >
             <h1>Dispute Manager</h1>

            </div>
        </>
    )
}

export default HOC(DisputeManager)
