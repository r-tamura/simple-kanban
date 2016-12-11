import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Todo } from 'components'
import styles from '../Todo.scss'

function setup({
  onClick = jest.fn(),
  completed = false,
  text = 'Todo Test',
} = {}) {
  const props = { onClick, completed, text }
  return <Todo {...props} />
}

function setupWithEnzyme(props = {}) {
  const wrapper = shallow(setup(props))
  return { props, wrapper }
}

describe('<Todo />', () => {
  it('should render completed todo', () => {
    const { props, wrapper } = setupWithEnzyme({
      completed: true,
      text: 'Learn Redux',
    })
    const firstListItem = wrapper.find('li').first()
    expect(firstListItem.hasClass(styles.completed)).toBe(true)
    expect(firstListItem.props().children).toEqual('Learn Redux')
  })

  it('should render active todo', () => {
    const { props, wrapper } = setupWithEnzyme({
      completed: false,
      text: 'Learn Redux',
    })
    const firstListItem = wrapper.find('li').first()
    expect(firstListItem.hasClass(styles.completed)).toBe(false)
  })
})
