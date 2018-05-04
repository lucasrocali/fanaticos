
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
  return [
        {
            "id": 13,
            "name": "Escolas",
            "icon": "",
            "tags": [
                {
                    "id": 4,
                    "g_type": "school",
                    "name": "school"
                }
            ]
        },
        {
            "id": 23,
            "name": "Lojas",
            "icon": "",
            "tags": [
                {
                    "id": 5,
                    "g_type": "store",
                    "name": "store"
                }
            ]
        },
        {
            "id": 14,
            "name": "Escolas",
            "icon": "",
            "tags": [
                {
                    "id": 4,
                    "g_type": "school",
                    "name": "school"
                }
            ]
        },
        {
            "id": 24,
            "name": "Lojas",
            "icon": "",
            "tags": [
                {
                    "id": 5,
                    "g_type": "store",
                    "name": "store"
                }
            ]
        },
        {
            "id": 15,
            "name": "Escolas",
            "icon": "",
            "tags": [
                {
                    "id": 4,
                    "g_type": "school",
                    "name": "school"
                }
            ]
        },
        {
            "id": 25,
            "name": "Lojas",
            "icon": "",
            "tags": [
                {
                    "id": 5,
                    "g_type": "store",
                    "name": "store"
                }
            ]
        },
        {
            "id": 16,
            "name": "Escolas",
            "icon": "",
            "tags": [
                {
                    "id": 4,
                    "g_type": "school",
                    "name": "school"
                }
            ]
        },
        {
            "id": 26,
            "name": "Lojas",
            "icon": "",
            "tags": [
                {
                    "id": 5,
                    "g_type": "store",
                    "name": "store"
                }
            ]
        }
    ];
}

export function getTimelineRequest(token) {
  return {
    "placar": {
      "time1": {
        "nome": "Botafogo",
        "gols": "1",
        "foto": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/botafogo_60x60.png"
      },
      "time2": {
        "nome": "Grêmio",
        "gols": "1",
        "foto": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/gremio_60x60.png"
      }
    },
    "lances": [
      {
        "tipo": "texto",
        "min": "49",
        "tempo": "primeiro",
        "titulo": "FIM DE JOGO!",
        "detalhe": "Jogo encerrado"
      },
      {
        "tipo": "cartola",
        "mock": true,
        "min": "43",
        "tempo": "segundo",
        "pontos": "+5",
        "jogador": {
          "atleta_id": "68827",
          "nome": "Renato de Araújo Chaves Júnior",
          "posicao": "ATACANTENTE",
          "foto": "https://s.glbimg.com/es/sde/f/2018/01/21/71897950622a7c7260a587b71229a2ee_300x300.png",
          "foto_equipe": "https://s.glbimg.com/es/sde/f/equipes/2015/07/21/fluminense_45x45.png"
        },
        "titulo": "GOL",
        "detalhe": "Fluminense 1 x 0 São Paulo"
      },
      {
        "tipo": "texto",
        "min": "45",
        "tempo": "primeiro",
        "titulo": "ACRÉSCIMOS!",
        "detalhe": "Mais quatro minutos"
      },
      {
        "tipo": "cartao",
        "min": "33",
        "tempo": "segundo",
        "titulo": "",
        "cor": "amarelo",
        "jogador": {
          "nome": "Joel Carli",
          "posicao": "ZAGUEIRO DIREITO",
          "foto": "https://s.glbimg.com/es/sde/f/2016/05/20/6a298f9b1dd5a88146f9f926e4b91a1b_80x80.png"
        },
        "detalhe": "Cartão amarelo para Joel Carli, por falta em Lima que puxava o contra-ataque"
      },
      {
        "tipo": "texto",
        "min": "19",
        "tempo": "primeiro",
        "titulo": "PREOCUPAÇÃO!",
        "detalhe": "No lance, Pimpão sente dores na perna direita! Pode ser problema para Valentim"
      },
      {
        "tipo": "cartola",
        "min": "08",
        "tempo": "segundo",
        "pontos": "-2",
        "jogador": {
          "atleta_id": "50328",
          "nome": "Marcelo Oliveira",
          "posicao": "LATERAL ESQUERDA",
          "foto": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_80x80.png",
          "foto_equipe": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/gremio_60x60.png"
        },
        "titulo": "CARTÃO",
        "detalhe": "Seu jogador Marcelo Oliveira levou cartão amarelo"
      },
      {
        "tipo": "cartao",
        "min": "08",
        "tempo": "segundo",
        "titulo": "",
        "cor": "amarelo",
        "jogador": {
          "atleta_id": "50328",
          "nome": "Marcelo Oliveira",
          "posicao": "LATERAL ESQUERDA",
          "foto": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_80x80.png"
        },
        "detalhe": "Cartão amarelo para Marcelo Oliveira"
      },
      {
        "tipo": "troca",
        "min": "02",
        "tempo": "segundo",
        "titulo": "",
        "detalhe": "",
        "troca": {
          "in": {
            "nome": "Leonardo Valencia",
            "posicao": "MEIA CENTRAL",
            "foto": "https://s.glbimg.com/es/sde/f/2017/08/07/5da8e09b912f3d4e02c70571d9de8988_80x80.png"
          },
          "out": {
            "nome": "Marcos Vinícius",
            "posicao": "MEIA CENTRAL",
            "foto": "https://s.glbimg.com/es/sde/f/2017/07/14/dc2cc428ed447e7b65ffc2a9b54c02e8_80x80.png"
          }
        }
      },
      {
        "tipo": "cartola",
        "min": "06",
        "tempo": "primeiro",
        "pontos": "5",
        "jogador": {
          "atleta_id": "50328",
          "nome": "Marcelo Oliveira",
          "posicao": "LATERAL ESQUERDA",
          "foto": "https://s.glbimg.com/es/sde/f/2016/04/30/401897dab69a776fef1185ec3ba1b85f_80x80.png",
          "foto_equipe": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/gremio_60x60.png"
        },
        "titulo": "GOL!",
        "detalhe": "Seu jogador Marcelo Oliveira fez um gol!"
      },
      {
        "tipo": "gol",
        "min": "06",
        "tempo": "primeiro",
        "titulo": "GOL DO GREMIO!",
        "detalhe": "Gol de Marcelo! Marcelo encontra Brenner na ponta da área, pela esquerda."
      },
      {
        "tipo": "texto",
        "min": "00",
        "tempo": "primeiro",
        "titulo": "BOLA ROLANDO!",
        "detalhe": "Começa o jogo no Nilton Santos. O Botafogo mexe nela!"
      }
    ]
  }
}