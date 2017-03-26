import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CardList } from 'components'
import { AddCard } from 'containers'
import { getCards } from 'modules'

class Lane extends Component {
  render() {
    const { id, cards, onCardClick, onSubmit } = this.props
    return (
      <div>
        <AddCard
          onSubmit={text => onSubmit(id, text)}
        />
        <CardList
          cards={cards}
          onCardClick={cardId => onCardClick(cardId)}
        />
        {/* <Footer /> */}
      </div>
    )
  }
}

Lane.propTypes = {
  id: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  cards: getCards(state, ownProps),
})

export default connect(
  mapStateToProps,
)(Lane)

