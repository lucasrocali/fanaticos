import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image ,TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { loadTimes } from '../actions'
import { Container, Content, List, Text, Card, Body } from 'native-base';
import * as selectors from '../reducers/reducers';
import Colors from '../constants/Colors';

class GroupList extends Component {

  componentDidMount() {
    const { times, loadTimes } = this.props;
    if (!times || times.length == 0) {
      loadTimes()
    }
  }

  renderGroup = () => {
    return (
      <TouchableOpacity style = {{ paddingHorizontal: 20 }} onPress={()=> console.log("on press")}>
        <Text style = {{ padding: 5, fontSize: 10,textAlign:'center'}} >DOM 29/04/2010</Text>
        <Card style = {{ flex: 1, width:'100%', flexDirection: 'row', padding: 20 }}>
          <View style = {{ flex: 1, width:'100%', flexDirection: 'row' }}>
            <View style = {{ flex: 8, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 4 }}>A</Text>
              <Image 
              style = {{ flex: 2,width: 50, height: 50 }} 
              source = {{ uri:'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png'}} 
              resizeMode = {'cover'} />
            </View>
            <View style = {{ flex: 1, justifyContent:'center',alignItems:'center' }}>
              <Text>x</Text>
            </View>
            <View style = {{ flex: 8, flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
              <Image 
              style = {{ flex: 2,width: 50, height: 50 }} 
              source = {{ uri:'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png'}} 
              resizeMode = {'cover'} />
              <Text style = {{ flex: 4, textAlign:'right' }}>B</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
  
  render() {
    const { times } = this.props;
    return (
       <Container style = {{ backgroundColor: '#FFF' }} >
        <Content>
          <Text style = { styles.headerText} >JOGOS RECENTES</Text>
          <FlatList
						data={this.props.times}
						horizontal={false}
						renderItem={this.renderGroup}
						keyExtractor={group => group.id.toString()}
						showsHorizontalScrollIndicator={false}
					/>
        </Content>
      </Container>
    );
  }
}

// <List style={ styles.gridList }>
//             {times && times.map((group) => this.renderSpotCardItem(group)) }
//           </List>

GroupList.propTypes = {
  times: PropTypes.array,

  loadTimes: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  headerText: {
    padding: 15,
    textAlign:'center'
  },
  gameCellView: {
    padding: 10
  }
})

export default connect(
  state => ({
    times: selectors.gettimes(state)
  }),
  { loadTimes }
)(GroupList)