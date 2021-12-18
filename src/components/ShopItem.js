import PropTypes from 'prop-types';

function ShopItem(props) {
    const {item} = props;
  
    return (
      <tr>
        <td className="crop"><img src={item.img} alt={item.name} /></td>
        <td><h2>{item.name}</h2></td>
        <td><p>{item.color}</p></td>
        <td className="price">${item.price}</td>
        <td><button>ADD TO CART</button></td>
      </tr>
    )
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.string
  }).isRequired
}

export default ShopItem;