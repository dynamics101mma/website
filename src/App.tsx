import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/top-navbar';
import Dashboard from './module/Dashboard';
import { MainComponentContextProvider } from './context/mainComponent.context';

export default function App() {
  return (
    <MainComponentContextProvider>
      <div>
        <Dashboard />
      </div>
    </MainComponentContextProvider>
  )
}
