import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './style';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });


    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6' className={classes.logoLg}>Logo</Typography>
                    <Typography variant='h6' className={classes.logoSm}>LOGO</Typography>
                    <div className={classes.search}> <Search />
                        <InputBase placeholder='Search' />
                        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchbutton} onClick={() => setOpen(true)} />
                        <Badge color="secondary" badgeContent={4} className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge color="secondary" badgeContent={2} className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1637142760507-b01c85bdb4c4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;