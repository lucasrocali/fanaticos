
export function loginRequest(user_login) {
  return {
        "id": 3,
        "name": "lucas",
        "email": "rocali@facebook.commmdd3",
        "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1MTk2MDkwODF9.Z5W8s0SdnehZgiG6jTWoP_gGWKyFmyqlvLx_TQJeflE",
        "login_type": "Facebook",
        "lists": [],
        "liked_spots": [],
        "checked_spots": [],
        "rated_spots": []
    };
}

export function signupRequest(user_signup) {
  return {
        "id": 9,
        "name": "lucas",
        "email": "rocali@outlook.commcm",
        "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE1MTk2MDk4ODZ9.6mNrXx4UoRzgZRps-JJ4MdyWeYFg3nvxcTtFKbOkwpY",
        "login_type": "Manual",
        "lists": [],
        "liked_spots": [],
        "checked_spots": [],
        "rated_spots": []
    };
}

export function getAtletasRequest(token) {
    return {
      "elenco": [
        {
          "id": 50328,
          "nome": "Marcelo Oliveira Ferreira",
          "nome_popular": "Marcelo Oliveira",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Grêmio Foot-Ball Porto-Alegrense",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/gremio_60x60.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/gremio_30x30.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/gremio.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/gremio_45x45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#000000",
              "primaria": "#0099cc"
            },
            "equipe_id": 284,
            "sigla": "GRE",
            "nome_popular": "Grêmio",
            "slug": "gremio"
          },
          "stories": [
            {
              "tipo": "gol",
              "valor": 1,
              "visualizado": true
            },
            {
              "tipo": "cartao_amarelo",
              "valor": 1,
              "visualizado": true
            }
          ]
        },
        {
          "id": 68827,
          "nome": "Renato de Araújo Chaves Júnior",
          "nome_popular": "Renato Chaves",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Fluminense Football Club",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/fluminense_60x60.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/Fluminense-escudo.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/10/fluminense.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/fluminense_45x45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#006600",
              "primaria": "#660000"
            },
            "equipe_id": 266,
            "sigla": "FLU",
            "nome_popular": "Fluminense",
            "slug": "fluminense"
          },
          "stories": [
            {
              "tipo": "gol",
              "valor": 1,
              "visualizado": false
            }
          ]
        },
        {
          "id": 93414,
          "nome": "Mauro Joel Carli",
          "nome_popular": "Joel Carli",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Botafogo de Futebol e Regatas",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/botafogo_60x60.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/botafogo_30x30.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/botafogo.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/botafogo_45x45.png"
            },
            "cores": {
              "terciaria": "#cccccc",
              "secundaria": "#ffffff",
              "primaria": "#000000"
            },
            "equipe_id": 263,
            "sigla": "BOT",
            "nome_popular": "Botafogo",
            "slug": "botafogo"
          },
          "stories": [
            {
              "tipo": "cartao_amarelo",
              "valor": 1,
              "visualizado": false
            }
          ]
        },
        {
          "id": 37694,
          "nome": "Henrique Pacheco de Lima",
          "nome_popular": "Henrique",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2018/04/13/441a4c5211eb67346524c663e768f7b3_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Cruzeiro Esporte Clube",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_65.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_30.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/cruzeiro.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#ffffff",
              "primaria": "#1c498e"
            },
            "equipe_id": 283,
            "sigla": "CRU",
            "nome_popular": "Cruzeiro",
            "slug": "cruzeiro"
          },
          "stories": [
            {
              "tipo": "cartao_amarelo",
              "valor": 1,
              "visualizado": false
            }
          ]
        },
        {
          "id": 38277,
          "nome": "Thiago Neves Augusto",
          "nome_popular": "Thiago Neves",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2017/02/19/6bb6e70216d205ad23e44268eba27692_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Cruzeiro Esporte Clube",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_65.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_30.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/cruzeiro.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2015/04/29/cruzeiro_45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#ffffff",
              "primaria": "#1c498e"
            },
            "equipe_id": 283,
            "sigla": "CRU",
            "nome_popular": "Cruzeiro",
            "slug": "cruzeiro"
          },
          "stories": [
            {
              "tipo": "gol",
              "valor": 1,
              "visualizado": true
            }
          ]
        },
        {
          "id": 63024,
          "nome": "Fransérgio Rodrigues Barbosa",
          "nome_popular": "Fransérgio",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_35x35.jpeg",
            "220x220": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_220x220.jpeg",
            "50x50": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_50x50.jpeg",
            "80x80": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_80x80.jpeg",
            "140x140": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_140x140.jpeg",
            "300x300": "https://s.glbimg.com/es/sde/f/2011/08/12/ca45f2689a25ed2d6532b9537c87c689_300x300.jpeg"
          },
          "equipe": {
            "genero": "M",
            "nome": "Guaratinguetá Futebol Ltda.",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_60x60.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_30x30.png",
              "svg": null,
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/guaratingueta_45x45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#aa0000",
              "primaria": "#0000aa"
            },
            "equipe_id": 3322,
            "sigla": "GTA",
            "nome_popular": "Guaratinguetá",
            "slug": "guaratingueta"
          },
          "stories": [
            {
              "tipo": "cartao_vermelho",
              "valor": 1,
              "visualizado": false
            }
          ]
        },
        {
          "id": 80188,
          "nome": "Marcos Junio Lima dos Santos",
          "nome_popular": "Marcos Junior",
          "fotos": {
            "35x35": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_35x35.png",
            "220x220": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_220x220.png",
            "50x50": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_50x50.png",
            "80x80": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_80x80.png",
            "140x140": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_140x140.png",
            "300x300": "https://s.glbimg.com/es/sde/f/2018/01/21/9e2b3f7cad84245a7922f06c4731bcc0_300x300.png"
          },
          "equipe": {
            "genero": "M",
            "nome": "Fluminense Football Club",
            "escudos": {
              "60x60": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/fluminense_60x60.png",
              "30x30": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/Fluminense-escudo.png",
              "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/10/fluminense.svg",
              "45x45": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/fluminense_45x45.png"
            },
            "cores": {
              "terciaria": "#000000",
              "secundaria": "#006600",
              "primaria": "#660000"
            },
            "equipe_id": 266,
            "sigla": "FLU",
            "nome_popular": "Fluminense",
            "slug": "fluminense"
          },
          "stories": [
            {
              "tipo": "cartao_amarelo",
              "valor": 1,
              "visualizado": false
            }
          ]
        }
      ]
    }
}

