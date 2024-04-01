import { Stack } from '@mui/material'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <Stack bgcolor={"blue"} width={"100%"} height={"4rem"}  justifyContent="center" direction={"row"} alignItems={"center"}>
    <Typography width={"10rem"} fontWeight={"600"} color={"red"} boxShadow={1} variant='h5'>Movie Verse</Typography>
        <Typography width="100%" fontWeight={"500"} color="white" marginLeft={"1rem"} onClick={()=>navigate("/trailers")} sx={{cursor:"pointer"}}>Trailers</Typography>
    </Stack>
    </>
  )
}

export default Navbar;