import { Stack } from '@mui/material'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack bgcolor={"blue"} width={"100%"} height={"4rem"}  justifyContent="center">
        <Typography width="100%" fontWeight={"500"} color="white" marginLeft={"1rem"} onClick={()=>navigate("/trailers")} sx={{cursor:"pointer"}}>Trailers</Typography>
    </Stack>
  )
}

export default Navbar;