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

  renderGroup = ({ item: match, index })  => {
    return (
      <TouchableOpacity style = {{ paddingHorizontal: 20 }} onPress={()=> this.props.navigation.navigate('LiveGame', { ...match } )}>
        <Text style = {{ padding: 5, fontSize: 10,textAlign:'center'}} >{(match.nome_campeonato ? match. nome_campeonato : '').concat(match.fase_rodada ? ' - ' + match.fase_rodada : '').concat(match.status ? ' - ' + match.status : '')}</Text>
        <Card style = {{ flex: 1, width:'100%', flexDirection: 'row', padding: 20 }}>
          <View style = {{ flex: 1, width:'100%', flexDirection: 'row' }}>
            <View style = {{ flex: 8, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 4 }}>{match.time_casa && match.time_casa.nome ? match.time_casa.nome : ''}</Text>
              <Image 
              style = {{ width: 27, height: 30 }} 
              source = {{ uri: match.time_casa && match.time_casa.escudo ? match.time_casa.escudo : ''}} 
              resizeMode = {'contain'} />
              <Text style = {{ flex: 1,textAlign:'right', fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>{match.time_casa && match.time_casa.placar ? match.time_casa.placar : '0'}</Text>
            </View>
            <View style = {{ flex: 1, justifyContent:'center',alignItems:'center' }}>
              <Text>x</Text>
            </View>
            <View style = {{ flex: 8, flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 1, fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>{match.time_visitante && match.time_visitante.placar ? match.time_visitante.placar : '0'}</Text>
              <Image 
              style = {{ width: 27, height: 30 }} 
              source = {{ uri: match.time_casa && match.time_visitante.escudo ? match.time_visitante.escudo : ''}} 
              resizeMode = {'cover'} />
              <Text style = {{ flex: 4, textAlign:'right' }}>{match.time_visitante && match.time_visitante.nome ? match.time_visitante.nome : ''}</Text>
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
          <Text style = { styles.headerText} >{'JOGOS RECENTES - '.concat(this.props.currentDay ? this.props.currentDay : 'Loading')}  </Text>
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
  currentDay: PropTypes.string,

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
    times: selectors.getCurrentMatches(state),
    currentDay: selectors.getCurrentDay(state),
  }),
  { loadTimes }
)(GroupList)