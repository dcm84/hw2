import PropTypes from 'prop-types';

function ShopCard(props) {
    const {card} = props;
  
    return (
      <div className="item_box">
        <h2>{card.name}</h2>
        <p>{card.color}</p>
          <div className="crop">
          <img src={card.img} alt={card.name} />
        </div>
        <div className="price">
          <span>${card.price}</span><button>ADD TO CART</button>
        </div>
      </div>
    )
}

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
  }).isRequired
}

export default ShopCard;