import { connect } from 'react-redux'
import { TodoList } from 'components'
import { TodoActions, TodoSelectors } from 'modules/todos'

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
