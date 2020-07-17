import React, { useState, useEffect } from 'react';
import { Form, Button, FormControl, Card, CardDeck } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, unFavorite } from '../../store/actions'

function CardMovie() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data.data)
  console.log(data);
  const favorite = (data) => {
    dispatch(addFavorite(data))
  }
  const un_favorite = (data) => {
    dispatch(unFavorite(data))
  }

  let errorFetch = false
  let favorited = null
  const favData = useSelector(state => state.listFavorites.favorites)
  favData.forEach(compareData => {
    if (compareData.imdbID == data.imdbID) {
      favorited = "yes"
    }
  })
  if (data.Response == "False") {
    errorFetch = true
  }
  console.log(errorFetch);
  return (
    <>
      {
        data && errorFetch != true ?
          <div className="container" style={{ marginTop: "5vh" }} >
            <CardDeck style={{ justifyContent: "center" }}>
              <Card style={{ maxWidth: "25vw" }}>
                <Card.Img variant="top" src={data.Poster} style={{ maxWidth: '25vw', maxHeight: "50vh" }} />
                <Card.Body>
                  <Card.Title>{data.Title}</Card.Title>
                  <Card.Text>
                    {data.Plot}
                  </Card.Text>
                  <Button style={{ marginRight: "5px" }}>Detail</Button>
                  {
                    !favorited ?
                      <Button style={{ background: "green" }} onClick={() => favorite(data)}>Add To Favorite</Button>
                      :
                      <Button style={{ background: "red" }} onClick={() => un_favorite(data.imdbID)}>Unfavorite</Button>
                  }
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{data.Genre}</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
          :
          <div className="container" style={{ marginTop: "5vh" }} >
            <h1>No Data Found Please Input The Title!</h1>
          </div>
      }
    </>
  );
}

export default CardMovie;
