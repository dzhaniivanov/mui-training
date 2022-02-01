import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});


const TourCard = ({ tour }) => {
    return (
        <Grid item xs={12} sm={8} md={6} lg={3} xl={0}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={tour.image} className='img' alt="" />
                    <Box paddingX={1}>
                        <Typography component="h4" variant="subtitle1">
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            marginTop={3}
                        >
                            <Rating
                                name="read-only"
                                value={tour.rating}
                                precision={0.5}
                                readOnly
                                size="small"
                            />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                4.5
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default TourCard;
