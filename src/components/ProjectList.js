import PropTypes from 'prop-types';

function ProjectList(props) {
    const {projects} = props;

    return (
      <div className="galery">
        {projects.map((v,i) => <img src={v.img} key={i}/>)}
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