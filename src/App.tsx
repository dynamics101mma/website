import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/top-navbar';
import Dashboard from './module/Dashboard';
import { MainComponentContextProvider } from './context/mainComponent.context';
import Footer from './components/Footer';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function App() {
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}  
  return (
    <MainComponentContextProvider>
      <div className=''>
        <Dashboard />
        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
                            <div>
                                <a  onClick={scrollToTop} target="_blank" className="flex justify-center items-center border border-red-700 w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110">
                                    {/* <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" /> */}
                                    <KeyboardDoubleArrowUpIcon className=" w-full h-full rounded-full text-[#f9d112]" fontSize='large'/>
                                </a>
                            </div>
                        </div>

      </div>
    </MainComponentContextProvider>
  )
}
