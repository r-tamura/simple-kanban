import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  getAllLanes,
  getCards, toggleCard,
  createCard, attachCardToLane,
} from 'modules'
import { Lane } from 'containers'

let Board = ({
  lanes,
  onLaneSubmit,
  onCardClick,
}) => (
  <div>
    {
      lanes.map((lane, index) =>
        <Lane
          key={index}
          id={index}
          onSubmit={(laneId, text) => onLaneSubmit(0, laneId, text)}
          onCardClick={onCardClick}
        />
      )
    }
  </div>
)

Board.propTypes = {
  lanes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onLaneSubmit: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  lanes: getAllLanes(state),
})

const mapDispatchToProps = {
  onLaneSubmit: createCard,
  onCardClick: toggleCard,
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board)

export default Board
