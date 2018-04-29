import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions'
import { View, Text, Image, AsyncStorage, ImageBackground } from 'react-native';
import { Container, Body, Spinner } from 'native-base';
import Colors from '../constants/Colors';
import { storeEmailKey, storePasswordKey, storeLoginTypeKey, storeSocialIdKey } from '../constants/Constants';
import * as selectors from '../reducers/reducers';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

class Story extends Component {

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

  render() {
    return (
        <View style={{flex:1}}>
        <IndicatorViewPager
            style={{height:'100%'}}
            indicator={this._renderDotIndicator()}
        >
            <View style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
            </View>
            <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
            <View style={{backgroundColor:'#1AA094'}}>
                <Text>page three</Text>
            </View>
        </IndicatorViewPager>
    </View>
      
    );
  }
}

Story.propTypes = {

}

export default connect(
  state => ({

  }),
  {  }
)(Story)