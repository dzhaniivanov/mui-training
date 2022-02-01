import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg" className='img' alt="" />
                <Box paddingX={1}>
                    <Typography component="h4" variant="subtitle1">
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
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
                            value={4.5}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant="body3" component="p" marginLeft={1.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            $147
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard;
