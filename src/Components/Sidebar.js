import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
           
<div className="main-sidebar sidebar-dark-primary elevation-4">

<a href="index3.html" class="brand-link">
  <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
       />
  <span class="brand-text font-weight-light">AdminLTE 3</span>
</a>


<div class="sidebar">
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
      <img src="/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
    </div>
    <div class="info">
      <a href="#" class="d-block">Alexander Pierce</a>
    </div>
  </div>

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
     
     
 
      <li class="nav-item has-treeview">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-copy"></i>
          <p>
            Layout Options
            <i class="fas fa-angle-left right"></i>
            <span class="badge badge-info right">6</span>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
          <Link to='/shop'>  <a href="pages/layout/top-nav.html" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
           <p>Shop</p>
            </a>
          </Link>
          </li>
          <li class="nav-item">
          <Link to='/aboutus'><a href="#" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
              <p>About Us</p>
            </a>
          </Link>
          </li>

         
        </ul>
      </li>
 
    </ul>
  </nav>

</div>

</div>

        )
    }
}

export default Sidebar
