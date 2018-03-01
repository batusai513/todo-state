import React from "react";
import { observer, inject } from "mobx-react";

function AllCompleted({ toggleTodos }) {
  return (
    <React.Fragment>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={onToggleChange}
      />
      <label htmlFor="toggle-all" defaultChecked={false}>
        Mark all as complete
      </label>
    </React.Fragment>
  );
  function onToggleChange(e) {
    toggleTodos(e.target.checked);
  }
}

export default inject(({ store }) => ({
  toggleTodos: store.toggleActiveTodos
}))(observer(AllCompleted));
