import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';


export default function Carta ({animale}) {
    // prepariamo una variabile liked 
    // che memorizzerà lo stato del cuore:
    // il valore iniziale di liked è false 
    let [liked, setLiked] = React.useState(false) 
        
        function gestisciClick() {
            setLiked(!liked)
        }

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={ "/images/" + animale.img }
        alt="green iguana"
        onClick={ gestisciClick }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { animale.nome }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { animale.descrizione }
        </Typography>
      </CardContent>
      <CardActions onClick={ gestisciClick }>
          { liked ? <FavoriteIcon sx={{ color: red[500] }}/> : <FavoriteBorderIcon />}
        
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}