
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import note from './components/Note';


function newCard(note) {
  return (
    <Card
      title={note.title}
      content={note.content}

    />)
}




function App() {
  return (
    <div className="App">
      <Header />
      {note.map(newCard)}

      <Footer />
    </div>
  );
}

export default App;
