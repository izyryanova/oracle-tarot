import React from 'react';
import styles from './CardDescription.module.css';
import { Link, useParams } from 'react-router-dom';
import Starfield from '../Starfields';
import cards from '../cards.js';

const CardDescription = () => {
	const { id } = useParams();
	const cardIndex = id - 1;
	const card = cards[cardIndex];

	if (!card) {
		return <div>Карта не найдена.</div>; // Обработка случая, когда карта не найдена
	}

	return (
		<div>
			<Starfield speedFactor={0.06} backgroundColor="#0b132b" starColor={[255, 255, 255]} starCount={6000} />
			<div className={styles.container}>
			{/* Отображение изображения карты */}
			<img className={styles.cardImage} src={card.image} alt={card.name} />

			{/* Контейнер для наименования карты */}
			<h2 className={styles.cardName}>{card.name}</h2>

			{/* Контейнер для описания карты */}
			<p className={styles.cardDescription}>{card.description}</p>
			</div>
		</div>
	);
};

export default CardDescription;
