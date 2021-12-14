import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ name, descript, id, amount,price,btnWindows,DeleteProduct }) {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                    {/* 
          be{bull}nev{bull}o{bull}lent
          */}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Tipo de producto: <b>none</b>
                </Typography>
                <Typography variant="body2" component="p">
                    <b>Cantidad: </b>{amount}
                    <br/>
                    <b>Precio: </b>${price}

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Descripción</Button>
                <Button onClick={()=>{
                    btnWindows();
                }}>Editar</Button>
                <Button onClick={()=>{
                    DeleteProduct(id);
                }}>Eliminar</Button>
            </CardActions>
        </Card>
    );
}