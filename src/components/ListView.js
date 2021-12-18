import PropTypes from 'prop-types';
import ProductModel from '../models/ProductModel';
import ShopItem from './ShopItem.js';

function ListView(props) {
    const {items} = props;
    let i=0;
    return (
      <table className="item_table">
        <tbody>
          {items.map(o => <ShopItem item={o} key={i++} />)}
        </tbody>
      </table>
    )
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string
    })  
  ).isRequired
}

export default ListView;