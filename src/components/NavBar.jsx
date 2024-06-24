import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/src/components/MailboxList.jsx">Mailboxes</Link>
        <Link to="/src/components/MailboxForm.jsx">New Mailbox</Link>

      </div>
    </nav>
  )
}

export default NavBar
