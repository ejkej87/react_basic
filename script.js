var movies = [
   {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
      photo:  'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/harry_potter_footage_rpg_leak.jpeg?itok=ZDCBGdBt'
   },
   {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny'
   },
   {
      id: 3,
      title: 'Matrix',
      desc: 'Film o hakerze'
   },
   {
      id: 4,
      title: 'Kingsman',
      desc: 'Film szpiegowski'
   },
   
];

var moviesElements = movies.map(function (movie) {
   return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('image', {}, movie.photo)
   );
});

var element =
   React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
   );

ReactDOM.render(element, document.getElementById('app'));
