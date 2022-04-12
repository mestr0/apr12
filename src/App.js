import './App.css';
import dati from './dati.js'
import Grid from '@mui/material/Grid'

import Carta from './components/Carta'

function App() {
  let cards = dati.map( felino => <Grid item xs={4}>
                                            <Carta animale={felino} />
                                         </Grid>
  )
  
  
  return (
    <Grid container spacing={2}>
      { cards }
    </Grid>
  );
}

export default App;
