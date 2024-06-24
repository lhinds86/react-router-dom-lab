// IMPORTS
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList.jsx'
import NavBar from './components/NavBar.jsx'



function App() {

  const [mailboxes, setMailboxes] = useState([])

const [newMailbox, setNewMailbox] = useState({
    id: '',
    boxSize: '',
    boxholder: ''
  })

  const addBox = (e) => {
    e.preventDefault()
    const currentMailbox = mailboxes
    const createdMailbox = {
      ...newMailbox,
      id: parseInt(mailboxes.length + 1),
      boxSize: parseInt(newMailbox.boxSize)
    }
    currentMailbox.push(createdMailbox)
    setMailboxes(currentMailbox)
    setNewMailbox({ 
      id: '', 
      boxSize: '',  
      boxholder: '' 
    })
  }

  const handleChange = (e) => {
    setNewMailbox({ ...newMailbox, [e.target.name] : e.target.value })
  }
 
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mailboxes" element={ <MailboxList mailboxes={mailboxes}/> }/>
        <Route path="/new-mailbox" element={ <MailboxForm newMailbox={newMailbox} handleChange={handleChange} addBox={addBox} /> }/>
        <Route path="/mailboxes/:id" element={ <MailboxDetails mailboxes={mailboxes} /> }/>
      </Routes>
      </main>
    </div>
  )
}

export default App



// newBoa={newBoat} handleChange={handleChange} addBoat={addBoat}