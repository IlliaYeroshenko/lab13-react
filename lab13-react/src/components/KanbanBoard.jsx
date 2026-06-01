import { useState } from 'react';

export default function KanbanBoard() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Підготувати матеріали', status: 'todo' },
        { id: 2, text: 'Зробити React-компоненти', status: 'todo' },
        { id: 3, text: 'Перевірити інтерфейс', status: 'progress' }
    ]);

    const moveTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status: task.status === 'todo' ? 'progress' : 'todo'
                    }
                    : task
            )
        );
    };

    const todoTasks = tasks.filter((task) => task.status === 'todo');
    const progressTasks = tasks.filter((task) => task.status === 'progress');

    return (
        <section className="kanban-section">
            <h2>Міні Kanban-дошка</h2>
            <p>
                Задачі мають статус і автоматично
                переміщуються між колонками після натискання кнопки.
            </p>

            <div className="kanban-board">
                <div className="kanban-column">
                    <h3>До виконання</h3>

                    {todoTasks.map((task) => (
                        <div className="kanban-card" key={task.id}>
                            <p>{task.text}</p>
                            <button onClick={() => moveTask(task.id)}>
                                Перемістити
                            </button>
                        </div>
                    ))}
                </div>

                <div className="kanban-column">
                    <h3>В процесі</h3>

                    {progressTasks.map((task) => (
                        <div className="kanban-card" key={task.id}>
                            <p>{task.text}</p>
                            <button onClick={() => moveTask(task.id)}>
                                Повернути
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
