import PropTypes from 'prop-types';
import { version } from 'react';
import ShopCard from '../components/ShopCard.js';

function CardsView(props) {
    const {cards} = props;

    return (
      cards.map((v,i) => <ShopCard card={v} key={i} />)
    )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string
    })  
  ).isRequired
}

export default CardsView;