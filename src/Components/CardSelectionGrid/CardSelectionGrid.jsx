import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Убедитесь, что вы импортируете useNavigate
import styles from './CardSelectionGrid.module.css';
import cards from '../cards.js'; // Импортируйте ваш массив с картами

const CardSelectionGrid = () => {
	const [cardKeys, setCardKeys] = useState([]);
	const [flippedCards, setFlippedCards] = useState(Array(9).fill(false));
	const navigate = useNavigate(); // Инициализируйте navigate

	useEffect(() => {
		// Генерация 9 случайных чисел от 1 до 78
		const keys = Array.from({ length: 9 }, () => Math.floor(Math.random() * 78) + 1);
		setCardKeys(keys);
	}, []);

	const handleCardClick = (index) => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index]; // Переключаем состояние переворота карты
		setFlippedCards(newFlippedCards);

		// Переход на компонент CardDescription через 1 секунду после переворота
		setTimeout(() => {
			if (newFlippedCards[index]) {
				navigate(`/card/${cardKeys[index]}`); // Переход с передачей id карты
			}
		}, 1000); // Время задержки, чтобы дать возможность увидеть переворот
	};

	return (
		<div className='gridContainer'>
			<h2 className={styles.header}>Выберите одну карту</h2>
			<div className={styles.grid}>
				{cardKeys.map((key, index) => (
					<div key={index} className={styles.card} onClick={() => handleCardClick(index)}>
						{flippedCards[index] ? (
							<img className='cardImg' src={cards[key - 1].image} alt={cards[key - 1].name} />
						) : (
							<img className='cardImg' src='https://raw.githubusercontent.com/izyryanova/oracle-tarot/refs/heads/main/public/img/cardBack.png' alt="Card Back" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default CardSelectionGrid;
