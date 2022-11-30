
import { Heading } from '@chakra-ui/react'
import Home from './pages/Home';
import {Route, Switch} from 'react-router-dom'
import Upload from './pages/Upload';
import ProfileDetails from './pages/UserPage';
function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path='/'>
          <Home  />
          </Route>
         <Route path='/upload'>
           <Upload />
         </Route>
          <Route path='/:userId'>
            <ProfileDetails />
          </Route>
       </Switch>
     
    </div>
  );
}

export default App;
