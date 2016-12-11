import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CardList } from 'components'
import {
  getCards, toggleCard,
  createCard, attachCardToLane, getVisibilityFilter,
} from 'modules'
import { AddCard } from 'containers'

class Lane extends Component {
  addCard(laneId, text) {
    const cardAction = this.props.createCard({
      text,
    })
    this.props.attachCardToLane(laneId, cardAction.id)
  }

  render() {
    const { id, cards, visibilityFilter, onCardClick } = this.props
    return (
      <div>
        <AddCard
          onSubmit={text => this.addCard(id, text)}
        />
        <CardList
          cards={cards}
          onCardClick={cardId => onCardClick(id, cardId)}
        />
        {/* <Footer /> */}
      </div>
    )
  }
}

Lane.propTypes = {
  id: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  attachCardToLane: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  cards: getCards(state, ownProps),
  visibilityFilter: getVisibilityFilter(state, ownProps),
})

const mapDispatchToProps = ({
  onCardClick: toggleCard,
  createCard,
  attachCardToLane,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane)

