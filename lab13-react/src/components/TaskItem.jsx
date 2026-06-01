export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="task-item">
            <span
                className={task.completed ? 'completed' : ''}
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </span>

            <button onClick={() => onDelete(task.id)}>Видалити</button>
        </li>
    );
}
