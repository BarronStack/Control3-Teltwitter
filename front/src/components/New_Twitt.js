import React,{useEffect, useState} from "react";
import axios from 'axios'

function New_Twitt(){
  
  const [loaded, setLoaded] = useState(false);

  const [autor, setAutor] = useState("");
  const [texto, setTexto] = useState("");


  useEffect(()=>{
    const fetchData = async() =>{
      if(!loaded){
        try {
          const result = await axios.post('http://localhost:3002/new-tweet',{
            author: autor,
            text: texto
          })
          console.log(result)
          setLoaded(true)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  })

  function handleChangeText(e) {
    setTexto(e.target.value)
 }

  function handleChangeAutor(e) {
    setAutor(e.target.value)
  }

  return (
    <div>
      <h3 className="center">Escribe un nuevo tweet</h3>

      <input className="author-tweet"
        placeholder="Author"
        value = {autor}
        onChange={handleChangeAutor}>
      </input>

      <form className="new-twitt" onSubmit={useEffect.fetchData} action="/">
        
        <textarea
            placeholder="New tweet"
            maxLength={140}
            value = {texto}
            onChange={handleChangeText}
          />

          <button className="btn" type="submit" disabled={texto === "" || autor===""}>
            Submit
          </button>

      </form>
    </div>
  );

}

export default New_Twitt;
