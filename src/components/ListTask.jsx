import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "../redux/taskSlice";

const ListTask = () => {
    const dispatch = useDispatch();
    const { list, filter } = useSelector((state) => state.tasks);

    const filteredList = list.filter((task) =>
        filter === "all" ? true : filter === "done" ? task.isDone : !task.isDone
    );

    return (
        <div>
            <div className="flex justify-center gap-3 mb-4">
                <button
                    onClick={() => dispatch(setFilter("all"))}
                    className={`px-4 py-1 rounded ${
                        filter === "all"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => dispatch(setFilter("done"))}
                    className={`px-4 py-1 rounded ${
                        filter === "done"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Done
                </button>
                <button
                    onClick={() => dispatch(setFilter("not"))}
                    className={`px-4 py-1 rounded ${
                        filter === "not"
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    Not Done
                </button>
            </div>
            <div className="space-y-2">
                {filteredList.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default ListTask;
