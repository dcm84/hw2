import PropTypes from 'prop-types';
import ShopCard from '../components/ShopCard.js';
import {v4 as uuidv4} from 'uuid';

function CardsView(props) {
    const {cards} = props;

    return (
      cards.map(v => <ShopCard card={v} key={uuidv4()} />)
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