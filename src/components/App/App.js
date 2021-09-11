import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SalveDevito from '../GamesSites/SalveDevito.js';
import DimensionEye from '../GamesSites/DimensionEye';
import SdHeroes from '../GamesSites/SdHeroes';
import MilionLasers from '../GamesSites/MilionLasers';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/salvedevito" component={SalveDevito} exact/>
                    <Route path="/milionlasers" component={MilionLasers} exact/>
                    <Route path="/sd-heroes" component={SdHeroes} exact/>
                    <Route path="/dimensioneye" component={DimensionEye} exact/>
                    
                </Switch>
            </Router>
        );
    }
}

export default App;