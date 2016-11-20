import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import { rootReducer } from 'modules'
import { Link } from 'components'
import ConnectedFilterLink, { FilterLink } from '../FilterLink'

function setup({
    active = true,
    children = 'Link',
    onClick = jest.fn(),
} = {}) {
  const props = { active, children, onClick }
  return <FilterLink {...props}>{children}</FilterLink>
}

function setupWithEnzyme({
    active = true,
    children = 'Link',
    onClick = jest.fn(),
} = {}) {
  const props = { active, children, onClick }
  const enzymeWrapper = shallow(setup(props))

  return { props, enzymeWrapper }
}

function setupConnected(store, {
  filter = 'SHOW_ALL',
} = {}) {
  const props = { filter }
  return (
    <Provider store={store} >
      <ConnectedFilterLink filter={filter} >
        all
      </ConnectedFilterLink>
    </Provider>
  )
}

function setupConnectedWithEnzyme(store, props) {
  const wrapper = mount(setupConnected(store, props))
  return { props, wrapper }
}

const store = createStore(rootReducer, {
  visibilityFilter: 'SHOW_ALL',
})

describe('<FilterLink />', () => {
  it('should render without throwing an error', () => {
    const { props, enzymeWrapper } = setupWithEnzyme()
    const linkProps = enzymeWrapper.find(Link).props()

    expect(linkProps.active).toBe(true)
    expect(linkProps.children).toEqual('Link')
  })

  it('should call onClick', () => {
    const { props, enzymeWrapper } = setupWithEnzyme()
    const link = enzymeWrapper.find(Link)
    expect(props.onClick.mock.calls.length).toBe(0)
    link.simulate('click')
    expect(props.onClick.mock.calls.length).toBe(1)
  })
})

describe('Connected <FilterLink />', () => {
  it('should dispach correctly', () => {
    const { props, wrapper } = setupConnectedWithEnzyme(store, { filter: 'SHOW_COMPLETED' })
    const link = wrapper.find(ConnectedFilterLink)
    expect(store.getState().visibilityFilter).toEqual('SHOW_ALL')
    link.simulate('click')
    expect(store.getState().visibilityFilter).toEqual('SHOW_COMPLETED')
  })
})
