import { connect } from 'react-redux'
import { VisibilityFilterActions } from 'modules/visibilityFilter'
import { Link } from 'components'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(VisibilityFilterActions.setVisibilityFilter(ownProps.filter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
