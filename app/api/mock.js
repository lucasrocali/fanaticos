
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
            "nome": "Neymar da Silva Santos Júnior",
            "nome_popular": "Neymar",
            "fotos": {
              "35x35": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_35x35.jpeg",
              "220x220": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_220x220.jpeg",
              "50x50": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_50x50.jpeg",
              "80x80": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_80x80.jpeg",
              "140x140": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_140x140.jpeg",
              "300x300": "https://s.glbimg.com/es/sde/f/2017/10/31/b8f51e4f3f4e9f4cdc24bbb5f5b8a54a_300x300.jpeg"
            },
            "equipe": {
              "genero": "M",
              "nome": "Paris Saint-Germain Football Club",
              "escudos": {
                "60x60": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/paris_saint_germain_60x60.png",
                "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/paris_saint_germain_30x30.png",
                "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/12/paris-saint-germain.svg",
                "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/09/16/paris_saint_germain_45x45.png"
              },
              "cores": {
                "terciaria": "#ffffff",
                "secundaria": "#ed1c24",
                "primaria": "#002561"
              },
              "equipe_id": 2696,
              "sigla": "PSG",
              "nome_popular": "Paris Saint-Germain",
              "slug": "parissaintgermain"
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
                "visualizado": false
              },
              {
                "tipo": "cartao_amarelo",
                "valor": 1,
                "visualizado": false
              }
            ]
          },
          {
            "nome": "Uilson de Souza Paula Júnior",
            "nome_popular": "Júnior Caiçara",
            "fotos": {
              "35x35": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_35x35.jpeg",
              "220x220": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_220x220.jpeg",
              "50x50": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_50x50.jpeg",
              "80x80": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_80x80.jpeg",
              "140x140": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_140x140.jpeg",
              "300x300": "https://s.glbimg.com/es/sde/f/2014/12/09/47ee5af653f189129c4817632db6bd07_300x300.jpeg"
            },
            "equipe": {
              "genero": "M",
              "nome": "Istanbul Basaksehir",
              "escudos": {
                "60x60": "https://s.glbimg.com/es/sde/f/equipes/2017/08/14/Istanbul_Basaksehir_65x65.png",
                "30x30": "https://s.glbimg.com/es/sde/f/equipes/2017/08/14/Istanbul_Basaksehir_F.K._30x30.png",
                "svg": null,
                "45x45": "https://s.glbimg.com/es/sde/f/equipes/2017/08/14/Istanbul_Basaksehir_F.K_45x45.png"
              },
              "cores": {
                "terciaria": "",
                "secundaria": "#ff8000",
                "primaria": "#002d59"
              },
              "equipe_id": 4368,
              "sigla": "IBA",
              "nome_popular": "Istanbul Basaksehir",
              "slug": "istanbul-basaksehir"
            },
            "stories": [
              {
                "tipo": "gol",
                "valor": 1,
                "visualizado": true
              },
              {
                "tipo": "cartao_vermelho",
                "valor": 1,
                "visualizado": false
              },
              {
                "tipo": "cartao_vermelho",
                "valor": 1,
                "visualizado": true
              }
            ]
          },
          {
            "nome": "Marcos Luis Rocha Aquino",
            "nome_popular": "Marcos Rocha",
            "fotos": {
              "35x35": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_35x35.jpeg",
              "220x220": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_220x220.jpeg",
              "50x50": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_50x50.jpeg",
              "80x80": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_80x80.jpeg",
              "140x140": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_140x140.jpeg",
              "300x300": "https://s.glbimg.com/es/sde/f/2018/01/30/edb0d67e60d39d102b52517058ff4227_300x300.jpeg"
            },
            "equipe": {
              "genero": "M",
              "nome": "Sociedade Esportiva Palmeiras",
              "escudos": {
                "60x60": "https://s.glbimg.com/es/sde/f/equipes/2014/04/14/palmeiras_60x60.png",
                "30x30": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/palmeiras_30x30.png",
                "svg": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/palmeiras.svg",
                "45x45": "https://s.glbimg.com/es/sde/f/equipes/2013/12/16/palmeiras_45x45.png"
              },
              "cores": {
                "terciaria": "#000000",
                "secundaria": "#ffffff",
                "primaria": "#006600"
              },
              "equipe_id": 275,
              "sigla": "PAL",
              "nome_popular": "Palmeiras",
              "slug": "palmeiras"
            },
            "stories": [
              {
                "tipo": "cartao_amarelo",
                "valor": 1,
                "visualizado": true
              },
              {
                "tipo": "falta",
                "valor": 1,
                "visualizado": false
              },
              {
                "tipo": "cartao_vermelho",
                "valor": 1,
                "visualizado": true
              }
            ]
          },
          {
            "nome": "Luiz Otávio Santos de Araújo",
            "nome_popular": "Tinga",
            "fotos": {
              "35x35": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_35x35.jpeg",
              "220x220": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_220x220.jpeg",
              "50x50": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_50x50.jpeg",
              "80x80": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_80x80.jpeg",
              "140x140": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_140x140.jpeg",
              "300x300": "https://s.glbimg.com/es/sde/f/2015/07/22/9263451baf0fde02fdbb975c2ef1bcb0_300x300.jpeg"
            },
            "equipe": {
              "genero": "M",
              "nome": "Clube de Regatas Brasil",
              "escudos": {
                "60x60": "https://s.glbimg.com/es/sde/f/organizacoes/2016/05/11/CRB-65_Mh6W7G6.png",
                "30x30": "https://s.glbimg.com/es/sde/f/organizacoes/2016/05/11/CRB-30_edhbKyJ.png",
                "svg": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/crb.svg",
                "45x45": "https://s.glbimg.com/es/sde/f/organizacoes/2016/05/11/CRB-45_hOVpCAF.png"
              },
              "cores": {
                "terciaria": "#000000",
                "secundaria": "#ffffff",
                "primaria": "#ff0000"
              },
              "equipe_id": 340,
              "sigla": "CRB",
              "nome_popular": "CRB",
              "slug": "crb"
            },
            "stories": [
              {
                "tipo": "cartao_amarelo",
                "valor": 1,
                "visualizado": true
              },
              {
                "tipo": "gol",
                "valor": 1,
                "visualizado": true
              },
              {
                "tipo": "cartao_amarelo",
                "valor": 1,
                "visualizado": false
              }
            ]
          },
          {
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
              },
              {
                "tipo": "cartao_amarelo",
                "valor": 1,
                "visualizado": true
              },
              {
                "tipo": "gol",
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