import React, { Component } from 'react'
import style from '../style/Navbar.module.css';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import UserScreen from '../screens/UserScreen';

export default class NavbarComponent extends Component {

    render() {
        const routes = [
            {
                path: "/",
                exact: true,
                main: () =>  <DashboardScreen />
            },
            {
                path: "/dashboard",
                main: () =>  <DashboardScreen />
            },
            {
                path: "/login",
                main: () =>  <LoginScreen /> 
            },
            {
                path: "/user",
                main: () =>  <UserScreen /> 
            }
        ];
        return (
            <Router>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <NavLink to="/login" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">Login</Button>
                            </div>
                        </NavLink>
                        <NavLink to="/dashboard" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">Dashboard</Button>
                            </div>
                        </NavLink>
                        <NavLink to="/user" activeClassName={style["active"]}>
                            <div className={style["navbuttons"]}>
                                <Button color="primary" size="large" type="submit" value="Submit">User</Button>
                            </div>
                        </NavLink>
                    </Toolbar>
                </AppBar>

                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
            </Router>

        )
    }
}
