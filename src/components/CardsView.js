import PropTypes from 'prop-types';
import ShopCard from '../components/ShopCard.js';

function CardsView(props) {
    const {cards} = props;
    let i = 0;

    return (
      cards.map(o => <ShopCard card={o} key={i++} />)
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