import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Menu from './Menu';
import Student from './Student';
import Teacher from './Teacher';
import Home from './Home';




function AppRouter() {
  return (
    <Router>
        <Menu />
        <Routes>
        <Route path='/Home' element={<Home />}/>

            <Route path='/Student' element={<Student />}/>
            <Route path='/Teacher' element={<Teacher />}/>
        </Routes>
    </Router>
  )
}

export default AppRouter
