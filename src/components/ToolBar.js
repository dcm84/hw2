import PropTypes from 'prop-types';

function ToolBar(props) {
    const {filters, selected, onSelectFilter} = props;
  
    return (
      <ul>
        {filters.map(o => <li className={selected == o ? "active" : ""} key={o} onClick={onSelectFilter} >{o}</li>)}
      </ul>
    )
}

//Похоже, это единственное место, где defaultProps пригодились.
ToolBar.defaultProps = {
  filters:  ["All"],
  selected: "All"
};

ToolBar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func.isRequired
}

export default ToolBar;