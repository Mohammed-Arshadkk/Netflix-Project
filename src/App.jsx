import react from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {Action, Originals} from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
 

  return (
    <>
     <NavBar />
     <Banner />
     <RowPost url={Originals} title='Netflix Originals' />
     <RowPost url={Action} title='Action'  isSmall />
    </>
  )
}

export default App
