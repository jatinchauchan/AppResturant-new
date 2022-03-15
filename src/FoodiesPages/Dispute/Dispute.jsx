import React from 'react';
import HOC from "../../Common/HOC.jsx"

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { useLocation } from 'react-router';

import { useNavigate } from 'react-router-dom';

function Dispatcher(props) {


    return (
        <>
            <div className="Page_width content_padding" >
             <h1>Dispute</h1>

            </div>
        </>
    )
}

export default HOC(Dispatcher)
