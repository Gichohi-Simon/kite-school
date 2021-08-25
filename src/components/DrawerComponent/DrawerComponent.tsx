import { useState } from 'react'
import { Drawer, List, ListItem} from '@material-ui/core'
import { ListItemText } from '@material-ui/core'

export default function DrawerComponent() {

    const [openDrawer, setOpenDrawer] = useState(true)

    return (
        <div>
            <Drawer
                //changes positioning of drawer
                anchor="right"
                //closes the drawer when we click anywhere
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List>
                    {/* button gives it a hover style */}
                    {/* divider , just divides */}
                    <ListItem divider button>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText>
                            Lessons
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText>
                            Courses
                        </ListItemText>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemText>
                            Contacts Us
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
