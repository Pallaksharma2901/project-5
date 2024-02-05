import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Colorlib from './Colorlib'
import 'remixicon/fonts/remixicon.css'
import  Banner  from './Banner'
import About from './About'
import Programs from './Programs'
import Resources from './Resources'
import TopStories from './TopStories'
import Partners from './Partners'
import  Footer  from './Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Colorlib />
    <Banner />
    <About />
    <Programs />
    <Resources />
    <TopStories />
    <Partners />
    <Footer />
  </React.StrictMode>,
)
