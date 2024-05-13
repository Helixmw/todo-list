import { Grid, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import EntryForm from "./components/EntryForm";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container  maxWidth="sm">
        <Grid container>
          <Grid item xs={12} md={12}>
            <EntryForm/>
          </Grid>
          <Grid item xs={12} md={12}>
            <ItemsList/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
