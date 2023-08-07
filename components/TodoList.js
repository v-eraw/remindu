import React from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component
import styles from '../styles/TodoList.module.scss'; // Import your styles
import FilterButton from './FilterButton';
import { countHiddenTodos, filterArrayByMap } from '../utils/filterUtils';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoTitle,
} from '../actions/todos';
import priorities from '../utils/priorities';

class TodoList extends React.Component {
  render() {
    const handleAddTodo = () => {
      if (this.props.newTodoTitle.trim() !== '') {
        this.props.addTodo(); // Change 'default' to the desired priority
        this.props.setNewTodoTitle(''); // Clear the input
      }
    };

    const handleUpdateNewTitle = (e) => {
      this.props.setNewTodoTitle(e.target.value);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent form submission
        if (this.props.newTodoTitle.trim() !== '') {
          this.props.addTodo();
          this.props.setNewTodoTitle('');
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

    const { todos, filters } = this.props;

    return (
      <TransitionGroup className={styles['todo-list']}>
        <div className={styles['todo-list-header']}>
          <div className={styles['todo-list-title']}>Todo List</div>
          {countHiddenTodos(todos) > 0 && (
            <div className={styles['hidden-count']}>
              Hidden: {countHiddenTodos(todos)}
            </div>
          )}
          <FilterButton
            onFilterChange={handleFilterChange}
            filtersMap={filters}
            priorityMap={priorities}
          />
        </div>
        <div className={styles['add-todo-container']}>
          <input
            type="text"
            value={this.props.newTodoTitle}
            onChange={handleUpdateNewTitle}
            placeholder="Enter a new todo..."
            className={styles['add-todo-input']}
            onKeyPress={handleKeyPress}
          />
          <button className={styles['add-todo-button']} onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
        {todos.map((todo) => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="slide"
            appear={todo.visible}
            unmountOnExit={true}
          >
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={this.props.updateTodo}
              deleteTodo={this.props.deleteTodo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filters: state.todos.filters,
  newTodoTitle: state.todos.newTodoTitle,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
