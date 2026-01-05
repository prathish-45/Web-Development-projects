// import './App.css';
import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import user_obj from './UserObj';



function App() {

  return (
    <>
      <h1 className="title">Hello, React!</h1>
      <Header />
      <p className="description">This is a simple React application.</p>
      {user_obj.map((obj, index) => 
        <Content key={index} obj_name = {obj.name} obj_age = {obj.age} obj_occ = {obj.occupation}/>
      )}

      {/* <Content obj_name = {user_obj.name} obj_age = {user_obj.age} obj_occ = {user_obj.occupation} /> */}
      <Footer />
      
    </>
  )
}


export default App;