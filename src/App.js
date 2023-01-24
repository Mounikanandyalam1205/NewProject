import logo from './logo.jpg';
import './App.css';
import { RiDashboard3Line,RiUser3Fill } from "react-icons/ri";
import { FiFolder } from "react-icons/fi";
import { FaFolder, FaRegHandPointRight,FaAngleRight } from "react-icons/fa";
import { AiOutlineFile } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { GoTriangleDown } from "react-icons/go";
import { IoHome } from "react-icons/io5";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="admin-brand-title">
			 MPSTDC
		 </h2> */}
      <div className='container'>
        <div className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="admin-brand-title">
            MPSTDC
          </h2>
          <nav className="navbar ">
            <ul className="nav-list">
              <li className="nav-item" >
                < RiDashboard3Line /><a className="nav-link1" href="#">Dashboard</a>
              </li>
              <li className="nav-item ">
                <FiFolder /><a className="nav-link" href="#">Master</a>
                {/* <ul ClassName="dropdown-menu">
                      <li><a className="dropdown-item" href="#">User master</a></li>
                      <li><a className="dropdown-item" href="#">Social link</a></li>
                    </ul> */}
              </li>
              <li className="nav-item">
                <AiOutlineFile /><a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <BiImage /><a className="nav-link " href="#" >Manage Slider</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Front Menu</a>
              </li>
              <li className="nav-item">
                <FaFolder /> <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <FaFolder /><a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Tender</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Testimonial</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Facilities</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Travelers</a>
              </li>
              <li className="nav-item">
                <HiUserGroup /><a className="nav-link" href="#">Manage Feedback</a>
              </li>
              <li className="nav-item">
                <FiFolder /><a className="nav-link" href="#">Properities</a>
              </li>
              <li className="nav-item">
                <FiFolder /> <a className="nav-link" href="#">Package '&' tours</a>
              </li>
              <li className="nav-item">
                <FaRegHandPointRight /><a className="nav-link" href="#">Oders '&' Circular Category</a>
              </li>
              <li className="nav-item">
                <FaRegHandPointRight /><a className="nav-link" href="#">Orders '&' circular</a>
              </li>
              <li className="nav-item">
                <FiFolder /> <a className="nav-link" href="#">Reason to visit MP</a>
              </li>
              <li className="nav-item">
                <FiFolder /> <a className="nav-link" href="#">Experience on to go</a>
              </li>
              <li className="nav-item">
                <BiImage /> <a className="nav-link" href="#">Gallery</a>
              </li>

            </ul>
          </nav>
        </div>
        <div className='page-sidebar'>
          <div className='page-content'>
            <div className='header navbar'>
              <div className='header-inner'>
                <div class="sidebar-toggler-wrapper">
                  <div class="sidebar-toggler hidden-phone"></div>
                </div>
                <div className="hor-menu hidden-sm hidden-xs">
                  <h3 className='menu-user-name'>			Welcome : User | ADMIN			</h3>

                </div>
                {/* <button class="btn btn-primary ms-lg-4 drpdwn-1"> JOIN US</button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="dropdown user">
                      <a className="btn-home" href="#">Visit Site</a>
                    </li>
                    <li className="dropdown user">
                      <a className="btn-home dropdown-toggle" data-toggle="dropdown" data-hover='dropdown' data-close-others='true' href="#">
                      <RiUser3Fill /> <span>User</span>
                      <i className='angle-down'> < GoTriangleDown /></i>
                      </a>
                      {/* <ul className='dropdown-menu'> 
                      <li> 
                        <a href='#' > <RiUser3Fill /> <span>My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'><RiUser3Fill /> <span> Signout</span></a>
                      </li>
                      </ul> */}
                    </li>
                    
                    {/* <li className="dropdown user">
                      <RiUser3Fill /><a className="dropdown-toggle" role='button' data-toggle='dropdown' data-hover='dropdown'href="#">User</a>
                      <i className='GoTriangleDown'> </i> */}
                      {/* <ul className='dropdown-menu'>
                        <li>
                          <a className='dropdown-item' href='#'>My Profile</a>
                          <a className='dropdown-item' href='#'>LogOut</a>
                          <a className='dropdown-item' href='#'>LogOut</a>
                        </li>
                      </ul> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <section>
              <div className='row'>
                <div className='col-md-12'>
                  <ul className='page-breadcrumb breadcrumb'>
                      <li className='row'>
                     <i className='home'> <IoHome /></i><a href='#'>Home</a> <i className='angle-right'><FaAngleRight/></i>
                      </li>
                      <li className='row'>
                        <a href='#'> Dashboard</a>  <FaAngleRight/>
                      </li>
                      <li className='row'>
                        <a href='#'> View</a>
                      </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>





  );
}

export default App;