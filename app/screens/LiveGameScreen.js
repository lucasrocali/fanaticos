import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Image as CachedImage} from "react-native-expo-image-cache";
import { StyleSheet, Image, View ,TouchableOpacity, FlatList, Share} from 'react-native';
import { connect } from 'react-redux';
import { loadTimes, loadAtletas, loadTimeline } from '../actions'
import { Container, Content, List, Text, Card, Body } from 'native-base';
import * as selectors from '../reducers/reducers';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons'
import HTML from 'react-native-render-html';


const imageWidth = 60
const logoWidth = 40

class LiveGame extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      new_player_ids: []
    };
  }

  componentDidMount() {
    const { times, atletas, loadTimes, loadAtletas } = this.props;
    if (!this.props.times || this.props.times.length == 0) {
      this.props.loadTimes()
    }
    if (!this.props.atletas || this.props.atletas.length == 0) {
      this.props.loadAtletas()
    } 
    if (!this.props.posts || this.props.posts.length == 0) {
      this.props.loadTimeline()
    } 
  }
  renderPlayer = ({ item: atleta, index }) => {
    // console.log("RENDER PLAYER",atleta)
    return (
      <TouchableOpacity style = {{ justifyContent:'center', alignItems:'center', padding: 5 }} onPress={()=> this.props.navigation.navigate({ key: 'Story', routeName: 'Story', params: { atleta: atleta }})}>
        <View    style = {{ width: imageWidth, height: imageWidth, borderRadius: imageWidth/2, borderWidth: 3, borderColor: atleta.new_story ? Colors.darkGreen : Colors.lightGrey , opacity: atleta.new_story ? 1.0 : 0.3, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
          <CachedImage 
              style = {{width: imageWidth, height: imageWidth, padding: 5 }} 
              uri = { atleta.fotos && atleta.fotos['300x300'] && atleta.fotos['300x300'] }
              resizeMode = {'contain'} />
         </View>
       
        <Text style = {{ fontSize: 10,textAlign:'center'}} >{atleta.nome_popular}</Text>
      </TouchableOpacity>
    )
  }

  renderCartolaInfo = (lance, index) => {
    return (
      <Card style = {{ flex: 1, backgroundColor: lance.mock ? Colors.lightLightGrey : Colors.white, width:'100%', flexDirection: 'row', padding: 10, margin: 20 }}>
            <View style = {{ flex: 3, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <View  style = {{ flex: 4 }}  style = {{ width: imageWidth, height: imageWidth, borderRadius: imageWidth/2, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
                <CachedImage 
                  style = {{width: imageWidth, height: imageWidth, padding: 5 }} 
                  uri = {lance && lance.jogador && lance.jogador.foto} 
                  resizeMode = {'contain'} />
              </View>
              <CachedImage 
              style = {{ width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = {lance && lance.jogador && lance.jogador.foto_equipe} 
              resizeMode = {'cover'} />
            </View>
            <View style = {{ flex: 3, flexDirection: 'column', justifyContent:'center' }}>
              <Text style = {{ fontWeight:'bold',fontSize:16, color: Colors.darkGrey }}>{lance.jogador && lance.jogador.nome && lance.jogador.nome}</Text>
              <Text style = {{ fontSize:12, color: Colors.darkGrey }}>{lance.jogador && lance.jogador.posicao && lance.jogador.posicao}</Text>
            </View>

            <View style = {{ flex: 2, flexDirection: 'column', justifyContent:'center' }}>
              <Text style = {{ fontWeight:'bold',fontSize:20, color: lance.pontos && lance.pontos >= 0 ? Colors.darkGreen : Colors.darkRed }}>{lance.pontos && lance.pontos + 'PTS'}</Text>
              <Text style = {{ fontSize:10, color: Colors.darkGrey }}>{lance.detalhe && lance.detalhe}</Text>
            </View>
            <TouchableOpacity 
                    style = {{ flex: 1, padding: 20, alignItems:'flex-end', justifyContent:'flex-end'}}
                    onPress={() => Share.share({
                        message: lance.pontos + 'PTS. ' + lance.detalhe + '. Veja mais no Fanaticos!',
                        url: 'https://globoesporte.globo.com/rj/futebol/brasileirao-serie-a/jogo/28-04-2018/botafogo-gremio.ghtml',
                        title: '',
                      }, {
                        // Android only:
       

                      })} >
                        <Ionicons name='ios-send' size={30} color="grey"  />
                    </TouchableOpacity>
           
          </Card>
    )
  }

  renderPlacar = () => {
    const placar = this.props.placar
    return (
      <TouchableOpacity style = {{ padding: 20 }} onPress={()=> console.log("on press")}>
        <Text style = {{ padding: 10, fontSize: 10,textAlign:'center'}} >DOM 29/04/2018</Text>
        <View style = {{ flex: 1, width:'100%', flexDirection: 'row', paddingHorizontal: 20 }}>
          <View style = {{ flex: 1, width:'100%', flexDirection: 'row' }}>
            <View style = {{ flex: 8, flexDirection: 'row', justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 4, textAlign:'right', fontWeight:'bold',fontSize:14, color: Colors.darkGrey }}>{placar.time1 && placar.time1.nome && placar.time1.nome }</Text>
              <CachedImage 
              style = {{ flex: 2, width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = { placar.time1 && placar.time1.foto && placar.time1.foto }
              resizeMode = {'cover'} />
              <Text style = {{ flex: 1,textAlign:'right', fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>{placar.time1 && placar.time1.gols && placar.time1.gols }</Text>
            </View>
            <View style = {{ flex: 1, justifyContent:'center',alignItems:'center' }}>
              <Text>x</Text>
            </View>
            <View style = {{ flex: 8, flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
              <Text style = {{ flex: 1, fontWeight:'bold',fontSize:20, color: Colors.darkGrey }}>{placar.time2 && placar.time2.gols && placar.time2.gols }</Text>
              <CachedImage 
              style = {{ flex: 2, width: logoWidth, height: logoWidth, marginHorizontal: 10 }} 
              uri = { placar.time2 && placar.time2.foto && placar.time2.foto }
              resizeMode = {'cover'} />
              <Text style = {{ flex: 4, fontWeight:'bold',fontSize:14, color: Colors.darkGrey }}>{placar.time2 && placar.time2.nome && placar.time2.nome }</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderText = (lance) => {
    return (
      <View>
         <Text  style = {{ fontWeight:'bold',fontSize:14 }}>{lance.titulo && lance.titulo}</Text>
         <HTML html={lance.texto && lance.texto} />
         {lance.url_thumb_grande &&
         <Image 
              style = {{ width: '100%', height: 120 }} 
              source = {{ uri: lance.url_thumb_grande ? lance.url_thumb_grande : ''}} 
              resizeMode = {'contain'} />
         }
        <View style = {{ backgroundColor: Colors.lightLightGrey, height:1, width: '100%'}} />
          {/* <Text  style = {{ fontWeight:'bold',fontSize:12, color: Colors.darkGrey }}>{lance.texto && lance.texto}</Text> */}
      </View>
    )
  }

  renderTrocaPlayer = (jogador,in_out) => {
    return (
      <View style = {{ flexDirection: 'row',justifyContent:'center',alignItems:'center' }}>
          <View  style = {{ flex: 2 }}  style = {{ width: imageWidth/2, height: imageWidth/2, borderRadius: imageWidth/2, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
            <CachedImage 
                style = {{width: imageWidth/2, height: imageWidth/2, padding: 5 }} 
                uri = { jogador.foto && jogador.foto}
                resizeMode = {'contain'} />
          </View>
          <View style = {{ flex: 8, padding: 5 }}>
            <Text style = {{ fontWeight:'bold',fontSize:16, color: Colors.darkGrey }}>{jogador.nome && jogador.nome}</Text>
            <Text style = {{ fontSize:14, color: Colors.darkGrey }}>{jogador.posicao && jogador.posicao}</Text>
          </View>
          <View style = {{ flex: 2, padding: 5, justifyContent:'center',alignItems:'center' }}>
            <Text style = {{ fontWeight:'bold',fontSize:12, color: in_out == 'in' ? Colors.darkGreen : Colors.darkRed }}>{in_out == 'in' ? 'Entra' : 'Sai'}</Text>
          </View>
        </View>
    )
  }

  renderTroca = (lance) => {
    return (
      <View>
        {this.renderTrocaPlayer(lance.troca.in,'in')}
        <View style = {{ backgroundColor: Colors.lightGrey, height:1, width: '100%'}} />
        {this.renderTrocaPlayer(lance.troca.out,'out')}
     </View>
    )
  }

  getImageAssets(tipo) {
    console.log(tipo)
    switch (tipo) {
      case 'cartaoamarelo': return require('./assets/cartaoam.png');
      case 'troca': return require('./assets/troca.png');
      case 'gol': return require('./assets/gol.png');
      default: return require('./assets/normal.png');
    }
  }


  renderLanceInfo = (lance, index) => {
    return (
      <View style = {{ flex: 1, flexDirection: 'row' }} >
        <View style = {{ flex: 2, padding: 10, justifyContent:'center', alignItems:'center' }} >
          <Text style = {{ textAlign:'center', fontWeight:'bold',fontSize:16, color: Colors.darkGrey }}>{lance.momento && lance.momento.concat('\'')}</Text>
          <Text style = {{ textAlign:'center', fontWeight:'bold',fontSize:10, color: Colors.darkGrey }}>{lance.periodo && lance.periodo + ''}</Text>
        </View>
        <View style = {{ width:16, justifyContent:'center'}} >
          <View style = {{ backgroundColor: Colors.lightGrey, width:2, height: '100%', position: 'absolute',marginHorizontal:7}} />
        
          <Image 
              style = {{ width: 16, height: 16, position: 'absolute' }} 
              source = { this.getImageAssets(lance.tipo.concat(lance.cor ? lance.cor : '')) } 
              resizeMode = {'cover'} />
        </View>
        <View style = {{ flex: 8, padding: 10 }} >
          {lance.tipo == 'troca' ? this.renderTroca(lance) : lance.texto && !lance.texto.includes("text") && this.renderText(lance)}
        </View>
      </View>
    )
  }
  
  renderLance = ({ item: lance, index }) => {
    return (
      lance.tipo == 'cartola' ? this.renderCartolaInfo( lance, index ) : this.renderLanceInfo(lance, index )
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
						data={this.props.posts}
						renderItem={this.renderLance}
						keyExtractor={(lance,index) => index.toString()}
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
  posts: PropTypes.array,
  placar: PropTypes.object,

  loadTimes: PropTypes.func.isRequired,
  loadAtletas: PropTypes.func.isRequired,
  loadTimeline: PropTypes.func.isRequired
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
    times: selectors.getCurrentMatches(state),
    atletas: selectors.getAtletas(state),
    posts: selectors.getPosts(state),
    placar: selectors.getPlacar(state)
  }),
  { loadTimes,loadAtletas, loadTimeline }
)(LiveGame)