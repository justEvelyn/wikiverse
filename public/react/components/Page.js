import React,{useEffect, useState} from 'react';
import apiURL from '../api';

export const Page = ({page,setPageView,setIsPageView}) => {
  const [author,setAuthor] = useState({})

  async function fetchAuthor(){
    try{
      const response = await fetch(`${apiURL}/users/${page.authorId}`)
      const authorData = await response.json()
      setAuthor(authorData)
    } catch (err) {
      console.log("Oh no an error!",err )
    } 
    }
  function clickHandler() {
    setPageView({})
    setIsPageView(false)
  }

  useEffect(() => {
    fetchAuthor()
  }, [])



  return <>

    <h3>Title: {page.title}</h3>
    <p><b>Description:</b> {page.content}</p>
    <p><b>Author:</b> {author.name}</p>
    <button onClick={clickHandler}>Back</button>
  </>
} 
	