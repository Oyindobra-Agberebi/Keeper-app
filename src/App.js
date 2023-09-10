import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import note from './components/Note';

console.log(note)

function App() {
  return (
    <div className="App">
      <Header title="Keeper"/>
      {note.map(note =>
      (
        <Card
          key={note.key}
          title={note.title}
          content={note.content}

        />)
      )}
      <Footer />
    </div>
  );
}

export default App;
