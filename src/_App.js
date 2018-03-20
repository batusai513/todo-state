import React, { Component, createElement } from "react";
import P from 'prop-types'

// function
// export default function App() {
//   return (
//     React.createElement(
//       'div',
//       null,
//       React.createElement('h1', null, 'Hola Mundo')
//     )
//   );
// }

function Title(props){
  return createElement(
    props.level,
    null,
    props.children
  );
}

Title.propTypes = { //definir el api de ese componente , que recibe , que no recibe
  children: P.node,
  level: P.oneOf(['h1', 'h2', 'h3', 'h4'])
};

Title.defaultProps = {
  level: 'h1'
}
// class
export default class App extends React.Component {
  // forma 1 para declarar un state
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     text: ''
  //   }
  // }

 // forma  2 para declarar un state
  state = {
    text: ''
  }

  //metodos del ciclo de vida

  componentDidMount(){
    setInterval(
    () => {
      this.setState({
        text: Math.random()
      })
    },
    1000);
  }

  render() {
    //siempre debe ser definido
    return (
      createElement(
        Title,
        {},
        createElement('span', null, this.state.text)
      )
      // createElement(
      //   'div',
      //   {className: 'main-box', style: {backgroundColor: 'rebeccapurple'}},
      //   createElement('h1', {className: 'title'}, 'Hola Mundo'),
      //   null,
      //   false,
      //   'string',
      //   createElement('input', {type: 'text', autoFocus: true})
      // ) // no pasar objetos ejem {}
    );
  }
}


// export default function App() {
//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1>todos</h1>
//         <input
//           className="new-todo"
//           placeholder="What needs to be done?"
//           autoFocus=""
//         />
//       </header>
//       <section className="main">
//         <input className="toggle-all" type="checkbox" />
//         <label htmlFor="toggle-all">Mark all as complete</label>
//         <ul className="todo-list">
//           <li className="completed">
//             <div className="view">
//               <input className="toggle" type="checkbox" />
//               <label>asda232</label>
//               <button className="destroy" />
//             </div>
//           </li>
//         </ul>
//       </section>
//       <footer className="footer">
//         <span className="todo-count">
//           <strong>1</strong> item left
//         </span>
//         <ul className="filters">
//           <li>
//             <a href="#/" className="selected">
//               All
//             </a>
//           </li>
//           <li>
//             <a href="#/active">Active</a>
//           </li>
//           <li>
//             <a href="#/completed">Completed</a>
//           </li>
//         </ul>
//         <button className="clear-completed" />
//       </footer>
//     </section>
//   );
// }