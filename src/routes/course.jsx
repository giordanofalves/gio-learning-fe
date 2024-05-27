import React, { useState, useEffect, useRef } from "react";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import KubicleVideoPlayer from '../KubicleVideoPlayer'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography';


export default function Course() {
  const url                                 = "http://localhost:3000/";
  const { courseId }                        = useParams()
  const [course, setCourse]                 = useState([]);
  const [videoStartTime, setVideoStartTime] = useState([]);
  const courseLogRef                        = useRef(null);

  const fetchCourse = ()=> {
    fetch(url + `courses/${courseId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCourse(data);
    });
  };


  const createCourseLog = (kind)=> {
    let data = { course_log: { kind: kind } }

    fetch(url + `courses/${courseId}/course_logs`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      courseLogRef.current = data.course_log;
      setVideoStartTime(data.course_log.video.time_elapsed_in_seconds);
      console.log(videoStartTime)
    });
  };

  const updateCourseLog = (state, time_elapsed_in_seconds)=> {
    let data = {
      course_log: {
        state: state,
        video_attributes: { time_elapsed_in_seconds: time_elapsed_in_seconds }
      }
    }

    fetch(url + `courses/${courseId}/course_logs/${courseLogRef.current.id}`, {
      method: 'put',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      courseLogRef.current = data.course_log;
    });
  };

  const handlePlayerPlay = (player) => {
    updateCourseLog('in_progress', player.currentTime());
    console.log(`The learner has pressed play at ${player.currentTime()}`);
  };

  const handlePlayerPause = (player) => {
    updateCourseLog('in_progress', player.currentTime());
    console.log(`The learner has pressed pause at ${player.currentTime()}`);
  };

  const handlePlayerEnded = (player) => {
    updateCourseLog('finished', 0);
    console.log(`The learner has ended ${player.currentTime()}`);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  useEffect(() => {
    createCourseLog('video');
  }, []);

  useEffect(() => {
    console.log(`Video current time: ${videoStartTime}`)
  },[videoStartTime]);


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
        {course.video_url && (
          <KubicleVideoPlayer
            videoUrl={course.video_url}
            startTime={videoStartTime}
            onPlayerPause={handlePlayerPause}
            onPlayerPlay={handlePlayerPlay}
            onPlayerEnded={handlePlayerEnded}
          />
        )}
      </Paper>
    </Box>
  );
}
