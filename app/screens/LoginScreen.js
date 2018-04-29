import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions'
import { Alert, ImageBackground, Image, AsyncStorage } from 'react-native';
import { Container, Right, Icon, Grid, Col,Content, Form, Item, Input, Label, Button, Text, Body } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import * as selectors from '../reducers/reducers';
import { storeEmailKey, storePasswordKey, storeLoginTypeKey, storeSocialIdKey } from '../constants/Constants';

class Login extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      name: '',
      email: '',
      password: '',
      login_type: 'Manual',
      img_url: '',
      social_id:''
    };
  }

  componentDidUpdate() {
    const { success } = this.props;
    if (success) {
      this.saveAutoLogin(this.state)
      this.props.navigation.navigate({ key: 'Main', routeName: 'Main', params: {}});
    }
  }

  saveAutoLogin = async (user) => {
    try {
      await AsyncStorage.setItem(storeEmailKey, user.email)
      await AsyncStorage.setItem(storePasswordKey, user.password)
      await AsyncStorage.setItem(storeLoginTypeKey, user.login_type)
      await AsyncStorage.setItem(storeSocialIdKey, user.social_id)
      console.log("saved user")
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  backDoorLogin() {

    this.setState({name:'Lucas', 
            email:'rocalli10@hotmail.com', 
            login_type:'Facebook',
            img_url:'',
            social_id: '2133871719956612'}, this.handleLogin)
  }

  handleLogin = () => {
    // const { login } = this.props;
    // var user = this.state;
    // console.log(JSON.stringify(user))
    // login(user)

    this.saveAutoLogin(this.state)
      this.props.navigation.navigate({ key: 'Main', routeName: 'Main', params: {}});
  }

  renderManualLogin() {
    return (
      <Body>
        <Item  style= {{ width: '80%', backgroundColor: '#DDDDDD', margin: 5}} rounded  >
          <Input placeholder='Email'  onChangeText={(text) => this.setState({email:text})} />
        </Item>
        <Item  style= {{ width: '80%', backgroundColor: '#DDDDDD',  margin: 5}} rounded>
          <Input secureTextEntry placeholder='Password' onChangeText={(text) => this.setState({password:text})} />
        </Item>
        <Grid>
          <Col>
            <Body style= {{ padding: 10 }}>
              <Button style= {{ backgroundColor: '#444444'}}  iconLeft onPress={this.handleLogin.bind(this)}>
                <Icon name='md-person' />
                <Text>Entrar</Text>
              </Button>
            </Body>
          </Col>
          <Col>
             <Body style= {{ padding: 10 }}>
                <Button style= {{ backgroundColor: '#999999'}}  iconLeft onPress={this.handleSignup.bind(this)}>
                  <Icon name='md-person-add' />
                  <Text>Cadastrar</Text>
                </Button>
              </Body>
          </Col>
        </Grid>
      </Body>
    )
  }
  
  render() {
    return (
      <Container>
        <ImageBackground 
        source={ require('./assets/background_login.jpg') }
        style={{
            width: '100%',
            height: '100%',
          }}>
        
            <Body style= {{ padding: 10,justifyContent: 'center', alignItems:'center'  }}>
             <Button style= {{ backgroundColor: '#999999'}}  iconLeft onPress={this.backDoorLogin.bind(this)}>
                <Text>Backdoor</Text>
              </Button>
            </Body>
        
        </ImageBackground>
      </Container>
      
    );
  }
}

Login.propTypes = {
  success: PropTypes.bool,

  login: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    success: selectors.isAuthenticated(state)
  }),
  { login }
)(Login)