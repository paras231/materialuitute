
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from './App';
import { ThemeProvider } from '@mui/material/styles';






ReactDom.render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>




  </>
  ,
  document.getElementById("root"));
