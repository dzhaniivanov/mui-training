import { Button, Card, CardActions, CardContent, CardMedia, Typography, Fab } from '@mui/material';
import React from 'react';

const TestCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Fab size="small" variant="extended" color="primary">Share</Fab>
                <Fab size="small" variant="extended" color="secondary">Learn More</Fab>
            </CardActions>
        </Card>
    )
};

export default TestCard;
