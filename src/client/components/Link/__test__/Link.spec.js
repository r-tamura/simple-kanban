import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Link from '../Link'

// エラー対策: https://github.com/facebook/jest/issues/1353
// jest.mock('react/lib/ReactDefaultInjection')

function setup({ active = false, childText = 'Test' }) {
  const props = {
    active,
    onClick: jest.fn(),
  }
  const component = <Link {...props}>{childText}</Link>
  return component
}

function setupWithEnzyme({ active = false, childText = 'Test' }) {
  const props = {
    active,
    onClick: jest.fn(),
  }

  const enzymeWrapper = shallow(<Link {...props}>{childText}</Link>)

  return {
    props,
    enzymeWrapper,
  }
}

describe('<Link />', () => {
  describe('<Link /> Snapshot', () => {
    it('should render active link', () => {
      const component = setup({ active: true })
      const tree = renderer.create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should render non-active link', () => {
      const component = setup({ active: false })
      const tree = renderer.create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('should log \'clicked\' when clicked', () => {
    const { enzymeWrapper, props } = setupWithEnzyme({ active: false })

    const a = enzymeWrapper.find('a')
    expect(props.onClick.mock.calls.length).toBe(0)
    a.simulate('click', { preventDefault: () => undefined })
    expect(props.onClick.mock.calls.length).toBe(1)
  })
})
