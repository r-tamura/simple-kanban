import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { TodoActions, isActive } from 'modules/todos'
import { Link } from 'components'

export const FilterLink = ({
  active,
  children,
  onClick,
}) => (
  <Link
    active={active}
    onClick={() => onClick()}
  >
    {children}
  </Link>
)

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  active: isActive(state, ownProps),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(TodoActions.setVisibilityFilter(ownProps.filter))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)
