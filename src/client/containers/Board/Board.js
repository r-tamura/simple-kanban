import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getAllLanes } from 'modules'
import { Lane } from 'containers'

let Board = ({
  lanes,
}) => {
  return (
    <div>
      {
        lanes.map((lane, index) => <Lane key={index} id={index} />)
      }
    </div>
  )
}


Board.propTypes = {
  lanes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  lanes: getAllLanes(state),
})

const mapDispatchToProps = (state, ownProps) => ({
})

Board = connect(
  mapStateToProps,
)(Board)

export default Board
