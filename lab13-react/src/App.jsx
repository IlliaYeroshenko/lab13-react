import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import ImageGallery from './components/ImageGallery';
import ShoppingList from './components/ShoppingList';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="page">
            <header className="header">
                <h1>Frontend</h1>
                <p>Вступ до React та деплой</p>
            </header>

            <main className="main">
                <section className="todo-section">
                    <h2>Мій To-Do List на React</h2>
                    <p>
                        У цьому блоці можна
                        додавати задачі, позначати їх як виконані та видаляти зі списку.
                    </p>

                    <TaskForm addTask={addTask} />

                    <ul className="task-list">
                        {tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggle={toggleTask}
                                onDelete={deleteTask}
                            />
                        ))}
                    </ul>

                    {tasks.length === 0 && (
                        <p className="empty-text">Поки що список задач порожній.</p>
                    )}
                </section>

                <ImageGallery />

                <KanbanBoard />

                <ShoppingList />
            </main>
        </div>
    );
}

export default App;