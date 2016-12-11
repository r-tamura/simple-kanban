import React, { PropTypes } from 'react'
import { Card } from 'components'

const CardList = ({ cards, onCardClick }) => (
  <ul>
    {cards.map(card =>
      <Card
        key={card.id}
        {...card}
        onClick={() => onCardClick(card.id)}
      />
    )}
  </ul>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired,
}

export default CardList
