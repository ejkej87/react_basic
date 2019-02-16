var movies = [
   {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
      photo: ('images/Harry_Potter.png')
   },
   {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      photo: ('images/Krol_lew.png')

   },
   {
      id: 3,
      title: 'Matrix',
      desc: 'Film o hakerze',
      photo: ('images/Matrix.png')
   },
   {
      id: 4,
      title: 'Kingsman',
      desc: 'Film szpiegowski',
      photo: ('images/Kingsman.png')

   },
   
];

var moviesElements = movies.map(function (movie) {
   return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.photo})
   );
});

var element =
   React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
   );

ReactDOM.render(element, document.getElementById('app'));
