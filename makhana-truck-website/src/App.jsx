import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <header>
                <h1>Makhana Truck</h1>
                <p>Crunchy. Healthy. Delicious.</p>
            </header>
            <section className="hero">
                <h2>Premium Fox Nuts, Delivered Fresh!</h2>
                <p>Experience the taste of roasted perfection.</p>
                <button className="cta-button">Order Now</button>
            </section>
            <footer>
                <p>&copy; 2025 Makhana Truck. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
