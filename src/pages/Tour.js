import { Box, Container, Typography, Paper, BottomNavigation, } from "@mui/material";
import CustomizedAccordions from "../components/Accordian";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";


const Tour = () => {
    return (
        <Container xs={12} sm={8} md={6} lg={3} xl={0}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img
                    src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    height={325}
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi esse officiis non architecto qui iusto est, ipsam totam odio numquam cum eum perferendis, labore, eius beatae inventore quas minima mollitia. Dolorem nihil dolorum inventore vitae optio dolor itaque dignissimos delectus?
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Question
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} xs={12} sm={8} md={6} lg={3} xl={0}>
                <BottomNavigation
                >
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
};

export default Tour;
