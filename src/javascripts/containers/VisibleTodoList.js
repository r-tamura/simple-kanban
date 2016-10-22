import { connect } from 'react-redux'
import { TodoActions } from '../model/todos'
import TodoList from '../components/TodoList'
import { TodoSelectors } from '../model/todos'

const mapStateToProps = (state) => ({
  todos: TodoSelectors.getVisibleTodos(state)
})

const mapDispatchToProps =  ({
  onTodoClick: TodoActions.toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
