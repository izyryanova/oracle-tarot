import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Starfield from '../Starfields';

const HomePage = () => {
	return (
		<div>
			<div className={styles.container}>
				<Starfield speedFactor={0.06} backgroundColor="#0b132b" starColor={[255, 255, 255]} starCount={6000} />
				<div className={styles.header}>
					<h1 className={styles.headerTitle}>tarogram</h1>
				</div>
				<div className={styles.descriptionHome}>Начни свой день с мудрости Таро:
					<div>узнай что тебя ждет сегодня</div>
					</div>
				<Link to="/select-card" className={styles.btnClick}>
					Выбери свою <br /> карту дня
				</Link>
			</div>

		</div>
	);
};

export default HomePage;