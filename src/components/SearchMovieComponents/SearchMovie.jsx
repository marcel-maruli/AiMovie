import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CardMovie from './Card'
import { fetchingData } from "../../store/actions"

function SearchFavorite() {
  const dispatch = useDispatch()
  let fetchData = (title) => {
    dispatch(fetchingData(`http://www.omdbapi.com/?t=${title}&apikey=d9b3a794`))
  }

  let fetchTitle = (e) => {
    let title = e.target.value
    let result = ""
    for (let i = 0; i < title.length; i++) {
      if (title[i] == " ") {
        result += "+"
      } else {
        result += title[i]
      }
    }
    fetchData(result)
  }
  let data = useSelector(state => state.data.data.data)

  let errorFetch = false

  return (
    <>
      {
        data == null && errorFetch == false ?
          <div>
            <div>
              <Form inline style={{ padding: "0px 25vw", marginTop: '2%', width: "100vw" }}>
                <FormControl style={{ width: "80%" }} type="text" placeholder="Search Movie Title" onChange={fetchTitle} />
                {/* <Button type="submit">Search</Button> */}
              </Form>
            </div >
            <h1 className="container" style={{ marginTop: "10vh" }}>No data found!</h1>
          </div>
          :
          <div>
            <div>
              <Form inline style={{ padding: "0px 25vw", marginTop: '2%', width: "100vw" }}>
                <FormControl style={{ width: "80%" }} type="text" placeholder="Search Movie Title" onChange={fetchTitle} />
                {/* <Button type="submit">Search</Button> */}
              </Form>
            </div>
            <CardMovie />
          </div>
      }
    </>
  );
}

export default SearchFavorite;
