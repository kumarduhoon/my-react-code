// what is the react ?
// react is core foundatation libaray for developed the ui interface with SPA
import React from 'react'
// what is reactDOM ?
// ReactDOM is a library. which is implementation on the web like react-native is implementation on moblie 
import ReactDOM from 'react-dom/client'
// ReactDOM create own Dom. whihc is called virtual dom
import "./index.css"
import App from "./App"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import User from './components/User/User'

// this type of tree formed behind the secne when we write any html code 
// <a href = "https://gmail.com/ target = "_blank">Go to mail Id </a>
//  from the above tag we got this type tree in result and pass to render function
const reactElement = {
  type: "a",
  props: {
    href: "https://gmail.com/",
    target: "_blank"
  },
  children: "Go to mail Id"
}

// we can pass direct html element in the render function

const rendeElemt1 = (
  <a href="https://gmail.com/" target="_blank" >Go to mail Id </a>
)

// we can create the recived object like that
const renderElemt2 = React.createElement("a", {
  href: "https://gmail.com/",
  target: "_blank"
}, "Go to mail Id")


//  we can wirte like that becasue it is a function and the html convert into the object tree so we can call like a function but this is not parcitce
// ReactDOM.createRoot(document.getElementById('root')).render(App())

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

// react and ReactDOM these 2 libarary which is used to mainpulate the web DOM
