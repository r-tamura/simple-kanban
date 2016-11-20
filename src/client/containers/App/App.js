import React from 'react'
import { Timer, AddTodo, VisibleTodoList, Footer } from 'containers'

export default class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '400px' }}>
        <Timer />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}
