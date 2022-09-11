import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos, ChannelCard } from "./index";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setchannelDetails] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(
      `channels?part=snippet&id=${id.substring(0, id.length - 1)}`
    ).then((data) => {
      setchannelDetails(data?.items[0]);
    });

    fetchFromApi(
      `search?part=snippet&channelId=${id.substring(
        0,
        id.length - 1
      )}&order=date`
    ).then((data) => {
      setvideos(data?.items);
    });
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(6,5,80,1) 20%, rgba(9,9,121,1) 44%, rgba(6,81,168,1) 69%, rgba(0,212,255,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetails={channelDetails} />
      </Box>
      <Box display="flex" p="2" sx={{ marginTop: "-80px" }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
