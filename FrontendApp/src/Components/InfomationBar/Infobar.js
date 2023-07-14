import React from "react";
import InfobarWrapper from "./Infobar.styles";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Infobar () {

   return(
    <InfobarWrapper>
        <div className="unvisiteNode"/>
        <div className="unvisiteNode_Text" > Unvisited Node</div>
        <div className="visitedNode1"/>
        <div className="visitedNode2"/>
        <div className="visitedNode_Text" > Visited Node</div>
        <div className="pathNode"/>
        <div className="pathNode_Text" > Shortest-Path Node</div>
        <div className="wallNode"/>
        <div className="wallNode_Text" > Wall Node</div>

        <div className="startNode">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" enableBackground="new 0 0 21.875 21.875" fill="#420863"><path d="M22 12l-20 12 7.289-12-7.289-12z"/></svg>
        </div>
        <div className="startNode_Text" > Start Node</div>

        <div className="endNode">
            <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="21.875px" height="21.875px" viewBox="0 0 21.875 21.875" enableBackground="new 0 0 21.875 21.875" >
            <circle fill="none" stroke="#420863" strokeWidth="3" strokeMiterlimit="10" cx="10.938" cy="10.938" r="8.812"/>
            <circle fill="#420863" cx="10.938" cy="10.938" r="3.938"/>
            </svg>
        </div>
        <div className="endNode_Text" > End Node</div>

        <div className="weightNode">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="21.875px" height="21.875px" viewBox="0 0 21.875 21.875" enableBackground="new 0 0 21.875 21.875" >
            <g id="Layer_4" display="none">
                
                    <image display="inline" overflow="visible" width="18" height="24"  transform="matrix(0.8497 0 0 0.8497 3.4233 1.0347)">
                </image>
            </g>
            <g id="Layer_3">
                <g>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <line fill="#420863" x1="14.587" y1="21.873" x2="14.587" y2="21.873"/>
                    <path fill="#420863" d="M6.531,21.38c-1.805-1.345-2.973-3.494-2.973-5.917c0-2.421,1.167-4.569,2.969-5.915"/>
                    <line fill="#420863" x1="7.287" y1="21.875" x2="7.282" y2="21.872"/>
                    <polyline fill="#420863" points="15.345,21.376 6.527,21.376 6.527,9.549 15.345,9.549 15.345,21.376 		"/>
                    <circle fill="none" stroke="#420863" strokeWidth="2" strokeMiterlimit="10" cx="11.012" cy="6.914" r="5.512"/>
                    <path fill="#420863" d="M15.345,21.378c1.806-1.345,2.974-3.494,2.973-5.917c0-2.421-1.167-4.569-2.968-5.915"/>
                </g>
            </g>
            <g id="Layer_2" display="none">
                <g display="inline">
                    <rect x="3.778" y="11.427" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 28.6357 16.3531)" fill="#420863" width="14.306" height="5.361"/>
                    <rect x="3.792" y="5.088" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 13.1915 20.9994)" fill="#420863" width="14.305" height="5.361"/>
                </g>
            </g>
            </svg>
        </div>
        <div className="weightNode_Text" > Weight Node</div>

        <div className="item" style={{ marginTop: "12px",marginLeft: "200px" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Drag to add walls</Typography>
            <Switch color="primary"  id="weightToggle" />
            <Typography>Drag to add weights</Typography>
          </Stack>
        </div>
    </InfobarWrapper>
   );
};