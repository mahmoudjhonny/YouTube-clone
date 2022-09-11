import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
