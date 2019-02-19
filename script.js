var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    photo: 'images/Harry_Potter.png'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    photo: 'images/Krol_lew.png'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Film o hakerze',
    photo: 'images/Matrix.png'
  },
  {
    id: 4,
    title: 'Kingsman',
    desc: 'Film szpiegowski',
    photo: 'images/Kingsman.png'
  }
]

var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },

  render: function () {
    return React.createElement('img', { src: this.props.image })
  }
})

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('h1', {}, this.props.title)
  }
})


// class Movie

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function () {
    return React.createElement(
      'div',
      {},
      React.createElement(GalleryItem, { image: this.props.movie.photo }),
      React.createElement(MovieTitle, { title: this.props.movie.title })
    )
  }
})

// class movieList

var movieList = React.createClass({
  propType: {
    items: React.PropTypes.array.isRequired
  },

  render: function () {
    var list = this.props.items.map(function (item, index) {
      return React.createElement(Movie, { movie: item, key: index })
    })

    return React.createElement('div', {}, list)
  }
})

/// /  class movieDescription

var movieDescription = React.createClass({
  propType: {
    desc: React.PropTypes.string.isRequired
  },

  render: function () {
    return React.createElement(
      'div',
      {},
      React.createElement(Movie, { desc: this.props.movie.desc })
    )
  }
})

var element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(movieList, { items: movies })
)

ReactDOM.render(element, document.getElementById('app'))
