import React from 'react';
// import { Page } from './Page';

export const PagesList = ({pages,setIsPageView, setPageView}) => {
	const clickHandler = (page) => {
		setIsPageView(true)
		setPageView(page)
		// console.log(click)
	}
	return <>
		{
			pages.map((page, idx) => {
				return <h3 key={idx} onClick={() => clickHandler(page)}> {page.title}</h3>
			})
		}
	</>
} 