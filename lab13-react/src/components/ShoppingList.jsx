import { useState } from 'react';

export default function ShoppingList() {
    const [items, setItems] = useState([]);
    const [productName, setProductName] = useState('');

    const addItem = (e) => {
        e.preventDefault();

        if (productName.trim() === '') {
            return;
        }

        const newItem = {
            id: Date.now(),
            name: productName,
            checked: false,
            quantity: 1
        };

        setItems([...items, newItem]);
        setProductName('');
    };

    const toggleItem = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const increaseQuantity = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setItems(
            items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <section className="shopping-section">
            <h2>Динамічний список покупок</h2>
            <p>
                Користувач може додавати товари,
                відмічати їх чекбоксом та змінювати кількість.
            </p>

            <form className="task-form" onSubmit={addItem}>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Назва товару..."
                />

                <button type="submit">Додати товар</button>
            </form>

            <ul className="shopping-list">
                {items.map((item) => (
                    <li key={item.id} className="shopping-item">
                        <div className="shopping-name">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleItem(item.id)}
                            />

                            <span className={item.checked ? 'completed' : ''}>
                                {item.name}
                            </span>
                        </div>

                        <div className="quantity-box">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>

                        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Загальна кількість товарів: {totalQuantity}</h3>
        </section>
    );
}
