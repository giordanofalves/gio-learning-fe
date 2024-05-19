import React, { useState, useEffect } from "react";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import KubicleVideoPlayer from '../KubicleVideoPlayer'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography';


export default function Course() {
  const [course, setCourse] = useState([]);
  const { courseId } = useParams()
  const url = `http://localhost:3000/courses/${courseId}`;
  const videoStartTime = 0;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }, [url]);

  const handlePlayerPause = (player) => {
    console.log(`The learner has pressed pause at ${player.currentTime()}`);
  };

  return (
    <Box component="main" sx={{flexGrow: 1, height: '100vh', overflow: 'auto', padding: "5em" }}>
      <Toolbar />
      <Paper elevation={3} sx={{width: 800, padding: "2em"}}>
        <Typography gutterBottom variant="h5" component="div">
          Welcome to the <b>"{course.title}"</b> course.
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {course.description}
        </Typography>
        {course.video_url &&
          <KubicleVideoPlayer videoUrl={course.video_url} startTime={videoStartTime} onPlayerPause={handlePlayerPause} />
        }
      </Paper>
    </Box>
  );
}