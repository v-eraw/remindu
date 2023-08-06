import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component
import styles from './TodoList.module.css'; // Import your styles
import FilterButton from './FilterButton';
import { filterArrayByMap } from '../utils/filterUtils';
import { connect } from 'react-redux';
import {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoText,
} from '../actions/todos';

class TodoList extends React.Component {
  render() {
    const handleAddTodo = () => {
      if (this.props.newTodoText.trim() !== '') {
        this.props.addTodo(); // Change 'default' to the desired priority
        this.props.setNewTodoText(''); // Clear the input
      }
    };

    const handleUpdateNewText = (e) => {
      this.props.setNewTodoText(e.target.value);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        if (this.props.newTodoText.trim() !== '') {
          this.props.addTodo();
          this.props.setNewTodoText('');
        }
      }
    };

    const handleFilterChange = (filterName, value) => {
      const updatedFilterMap = {
        ...this.props.filterMap,
        [filterName]: value,
      };
      this.props.setFilter(updatedFilterMap);
    };

    const { allTodos, filterMap, filteredTodos, newTodoText } = this.props;

    return (
      <div className={styles['todo-list']}>
        <div>
          <iframe
            src="https://gifer.com/embed/Yw73"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles['todo-list-header']}>
          <div className={styles['todo-list-title']}>Todo List</div>
          {allTodos.length - filteredTodos.length > 0 && (
            <div className={styles['hidden-count']}>
              Hidden: {allTodos.length - filteredTodos.length}
            </div>
          )}
          <FilterButton
            onFilterChange={handleFilterChange}
            filtersMap={filterMap}
          />
        </div>
        <div className={styles['add-todo-container']}>
          <input
            type="text"
            value={this.props.newTodoText}
            onChange={handleUpdateNewText}
            placeholder="Enter a new todo..."
            className={styles['add-todo-input']}
            onKeyPress={handleKeyPress}
          />
          <button className={styles['add-todo-button']} onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
        {filteredTodos.map((todo) => (
          <TodoItem
            todo={todo}
            updateTodo={this.props.updateTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allTodos: state.todos.allTodos,
  filterMap: state.todos.filterMap,
  filteredTodos: filterArrayByMap(state.todos.allTodos, state.todos.filterMap),
  newTodoText: state.todos.newTodoText,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
