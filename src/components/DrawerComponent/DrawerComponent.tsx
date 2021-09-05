import { useState } from 'react'
import { Drawer, IconButton, List, ListItem} from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'

import useStyles from './style'
export default function DrawerComponent() {

    const [openDrawer, setOpenDrawer] = useState(true)
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Drawer
                //changes positioning of drawer
                anchor="left"
                //closes the drawer when we click anywhere
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List >
                    {/* button gives it a hover style */}
                    {/* divider , just divides */}
                    <ListItem divider button>
                        <ListItemText className={classes.list}>
                            <Link href="/">
                                <a className={classes.listLinks}>
                                Home
                                </a>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText className={classes.list}>
                        <Link href="#lessons">
                                <a className={classes.listLinks}>
                                Lessons
                                </a>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText className={classes.list}>
                        <Link href="#about">
                                <a className={classes.listLinks}>
                                About
                                </a>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText className={classes.list}>
                        <Link href="#contact">
                                <a className={classes.listLinks}>
                                Contacts
                                </a>
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.burger}>
               <MenuIcon /> 
            </IconButton>
        </div>
    )
}
