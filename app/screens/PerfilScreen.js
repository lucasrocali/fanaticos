import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions'
import { AsyncStorage } from 'react-native';
import { Container, Content, List, ListItem, Body, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { storeEmailKey, storePasswordKey, storeLoginTypeKey, storeSocialIdKey } from '../constants/Constants';

class Perfil extends Component {

  handleLogoutPress() {
    const { logout } = this.props;
    const resetAction = NavigationActions.reset({
                         index: 0,
                         key: null,
                         actions: [
                           NavigationActions.navigate({ routeName: 'Login' })
                         ]
                      });
    this.props.navigation.dispatch(resetAction);
    this.handleAutoLogin()
    logout();
  }

  handleAutoLogin = async () => {
    try {
      await AsyncStorage.removeItem(storeEmailKey)
      await AsyncStorage.removeItem(storePasswordKey)
      await AsyncStorage.removeItem(storeLoginTypeKey)
      await AsyncStorage.removeItem(storeSocialIdKey)
      //console.log("cleaned AsyncStorage")
    } catch (error) {
      //console.log(error)
    }
  }
  
  render() {
    return (
       <Container>
        <Content style= {{ paddingTop: 20 }}>
          <List>
            <ListItem style= {{ marginLeft: 0 }} onPress={this.handleLogoutPress.bind(this)}>
              <Body>
                <Text>Logout</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


Perfil.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default connect(
  state => ({}),
  { logout }
)(Perfil)