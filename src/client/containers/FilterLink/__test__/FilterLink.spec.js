import React from 'react'
import renderer from 'react-test-renderer'
import FilterLink from '../FilterLink'

describe('FilterLink renders correctly', () => {
  const tree = renderer.create(
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
  ).toJSON()

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot()
  })
})