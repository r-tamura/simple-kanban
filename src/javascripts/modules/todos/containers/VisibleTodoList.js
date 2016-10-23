import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as actions from '../actions'
import * as selectors from '../selectors'

const mapStateToProps = (state) => ({
  todos: selectors.getVisibleTodos(state)
})

const mapDispatchToProps =  ({
  onTodoClick: actions.toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
