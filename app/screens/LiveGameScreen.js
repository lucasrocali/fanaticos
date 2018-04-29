import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Image as CachedImage} from "react-native-expo-image-cache";
import { StyleSheet, Image, View ,TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { loadTimes, loadAtletas } from '../actions'
import { Container, Content, List, Text, Card, Body } from 'native-base';
import * as selectors from '../reducers/reducers';
import Colors from '../constants/Colors';

const imageWidth = 60
const logoWidth = 40

class LiveGame extends Component {

  componentDidMount() {
    const { times, atletas, loadTimes, loadAtletas } = this.props;
    if (!times || times.length == 0) {
      loadTimes()
    }
    if (!atletas || atletas.length == 0) {
      loadAtletas()
    } 
  }

  renderPlayer = ({ item: atleta, index }) => {
    console.log("RENDER PLAYER",atleta)
    return (
      <TouchableOpacity style = {{ justifyContent:'center', alignItems:'center', padding: 5 }} onPress={()=> this.props.navigation.navigate({ key: 'Story', routeName: 'Story', params: { atleta: atleta }})}>
        <View    style = {{ width: imageWidth, height: imageWidth, borderRadius: imageWidth/2, borderWidth: 2, borderColor: Colors.lightGrey, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
          <CachedImage 
              style = {{width: imageWidth, height: imageWidth, padding: 5 }} 
              uri = { atleta.fotos && atleta.fotos['300x300'] && atleta.fotos['300x300'] }
              resizeMode = {'contain'} />
         </View>
       
        <Text style = {{ fontSize: 10,textAlign:'center'}} >{atleta.nome_popular}</Text>
      </TouchableOpacity>
    )
  }

  renderCartolaInfo = () => {
    return (
      <Card style = {{ flex: 1, width:'100%', flexDirection: 'row', padding: 10, margin: 20 }}>
            <View style = {{ flex: 3, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <View  style = {{ flex: 4 }}  style = {{ width: imageWidth, height: imageWidth, borderRadius: imageWidth/2, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
                <CachedImage 
                  style = {{width: imageWidth, height: imageWidth, padding: 5 }} 
                  uri = {'https://s.glbimg.com/es/sde/f/2017/08/22/0d561ddc8dda735fc3ab96a8866e90d0_300x300.jpeg'} 
                  resizeMode = {'contain'} />
              </View>
              <CachedImage 
              style = {{ width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = {'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png'} 
              resizeMode = {'cover'} />
            </View>
            <View style = {{ flex: 3, flexDirection: 'column', justifyContent:'center' }}>
              <Text style = {{ fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>Jogador</Text>
              <Text style = {{ fontSize:16, color: Colors.darkGrey }}>Atacante</Text>
            </View>

            <View style = {{ flex: 2, flexDirection: 'column', justifyContent:'center' }}>
              <Text style = {{ fontWeight:'bold',fontSize:20, color: Colors.darkGreen }}>+3PTS</Text>
              <Text style = {{ fontSize:10, color: Colors.darkGrey }}>Joagador deu assiteência para o gol</Text>
            </View>
          </Card>
    )
  }

  renderPlacar = () => {
    return (
      <TouchableOpacity style = {{ padding: 20 }} onPress={()=> console.log("on press")}>
        <Text style = {{ padding: 10, fontSize: 10,textAlign:'center'}} >DOM 29/04/2010</Text>
        <View style = {{ flex: 1, width:'100%', flexDirection: 'row', paddingHorizontal: 20 }}>
          <View style = {{ flex: 1, width:'100%', flexDirection: 'row' }}>
            <View style = {{ flex: 8, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 4, textAlign:'right', fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>A</Text>
              <CachedImage 
              style = {{ flex: 2, width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = {'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png'} 
              resizeMode = {'cover'} />
              <Text style = {{ flex: 1,textAlign:'right', fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>2</Text>
            </View>
            <View style = {{ flex: 1, justifyContent:'center',alignItems:'center' }}>
              <Text>x</Text>
            </View>
            <View style = {{ flex: 8, flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 1, fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>0</Text>
              <CachedImage 
              style = {{ flex: 2, width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = {'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/09/Flamengo-45.png'}
              resizeMode = {'cover'} />
              <Text style = {{ flex: 4, fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>B</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderText = () => {
    return (
      <View>
         <Text  style = {{ fontWeight:'bold',fontSize:14 }}>Acabou</Text>
          <Text  style = {{ fontWeight:'bold',fontSize:12, color: Colors.darkGrey }}>teste teste teste</Text>
      </View>
    )
  }

  renderTrocaPlayer = () => {
    return (
      <View style = {{ flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
          <View  style = {{ flex: 2 }}  style = {{ width: imageWidth/2, height: imageWidth/2, borderRadius: imageWidth/2, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
          <CachedImage 
              style = {{width: imageWidth/2, height: imageWidth/2, padding: 5 }} 
              uri = { 'https://s.glbimg.com/es/sde/f/2017/08/22/0d561ddc8dda735fc3ab96a8866e90d0_300x300.jpeg'}
              resizeMode = {'contain'} />
          </View>
          <View style = {{ flex: 8, padding: 5 }}>
            <Text style = {{ fontWeight:'bold',fontSize:16, color: Colors.darkGrey }}>B</Text>
            <Text style = {{ fontSize:14, color: Colors.darkGrey }}>B</Text>
          </View>
          <View style = {{ flex: 2, padding: 5, justifyContent:'center',alignItems:'center' }}>
            <Text style = {{ fontWeight:'bold',fontSize:12, color: Colors.darkGrey }}>Entra</Text>
          </View>
        </View>
    )
  }

  renderTroca = () => {
    return (
      <View>
        {this.renderTrocaPlayer()}
        <View style = {{ backgroundColor: Colors.lightGrey, height:1, width: '100%'}} />
        {this.renderTrocaPlayer()}
     </View>
    )
  }

  

  renderLanceInfo = ({ item: lance, index }) => {
    return (
      <View style = {{ flex: 1, flexDirection: 'row' }} >
        <View style = {{ flex: 2, padding: 10, justifyContent:'center', alignItems:'center' }} >
          <Text style = {{ fontWeight:'bold',fontSize:16, color: Colors.darkGrey }}>47'</Text>
          <Text style = {{ fontWeight:'bold',fontSize:10, color: Colors.darkGrey }}>2º TEMPO</Text>
        </View>
        <View style = {{ width:16, justifyContent:'center'}} >
          <View style = {{ backgroundColor: Colors.lightGrey, width:2, height: '100%', position: 'absolute',marginHorizontal:7}} />
        
          <Image 
              style = {{ width: 16, height: 16, position: 'absolute' }} 
              source = { index == 1 ? require('./assets/troca.png') : index == 2 ? require('./assets/normal.png') : index == 3 ? require('./assets/cartaoam.png') : require('./assets/troca.png') } 
              resizeMode = {'cover'} />
        </View>
        <View style = {{ flex: 8, padding: 10 }} >
          {index % 3 == 0 ? this.renderText() : this.renderTroca()}
        </View>
      </View>
    )
  }
  
  renderLance = ({ item: lance, index }) => {
    return (
      index % 2 == 0 ? this.renderLanceInfo({ item: lance, index }) : this.renderCartolaInfo({ item: lance, index })
    )
  }

  render() {
    return (
       <Container style = {{ backgroundColor: '#FFF' }} >
        <Content>
          <FlatList
						data={this.props.atletas}
						horizontal={true}
						renderItem={this.renderPlayer}
						keyExtractor={atleta => atleta.nome_popular.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={ { marginTop: 10 } }
					/>
          {this.renderPlacar()}
          <Text style = { styles.headerText} >LANCE A LANCE</Text>
          <FlatList
						data={this.props.times}
						renderItem={this.renderLance}
						keyExtractor={lance => lance.id.toString()}
					/>
        </Content>
      </Container>
    );
  }
}

// <List style={ styles.gridList }>
//             {times && times.map((group) => this.renderSpotCardItem(group)) }
//           </List>

LiveGame.propTypes = {
  times: PropTypes.array,
  atletas: PropTypes.array,

  loadTimes: PropTypes.func.isRequired,
  loadAtletas: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  headerText: {
    padding: 15,
    textAlign:'left'
  },
  gameCellView: {
    padding: 10
  }
})

export default connect(
  state => ({
    times: selectors.gettimes(state),
    atletas: selectors.getAtletas(state)
  }),
  { loadTimes,loadAtletas }
)(LiveGame)