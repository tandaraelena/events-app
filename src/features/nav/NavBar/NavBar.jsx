import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { openModal } from '../../modals/modalActions'
import { signoutUser } from '../../auth/authActions'

const actions = {
  openModal,
  signoutUser
}

const mapState = (state) => ({
  auth: state.firebase.auth
})

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    // logout is provided by firebase
    this.props.firebase.logout();
    this.props.history.push("/");
  }

  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item exact as={NavLink} to="/" header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />
          {authenticated && 
          <>
            <Menu.Item as={NavLink} to="/people" name="People" />
            <Menu.Item as={NavLink} to="/test" name="Test" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event" />
            </Menu.Item>
          </>
          }
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} auth={auth}/>
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
