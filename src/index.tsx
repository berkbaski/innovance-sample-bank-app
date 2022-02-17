import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './duck/store';

import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Register from './pages/Auth/Register';
import ProtectedRoute from './pages/ProtectedRoute';

import MyAccounts from './pages/MyAccounts';
import MyCards from './pages/MyCards';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Navigate to="/my-accounts" replace />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/my-accounts"
                        element={
                            <ProtectedRoute>
                                <MyAccounts />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/my-cards"
                        element={
                            <ProtectedRoute>
                                <MyCards />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