export function gettimesRequest(token) {
  return {
    "data_hoje": "04/05/2018",
    "jogos": [
      {
        "transmissao_id": 27832,
        "status": "Encerrada",
        "fase_rodada": "Quartas de final",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": null,
          "placar": 0,
          "sigla": "BAH",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2014/04/14/bahia_30x30.png",
          "nome": "Bahia"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "21:45",
        "nome_campeonato": "Copa do Nordeste",
        "url": "http://globoesporte.globo.com/ba/futebol/copa-do-nordeste/jogo/03-05-2018/bahia-botafogo-pb",
        "time_visitante": {
          "penalti": null,
          "placar": 0,
          "sigla": "BOT",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2011/01/28/botafogo-pb_30x30.png",
          "nome": "Botafogo-PB"
        },
        "localizacao": "Pituaçu",
        "data": "03/05/2018",
        "id": 224029
      },
      {
        "transmissao_id": 27846,
        "status": "Encerrada",
        "fase_rodada": "",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": 0,
          "placar": 0,
          "sigla": "SFE",
          "escudo": "http://s.glbimg.com//es/sde/f/organizacoes/2018/02/20/SantaFe-35.png",
          "nome": "Santa Fe"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "21:30",
        "nome_campeonato": "Taça Libertadores",
        "url": "http://globoesporte.globo.com/futebol/libertadores/jogo/03-05-2018/independiente-santa-fe-river-plate",
        "time_visitante": {
          "penalti": 0,
          "placar": 1,
          "sigla": "RIV",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2011/04/15/riverplate_30.png",
          "nome": "River Plate"
        },
        "localizacao": "El Campín",
        "data": "03/05/2018",
        "id": 222529
      },
      {
        "transmissao_id": 27835,
        "status": "Encerrada",
        "fase_rodada": "",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": 0,
          "placar": 1,
          "sigla": "ALI",
          "escudo": "http://s.glbimg.com//es/sde/f/organizacoes/2018/02/21/Allianza-30.png",
          "nome": "Alianza Lima"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "21:30",
        "nome_campeonato": "Taça Libertadores",
        "url": "http://globoesporte.globo.com/sp/futebol/libertadores/jogo/03-05-2018/alianza-lima-palmeiras",
        "time_visitante": {
          "penalti": 0,
          "placar": 3,
          "sigla": "PAL",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2014/04/14/palmeiras_30x30.png",
          "nome": "Palmeiras"
        },
        "localizacao": "Alejandro Villanueva",
        "data": "03/05/2018",
        "id": 220794
      },
      {
        "transmissao_id": 27855,
        "status": "Encerrada",
        "fase_rodada": "Primeira fase",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": 0,
          "placar": 2,
          "sigla": "IRA",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2013/09/28/iranduba_30.png",
          "nome": "Iranduba"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "21:00",
        "nome_campeonato": "Campeonato Brasileiro Feminino",
        "url": "http://globoesporte.globo.com/am/jogo/03-05-2018/iranduba-sport-feminino",
        "time_visitante": {
          "penalti": 0,
          "placar": 1,
          "sigla": "SPO",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2015/07/21/sport30.png",
          "nome": "Sport"
        },
        "localizacao": "Arena da Amazônia",
        "data": "03/05/2018",
        "id": 224045
      },
      {
        "transmissao_id": 27857,
        "status": "Encerrada",
        "fase_rodada": "6ª rodada",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": 0,
          "placar": 1,
          "sigla": "SAN",
          "escudo": "https://s.glbimg.com//es/sde/f/equipes/2016/04/21/SantosAP-30.png",
          "nome": "Santos-AP"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "20:30",
        "nome_campeonato": "Campeonato Amapaense",
        "url": "http://globoesporte.globo.com/ap/futebol/campeonato-amapaense/jogo/03-05-2018/santos-ap-macapa-ap",
        "time_visitante": {
          "penalti": 0,
          "placar": 0,
          "sigla": "MAC",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2014/01/23/macapa-30.png",
          "nome": "Macapá"
        },
        "localizacao": "Zerão",
        "data": "03/05/2018",
        "id": 222361
      },
      {
        "transmissao_id": 27845,
        "status": "Encerrada",
        "fase_rodada": "Semifinal",
        "dia_semana": "Qui",
        "time_casa": {
          "penalti": 0,
          "placar": 1,
          "sigla": "ATL",
          "escudo": "https://s.glbimg.com//es/sde/f/equipes/2017/07/24/AtleticoMadrid-30.png",
          "nome": "Atlético de Madrid"
        },
        "video_ao_vivo": "",
        "tipo_transmissao": "lance_a_lance",
        "hora": "16:05",
        "nome_campeonato": "Liga Europa",
        "url": "http://globoesporte.globo.com/futebol/futebol-internacional/jogo/03-05-2018/atleticodemadri-arsenal",
        "time_visitante": {
          "penalti": 0,
          "placar": 0,
          "sigla": "ARS",
          "escudo": "https://s.glbimg.com//es/sde/f/organizacoes/2014/04/14/arsenal_30x30.png",
          "nome": "Arsenal"
        },
        "localizacao": "Metropolitano",
        "data": "03/05/2018",
        "id": 223635
      }
    ]
  }
}

