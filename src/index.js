import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
  console.log(API_KEY);
  return(
  <div>
    <SearchBar />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root')); 