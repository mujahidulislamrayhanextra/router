
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Navbar from './components/Navbar';
import Error from './components/Error';
export default function App() {
  return (
    

   <Router>
   <Navbar />
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route component={Error} />
      </Switch>
   </Router>
   
  );
}


