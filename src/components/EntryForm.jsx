import { Box, Grid, Typography , TextField, Button } from "@mui/material";
// import { DeleteIcon } from '@mui/icons-material';

const EntryForm = () => {
    return ( <div className="form">
        <Box sx={{
            my: 2,
            borderRadius: "var(--radius)",
            background: "white",
            p:2,
            boxShadow: "var(--shadow)"
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography className="input" sx={{fontFamily: "var(--logo)",
                                                color:"var(--primary)",
                                                fontSize:{
                                                    xs:16, md:22
                                                }
                    }}>
                        Enter A New Task!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField variaint="outlined"
                    
                    fullWidth={true}
                    InputProps={
                       {
                        color:'secondary',
    
                       } 
                    }
                    InputLabelProps={
                        {
                            sx:{
                                color:'var(--primary)'
                            }
                        }
                    }
                    SelectProps={{
                        disabled: true
                    }}
                    label="What do you need to do?"/>
                </Grid>
                <Grid item xs={12} md={12}>
                <Button
                
                        className="addButton"
                        sx={{
                            backgroundColor:'var(--primary)',
                            fontFamily:"var(--logo)",
                            textTransform:"none",
                            fontSize: {
                                lg:18,
                                xs:16
                            },
                            color:"white",
                            borderRadius:"var(--radius)",
                            
                        }}>
                           
                            Add Task
                        </Button>
                </Grid>
            </Grid>
        </Box>
    </div> );
}
 
export default EntryForm;