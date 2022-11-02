import axios from 'axios';
import { useEffect,useState } from 'react';
import './app.css'
import Card from './Card';

function App() {
  const [pokemons,setPokemons] = useState([]);
  const [clicado,setClicado] = useState(false);

  const pegar = async()=>{
    
    
    let arr = []
    for(let i =1;i<50;i++ ){
      try{
      
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        arr.push(response.data);

      }catch(err){
        console.log(err)
      }
    }
        setPokemons(arr);
        console.log(pokemons);
    }
    
   

  useEffect(()=>{
    
    (async() => await pegar())();
    
    
  },[])

  const clicou = ()=>{

  }

  return (
    <div className="App">
      <button className='BUTTON_MHS' onClick={()=>setClicado(true)} >Mostrar Pokemons</button>
      <main className='display'>
        {clicado? pokemons.map((pokemon,i)=>{ return <Card pokemon={pokemon} key={i}/> }):""}
      </main>
      

    </div>
  );
}

export default App;
