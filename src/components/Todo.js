import React from "react";
import PropTypes from "prop-types";
import { extendObservable, action } from "mobx";
import { observer, inject } from "mobx-react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    extendObservable(this, {
      isEditing: false,
      toggleIsEditing: action(
        function isEditing() {
          this.isEditing = !this.isEditing;
        }.bind(this)
      )
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.isEditing == true) {
      this.focusTextInput();
    }
  }

  onChangeText = e => {
    const { value } = e.target;
    if (value) {
      this.props.changeText(value);
    }
  };

  openEditing = () => {
    this.toggleIsEditing();
  };

  focusTextInput = () => {
    this.el.focus();
    this.el.setSelectionRange(this.props.text.length, this.props.text.length);
  };

  render() {
    const { text, isDone, toggleTodoDone, deleteTodo } = this.props;
    return (
      <li
        className={`${isDone ? "completed" : ""} ${
          this.isEditing ? "editing" : ""
        }`}
      >
        <div className="view">
          <input
            checked={isDone}
            onChange={toggleTodoDone}
            className="toggle"
            type="checkbox"
          />
          <label onDoubleClick={this.openEditing}>{text}</label>
          <button onClick={deleteTodo} className="destroy" />
        </div>
        <input
          ref={ref => (this.el = ref)}
          className="edit"
          value={text}
          onChange={this.onChangeText}
          onBlur={this.toggleIsEditing}
        />
      </li>
    );
  }
}

export default inject((_, props) => ({
  deleteTodo: props.todo.removeTodo,
  text: props.todo.text,
  isDone: props.todo.isDone,
  toggleTodoDone: props.todo.toggleIsDone,
  changeText: props.todo.changeText
}))(observer(Todo));

Todo.displayName = "Todo";

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
