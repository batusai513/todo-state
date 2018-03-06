import React, { Component, createElement } from "react";
import P from "prop-types";

//Crear componente como funcion (las propiedades llegan como parametros de la funcion)
// la propiedad children es especial ya que no la defines directamente en el objeto de props
// Las propiedades de un componente de react son inmutables, no se pueden mutar de manera directa
function Title(props) {
  return React.createElement(props.level, null, props.children);
}

function Header(props){
 return createElement(
    'header',
    {className: 'header'},
    createElement('h1', null, 'todos'),
    createElement(
      'input',
      {className: 'new-todo', placeholder: 'What needs to be done?', autoFocus: true}
    )
 );
}

function Body(props){
  return createElement(
    'section',
    {className: 'main'},
    createElement(
      'input',
      {className: 'toogle-all', type: 'checkbox'}
    ),
    createElement(
      'label',
      {htmlFor: 'toggle-all'},
      'Mark all as complete'
    ),
    createElement(
      'ul',
      {className: 'todo-list'},
      createElement(
        'li',
        {className: 'completed'},
        createElement(
          'div',
          {className: 'view'},
          createElement('input', {className: 'toogle', type: 'checkbox'}),
          createElement('label', null, 'AKA'),
          createElement('button', {className: 'destroy'})
        )
      )
    )
  );
}

function Footer(props){
  return createElement(
    'footer',
    {className: 'footer'},
    createElement('span', {className: 'todo-count'}, createElement('strong', null, '1'), 'item left'),
    createElement(
      'ul',
      {className: 'filters'},
      createElement('li', null, createElement('a', {className: 'selected', href: '#'}, 'All')),
      createElement('li', null, createElement('a', {href: '#/active'}, 'Active')),
      createElement('li', null, createElement('a', {href: '#/completed'}, 'Completed')),
      createElement('button', {className: 'clear-completed'}, '')
    )
  );
}

// defines que recibe un componente, que tipo y si es obligatorio mandarlo
// https://reactjs.org/docs/typechecking-with-proptypes.html
Title.propTypes = {
  children: P.node,
  level: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Title.defaultProps = {
  level: "h1"
};

// Crear componente como clase (las propiedades estan en this.props);
// el estado del componente es almanecenado en la propiedad state, el estado solo se puede declarar en componentes tipo clase.
// Cuando se muta el estado utilizando el metodo setState, se vuelve a renderizar ese componente y el arbol de componentes que estan por debajo de este
export default class App extends React.Component {
  // usando class fields de es2017
  state = {
    text: ""
  };
  // metodos del ciclo de vida: se llaman en partes claves en el ciclo de vida del componente

  componentDidMount() {
    setInterval(() => {
      this.setState({
        text: Math.random()
      });
    }, 1000);
  }

  render() {
    return createElement(
      'section',
      {className: 'todoapp'},
      createElement(Header),
      createElement(Body),
      createElement(Footer)
    );
  }
}
