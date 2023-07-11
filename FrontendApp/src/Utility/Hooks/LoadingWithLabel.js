import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          color: "#000",
          fontWeight: 600,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#fff"
        >{`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic(props) {
  const [progress, setProgress] = useState(props.isLoading ? 0 : 100);

  useEffect(() => {
    let timer;
    let isMounted = true; // Flag to track mounted state
  
    if (props.isLoading) {
      timer = setInterval(() => {
        if (isMounted) { // Check if component is still mounted
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }
      }, 800);
    }
  
    return () => {
      isMounted = false; // Update mounted state to false when unmounting
      clearInterval(timer);
    };
  }, [props.isLoading]);
  
  return props.isLoading ? <CircularProgressWithLabel value={progress} /> : null;
}