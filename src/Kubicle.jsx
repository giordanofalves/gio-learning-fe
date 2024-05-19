import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";

import KubicleAppBar from "./KubicleAppBar";


export default function Kubicle() {
  return (
    <>
      <CssBaseline />
      <KubicleAppBar />
      <Outlet />
    </>
  );
}