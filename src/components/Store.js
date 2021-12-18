import PropTypes from 'prop-types';
import React, {useState} from 'react';
import CardsView from '../components/CardsView.js';
import ListView from './ListView.js';

function Store(props) {
    const {cards} = props;

    const [asList, setAsList] = useState(true);

    const onToggle = evt => {
      setAsList(prevAsList => !prevAsList);
    };

    return (
      <div className="layouts_task">
        <p>
          <span className="material-icons" onClick={onToggle}>
          {asList ? "view_list" : "view_module"}
          </span>
        </p>
        {asList ? <CardsView cards={cards} /> : <ListView items={cards} />}
        
      </div>
    )
}

Store.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      color: PropTypes.string,
      image: PropTypes.string
    })  
  ).isRequired
}

export default Store;