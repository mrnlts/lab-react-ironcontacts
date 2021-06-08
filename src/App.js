import './App.css';
import contacts from './contacts.json';

function App() {
  const initialContacts = contacts.slice(0, 5);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {initialContacts.map(contact => <tr>
          <td><img className="contactImage" src={contact.pictureUrl} alt={ contact.name}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>)}
      </table>
    </div>
  );
}

export default App;
