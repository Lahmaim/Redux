import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/taskSlice";
import { useState } from "react";

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [newDesc, setNewDesc] = useState(task.description);

    const handleEdit = () => {
        dispatch(editTask({ id: task.id, newDesc }));
        setEditMode(false);
    };

    return (
        <div className="flex items-center justify-between p-3 bg-white rounded shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => dispatch(toggleTask(task.id))}
                    className="w-5 h-5"
                />
                {editMode ? (
                    <input
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                        className="px-2 py-1 border rounded"
                    />
                ) : (
                    <span
                        className={`text-lg ${
                            task.isDone ? "line-through text-gray-400" : ""
                        }`}
                    >
                        {task.description}
                    </span>
                )}
            </div>
            <div>
                {editMode ? (
                    <button
                        onClick={handleEdit}
                        className="text-sm text-green-600 hover:underline"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setEditMode(true)}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Task;
