import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pagesCollection, setPagesCollection] = useState([]);
const [isPageView, setIsPageView] = useState(false)
const[pageView, setPageView] = useState({})

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPagesCollection(pagesData);
			setAuthorsList()
			console.log(pagesData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
	  
{
isPageView

	
	? <Page page={pageView} setPageView={setPageView} setIsPageView={setIsPageView}/>
		: [<h2 key={0}>Current Articles</h2>,
		// <p>key ={1} onClick={console.log}> Add Article</p>,
		<PagesList key={2} setPageView={setPageView} setIsPageView={setIsPageView} pages={pagesCollection} />]

	}
</main>
	)
}

