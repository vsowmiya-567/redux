import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Editpage from './Components/Editpage';
import { Navbar } from 'react-bootstrap';
import Dialog from './Components/Dialog';
import { Provider } from 'react-redux';
import { store } from './Features/CreateStore';

export const Mycontext = createContext();

const App = () => {

const details = [
    { id: 1, title: 'Feedbacks', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, title: 'Weekly Task', para: 'Explicabo, minima distinctio ad nam dolorem aut reprehenderit error.' },
    { id: 3, title: 'Lyrics', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' }
  ]

  const [data, setData] = useState(details)
  const[dialog,setDialog] = useState(false)
  
  useEffect(() => {
    data;
  }, [])

 
 console.log(data);
  
  return (

    <div className='container'>
      <Navbar />
      <div>
       
        <Provider store={store}>

          <Routes>
            <Route path='/' element={<Sidebar/>} />
            <Route path='/editpage/:id' element={<Editpage />} />
          </Routes>
        </Provider>

        
        {dialog&&deleteid? <Dialog id ={deleteid} deletebyid={deletebyid}/>: "" 
        }
      </div>




    </div>
  );
};

export default App;
    
      




