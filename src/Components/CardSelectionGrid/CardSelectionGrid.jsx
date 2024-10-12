import React, { useEffect, useState } from 'react';
import styles from './CardSelectionGrid.module.css';

const CardSelectionGrid = () => {

	function onGetServerAnswer(obj) {
		const { fact, length } = obj;
		console.log(fact);
		console.log(length);
		setCards(fact);
	}

	const [cards, setCards] = useState(null);

	useEffect(() => {
		fetch('https://catfact.ninja/fact')
			.then(response => response.json())
			.then(onGetServerAnswer)
			.catch(error => console.error('Ошибка загрузки карт:', error));
	}, []);

	return (
		<div className='gridContainer'>
			<h2 className={styles.header}>Выберите одну карту</h2>
			<h3>{cards || ""}</h3>
			<div className={styles.grid}>
				{Array.from({ length: 9 }).map((_, index) => (
					<div key={index} className={styles.card}>
						<img className='cardImg' src='https://raw.githubusercontent.com/izyryanova/oracle-tarot/refs/heads/main/public/img/cardBack.png' />
					</div>
				))}
			</div>
		</div>
	);
};

export default CardSelectionGrid;