export function getTimelineRequest(token) {
  return [
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 1,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tIniciamos agora mais uma transmiss&atilde;o da Copa do Nordeste. A partir das 21h45, o Bahia recebe o Botafogo-PB no Pitua&ccedil;u, em Salvador, no jogo que vai apontar o primeiro semifinalista da competi&ccedil;&atilde;o regional. E voc&ecirc;, amigo internauta, acompanha todas as emo&ccedil;&otilde;es dessa partida, em Tempo Real, aqui no GloboEsporte.com de agora em diante.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "FALA, RAPAZIADA!",
      "foto_url": "",
      "id": 2328401,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": "http://s2.glbimg.com/Zum2ebW-Yy0wxvGDI3TqhbHHSd8=/1055x360/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/03/55/6695503",
      "total_mensagens": 2,
      "tipo": "LANCE",
      "url_thumb_pequeno": "http://s2.glbimg.com/tQSVN4ggx_HcvPWj8r3wUY0hkwo=/255x143/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/03/55/6695503",
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": "http://s2.glbimg.com/pdA_y64g_9pXxS2zpxxYtSPsCDI=/640x360/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/03/55/6695503",
      "video_id": "6695503",
      "periodo_id": 1,
      "texto": "<p>\n\tBahia e Botafogo-PB abriram esta quarta de final na quinta-feira da semana passada, quando se enfrentaram no Est&aacute;dio Almeid&atilde;o, em Jo&atilde;o Pessoa. Naquela oportunidade, os baiano levaram a melhor e, mesmo jogando fora de casa, venceram por 2 a 1. <strong>Relembre aquela partida.</strong></p>\n",
      "id": 2328416,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "COMO FOI O JOGO DE IDA?",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 3,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tComo venceu o jogo de ida marcando dois gols na casa do advers&aacute;rio, o tricolor da Boa Terra pode at&eacute; perder por 1 a 0 que, ainda assim, avan&ccedil;a para as semifinais. Empate ou vit&oacute;ria tamb&eacute;m classificam o Bahia.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "DO QUE O BAHIA PRECISA?",
      "foto_url": "",
      "id": 2328419,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 4,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tCom a derrota por 2 a 1 em casa, o time paraibano entra em campo logo mais precisando fazer pelo menos dois gols. Se vencer por dois ou mais gols de diferen&ccedil;a, se classifica. Se vencer por apenas um de diferen&ccedil;a, vai ter que balan&ccedil;ar as redes do Bahia pelo menos tr&ecirc;s vezes para avan&ccedil;ar sem precisar da disputa por p&ecirc;naltis. Se devolver o 2 a 1, ent&atilde;o a decis&atilde;o vai para as penalidades m&aacute;ximas.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "E O BOTAFOGO-PB?",
      "foto_url": "",
      "id": 2328422,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": "http://s2.glbimg.com/7SZHDXA0DD_tYghZgkrCs9LShWI=/1055x360/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/88/6698865",
      "total_mensagens": 5,
      "tipo": "LANCE",
      "url_thumb_pequeno": "http://s2.glbimg.com/0eGFnEnCAAPAqvCJAascOW0ABD8=/255x143/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/88/6698865",
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": "http://s2.glbimg.com/UpwbCZ3nxunUEjx13LjyotCKwMY=/640x360/filters:max_age(3600)/s02.video.glbimg.com/deo/vi/65/88/6698865",
      "video_id": "6698865",
      "periodo_id": 1,
      "texto": "<p>\n\tNo &uacute;ltimo domingo, o Tricolor entrou em campo pela S&eacute;rie A do Brasileir&atilde;o. Jogando em casa, mas na Fonte Nova, a equipe baiana ficou no empate sem gols com o Atl&eacute;tico-PR e, com o resultado ocupa a 13&ordf; coloca&ccedil;&atilde;o na primeipal competi&ccedil;&atilde;o de clubes do pa&iacute;s. <strong>Reveja os lances daquele jogo.</strong></p>\n",
      "id": 2328429,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "O BAHIA VEM DE EMPATE NA SÉRIE A",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": "http://s2.glbimg.com/z49xFHYwsBpsnWFoOCFRmoT6kjk=/1055x360/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/27/33/6703327",
      "total_mensagens": 6,
      "tipo": "LANCE",
      "url_thumb_pequeno": "http://s2.glbimg.com/rgYVmHzPUoSp0-B0vyXj9TQApgU=/255x143/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/27/33/6703327",
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": "http://s2.glbimg.com/7ivPAG88h_8qVm56DxG1KP-RNWA=/640x360/filters:max_age(3600)/s04.video.glbimg.com/deo/vi/27/33/6703327",
      "video_id": "6703327",
      "periodo_id": 1,
      "texto": "<p>\n\tJ&aacute; o time paraibano jogou na segunda-feira, tamb&eacute;m em casa, no Almeid&atilde;o, e venceu o Confian&ccedil;a por 2 a 0 pela S&eacute;rie C do Brasileiro. Com o resultado, o Belo assumiu a lideran&ccedil;a do Grupo A da terceira divis&atilde;o nacional. <strong>Relembre a partida.</strong></p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "O BOTAFOGO-PB VEM DE VITÓRIA NA SÉRIE C",
      "foto_url": "",
      "id": 2328433,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 7,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<strong>&Aacute;rbitro principal:</strong> Nielson Nogueira Dias (foto)<br />\n\t<strong>Assistente 1:</strong> Marcelino Castro de Nazar&eacute;<br />\n\t<strong>Assistente 2:</strong> Ricardo Bezerra Chianca</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "Aldo Carneiro / Pernambuco Press",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "TRIO DE ARBITRAGEM PERNAMBUCANO NO PITUAÇU",
      "foto_url": "http://s2.glbimg.com/5XReN4yRCrMHPw3wr960qldBPdI=/0x47:886x545/640x360/s.glbimg.com/es/ge/f/original/2013/05/05/3_5.jpg",
      "id": 2328440,
      "foto_titulo": "árbitro nielson nogueira",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 8,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<strong><br />\n\t&Aacute;rbitro principal:</strong> Nielson Nogueira Dias (foto)<br />\n\t<strong>Assistente 1:</strong> Marcelino Castro de Nazar&eacute;<br />\n\t<strong>Assistente 2:</strong> Ricardo Bezerra Chianca</p>\n",
      "id": 2328440,
      "nome_time": "",
      "momento": "",
      "foto_credito": "Aldo Carneiro / Pernambuco Press",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "TRIO DE ARBITRAGEM PERNAMBUCANO NO PITUAÇU",
      "foto_url": "http://s2.glbimg.com/5XReN4yRCrMHPw3wr960qldBPdI=/0x47:886x545/640x360/s.glbimg.com/es/ge/f/original/2013/05/05/3_5.jpg",
      "time": "",
      "foto_titulo": "árbitro nielson nogueira",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 9,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<br />\n\t01 Douglas<br />\n\t<br />\n\t22 Jo&atilde;o Pedro<br />\n\t03 Tiago<br />\n\t25 Everson<br />\n\t06 Mena<br />\n\t<br />\n\t15 Edson<br />\n\t05 Fl&aacute;vio<br />\n\t20 R&eacute;gis<br />\n\t10 Z&eacute; Rafael<br />\n\t<br />\n\t07 &Eacute;lber<br />\n\t23 J&uacute;nior Brumado<br />\n\t<br />\n\t<strong>T&eacute;c.:</strong> Guto Ferreira</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "BAHIA JÁ ESCALADO",
      "foto_url": "",
      "id": 2328453,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 10,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<br />\n\t01 Douglas<br />\n\t<br />\n\t22 Jo&atilde;o Pedro<br />\n\t03 Tiago &copy;<br />\n\t25 Everson<br />\n\t06 Mena<br />\n\t<br />\n\t15 Edson<br />\n\t05 Fl&aacute;vio<br />\n\t20 R&eacute;gis<br />\n\t10 Z&eacute; Rafael<br />\n\t<br />\n\t07 &Eacute;lber<br />\n\t23 J&uacute;nior Brumado<br />\n\t<br />\n\t<strong>T&eacute;c.:</strong> Guto Ferreira</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BAHIA JÁ ESCALADO",
      "foto_url": "",
      "id": 2328453,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 11,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<br />\n\t01 Saulo<br />\n\t<br />\n\t07 Djavan<br />\n\t20 Walber<br />\n\t14 Lula<br />\n\t19 Carlos Renato<br />\n\t<br />\n\t30 Jata&iacute;<br />\n\t08 Allan Dias<br />\n\t17 Mazinho<br />\n\t10 Marcos Aur&eacute;lio&nbsp;<br />\n\t<br />\n\t11 Dico<br />\n\t09 Nando<br />\n\t<br />\n\t<strong>T&eacute;c.:</strong> Leston J&uacute;nior</p>\n",
      "id": 2328462,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BOTAFOGO-PB TAMBÉM DEFINIDO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 12,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Confira a escala\\u00e7\\u00e3o completa do @ECBahia. #trpituacu \", \"user\": {\"name\": \"Cadu Vieira\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/819180747403784198/Tv_LXDW1_normal.jpg\", \"screen_name\": \"CaduVieira09\"}, \"photo\": [\"http://pbs.twimg.com/media/DcT5sKoWAAYw8ye.jpg\"]}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328464,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 13,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Veja tamb\\u00e9m a escala\\u00e7\\u00e3o completa do @BotafogoPB. #trpituacu \", \"user\": {\"name\": \"Cadu Vieira\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/819180747403784198/Tv_LXDW1_normal.jpg\", \"screen_name\": \"CaduVieira09\"}, \"photo\": [\"http://pbs.twimg.com/media/DcT77-SXcAEHf1H.jpg\"]}",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328481,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 14,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Os dois times est\\u00e3o em trabalho de aquecimento. #trpituacu \", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": [\"http://pbs.twimg.com/media/DcT9ZXvW4AAyOAq.jpg\"]}",
      "id": 2328486,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 15,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">O Botafogo-PB não relacionou nenhum lateral-direito para a partida contra o Bahia. Quem deve assumir essa função é campo é o volante Djavan, que já atuou assim em outras oportunidades. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a></p>&mdash; Cadu Vieira (@CaduVieira09) <a href=\"https://twitter.com/CaduVieira09/status/992196701418086400?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328491,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 16,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">Na verdade, o lateral-direito Gedeilson seria o titular na lateral direita do Botafogo-PB, mas foi vetado há pouco por estar com febre. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a></p>&mdash; Cadu Vieira (@CaduVieira09) <a href=\"https://twitter.com/CaduVieira09/status/992197273588322304?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328493,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 17,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Bahia vai a campo com muitas novidades. Al\\u00e9m de n\\u00e3o poder contar com os lesionados, Guto preferiu poupar alguns jogadores. #trpituacu\", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": []}",
      "id": 2328494,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 18,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Everson, Jo\\u00e3o Pedro, Mena, Edson, Fl\\u00e1vio, R\\u00e9gis e J\\u00fanior Brumado ganham oportunidade de mostrar servi\\u00e7o no time titular. #trpituacu\", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": []}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328496,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 19,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<br />\n\t01 Douglas<br />\n\t<br />\n\t22 Jo&atilde;o Pedro<br />\n\t03 Tiago &copy;<br />\n\t25 Everson<br />\n\t06 Mena<br />\n\t<br />\n\t15 Edson<br />\n\t05 Fl&aacute;vio<br />\n\t20 R&eacute;gis<br />\n\t10 Z&eacute; Rafael<br />\n\t07 &Eacute;lber<br />\n\t<br />\n\t23 J&uacute;nior Brumado<br />\n\t<br />\n\t<strong>T&eacute;c.:</strong> Guto Ferreira</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BAHIA JÁ ESCALADO",
      "foto_url": "",
      "id": 2328453,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 20,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Fim do aquecimento. J\\u00e1, j\\u00e1 tem bola rolando. #trpituacu \", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": [\"http://pbs.twimg.com/media/DcT_oN0WkAA7BRM.jpg\"]}",
      "id": 2328502,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 21,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "{\"text\": \"Enquanto o @BotafogoPB tem apenas seis jogadores no banco de reservas, o Bahia tem 10 op\\u00e7\\u00f5es na supl\\u00eancia. #trpituacu\", \"user\": {\"name\": \"Cadu Vieira\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/819180747403784198/Tv_LXDW1_normal.jpg\", \"screen_name\": \"CaduVieira09\"}, \"photo\": []}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328510,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 22,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tQuem avan&ccedil;ar deste duelo entre Bahia e Botafogo-PB vai enfrentar na semifinal o vencedor do confronto entre CRB e Cear&aacute;. Alagoanos e cearense v&atilde;o se enfrentar nos dias 10 e 23 deste m&ecirc;s.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "NA PRÓXIMA FASE...",
      "foto_url": "",
      "id": 2328518,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 23,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tBahia e Botafogo-PB entram juntos no campo de Pitua&ccedil;u. Os baianos vestem as tradicionais camisas tricolores, cal&ccedil;&otilde;es azuis e mei&otilde;es vermelhos, enquanto os paraibanos vestem camisas brancas, cal&ccedil;&otilde;es pretos e mei&otilde;es brancos.</p>\n",
      "id": 2328521,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "AÍ VÊM OS TIMES...",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 24,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tO hino do estado do time mandante &eacute; executado neste momento.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "HINO DA BAHIA",
      "foto_url": "",
      "id": 2328526,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 25,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tAgora &eacute; a vez do Hino Nacional Brasileiro.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "\"GIGANTE PELA PRÓPRIA NATUREZA\"",
      "foto_url": "",
      "id": 2328528,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 26,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tQuem avan&ccedil;ar deste duelo entre Bahia e Botafogo-PB vai enfrentar na semifinal o vencedor do confronto entre CRB e Cear&aacute;. Alagoanos e cearenses v&atilde;o se enfrentar nos dias 10 e 23 deste m&ecirc;s.</p>\n",
      "id": 2328518,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "NA PRÓXIMA FASE...",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 27,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tQuase tudo pronto para o in&iacute;cio da partida entre Bahia e Botafogo-PB no Pitua&ccedil;u.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "FALTA POUCO",
      "foto_url": "",
      "id": 2328535,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 28,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tO Bahia vai dar a sa&iacute;da de jogo.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "VAI COMEÇAR",
      "foto_url": "",
      "id": 2328542,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 29,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\tHomenagem p&oacute;stuma &agrave; m&atilde;e do t&eacute;cnico Guto Ferreira, do Bahia, que morreu nesta semana.</p>\n",
      "id": 2328546,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "UM MINUTO DE SILÊNCIO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 30,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tRola a bola no Pitua&ccedil;u. Come&ccedil;a Bahia x Botafogo-PB.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "0",
      "foto_credito": "",
      "time": "",
      "titulo": "ESTÁ VALENDO!",
      "foto_url": "",
      "id": 2328547,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 31,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Bahia come&ccedil;a a partida tocando a bola no campo de defesa. O Botafogo-PB marca de longe.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "1",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328551,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 32,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tZ&eacute; Rafael consegue boa jogada e &eacute; parado com falta, por Walber, na entrada da &aacute;rea do Botafogo-PB. Boa chance para o Bahia na bola parada.</p>\n",
      "id": 2328553,
      "nome_time": "",
      "momento": "2",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 33,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tZ&eacute; Rafael cobra a falta direito e a bola explode na barreira. No rebote, Z&eacute; Rafael tenta de novo e, mais uma vez, acerta a barreira.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "3",
      "foto_credito": "",
      "time": "",
      "titulo": "NA BARREIRA",
      "foto_url": "",
      "id": 2328557,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 34,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB tenta trabalhar a bola na intermedi&aacute;rio, mas o Bahia fecha os espa&ccedil;os.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "4",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328560,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 35,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tCarlos Renato tenta o lan&ccedil;amento longo para Nando, no ataque do Botafogo-PB, mas o camisa 9 n&atilde;o consegue o dom&iacute;nio.</p>\n",
      "id": 2328561,
      "nome_time": "",
      "momento": "5",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 36,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Bahia avan&ccedil;a pela direita e &Eacute;lber cruza na &aacute;rea do Botafogo-PB, mas a defesa alvinegra afasta o perigo dali.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "6",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328563,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 37,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB n&atilde;o consegue trocar muitos passes, sempre esbarrando na boa marca&ccedil;&atilde;o do Bahia.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "7",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328571,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 38,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">Bahia mantém estrutura com time alternativa. 4-2-3-1, com Regis centralizado, Élber na direita, Zé na esquerda e Brumado à frente. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a> <a href=\"https://t.co/MhTGOEnneW\">pic.twitter.com/MhTGOEnneW</a></p>&mdash; Ruan Melo (@ruanmelo_) <a href=\"https://twitter.com/ruanmelo_/status/992204324733415429?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "id": 2328573,
      "nome_time": "",
      "momento": "8",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 39,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB melhora na partida e fica mais tempo no campo de ataque. Mas ainda sem levar perigo ao gol do Bahia.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "9",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328577,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 40,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tR&eacute;gis tenta levar o Bahia ao ataque, mas acaba fazendo falta em Allan Dias.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "10",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328579,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 41,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tJo&atilde;o Pedro cruza da direita e R&eacute;gis chega a ganhar pelo alto da zaga botafoguense, mas Lula aparece para afastar o perigo da &aacute;rea.</p>\n",
      "id": 2328581,
      "nome_time": "",
      "momento": "11",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "CHEGADA DO BAHIA",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 42,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Bahia adianta a marca&ccedil;&atilde;o e dificulta a sa&iacute;da de bola do Botafogo-PB.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "12",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328586,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 43,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;lber arrisca de fora da &aacute;rea. A bola explode na trave esquerda do goleiro Saulo e cai nos p&eacute;s de Z&eacute; Rafael. O jogador tricolor finaliza para o gol livre, mas o zagueiro Walber aparece para salvar praticamente de cima da linha. A bola ainda volta para Z&eacute; Rafael, que manda para fora. Quase o primeiro do Bahia.</p>\n",
      "time": 91,
      "nome_time": "Bahia",
      "momento": "13",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "INCRÍVEL!!!!",
      "foto_url": "",
      "id": 2328591,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 44,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tZ&eacute; Rafael agora avan&ccedil;a pela esquerda e cruza rente ao ch&atilde;o. A bola passa na frente de Brumado, que se estica, mas n&atilde;o consegue completar para o gol.</p>\n",
      "id": 2328593,
      "nome_time": "",
      "momento": "14",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "OLHA O BAHIA DE NOVO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 45,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "{\"text\": \"Lance perigoso do Bahia come\\u00e7ou com press\\u00e3o do time na sa\\u00edda de bola e desarme de Fl\\u00e1vio. \\u00d3timo chute de \\u00c9lber. #trpituacu\", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": []}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "14",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328594,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 46,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tDico cruza da esquerda, na &aacute;rea do Bahia, buscando Nando, mas o cruzamento sai um pouco mais forte do que devia, e a bola se perde pela linha de fundo.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "15",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "RESPOSTA DO BOTAFOGO-PB",
      "foto_url": "",
      "id": 2328596,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 47,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tSem pressa, o Bahia vai trocando passes e mantendo a posse de bola.</p>\n",
      "id": 2328601,
      "nome_time": "",
      "momento": "16",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 48,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB tenta avan&ccedil;ar pela esquerda, mas o assistente marca impedimento do ataque alvinegro. O &aacute;rbitro deixa seguir e aponta apenas tiro de meta para o Bahia.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "17",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328605,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 49,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tZ&eacute; Rafael passa para Mena, que cruza na &aacute;rea do Botafogo-PB para mais uma vez a defesa alvinegra afastar o perigo dali.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "18",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328610,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 50,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tJata&iacute; lan&ccedil;a para Dico, que &eacute; flagrado mais uma vez em impedimento no ataque do Botafogo-PB.</p>\n",
      "id": 2328612,
      "nome_time": "",
      "momento": "19",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 51,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB troca bons passes no meio de campo, mas acaba sendo desarmado na desaten&ccedil;&atilde;o de Jata&iacute;.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "21",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328623,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 52,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tJ&atilde;o Pedro cruza mais uma da direita do ataque do Bahia, mas Walber aparece livre para ficar com a bola e sair jogando para o Botafogo-PB.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "22",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328626,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 53,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tBrumado recebe na &aacute;rea e ajeita para R&eacute;gis, que solta a bomba. No centro do gol, Saulo salva o Botafogo-PB.</p>\n",
      "id": 2328630,
      "nome_time": "Bahia",
      "momento": "23",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "SAAAAAAAULOOOOO!!!",
      "foto_url": "",
      "time": 91,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 54,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "{\"text\": \"Nem Z\\u00e9 Rafael acredita. Jogador cai se lamentando ap\\u00f3s perder gol. #trpituacu \", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": [\"http://pbs.twimg.com/media/DcUJOgFXUAAtBjs.jpg\"]}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "23",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328631,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 55,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tNa sequ&ecirc;ncia do lance anterior, Z&eacute; Rafael recebe cruzamento rasteiro da direita e bate de primeira, livre, na linha da pequena &aacute;rea, mas manda para fora, por cima do gol de Saulo.</p>\n",
      "time": 91,
      "nome_time": "Bahia",
      "momento": "23",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "INACREDITÁVEL!",
      "foto_url": "",
      "id": 2328634,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 56,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tAp&oacute;s dois lances de quase gol, o Bahia tenta sufocar o Botafogo-PB. Vai para cima o Tricolor.</p>\n",
      "id": 2328635,
      "nome_time": "",
      "momento": "24",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "PRESSÃO DO BAHIA",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 57,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "{\"text\": \"At\\u00e9 agora na primeira etapa, jogo de um time s\\u00f3. O Bahia acha espa\\u00e7o facilmente e j\\u00e1 criou chances reais. #trpituacu\", \"user\": {\"name\": \"Pedro Alves\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/964962981707763712/bHsR58FJ_normal.jpg\", \"screen_name\": \"pedroalve_s\"}, \"photo\": []}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "24",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328641,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 58,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tCarlos Renato tabela com Dico e, ap&oacute;s cruzamento da esquerda, a bola passa por todo mundo dentro da &aacute;rea do Bahia. Nando n&atilde;o consegue desviar contra o gol de Douglas.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "26",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BOA CHEGADA DO BOTAFOGO-PB",
      "foto_url": "",
      "id": 2328643,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 59,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tMais posse de bola, mas chances de gol... O Bahia segue dominando a partida no Pitua&ccedil;u.</p>\n",
      "id": 2328647,
      "nome_time": "",
      "momento": "28",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 60,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;lber recebe na direita do ataque do Bahia e tenta o drible da vaca em Lula. Ele cai no lance, pede falta, mas o &aacute;rbitro manda seguir.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "29",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328651,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 61,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tJo&atilde;o Pedro cruza na medida para Brumado, que completa de cabe&ccedil;a e manda para as redes do goleiro Saulo. Mas a arbitragem marca impedimento do atacante do Bahia.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "30",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "NÃO VALEU!!!",
      "foto_url": "",
      "id": 2328655,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 62,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tDico tenta a tabela com Marcos Aur&eacute;lio, mas o camisa 10 do Botafogo-PB &eacute; desarmado.</p>\n",
      "id": 2328660,
      "nome_time": "",
      "momento": "32",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 63,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "{\"text\": \"Bahia \\u00e9 superior no jogo. Tem mais posse de bola e procura sempre as jogadas de linha de fundo. Falta acertar a finaliza\\u00e7\\u00e3o. #trpituacu\", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": []}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "32",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328662,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 64,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tR&eacute;gis enfeita no ataque do Bahia, toca de calcanhar, mas a jogada n&atilde;o segue.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "33",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328663,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 65,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "atr",
      "periodo": "Pré-Jogo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 1,
      "texto": "<p>\n\t<br />\n\t01 Saulo<br />\n\t<br />\n\t07 Djavan<br />\n\t20 Walber<br />\n\t14 Lula<br />\n\t19 Carlos Renato<br />\n\t<br />\n\t30 Jata&iacute;<br />\n\t08 Allan Dias<br />\n\t17 Mazinho<br />\n\t10 Marcos Aur&eacute;lio &copy;<br />\n\t<br />\n\t11 Dico<br />\n\t09 Nando<br />\n\t<br />\n\t<strong>T&eacute;c.:</strong> Leston J&uacute;nior</p>\n",
      "id": 2328462,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BOTAFOGO-PB TAMBÉM DEFINIDO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 66,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">O Tricolor dá espaço para o Belo, que ainda joga com muita timidez. Nem dificulta a criação do Bahia nem tenta impor seu ritmo. Não que seja fácil, pelo contrário. Mas não há ainda a atitude de buscar fazer seu jogo. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a></p>&mdash; Pedro Alves (@pedroalve_s) <a href=\"https://twitter.com/pedroalve_s/status/992211291635888129?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "34",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328666,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 67,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB vai para cima e concede contra-ataque para o Bahia, com Everson, que passa para R&eacute;gis. Mas a defesa alvinegra se recomp&otilde;e a tempo e rouba a bola.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "36",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328669,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 68,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tZ&eacute; Rafael arrisca de fora da &aacute;rea, de perna direita, com curva, e a bola passa perto, tirando tinta da trave esquerda de Saulo.</p>\n",
      "id": 2328672,
      "nome_time": "Bahia",
      "momento": "37",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "TIRANDO TINTA",
      "foto_url": "",
      "time": 91,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 69,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tDica avan&ccedil;a com velocidade pela esquerda e chuta cruzado. O goleiro Douglas salta bonito para fazer a defesa e encaixar a bola.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "Botafogo-PB",
      "momento": "38",
      "foto_credito": "",
      "time": 204,
      "titulo": "OLHA O BOTAFOGO-PB",
      "foto_url": "",
      "id": 2328675,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 70,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tDica avan&ccedil;a com velocidade pela esquerda e chuta cruzado. O goleiro Douglas salta bonito para fazer a defesa e encaixar a bola.</p>\n",
      "time": 204,
      "nome_time": "Botafogo-PB",
      "momento": "38",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "OLHA O BELO",
      "foto_url": "",
      "id": 2328675,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 71,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tMazinho arrisca de fora da &aacute;rea, de perna esquerda, mas erra feio e manda para fora, longe do gol do Bahia.</p>\n",
      "id": 2328680,
      "nome_time": "",
      "momento": "40",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 72,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Bahia segue insistindo nas jogadas pelas pontas e dando muito trabalho aos marcadores do Botafogo-PB.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "41",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328682,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 73,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tR&eacute;gis d&aacute; o passe para Brumado, dentro da &aacute;rea do Bahia, mas Djavan se estica todo e, no carrinho, consegue desviar contra a pr&oacute;pria meta. Saulo se joga para fazer a defesa. N&atilde;o foi recuo.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "42",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "id": 2328683,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 74,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;lber fica ca&iacute;do, sentindo dores no ombro, e o &aacute;rbitro autoriza a entrada da equipe m&eacute;dica do Bahia.</p>\n",
      "id": 2328685,
      "nome_time": "",
      "momento": "43",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "JOGO PARADO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 75,
      "tipo": "LANCE_TWITTER",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "{\"text\": \"Allione pronto para entrar em campo. #trpituacu \", \"user\": {\"name\": \"Ruan Melo\", \"profile_image_url\": \"http://pbs.twimg.com/profile_images/669160034723581952/uar4z4bb_normal.jpg\", \"screen_name\": \"ruanmelo_\"}, \"photo\": [\"http://pbs.twimg.com/media/DcUN4UhXkAEVJpM.jpg\"]}",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "43",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328686,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 76,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;ber n&atilde;o tem mais condi&ccedil;&otilde;es de jogo. Ele vai sair para a entrada de Alione.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "44",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "VAI SAIR",
      "foto_url": "",
      "id": 2328687,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 77,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;lber n&atilde;o tem mais condi&ccedil;&otilde;es de jogo. Ele vai sair para a entrada de Alione.</p>\n",
      "id": 2328687,
      "nome_time": "",
      "momento": "44",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "VAI SAIR",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "periodo": "1º tempo",
      "periodo_id": 2,
      "texto": "<p>\n\t<span class=\"msg\"><strong>Sai:&nbsp;&Eacute;lber</strong><br />\n\t<strong>Entra:&nbsp;Allione</strong></span></p>",
      "momento": "45",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "id": 2328688,
      "total_mensagens": 78,
      "tipo": "LANCE_SUBSTITUICAO",
      "foto_url": "",
      "url_thumb_medio": null,
      "foto_titulo": "",
      "titulo": "",
      "operacao": "INCLUSAO",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "substituicao": {
        "pessoatr_id": 6174,
        "foto": "https://s.glbimg.com/es/sde/f/2018/03/21/1b00098477bad4e60d3bc520dc464ab7_80x80.png",
        "timetr_id": 91,
        "titular": true,
        "nome": "Élber",
        "substituido_por": {
          "pessoatr_id": 12069,
          "foto": "https://s.glbimg.com/es/sde/f/2018/03/21/3c614f3fa77de55748fa8ddfdef2eecc_80x80.png",
          "titular": false,
          "nome": "Allione",
          "substituido_por": "",
          "posicao_descricao": "Meio-campo",
          "camisa": "",
          "posicao": "MEC",
          "atuacao_id": 565062
        },
        "minuto_entrou": 0,
        "ordem": 10,
        "posicao_descricao": "Meio-campo",
        "time_id": 265,
        "periodo_entrou": {
          "bola_rolando": 1,
          "ordem": 2,
          "id_tipo_cobertura": "",
          "periodo_id": 2,
          "nome_exibicao": "1º tempo",
          "sigla": "1tr"
        },
        "posicao": "MEC",
        "jogotr_id": 22909,
        "camisa": "",
        "atuacao_id": 565053,
        "jogo_id": 224029,
        "lance_substituto": ""
      },
      "url_thumb_grande": null,
      "nome_time": "Bahia",
      "video_id": "",
      "foto_credito": "",
      "time": 91,
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 79,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\t&Eacute;lber n&atilde;o tem mais condi&ccedil;&otilde;es de jogo. Ele vai sair para a entrada de Allione.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "44",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "VAI SAIR",
      "foto_url": "",
      "id": 2328687,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 80,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tO Botafogo-PB troca passes, rondando a &aacute;rea do Bahia, at&eacute; que Dico &eacute; lan&ccedil;ado pela esquerda, mas em posi&ccedil;&atilde;o irregular. Impedimento.</p>\n",
      "id": 2328692,
      "nome_time": "",
      "momento": "46",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 81,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "1tr",
      "periodo": "1º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 2,
      "texto": "<p>\n\tFim do primeiro tempo no Pitua&ccedil;u.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "47",
      "foto_credito": "",
      "time": "",
      "titulo": "APITA O ÁRBITRO",
      "foto_url": "",
      "id": 2328693,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 82,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\t<strong>Meia do Bahia<br />\n\t</strong>&quot;Erro meu. Assumo. A gente podia estar com o jogo bem tranquilo se eu n&atilde;o tivesse falhado nessas duas bolas&quot;.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "FALA, ZÉ RAFAEL",
      "foto_url": "",
      "id": 2328699,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 83,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\t<strong>Meia do Botafogo-PB</strong><br />\n\t&quot;A nossa equipe conseguiu netralizar o Bahia. A gente errou numas bolas ali. Temos que procurar errar menos e agora ir para cima, buscar os gols&quot;.</p>\n",
      "id": 2328702,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "FALA, MARCOS AURÉLIO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 84,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\tOs jogadores dos dois times v&atilde;o deixando o campo de jogo e se dirigindo para os vesti&aacute;rios do Pitua&ccedil;u.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328704,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 85,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\t<br />\n\t33 Anderson<br />\n\t32 Fernando<br />\n\t02 Nino<br />\n\t14 L&eacute;o<br />\n\t28 Lucas Fonseca<br />\n\t26 Gregore<br />\n\t19 Nilton<br />\n\t08 Alliano (j&aacute; entrou)<br />\n\t31 Felipe<br />\n\t29 Vinicius<br />\n\t21 Kayke</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BANCO DO BAHIA",
      "foto_url": "",
      "id": 2328710,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "ALTERACAO",
      "url_thumb_grande": null,
      "total_mensagens": 86,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\t<br />\n\t33 Anderson<br />\n\t32 Fernando Castro<br />\n\t02 Nino Para&iacute;ba<br />\n\t14 L&eacute;o<br />\n\t28 Lucas Fonseca<br />\n\t26 Gregore<br />\n\t19 Nilton<br />\n\t08 Alliano (j&aacute; entrou)<br />\n\t31 Felipinho<br />\n\t29 Vinicius<br />\n\t21 Kayke</p>\n",
      "id": 2328710,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BANCO DO BAHIA",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 87,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\t<br />\n\t12 Remerson<br />\n\t32 Daniel<br />\n\t05 Hiroshi<br />\n\t21 J&uacute;nior Lopes<br />\n\t31 Marquinhos<br />\n\t28 Alex Gon&ccedil;alves</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "time": "",
      "titulo": "BANCO DO BOTAFOGO-PB",
      "foto_url": "",
      "id": 2328714,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 88,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\tOs jogadores do Tricolor j&aacute; est&atilde;o no campo de jogo para a segunda etapa.</p>\n",
      "time": "",
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BAHIA JÁ DE VOLTA",
      "foto_url": "",
      "id": 2328734,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 89,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "itr",
      "periodo": "Intervalo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 4,
      "texto": "<p>\n\tAgora os atletas do Alvinegro tamb&eacute;m voltam para o campo.</p>\n",
      "id": 2328737,
      "nome_time": "",
      "momento": "",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "BOTAFOGO-PB TAMBÉM NO GRAMADO",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 90,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<p>\n\tRola a bola o Botafogo-PB.</p>\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "0",
      "foto_credito": "",
      "time": "",
      "titulo": "COMEÇA O SEGUNDO TEMPO",
      "foto_url": "",
      "id": 2328742,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "periodo": "2º tempo",
      "periodo_id": 5,
      "texto": "<p>\n\t<span class=\"msg\"><strong>Sai:&nbsp;Tiago </strong><br />\n\t<strong>Entra:&nbsp;Lucas Fonseca</strong></span></p>",
      "momento": "0",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "id": 2328743,
      "total_mensagens": 91,
      "tipo": "LANCE_SUBSTITUICAO",
      "foto_url": "",
      "url_thumb_medio": null,
      "foto_titulo": "",
      "titulo": "",
      "operacao": "INCLUSAO",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "substituicao": {
        "pessoatr_id": 7645,
        "foto": "https://s.glbimg.com/es/sde/f/2018/03/21/d0b3cd897f4a410323886fb6d92bd822_80x80.png",
        "jogotr_id": 22909,
        "titular": true,
        "nome": "Tiago ",
        "substituido_por": {
          "pessoatr_id": 8483,
          "foto": "https://s.glbimg.com/es/sde/f/2018/03/21/5c1c52f3afc41a4404dd7b1c888f2124_80x80.png",
          "titular": false,
          "nome": "Lucas Fonseca",
          "substituido_por": "",
          "posicao_descricao": "Zagueiro",
          "camisa": "",
          "posicao": "ZAD",
          "atuacao_id": 565058
        },
        "minuto_entrou": 0,
        "ordem": 3,
        "posicao_descricao": "Zagueiro",
        "time_id": 265,
        "periodo_entrou": {
          "bola_rolando": 1,
          "ordem": 2,
          "id_tipo_cobertura": "",
          "periodo_id": 2,
          "nome_exibicao": "1º tempo",
          "sigla": "1tr"
        },
        "posicao": "ZAD",
        "timetr_id": 91,
        "camisa": "",
        "atuacao_id": 565046,
        "jogo_id": 224029,
        "lance_substituto": ""
      },
      "url_thumb_grande": null,
      "nome_time": "Bahia",
      "video_id": "",
      "foto_credito": "",
      "time": 91,
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 92,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<p>\n\tO Botafogo-PB volta sem altera&ccedil;&otilde;es.</p>\n",
      "id": 2328745,
      "nome_time": "",
      "momento": "0",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 93,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">Precisando de pelo menos dois gols para se classificar, o <a href=\"https://twitter.com/BotafogoPB?ref_src=twsrc%5Etfw\">@BotafogoPB</a> vai ter que ir para cima em busca dos gols. E, consequentemente, deve dar mais espaços para o Bahia. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a></p>&mdash; Cadu Vieira (@CaduVieira09) <a href=\"https://twitter.com/CaduVieira09/status/992219407010103297?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "1",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328748,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 94,
      "tipo": "LANCE_IMPORTANTE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<p>\n\tMarcos Aur&eacute;lio cobra falta de muito longe. E manda direto. Uma bomba. Douglas se estica e desvia para escanteio. Quase o primeiro do Botafogo-PB.</p>\n",
      "time": 204,
      "nome_time": "Botafogo-PB",
      "momento": "2",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "UUUUUUUUUHHHH!!!!",
      "foto_url": "",
      "id": 2328752,
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 95,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<p>\n\tMarcos Aur&eacute;lio cobra o tiro de canto, e o goleiro Douglas tira de soco, cedendo mais um escanteio para o Botafogo-PB.</p>\n",
      "id": 2328754,
      "nome_time": "",
      "momento": "2",
      "foto_credito": "",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "titulo": "",
      "foto_url": "",
      "time": "",
      "foto_titulo": "",
      "video_multicamera": false
    },
    {
      "operacao": "INCLUSAO",
      "url_thumb_grande": null,
      "total_mensagens": 96,
      "tipo": "LANCE",
      "url_thumb_pequeno": null,
      "periodo_sigla": "2tr",
      "periodo": "2º tempo",
      "url_thumb_medio": null,
      "video_id": "",
      "periodo_id": 5,
      "texto": "<blockquote class=\"twitter-tweet\" data-lang=\"pt\"><p lang=\"pt\" dir=\"ltr\">Everson muda posicionamento com entrada de Lucas. No primeiro tempo jogou pela esquerda. Na etapa final foi deslocado para a direita. <a href=\"https://twitter.com/hashtag/trpituacu?src=hash&amp;ref_src=twsrc%5Etfw\">#trpituacu</a></p>&mdash; Ruan Melo (@ruanmelo_) <a href=\"https://twitter.com/ruanmelo_/status/992219875421585408?ref_src=twsrc%5Etfw\">4 de maio de 2018</a></blockquote>\n\n",
      "jogo": {
        "equipe_visitante": {
          "id": 349,
          "nome": "Botafogo-PB"
        },
        "equipe_mandante": {
          "id": 265,
          "nome": "Bahia"
        }
      },
      "nome_time": "",
      "momento": "3",
      "foto_credito": "",
      "time": "",
      "titulo": "",
      "foto_url": "",
      "id": 2328759,
      "foto_titulo": "",
      "video_multicamera": false
    }
  ]
}