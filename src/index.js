import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'swiper/dist/css/swiper.min.css';
import App from './App';
import Home from '../src/script/Home';
import AboutUs from '../src/script/aboutUs';
const React = require('react');

ReactDOM.render(
    <Router>
        <div id="routeContainer">
            <Switch>
                <Route children={(props) => (
                    <App {...props}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/aboutUs" component={AboutUs}/>
                        </Switch>
                    </App>
                )}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root'));
