import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://moviesverse1.p.rapidapi.com/top-box-office",
          {
            headers: {
              "X-RapidAPI-Key":
                "b40f7f0a85msh684994484a4b6a4p149f10jsn4940b2cc74c9",
              "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
            },
          }
        );
        setMovieData(response.data.movies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Stack height={"100%"} width={"100%"}>
      <Box
        width={"40rem"}
        height={"4rem"}
        display={"flex"}
        justifyContent={"center"}
        margin={"0 auto"}
      >
        <Typography fontWeight={"600"} fontSize={"3rem"}>
          Movie Verse
        </Typography>
      </Box>
      <Typography
        fontSize={"1.2rem"}
        fontWeight={"bold"}
        sx={{ margin: "0 auto", mt: "0.6rem" }}
      >
        Here is a list of top rated movies
      </Typography>
      <Grid container spacing={2}>
        {loading ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            sx={{ mt: "5rem" }}
          >
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </Box>
        ) : (
          movieData.map((movie: any, idx) => {
            return (
              <Grid item key={idx} sx={{ margin: "0px auto" }}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"whitesmoke"}
                  padding={".5rem"}
                  boxShadow={2}
                >
                  <img
                    style={{ height: 300, width: 400, borderRadius: "10px" }}
                    src={movie?.posterImage}
                    alt="poster"
                  />
                  <Typography>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>Title:</span>{" "}
                    {movie.title}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>IMDB Rating :</span>{" "}
                    {movie.imdbRating}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>TotalGross :</span>{" "}
                    {movie.totalGross}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Weekend Gross :</span>{" "}
                    {movie.weekendGross}
                  </Typography>
                  <Typography>
                    <span style={{ fontWeight: "bold" }}>Weeks Released :</span>{" "}
                    {movie.weeksReleased}
                  </Typography>
                </Box>
              </Grid>
            );
          })
        )}
      </Grid>
    </Stack>
  );
};

export default Home;
