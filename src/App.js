import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import landingpage from './pages/landingpage.jsx';



function App() {
  return (
    <div>
    <Router>
    <Switch>
       <Route path="/"  component={landingpage}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
