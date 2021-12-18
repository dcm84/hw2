import PropTypes from 'prop-types';
import ShopItem from './ShopItem.js';

function ListView(props) {
    const {items} = props;

    //Если элементов нет, то таблицу не выводим
    if (!items.length) {
      return ""; 
    }
    
    return (
      <table className="item_table">
        <tbody>
          {items.map((v,i) => <ShopItem item={v} key={i} />)}
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