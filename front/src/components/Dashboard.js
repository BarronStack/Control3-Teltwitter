import {Container} from 'react-bootstrap'
import React,  {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayTweets from './DisplayTweets';

function Dashboard(){
  
  const [tweets, setTweets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    const fetchData = async() =>{
        if(!loaded){
            const result = await axios.get('http://localhost:3002/get-all-tweets')
            if(result.data){
              setTweets(result.data.tweets)
              setLoaded(true)
            }
        }
    }
    fetchData()
  })
  
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <div>
        <Container>
          <DisplayTweets listado = {tweets} />
        </Container>

      </div>
    </div>
  );
  
}

export default Dashboard;


