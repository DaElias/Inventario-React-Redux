import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
    root: {
        width: "95%",
    },
});

export default function SimpleBottomNavigation({WindowsAdd,setWindowsAdd,WindowsShow,setWindowsShow}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div style={{
            position: "fixed",
            top: "93%",
            width: "100%",
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
                    <BottomNavigationAction label="Añadir Producto" icon={<AddIcon />} onClick={()=>{
                         setWindowsShow(true);
                         setWindowsAdd(false);
                    }} />
                    <BottomNavigationAction label="Lista Productos" icon={<ListIcon />} onClick={()=>{
                         
                            setWindowsAdd(true);
                            setWindowsShow(false);
                    }} />
                    <BottomNavigationAction label="Buscar Producto" icon={<SearchIcon />} />
                </BottomNavigation>
            </Box>

        </div>

    );
}
