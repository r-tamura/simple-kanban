import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Todo, TodoList } from 'components'

function setup({
  todos = [],
  onTodoClick = id => id,
} = {}) {
  const props = { todos, onTodoClick }
  return <TodoList {...{ todos, onTodoClick }} />
}

function setupWithEnzyme({
  todos = [],
  onTodoClick = jest.fn(),
} = {}) {
  const props = { todos, onTodoClick }
  const wrapper = shallow(setup({ todos, onTodoClick }))
  return { props, wrapper }
}

describe('<TodoList />', () => {
  it('should render three Todos', () => {
    const { wrapper } = setupWithEnzyme({
      todos: [
        { id: 1, completed: true, text: 'Learn React' },
        { id: 2, completed: true, text: 'Learn Angular' },
        { id: 3, completed: true, text: 'Learn Riot' },
      ],
    })
    expect(wrapper.find('ul').length).toBe(1)
    expect(wrapper.find(Todo).length).toBe(3)
  })

  it('should ', () => {
    const { props, wrapper } = setupWithEnzyme({
      todos: [
        { id: 1, completed: true, text: 'Learn React' },
        { id: 2, completed: true, text: 'Learn Angular' },
      ],
      onTodoClick: jest.fn(id => id),
    })
    expect(wrapper.find(Todo).first().props().onClick()).toBe(1)
    expect(wrapper.find(Todo).get(1).props.onClick()).toBe(2)
  })

  it('simulates click events', () => {
    const { props, wrapper } = setupWithEnzyme({
      todos: [
        { id: 1, completed: true, text: 'Learn React' },
        { id: 2, completed: true, text: 'Learn Angular' },
      ],
    })
    const firstTodo = wrapper.find(Todo).first()
    expect(props.onTodoClick.mock.calls.length).toBe(0)
    firstTodo.simulate('click')
    expect(props.onTodoClick.mock.calls.length).toBe(1)
  })
})
