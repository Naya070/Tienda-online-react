import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../styles/global.css'
import Layout from '@containers/Layout';
import Login from '@components/Login';
import RecoveryPassword from '@components/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ForgotPasword from '@components/ForgotPasword';
import MyAccountCreate from '@components/MyAccountCreate';
import MyAccountEdit from '@components/MyAccountEdit';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
    const initialState = useInitialState();
    return (

        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/recovery-password" component = {RecoveryPassword} />
                <Route exact path = "/forgot-password" component = {ForgotPasword} />
                <Route exact path = "/my-account-create" component = {MyAccountCreate} />
                <Route exact path = "/my-account-edit" component = {MyAccountEdit} />
                <Route exact path = "*" component = {NotFound} />
            
            </Switch>
        </Layout>
    
        </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;