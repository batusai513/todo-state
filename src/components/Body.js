import React from 'react';

export default function Body(props) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>asda232</label>
            <button className="destroy" />
          </div>
        </li>
      </ul>
    </section>
  );
}
