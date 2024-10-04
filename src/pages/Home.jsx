import React from 'react';
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <h1>Добро пожаловать!</h1>
            <Button
                label="Нажми меня"
                onClick={() => alert('Кнопка нажата!')}
                color="blue" // Можно изменить на 'red' для теста
                size="large" // Можно изменить на 'small' или 'medium' для теста
            />
        </div>
    );
}

export default Home;
