import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
// function trick(){
//   const element=(
//     <div>
//       <h1>Hello World</h1>
//       <p>It is {new Date().toLocaleTimeString()}</p>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(trick,1000)

ReactDOM.render(<App />,document.getElementById('root'))