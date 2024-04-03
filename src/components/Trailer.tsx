import { Stack, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface TrailerProps{
  image:string;
  trailerLength:string;
  title:string;
  releaseDate: string;
  videoLink:string;
}
const Trailer = () => {
  const [trailers,setTrailers] = useState<TrailerProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        //setLoading(true);
        const response = await axios.get(
          "https://moviesverse1.p.rapidapi.com/get-trending-trailers",
          {
            headers: {
              "X-RapidAPI-Key":
                "b40f7f0a85msh684994484a4b6a4p149f10jsn4940b2cc74c9",
              "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
            },
          }
        );
        setTrailers(response.data.trailers);
        //setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])
  console.log(trailers)
  return (
    <Stack>
      <Typography>
Enjoy the trailers of latest movies here. please make sure to watch the movies in theatre for best experience.
      </Typography>

    </Stack>
  )
}

export default Trailer