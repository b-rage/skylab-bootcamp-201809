import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom'


class NavbarComponent extends Component {

       state = {
           collapse: false,
           isWideEnough: false,
       }

   goToFavourites = () =>  this.props.history.push('/favourites')   


   onClickNav = () => this.setState({ collapse: !this.state.collapse })



   render() {
       return (
           <Navbar color="pink darken-4" dark expand="md"  scrolling>

               <NavbarBrand href="/">

                   <strong>Ticket Finder</strong>

               </NavbarBrand>

               { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClickNav } />}

               <Collapse isOpen = { this.state.collapse } navbar>

                   <NavbarNav right>

                       <NavItem >

                           <a className="nav-link waves-effect waves-light" onClick = { this.goToFavourites } ><i className="fa fa-star"></i> Favourites</a>

                       </NavItem>

                       <NavItem>

                           <a className="nav-link waves-effect waves-light" onClick = { this.props.onLogout }><i className="fa fa-sign-out"></i> Logout</a>

                       </NavItem>

                   </NavbarNav>

               </Collapse>

           </Navbar>
           
       )
   }
}

export default withRouter(NavbarComponent);