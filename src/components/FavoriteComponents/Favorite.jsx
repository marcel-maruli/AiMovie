import React, { useState, useEffect } from 'react';
import { Form, Button, FormControl, Card, CardDeck } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, unFavorite } from '../../store/actions'

function Favorite() {
  const dispatch = useDispatch()
  const dataFavorite = useSelector(state => state.listFavorites.favorites)
  const un_favorite = (data) => {
    dispatch(unFavorite(data))
  }
  console.log(dataFavorite, 'aksasaslakslak');
  return (
    <>
      <div className="container" style={{
        marginTop: "5vh", display: "grid", gridTemplateColumns: "30vw 30vw 30vw",
        justifyContent: "center",
      }} >
        {
          dataFavorite.length !== 0 ?
            dataFavorite.map(data => {
              return (
                <Card style={{ maxWidth: "25vw", marginTop: "10px" }}>
                  <Card.Img variant="top" src={data.Poster} style={{ maxWidth: '25vw', maxHeight: "50vh" }} />
                  <Card.Body>
                    <Card.Title>{data.Title}</Card.Title>
                    <Card.Text>
                      {data.Plot}
                    </Card.Text>
                    <Button style={{ marginRight: "5px" }}>Detail</Button>
                    <Button style={{ background: "red" }} onClick={() => un_favorite(data.imdbID)}>Unfavorite</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{data.Genre}</small>
                  </Card.Footer>
                </Card>
              )
            })
            :
            <div className="container" style={{ marginTop: "5vh" }} >
              <h1>No Favorites Found!</h1>
            </div>
        }
      </div>
    </>
  );
}

export default Favorite;
