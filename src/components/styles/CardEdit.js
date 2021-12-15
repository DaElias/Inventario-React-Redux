import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
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

export default function OutlinedCard(
    {
        name, setname, descript
        , setdescript, id, amount
        , setamount, price, setprice
        , handleEdit, btnWindows
    }
) {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;


    const handleInput = (event) => {
        const data = event.target.value;
        const type = event.target.name;
        switch (type) {
            case "name":
                setname(data);
                break;

            case "price":
                setprice(data);
                break;

            case "descript":
                setdescript(data);
                break;
            case 'amount':
                setamount(Math.abs(data));
                break;
        }
    }
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    <TextField
                        id="standard-search"
                        value={name}
                        className={classes.textField}
                        margin="normal"
                        name="name"
                        label="Nombre"
                        onChange={handleInput}
                    />
                    {/* 
          be{bull}nev{bull}o{bull}lent
          */}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <TextField
                    disabled
                        id="standard-search"
                        value={"none"}
                        className={classes.textField}
                        margin="normal"
                        name="amount"
                        label="Tipo de producto"
                        
                    />
                </Typography>
                <Typography variant="body2" component="p">
                    <TextField
                        id="standard-search"
                        value={amount}
                        className={classes.textField}
                        margin="normal"
                        name="amount"
                        label="Cantidad"
                        onChange={handleInput}
                    />
                 <TextField
                        id="standard-search"
                        value={price}
                        className={classes.textField}
                        margin="normal"
                        name="price"
                        label="Precio"
                        onChange={handleInput}
                    />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Descripción</Button>
                <Button onClick={()=>{
                    btnWindows();
                }}>Cancelar</Button>
                <Button onClick={()=>{
                    handleEdit(id);
                }}>Guardar</Button>
            </CardActions>
        </Card>
    );
}