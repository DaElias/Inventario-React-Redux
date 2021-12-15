import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
const useStyles = makeStyles({
    root: {
        width: "95%",
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [color, setColor] = React.useState({
        color_Active:"Blue",
    });
    return (
        <div style={{
            position: "fixed",
            top: "93%",
            width: "110%",
            left: 0,
            right: 0,
            zIndex: "99"
        }}>
            <Box boxShadow={8}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <Link to="/add">
                    <BottomNavigationAction label="Añadir Producto" icon={<AddIcon />} />
                    </Link>
                    <Link to="/edit">
                    <BottomNavigationAction label="Lista Productos" icon={<ListIcon />} />
                    </Link>
                    <Link to="/">
                    

                    <BottomNavigationAction label="Buscar Producto" icon={<HomeRoundedIcon 
                    style={{color:"#d0d3d4"}}
                    />} />
                    </Link>
                </BottomNavigation>
            </Box>

        </div>

    );
}
