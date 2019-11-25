// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");

// const bcryptSalt = 10;

// mongoose
//   .connect('mongodb://localhost/proyecto2', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// let users = [
//   {
//     username: "alice",
//     password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
//   },
//   {
//     username: "bob",
//     password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
//   }
// ]

// User.deleteMany()
// .then(() => {
//   return User.create(users)
// })
// .then(usersCreated => {
//   console.log(`${usersCreated.length} users created with the following id:`);
//   console.log(usersCreated.map(u => u._id));
// })
// .then(() => {
//   // Close properly the connection to Mongoose
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })


const mongoose = require('mongoose')
const Movie = require('../models/Movie.model')

mongoose.connect(`mongodb://localhost/proyecto2`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

Movie.collection.drop()

const movie = [{
    "popularity": 18.199,
    "vote_count": 2155,
    "video": false,
    "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    "id": 19404,
    "adult": false,
    "backdrop_path": "/pVGzV02qmHVoKx9ehBNy7m2u5fs.jpg",
    "original_language": "hi",
    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "title": "Un amor contra viento y marea",
    "vote_average": 8.9,
    "overview": "Los Singh son una familia india con grandes convicciones culturales de su nación de origen, que emigraron a Reino Unido antes de nacer sus primeros hijos. Uno de ellos querrá casarse con una mujer ajena a su cultura y para ello deberá hacer todos los esfuerzos por convencer a su familia.",
    "release_date": "1995-10-20",

  },
  {
    "popularity": 43.149,
    "vote_count": 14301,
    "video": false,
    "poster_path": "/dc1fX265fZIIY5Hab8I7CdETyJy.jpg",
    "id": 278,
    "adult": false,
    "backdrop_path": "/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "genre_ids": [
      80,
      18
    ],
    "title": "Cadena perpetua",
    "vote_average": 8.7,
    "overview": "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.",
    "release_date": "1994-09-23",
    "location": [{
      "coordinates": {
        "lng": -82.516815,
        "lat": 40.764330,
      }
    }]
  },
  {
    "popularity": 55.182,
    "vote_count": 10946,
    "video": false,
    "poster_path": "/6nwJnyac60cGHo4JUtnhdTQsRsx.jpg",
    "id": 238,
    "adult": false,
    "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
    "original_language": "en",
    "original_title": "The Godfather",
    "genre_ids": [
      80,
      18
    ],
    "title": "El padrino",
    "vote_average": 8.6,
    "overview": "Don Vito Corleone, conocido dentro de los círculos del hampa como \"El Padrino\", es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una chica, Connie, y tres varones, Sonny, Michael y Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir puestos de mando en la \"Familia\". Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.",
    "release_date": "1972-03-14"
  },
  {
    "popularity": 28.725,
    "vote_count": 8753,
    "video": false,
    "poster_path": "/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg",
    "id": 424,
    "adult": false,
    "backdrop_path": "/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg",
    "original_language": "en",
    "original_title": "Schindler's List",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "title": "La lista de Schindler",
    "vote_average": 8.6,
    "overview": "Oskar Schindler, un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes, consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente, también judío, es el verdadero director en la sombra, pues Schindler no tiene el menor conocimiento industrial.",
    "release_date": "1993-11-30"
  },
  {
    "popularity": 60.824,
    "vote_count": 1445,
    "video": false,
    "poster_path": "/zHk9i6yFodI6fJPbY85z9HURNnQ.jpg",
    "id": 496243,
    "adult": false,
    "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    "original_language": "ko",
    "original_title": "기생충",
    "genre_ids": [
      35,
      18,
      53
    ],
    "title": "Parásitos",
    "vote_average": 8.5,
    "overview": "Tanto Gi Taek (Song Kang Ho) como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo (Choi Woo Shik), empieza a recibir clases particulares en casa de Park (Lee Sun Gyun), las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una interrelación de resultados imprevisibles.",
    "release_date": "2019-05-30"
  },
  {
    "popularity": 24.989,
    "vote_count": 4682,
    "video": false,
    "poster_path": "/iaiy3tg9QVkDpObm1IGqmbC9A5C.jpg",
    "id": 372058,
    "adult": false,
    "backdrop_path": "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
    "original_language": "ja",
    "original_title": "君の名は。",
    "genre_ids": [
      16,
      18,
      10749
    ],
    "title": "Tu Nombre",
    "vote_average": 8.5,
    "overview": "El joven Taki vive en Tokio y la joven Mitsuha, en un pequeño pueblo en las montañas. Durante el sueño, los cuerpos de ambos se intercambian. Recluidos en un cuerpo que les resulta extraño, comienzan a comunicarse sin saber los que les espera.",
    "release_date": "2016-08-26"
  },
  {
    "popularity": 28.515,
    "vote_count": 6436,
    "video": false,
    "poster_path": "/vNR6SOKbOkj94gNfc2sJkQjeAe1.jpg",
    "id": 240,
    "adult": false,
    "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
    "original_language": "en",
    "original_title": "The Godfather: Part II",
    "genre_ids": [
      80,
      18
    ],
    "title": "El padrino: parte II",
    "vote_average": 8.5,
    "overview": "Continuación de la saga de los Corleone con dos historias paralelas: la elección de Michael Corleone como jefe de los negocios familiares y los orígenes del patriarca, el ya fallecido Don Vito, primero en Sicilia y luego en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.",
    "release_date": "1974-12-20"
  },
  {
    "popularity": 34.649,
    "vote_count": 8091,
    "video": false,
    "poster_path": "/onWoNxz6ad3FodA8EillIwKI4le.jpg",
    "id": 129,
    "adult": false,
    "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
    "original_language": "ja",
    "original_title": "千と千尋の神隠し",
    "genre_ids": [
      16,
      14,
      10751
    ],
    "title": "El viaje de Chihiro",
    "vote_average": 8.5,
    "overview": "Chihiro es una niña de diez años que está mudándose con sus padres a un nuevo hogar. Por el camino, la familia se topa con un enorme edificio rojo en cuyo centro se abre un largo túnel. Al otro lado del pasadizo se dibuja una ciudad fantasma. En el restaurante abandonado de esta ciudad, los padres de Chihiro encuentran una gran variedad de platos deliciosos y deciden quedarse a comer, pero, al probar bocado, se transforman en cerdos. Presa del pánico, Chihiro huye y empieza a desmaterializarse poco a poco. El enigmático Haku le explicará el funcionamiento del universo en el que ha caído. Para salvar a sus padres, la niña tendrá que enfrentarse a la terrible Yubaba, que tiene el aspecto de una arpía diabólica.",
    "release_date": "2001-07-20"
  },
  {
    "popularity": 23.055,
    "vote_count": 9065,
    "video": false,
    "poster_path": "/1EFS40uFzv5ZVLSpu3xqYqnou67.jpg",
    "id": 497,
    "adult": false,
    "backdrop_path": "/Rlt20sEbOQKPVjia7lUilFm49W.jpg",
    "original_language": "en",
    "original_title": "The Green Mile",
    "genre_ids": [
      80,
      18,
      14
    ],
    "title": "La milla verde",
    "vote_average": 8.5,
    "overview": "En el sur de los Estados Unidos, en plena Depresión, Paul Edgecomb es un vigilante penitenciario a cargo de la Milla Verde, un pasillo que separa las celdas de los reclusos condenados a la silla eléctrica. Esperando su ejecución está John Coffey, un gigantesco negro acusado de asesinar brutalmente a dos hermanas de nueve años. Tras una personalidad ingenua, Coffey esconde un don sobrenatural prodigioso. A medida que transcurre la historia, Paul Edgecomb aprende que los milagros ocurren... incluso en los lugares más insospechados.",
    "release_date": "1999-12-10"
  },
  {
    "popularity": 38.625,
    "vote_count": 16702,
    "video": false,
    "poster_path": "/3KY1qSxfKiOmQseOGiAGrcLUkqS.jpg",
    "id": 680,
    "adult": false,
    "backdrop_path": "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    "original_language": "en",
    "original_title": "Pulp Fiction",
    "genre_ids": [
      80,
      53
    ],
    "title": "Pulp Fiction",
    "vote_average": 8.5,
    "overview": "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
    "release_date": "1994-09-10"
  },
  {
    "popularity": 21.678,
    "vote_count": 7827,
    "video": false,
    "poster_path": "/kfRQ4X9z5eOXD1NbYR0JqlOlidJ.jpg",
    "id": 637,
    "adult": false,
    "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
    "original_language": "it",
    "original_title": "La vita è bella",
    "genre_ids": [
      35,
      18
    ],
    "title": "La vida es bella",
    "vote_average": 8.5,
    "overview": "En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.",
    "release_date": "1997-12-20"
  },
  {
    "popularity": 30.974,
    "vote_count": 16162,
    "video": false,
    "poster_path": "/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg",
    "id": 13,
    "adult": false,
    "backdrop_path": "/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg",
    "original_language": "en",
    "original_title": "Forrest Gump",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "title": "Forrest Gump",
    "vote_average": 8.4,
    "overview": "Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño.",
    "release_date": "1994-07-06"
  },
  {
    "popularity": 53.995,
    "vote_count": 20284,
    "video": false,
    "poster_path": "/qmZlavNslqWVAMe3JQW7wgArPKQ.jpg",
    "id": 155,
    "adult": false,
    "backdrop_path": "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    "original_language": "en",
    "original_title": "The Dark Knight",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "title": "El caballero oscuro",
    "vote_average": 8.4,
    "overview": "Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.",
    "release_date": "2008-07-16"
  },
  {
    "popularity": 19.505,
    "vote_count": 2490,
    "video": false,
    "poster_path": "/y76nmGfmOHaZwc1iCq7orBHeBQP.jpg",
    "id": 311,
    "adult": false,
    "backdrop_path": "/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg",
    "original_language": "en",
    "original_title": "Once Upon a Time in America",
    "genre_ids": [
      80,
      18
    ],
    "title": "Érase una vez en América",
    "vote_average": 8.4,
    "overview": "David Aaronson \"Noodles\", un pobre joven judío, conoce en los suburbios de principios del siglo XX de Manhattan, Nueva York, a Maximilian Bercovicz \"Max\", otro joven de origen hebreo dispuesto a llegar lejos por cualquier método. Entablan una gran amistad y forman, con los 3 colegas de \"Noodles\", Patrick Goldberg \"Patsy\", Philip Stein \"Cockeye\", y Dominic una banda que prospera rápidamente. Desgraciadamente, son perseguidos por Bugsy, el tipo para el que Noodles y sus amigos trabajaban anteriormente, y en uno de sus asaltos, mata a Dominic. Rápidamente Noodles se tira encima suyo y le mata, por lo que pasará 12 años en prisión. Cuando Noodles sale de prisión le recibe Max, que sigue con su banda junto a los otros 2 amigos, Patsy y Cockeye. Rápidamente, entre los 4, llegan a convertirse, en tiempos de la prohibición, en unos de los mayores gánsteres de todo el país.",
    "release_date": "1984-05-23"
  },
  {
    "popularity": 46.929,
    "vote_count": 14136,
    "video": false,
    "poster_path": "/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
    "id": 122,
    "adult": false,
    "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
    "original_language": "en",
    "original_title": "The Lord of the Rings: The Return of the King",
    "genre_ids": [
      28,
      12,
      14
    ],
    "title": "El señor de los anillos III: El retorno del Rey",
    "vote_average": 8.4,
    "overview": "Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de que se decida el destino de la Tierra Media, y por primera vez en mucho tiempo, parece que hay una pequeña esperanza. La atención del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, y del cual Aragorn tendrá que reclamar el trono para ocupar su puesto de Rey. Pero las fuerzas de Sauron ya se preparan para lanzar el último y definitivo ataque contra el reino de Gondor, la batalla que decidirá el destino de todos. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, a la espera de que Sauron no repare en que dos pequeños Hobbits se acercan cada día más al final de su camino, el Monte del Destino.",
    "release_date": "2003-12-01"
  },
  {
    "popularity": 31.842,
    "vote_count": 17520,
    "video": false,
    "poster_path": "/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg",
    "id": 550,
    "adult": false,
    "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
    "original_language": "en",
    "original_title": "Fight Club",
    "genre_ids": [
      18
    ],
    "title": "El club de la lucha",
    "vote_average": 8.4,
    "overview": "Un joven sin ilusiones lucha contra su insomnio, consecuencia quizás de su hastío por su gris y rutinaria vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón que sostiene una filosofía muy particular: el perfeccionismo es cosa de gentes débiles; en cambio, la autodestrucción es lo único que hace que realmente la vida merezca la pena. Ambos deciden entonces formar un club secreto de lucha donde descargar sus frustaciones y su ira que tendrá un éxito arrollador.",
    "release_date": "1999-10-15"
  },
  {
    "popularity": 25.448,
    "vote_count": 6237,
    "video": false,
    "poster_path": "/l80O2wzJRHQUPtlTlgVGVrlFtvg.jpg",
    "id": 769,
    "adult": false,
    "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
    "original_language": "en",
    "original_title": "GoodFellas",
    "genre_ids": [
      80,
      18
    ],
    "title": "Uno de los nuestros",
    "vote_average": 8.4,
    "overview": "Henry, un niño de trece años de Brooklyn, vive fascinado con el mundo de los gángsters. Su sueño se hace realidad cuando entra a formar parte de la familia Pauline, dueña absoluta de la zona, que lo educan como un miembro más de la banda convirtiéndole en un destacado mafioso.",
    "release_date": "1990-09-12"
  },
  {
    "popularity": 51.099,
    "vote_count": 5683,
    "video": false,
    "poster_path": "/xRMZikjAHNFebD1FLRqgDZeGV4a.jpg",
    "id": 324857,
    "adult": false,
    "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
    "original_language": "en",
    "original_title": "Spider-Man: Into the Spider-Verse",
    "genre_ids": [
      28,
      12,
      16,
      35,
      878
    ],
    "title": "Spider-Man: un nuevo universo",
    "vote_average": 8.4,
    "overview": "En un universo paralelo donde Peter Parker ha muerto, un joven de secundaria llamado Miles Morales es el nuevo Spider-Man. Sin embargo, cuando el líder mafioso Wilson Fisk (a.k.a Kingpin) construye el \"Super Colisionador\" trae a una versión alternativa de Peter Parker que tratará de enseñarle a Miles como ser un mejor Spider-Man. Pero no será el único Spider Man en entrar a este universo:  4 versiones alternas de Spider-Man aparecerán y buscarán regresar a su universo antes de que toda la realidad se colapse.",
    "release_date": "2018-12-06"
  },
  {
    "popularity": 24.339,
    "vote_count": 5498,
    "video": false,
    "poster_path": "/tUNq7z6x78L9jADUK8HltWUrc4x.jpg",
    "id": 539,
    "adult": false,
    "backdrop_path": "/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg",
    "original_language": "en",
    "original_title": "Psycho",
    "genre_ids": [
      18,
      27,
      53
    ],
    "title": "Psicosis",
    "vote_average": 8.4,
    "overview": "Una joven secretaria, tras cometer un robo, se marcha de la ciudad y conduce durante horas, parando para descansar en un pequeño motel de carretera regentado por un joven llamado Norman. Todo parece normal y tranquilo en el apartado motel y en la casa de al lado en la que viven Norman y su madre pero, mientras está en la ducha, la joven es asesinada salvajemente a cuchilladas.",
    "release_date": "1960-06-16"
  },
  {
    "popularity": 25.249,
    "vote_count": 4428,
    "video": false,
    "poster_path": "/c7ioGWDmZHcg3EXkGUdfQMv4hO3.jpg",
    "id": 429,
    "adult": false,
    "backdrop_path": "/xGC2fY5KFmtuXnsuQwYQKFOLZFy.jpg",
    "original_language": "it",
    "original_title": "Il buono, il brutto, il cattivo",
    "genre_ids": [
      37
    ],
    "title": "El bueno, el feo y el malo",
    "vote_average": 8.4,
    "overview": "Durante la Guerra de Secesión, tres cazadores de recompensas se lanzan a la búsqueda de un tesoro que ninguno de los tres truhanes puede localizar sin la ayuda de los otros dos. Tuco sabe que el tesoro se encuentra en un cementerio, mientras que Joe conoce el nombre inscrito en la tumba que lo esconde. Mientras tanto, Sentenza no duda en matar a mujeres y niños para conseguir su meta. De esta forma, los tres hombres colaboran en apariencia, pero al final intentarán eliminarse mutuamente.",
    "release_date": "1966-12-23"
  }
]


Movie.create(movie, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movie.length} movies`)
  mongoose.connection.close();
})