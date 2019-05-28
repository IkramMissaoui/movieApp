import React, { Component } from 'react';
import './App.css'
import Card from './component/cards.js'
import Header from './component/Header.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: '',
      img: '',
      review: 1,
      class: 'none',
      search: '',
      stars:5,

      movies: [{
        name: "Ferris Bueller's Day Off",
        img: 'https://images-na.ssl-images-amazon.com/images/I/51C3C9AW28L._SY445_.jpg',
        review: 4
      },
      {
        name: 'Mission Glass',
        img: 'https://www.dvdsreleasedates.com/posters/800/G/Glass-2019-movie-poster.jpg',
        review: 2
      },
      {
        name: '50 First Dates',
        img: 'https://target.scene7.com/is/image/Target/GUEST_55f9dcda-50e4-4ce9-9047-5170b2b2ff10?wid=488&hei=488&fmt=pjpeg',
        review: 1
      },
      {
        name: 'Matilda',
        img: 'https://www.horreur.net/sites/default/files/styles/principale/public/upload/matilda.jpg?itok=eyXzBJZc',
        review: 2
      },
      {
        name: 'Elf',
        img: 'https://i.ebayimg.com/images/g/CeoAAOSwUMxaHUyO/s-l300.jpg',
        review: 1
      },
      {
        name: 'Iron Man',
        img: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
        review: 5
      },
      {
        name: 'Iron Man 3',
        img: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg',
        review: 4
      },     
       {
        name: 'Iron Man 2',
        img: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg',
        review: 4
      },
      {
        name: 'Man of Steel',
        img: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg',
        review: 3
      },    
        {
        name: 'Spider-Man',
        img: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
        review: 4
      },
      {
        name: 'The Amazing Spider-Man',
        img: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg',
        review: 5
      },      {
        name: 'Spider-Man 2',
        img: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        review: 5
      },
      {
        name: 'Ant-Man',
        img: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg',
        review: 2
      },    
        {
        name: 'Spider-Man 3',
        img: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
        review: 4
      },
      {
        name: 'Rain Man',
        img: 'https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        review: 3
      }, 
      {
        name: 'Black Panther',
        img: 'http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg',
        review: 4
      }]
    
    })
  }

// add movie to state
add = () => {
    if(this.state.name!=='' && this.state.img!==''&&this.state.review!==''){
      this.setState ({
      movies: [...this.state.movies, { name: this.state.name, img: this.state.img, review: this.state.review }]
    })
    }else{alert('* Required fields!!')}
    
}
addplus =()=>{
  this.setState ({
    class: 'addmovie'
  })
}
addName = (e) => {
    this.setState  ({
      name: e.target.value
    })
}
addImage = (e) => {
    this.setState ({
      img: e.target.value
    })
}
addReview = (e) => {
    this.setState  ({
      review: e.target.value
    })
}
// close AddMovie Section
remove = () => {
    this.setState  ({
      class: 'none'
    })
}



search= (e) => {
    this.setState  ({
      search: e.target.value
    })
  }



searchStar1=()=>{this.setState({stars:1})}
searchStar2=()=>{this.setState({stars:2})}
searchStar3=()=>{this.setState({stars:3})}
searchStar4=()=>{this.setState({stars:4})}
searchStar5=()=>{this.setState({stars:5})}




  render() {
    return (
      <div className="App">
        <Header text="Movie App " />
        <header className="header">
          <div className="searchBar">
            <input placeholder="Movie's name..." onChange={this.search} type="text" className="search" />
            <span className="search-btn" onClick={this.searchName}>Search</span>
          </div>
          <p className="stars">
            <i class="far fa-star" onClick={this.searchStar1}></i>
            <i class="far fa-star" onClick={this.searchStar2}></i>
            <i class="far fa-star" onClick={this.searchStar3}></i>
            <i class="far fa-star" onClick={this.searchStar4}></i>
            <i class="far fa-star" onClick={this.searchStar5}></i>
          </p>
        </header>


        <main >
          <Card tabMovies={this.state.movies} searchStar={this.state.stars} searchValue={this.state.search}/>

          <div onClick={this.addplus} className="card addbtn">+</div>
          <div className={this.state.class}>
            <input className="addInput" type="text" onChange={this.addName} placeholder="Movie's name.."/>
            <input className="addInput" type="text" onChange={this.addImage} placeholder="Movie's URL.."/>
            <input className="addInput" type="text" onChange={this.addReview} placeholder="Movie's review.." />
            <span className="remove-m" onClick={this.remove}>X</span>
            <span className="add-m" onClick={this.add}>ADD MOVIE</span>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
