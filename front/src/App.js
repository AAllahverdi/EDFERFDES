import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainxontext from './context/context';
import ROUTES from './index.routes';
const router=createBrowserRouter(ROUTES)

function App() {
  return (
    <div>
      <Mainxontext.Provider>
       <RouterProvider router={router}/> 
      </Mainxontext.Provider>


    </div>
  )
}

export default App