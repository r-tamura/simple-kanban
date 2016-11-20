import { connect } from 'react-redux'
import { TodoList } from 'components'
import { TodoActions, getVisibleTodos } from 'modules/todos'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
})

const mapDispatchToProps = ({
  onTodoClick: TodoActions.toggleTodo,
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
