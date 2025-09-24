import './App.css'
import NoteComponent from './component/NoteComponent';
import NoteFormComponent from './component/NoteFormComponent/NoteFormComponent.jsx';
import NoteListComponent from './component/NoteListComponent.jsx';


function App() {
  let user = "Someone Great";

  return (
    <div>
      <h1>Welcome to Notes</h1>
      <p>Hello, {user} </p>
      <NoteListComponent/>
      <NoteFormComponent/>
    </div>
  )
}

export default App
