import PropTypes from 'prop-types';

function ProjectList(props) {
    const {projects} = props;
    let i=0;
    return (
      <div className="galery">
        {projects.map(o => <img src={o.img} key={i++}/>)}
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