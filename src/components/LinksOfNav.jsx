import { NavLink } from "react-router-dom";

const LinksOfNav = () => {

  return (
    <span className="link-of-nav">
      <div className="navbar-links">
        <NavLink to="/peoples" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>People </NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to={{ pathname: "/peoples" }} state={{ btnValue: "Board" }}>
              Board
            </NavLink>
            <NavLink
              to={{ pathname: "/peoples" }}
              state={{ btnValue: "Management" }}
            >
              Core Team
            </NavLink>
            <NavLink
              to={{ pathname: "/peoples" }}
              state={{ btnValue: "Advisory" }}
            >
              Advisory
            </NavLink>
            <NavLink
              to={{ pathname: "/peoples" }}
              state={{ btnValue: "HonoraryMembers" }}
            >
              Honorary Members
            </NavLink>
            <NavLink to={{ pathname: "/peoples" }} state={{ btnValue: "Staff" }}>
              Staff
            </NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Projects</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to={{ pathname: "/projects" }} state={{ btnValue: "Ongoing" }}>Ongoing</NavLink>
            <NavLink to={{ pathname: "/projects" }} state={{ btnValue: "Completed" }}>Completed</NavLink>
            {/* <div className="nested-content">
              <NavLink to="#">Impact</NavLink>
              <div className="nested-dropdown">
                <i className="fas fa-caret-down nested-icon"></i>
                <span className="nested-dropdown-content">
                  <NavLink to="#">Our work</NavLink>
                  <NavLink to="#">Project Completed</NavLink>
                  <NavLink to="#">People Involved</NavLink>
                  <NavLink to="#">Species Got Attention</NavLink>
                </span>
              </div>
            </div> */}
          </span>
        </div>
      </div>
      <div className="navbar-links">
        {" "}
        <NavLink to="/opportunities" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Opportunities</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="#">Job</NavLink>
            <NavLink to="#">Volunteer</NavLink>
            <NavLink to="#">Internship</NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>News & Blog</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/blog">News</NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Events</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Services</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Assessment" }}
            >
              Assessment
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Training" }}
            >
              Training
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Activities" }}
            >
              Activities
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Expertise and Support" }}
            >
              Expertise
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Technical Support" }}
            >
              Technical Support
            </NavLink>
            <NavLink
              to={{ pathname: "/services" }}
              state={{ btnValue: "Talk series" }}
            >
              Talk
            </NavLink>
          </span>
        </div>
      </div>
      <div className="navbar-links">
        <NavLink to="/resources" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>Resources</NavLink>
        <div className="dropdown-content">
          <i className="fas fa-caret-down"></i>
          <span className="dropdown-content-links">
            <NavLink to="/resources">Reports</NavLink>
            <NavLink to="/resources">Articles</NavLink>
            <NavLink to="/resources">Forms</NavLink>
            <NavLink to="/resources">Quick Links</NavLink>
          </span>
        </div>
      </div>
      {/* <div className="navbar-links">
        <NavLink to="#">Login</NavLink>
      </div> */}
    </span>
  );
};

export default LinksOfNav;
