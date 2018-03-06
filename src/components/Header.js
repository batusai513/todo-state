import React from 'react';

export default function Header(props) {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </header>
  );
}

export function getName() {
  return 'Marcela';
}
