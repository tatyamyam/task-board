export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' task-item--completed' : ''}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-item__checkbox"
        />
        <span className="task-item__text">{task.text}</span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="task-item__delete"
        aria-label="削除"
      >
        ✕
      </button>
    </li>
  )
}
