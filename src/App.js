import React, { Component} from 'react';
import './styles/main.scss'
import PokList from './components/PokList';
import Header from './layout/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      numOfPokemons: 1,
      visibleType: 'all'
    }
  }

  async getPokemons() {
    let firstPok = this.state.numOfPokemons;
    let lastPok = firstPok + 12;
    for(let i = firstPok; i < lastPok; i++ ){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
       .then(res=> res.json())
       .then(data => {
         
        this.setState({pokemons: [...this.state.pokemons,
          {
            name: data.name,
            id: data.id,
            types: [...data.types.map(type=> type.type.name)],
            image: data.sprites.front_default,
            stats: data.stats.map((item) => {
              return { 
                name: item.stat.name, 
                points: item.base_stat
              }
            }),
            weight: data.weight,
            total_movies: data.moves.length,
            showDetails: false
          }
         ]})
       })
     }
   }
   
  componentDidMount() {
    this.getPokemons()
  }

  update = () => {
    this.setState({numOfPokemons: this.state.numOfPokemons+12})
    if(this.state.numOfPokemons > 999){
      this.setState({
        numberOfPokemons: 999
      })
    }
    setTimeout(()=>{
    this.getPokemons();
    },1000)
  }
  viewInfo = (id) => {
    this.setState({pokemons: this.state.pokemons.map(pok=> {
      if(pok.id === id) {
        pok.showDetails = !pok.showDetails
      } else {
        pok.showDetails = false
      } 
      return pok
    }) })
  }

  filterPoksByType = (e) => {
    this.setState({visibleType: e.target.value}) 
  }
  
  render() {
    const filteredPoks = this.state.pokemons.filter(pokemon=>{
      if(this.state.visibleType === 'all'){
        return pokemon
      } else {
        return pokemon.types.includes(this.state.visibleType)
      }
    })

    return (
      <div className="App">
        <Header filter={this.filterPoksByType}/>
        <PokList 
          pokemons={filteredPoks} 
          viewInfo={this.viewInfo}
        />
        <button onClick={this.update} className='btn btn--load_more'>load more</button>
      </div>
    )
  } 
}

export default App;







