import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import KubicleCourseCard from '../KubicleCourseCard';


export default function Library() {
  const url = "http://localhost:3000/courses";
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <Box component="main" sx={{flexGrow: 1, overflow: 'auto',}}>
      <Toolbar />
      <Grid container spacing={1} sx={{flexGrow: 1, padding: "5em"}}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="div">
            Welcome to the <strong>Kubicle Library</strong>.
          </Typography>
        </Grid>
        {courses.map((course, index) => {
          return(
            <Grid item key={index} xs={2}>
              <KubicleCourseCard courseId={course.id} title={course.title} description={course.description} thumbnailUrl={course.thumbnail_url} />
            </Grid>
            );
          })}
        </Grid>
      </Box>
  );
}
