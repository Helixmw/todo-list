import { Stack, Box, Typography, Button } from "@mui/material";

const ListItem = (props) => {


    return ( <div className="item">
        <Stack spacing={2}>
            <Box sx={{
                backgroundColor:'white',
                p: 2,
                borderRadius:'var(--radius)',
                boxShadow:'var(--shadow)'
            }}>
                <div className="details">
                    <div className="info">
                    <Typography className="title"
                    sx={{
                        
                    }}
                    gutterBottom>
                        {props.title} 
                        </Typography>
                    <Typography className="date" sx={{
                        color:'var(--grey)',
                        fontSize:{
                            xs:"0.9rem"
                        },
                        mb: {
                            xs: 1
                        }
                    }}>{props.created}</Typography>
                    </div>
                    <Stack direction="col" spacing={2}>
                        <Button variant="outlined" className="addButton outline"
                                style={{marginRight:"0.5rem"}}
                                sx={{
                                    border:'1px solid var(--primary)',
                                    fontFamily:"var(--logo)",
                                    textTransform:"none",
                                    fontSize: {
                                        lg:18,
                                        xs:16
                                    }, 
                                    px:{
                                        xs:1
                                    },         
                                    color:"var(--primary)",
                                    borderRadius:"var(--radius)",

                
                                }}
                        >Edit</Button>
                        <Button className="addButton" sx={{
                            backgroundColor:'var(--primary)',
                            fontFamily:"var(--logo)",
                            textTransform:"none",
                            fontSize: {
                                lg:18,
                                xs:16
                            }, 
                            
                            color:"white",
                            borderRadius:"var(--radius)",
                            
                        }}
                        
                        onClick={props.removeItem}>Delete</Button>
                    </Stack>
                </div>
            </Box>
            
        </Stack>
    </div> );
}
 
export default ListItem;