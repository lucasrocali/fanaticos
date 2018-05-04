import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions'
import {Image as CachedImage} from "react-native-expo-image-cache";
import { View, Text, Image, AsyncStorage, ImageBackground, TouchableOpacity, Share } from 'react-native';
import { Container, Body, Spinner } from 'native-base';
import Colors from '../constants/Colors';
import { storeEmailKey, storePasswordKey, storeLoginTypeKey, storeSocialIdKey } from '../constants/Constants';
import * as selectors from '../reducers/reducers';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import { Ionicons } from '@expo/vector-icons'
const imageWidth = 300

// const atleta = {
//     "nome": "Fransérgio Rodrigues Barbosa",
//     "nome_popular": "Fransérgio",
//     "fotos": {
//       "35x35": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_35x35.jpeg",
//       "220x220": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_220x220.jpeg",
//       "50x50": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_50x50.jpeg",
//       "80x80": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_80x80.jpeg",
//       "140x140": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_140x140.jpeg",
//       "300x300": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_300x300.jpeg"
//     },
//     "equipe": {
//       "genero": "M",
//       "nome": "Guaratinguetá Futebol Ltda.",
//       "escudos": {
//         "60x60": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_60x60.png",
//         "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_30x30.png",
//         "svg": null,
//         "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_45x45.png"
//       },
//       "cores": {
//         "terciaria": "#000000",
//         "secundaria": "#aa0000",
//         "primaria": "#0000aa"
//       },
//       "equipe_id": 3322,
//       "sigla": "GTA",
//       "nome_popular": "Guaratinguetá",
//       "slug": "guaratingueta"
//     },
//     "stories": [
//       {
//         "tipo": "cartao_vermelho",
//         "valor": 1,
//         "visualizado": false
//       },
//       {
//         "tipo": "cartao_amarelo",
//         "valor": 1,
//         "visualizado": true
//       },
//       {
//         "tipo": "gol",
//         "valor": 1,
//         "visualizado": false
//       }
//     ]
//   }

class Story extends Component {

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

    getImageAssets(tipo) {
        //console.log(tipo)
        switch (tipo) {
          case 'gol': return require('./assets/gol_big.png');
          case 'cartao_amarelo': return require('./assets/cartao_amarelo.png');
          case 'cartao_vermelho': return require('./assets/cartao_vermelho.png');
          default: return require('./assets/gol_big.png');
        }
      }

    getName (tipo) {
        switch (tipo) {
          case 'gol': return 'GOL';
          case 'cartao_amarelo': return 'CARTÃO AMARELO';
          case 'cartao_vermelho': return 'CARTÃO VERMELHO';
          default: return '';
        }
      }

    renderStoryView(story,index) {
        const { atleta } = this.props.navigation.state.params;
        return (
            <View key = {index} style={{backgroundColor: Colors.baseColorOrange}}>
                <ImageBackground 
                    source={ require('./assets/background_story.png') }
                    style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <View style = {{ padding: 30}} >
                        <Text style = {{ fontSize: 30, textAlign:'center' }}>{atleta.equipe && atleta.equipe.nome_popular && atleta.equipe.nome_popular}</Text>
                    </View>
                    <View  style = {{ justifyContent:'center', alignItems:'center', marginTop: 70 }}>
                        <View  style = {{ width: imageWidth/2, height: imageWidth/2, borderRadius: imageWidth/2, overflow:'hidden', justifyContent:'center', alignItems:'center', marginBottom: 5, backgroundColor: Colors.white }}>
                            <CachedImage 
                                style = {{width: imageWidth/2, height: imageWidth/2, padding: 5 }} 
                                uri = { atleta.fotos && atleta.fotos['300x300'] && atleta.fotos['300x300'] }
                                resizeMode = {'contain'} />
                        </View>
                    </View>
                    <View style = {{ paddingHorizontal: 35}} >
                        <Text style = {{ fontSize: 40, textAlign:'center', fontWeight:'bold', color: Colors.white }}>{atleta.nome_popular}</Text>
                    </View>
                    <View style = {{ flexDirection: 'row',marginTop: 20}} >
                        <View style = {{ flex:1, justifyContent:'center', alignItems:'center'}} >
                            <Image 
                                style = {{width: imageWidth/2, height: imageWidth/2, padding: 5 }} 
                                source = { this.getImageAssets(story.tipo) } 
                                resizeMode = {'contain'} />
                        </View>
                        <View style = {{ flex:1, justifyContent:'center', alignItems:'center' }} >
                            <Text style = {{ fontSize: 40,fontWeight:'bold', textAlign:'center',  color: Colors.white }}>{story.valor}</Text>
                            <Text style = {{ fontSize: 30,fontWeight:'bold', textAlign:'center', color: Colors.white }}>{this.getName(story.tipo)}</Text>
                        </View>
                    </View>
                    <View style = {{ flexDirection: 'row',marginTop: 10}} >
                        <TouchableOpacity 
                        style = {{ flex:1, padding: 20, alignItems:'flex-start', justifyContent:'flex-start'}}
                        onPress={() => this.props.navigation.goBack(null)} >
                            <Ionicons name='ios-close' size={50} color="white"  />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style = {{ flex:1, padding: 20, alignItems:'flex-end', justifyContent:'flex-end'}}
                        onPress={() => Share.share({
                            message: story.valor + ' ' + this.getName(story.tipo) + ' de ' + atleta.nome_popular + '. Veja mais no Fanaticos!',
                            url: 'https://globoesporte.globo.com/rj/futebol/brasileirao-serie-a/jogo/28-04-2018/botafogo-gremio.ghtml',
                            title: '',
                        }, {
                            // Android only:
        

                        })} >
                            <Ionicons name='ios-send' size={50} color="white"  />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

  render() {
    const { atleta } = this.props.navigation.state.params;
    // //console.log(atleta)
    return (
        <View style={{flex:1}}>
            <IndicatorViewPager
                style={{height:'100%'}}
                indicator={this._renderDotIndicator()}
            >
            {atleta && atleta.stories &&  atleta.stories.map((story,index) => this.renderStoryView(story,index)) }
          
            
                
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