"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import { searchContext } from './SearchContext'
import { IStrengths } from '@/assets/models'

interface SearchContextProviderProps {
	children: ReactNode
}

const SearchContextProvider = ({children}: SearchContextProviderProps) => {
	const [username, setUsername] = useState('')
	const [data, setData] = useState<IStrengths[]>([]);
	
	const fetchSkills = async (username: string = "torrenegra") => {
		const res = await fetch(`http://localhost:5000/data/${username}`);
		const data = await res.json();
		let strengths: IStrengths[] = [];
		data.strengths.forEach((item: IStrengths) =>
			strengths.push(item )
		);
		setData(strengths);
	};

	useEffect(() => {
		fetchSkills(username);
	}, []);

	const handleUsername = (value: string) => {
		setUsername(value)
		
	}

	const contextValue = {
		username,
		handleUsername
	}

	return (
		<searchContext.Provider value={{username, handleUsername, data, fetchSkills}}>
			{children}
		</searchContext.Provider>
	)
}

export default SearchContextProvider