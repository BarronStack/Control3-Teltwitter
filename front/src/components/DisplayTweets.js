import{Card} from 'react-bootstrap'
import React from 'react'


export function DisplayTweets(props) {
    return(
        <section id = "tweetsList">
            <div>
              <ul>
                  {
                    props.listado.map((tweet) =>
                    <div key = {tweet.Nombre}>
                        <Card>
                            <Card.Body>
                            <Card.Title>{tweet.author}</Card.Title>
                              <Card.Text>{tweet.text}</Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    )
                  }
              </ul>
          
            </div>
        </section>
    )


}

export default DisplayTweets