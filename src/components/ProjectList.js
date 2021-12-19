import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

function ProjectList(props) {
    const {projects} = props;

    return (
      <div className="galery">
        {projects.map(v => <img src={v.img} key={uuidv4()}/>)}
      </div>
    )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      category: PropTypes.string
    })  
  ).isRequired
}

export default ProjectList;