import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ProjectList from './ProjectList.js';
import ToolBar from './ToolBar.js';

function Portfolio(props) {
    const {projects} = props;

    const [selected, setSelected] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    return (
      <div className="filter_task">
        <ToolBar 
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selected}
          onSelectFilter={(filter) => {
            setSelected(filter.target.innerHTML);
            setFilteredProjects(projects.filter(o => o.category === filter.target.innerHTML || filter.target.innerHTML === "All"))
          }} />
        <ProjectList projects={filteredProjects} />
      </div>
    )
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      category: PropTypes.string
    })  
  ).isRequired
}

export default Portfolio;