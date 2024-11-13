import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetails from './screens/ItemDetails';
import ItemsList from './screens/ItemsList';
import NoMatch from './screens/NoMatch';
import Homepage from './screens/Homepage';
import { Redirect } from 'react-router';
import { Header } from './components/Header';

const createRoutes = () => (
    <Router>
        <Route path="/" component={Header} />
        <Switch>
            <Route exact path="/homepage" component={Homepage} />
            <Route exact path="/item-details/:id" component={ItemDetails}/>
            <Route exact path="/items" component={ItemsList}/>
            <Route exact path="/" > <Redirect to={"/homepage"} /> </Route>
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);

export default createRoutes;