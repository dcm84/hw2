import PropTypes from 'prop-types';
import ShopItem from './ShopItem.js';
import {v4 as uuidv4} from 'uuid';

function ListView(props) {
    const {items} = props;

    //Если элементов нет, то таблицу не выводим
    if (!items.length) {
      return null; 
    }
    
    return (
      <table className="item_table">
        <tbody>
          {items.map(v => <ShopItem item={v} key={uuidv4()} />)}
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