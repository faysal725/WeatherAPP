import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardHolder from './Components/CardHolder/CardHolder';
import FiveDays from './Components/FiveDays/FiveDays';
import GlassCard from './Components/GlassCard/GlassCard';
import AuthHolder from './Components/AuthHolder/AuthHolder';

function App() {

  return (
    
       <Router>
       <Switch>
         <Route exact path="/">
          <GlassCard></GlassCard>
         </Route>
         <Route path="/glassCard">
          <GlassCard></GlassCard>
         </Route>
         <Route path="/fiveDays">
           <FiveDays></FiveDays>
         </Route>
         <Route path="/auth">
           <AuthHolder></AuthHolder>
         </Route>
       </Switch>
     </Router>
  );
}

export default App;