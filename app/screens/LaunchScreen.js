import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions'
import { Image, AsyncStorage, ImageBackground } from 'react-native';
import { Container, Body, Spinner } from 'native-base';
import Colors from '../constants/Colors';
import { storeEmailKey, storePasswordKey, storeLoginTypeKey, storeSocialIdKey } from '../constants/Constants';
import * as selectors from '../reducers/reducers';

class Launch extends Component {

  componentDidMount() {
    this.handleAutoLogin()
  }

  handleAutoLogin = async () => {
    try {
      const email = await AsyncStorage.getItem(storeEmailKey);
      const password = await AsyncStorage.getItem(storePasswordKey);
      const loginType = await AsyncStorage.getItem(storeLoginTypeKey);
      const socialId = await AsyncStorage.getItem(storeSocialIdKey);

       //console.log(storeEmailKey)
        //console.log(email)
        //console.log(storePasswordKey)
        //console.log(password)
        //console.log(storeLoginTypeKey)
        //console.log(loginType)
        //console.log(storeSocialIdKey)
        //console.log(socialId)
  
      if (email !== null && loginType !== null){
        // We have data!!
       

        // const { login } = this.props;
        // const user = {
        //   email: email,
        //   password: password,
        //   login_type: loginType,
        //   social_id: socialId
        // }
        // login(user)
        this.props.navigation.navigate({ key: 'Main', routeName: 'Main', params: {}});
      } else {
        //console.log("no email and password")
        this.props.navigation.navigate({ key: 'Login', routeName: 'Login', params: {}});
      }
    } catch (error) {
      // Error retrieving data
      //console.log(error)
    }
  }

  componentDidUpdate() {
    const { loading, success } = this.props;
    //console.log("IF SUCESS")
    if (!loading && success) {
      //console.log("GOTOMAIN"+success)
      this.props.navigation.navigate({ key: 'Main', routeName: 'Main', params: {}});
    } else if (!loading) {
      //console.log("GOTOLOGIN"+success)
      this.props.navigation.navigate({ key: 'Login', routeName: 'Login', params: {}});
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground 
        source={ require('./assets/background_login.jpg') }
        style={{
            width: '100%',
            height: '100%',
          }}/>
      </Container>
      
    );
  }
}

Launch.propTypes = {
  // data
  loading: PropTypes.bool,
  success: PropTypes.bool,

  // actions
  login: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    loading: selectors.isAuthenticationLoading(state),
    success: selectors.isAuthenticated(state)
  }),
  { login }
)(Launch)