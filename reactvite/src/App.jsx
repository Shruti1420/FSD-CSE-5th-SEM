// import { useState } from 'react';
// // eslint-disable-next-line no-unused-vars
// import heroImg from './assets/hero.png';
// // eslint-disable-next-line no-unused-vars
// import reactLogo from './assets/react.svg';
// // eslint-disable-next-line no-unused-vars
// import viteLogo from './assets/vite.svg';
// import MyState from './components/MyState';
// import ImageManipulation from './components/ImageManipulation';
// import MyUseEffect from './components/MyUseEffect';
// import FetchProducts from './components/FetchProducts'
// function App() {

//   return (
//     <div>
//     {/* // <div style={{border:"2px solid blue",width:"800px",height:"600px",alignItems:"center",display:"flex",flexDirection:"column", justifyContent:"center",backgroundColor:"black", textAlign:'center'}}> */}
//       {/* <ICardGallery/> */}
//       {/* <MyState/> */}
//       {/* <ColorChange/> */}
//       {/* <SetNameandCollege/> */}
//       {/* <ImageManipulation/> */}
//       {/* <MyUseEffect/> */}
//       <FetchProducts/>
//     </div> 
//   )
// }

// export default App

import { useState } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App