import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';



const NavBar = () => {
    return ( 
        <AppBar position="static" sx={{
            backgroundColor: 'white',
            px: 2
        }}>
            {/* <Container maxWidth="xl"> */}
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'var(--logo)',
                            color: 'var(--primary)',
                            textDecoration: 'none',
                            fontSize:{
                                xs:22
                            }
                        }}>
                            TaskLister
                        </Typography>

                </Toolbar>    
            {/* </Container> */}
        </AppBar>
     );
}
 
export default NavBar;