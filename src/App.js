import { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component{
  constructor() {
    super()
    this.state = {
      initialContacts: contacts.slice(0, 5)
    }
  }
  
  addRandom = () => {
    const { initialContacts } = this.state;
    initialContacts.push(contacts[Math.round(Math.random()*contacts.length-1)])
    this.setState({
      initialContacts: initialContacts
    })    
  }
  
  render() {
    const { initialContacts } = this.state;
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addRandom}>Add Random Contact</button>
      <table className="contactsTable">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {initialContacts.map((contact, index) => <tr key={index}>
          <td><img className="contactImage" src={contact.pictureUrl} alt={ contact.name}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>)}
      </table>
    </div>
  )
}
}

export default App;
