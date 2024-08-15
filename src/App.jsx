import { useState } from 'react'

import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Header } from './Components/header/header'
import { Main } from './Components/Main/Main'
import { Section } from './Components/Section/Section'
import { Border } from './Components/Borders/Border'
import { Slider } from './Components/Slider/Slider'
import { Contact } from './Components/Contact/Contact'
import { Block } from './Components/Block/Block'
import { Footer } from './Components/Footer/Footer'

function App() {
  
  return (
    <>
     <Navbar/>
     <Header/>
     <Main/>
     <Section/>
     <Border/>
     <Slider/>
     <Contact/>
     <Block/>
     <Footer/>
    </>
  )
}

export default App
