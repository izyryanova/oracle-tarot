const CardDescription = () => {
	const { id } = useParams(); // Получаем id карты из URL
	const card = cards[id - 1]; // Получаем данные карты по id

	// Заглушки для названия и описания
	const placeholderName = card ? card.name : 'Название карты';
	const placeholderDescription = 'Это описание карты. Здесь будет объяснение, как карта влияет на ситуацию.';

	return (
		<div className={styles.container}>
			<Link to="/store-menu" className={styles.btnBack}>Назад</Link>
			<Link to="/daily-spread" className={styles.btnSpread}>Расклад дня</Link>

			{/* Отображаем изображение карты */}
			<img className={styles.cardImage} src={card ? card.image : ''} alt={placeholderName} />

			{/* Контейнер для названия карты */}
			<h2 className={styles.cardName}>{placeholderName}</h2>

			{/* Контейнер для описания карты */}
			<p className={styles.cardDescription}>{placeholderDescription}</p>
		</div>
	);
};

export default CardDescription;