import { Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";


const Tour = () => {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img
                    src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    height={325}
                />
                <ImageCollage/>
            </Box>
        </Container>
    );
};

export default Tour;
