import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>{video.id.videoId && <VideoCard video={video} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
