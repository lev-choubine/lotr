import './App.css';
import Movies from './Movies.js';



function App() {

  const films =[{ title: 'The Fellowship of The Ring', hours: 2, munites: 58}, {title: 'The Two Towers',  hours: 2, minutes: 59}, {title: 'The Return of the King', hours: 3, minutes: 21 }]

  const dislplayFilms = films.map((eachFilm, idx)=>{
    return < Movies title={eachFilm.title} hours={eachFilm.hours} minutes={eachFilm.minutes} key={idx}/>})
  
    return (

    <div className="App">
      {dislplayFilms}
    </div>
   
       


  );
  }

export default App;
