import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import CardSelectionGrid from './Components/CardSelectionGrid/CardSelectionGrid';
import CardDescription from './Components/CardDescription/CardDescription';
import StoreMenu from './Components/StoreMenu/StoreMenu';
import DailyLayout from './Components/DailyLayout/DailyLayout';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
	const location = useLocation(); // Хук для получения текущего местоположения

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames="fade" timeout={300}>
				<Routes location={location}>
					<Route path="/" element={<HomePage />} />
					<Route path="/select-card" element={<CardSelectionGrid />} />
					<Route path="/card/:id" element={<CardDescription />} />
					<Route path="/card-detail" element={<CardDescription />} />
					<Route path="/store-menu" element={<StoreMenu />} />
					<Route path="/daily-spread" element={<DailyLayout />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

const AppWrapper = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};

export default AppWrapper;