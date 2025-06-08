import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-indigo-600">
                ToDo App
            </h1>
            <div className="w-full max-w-md space-y-4">
                <AddTask />
                <ListTask />
            </div>
        </div>
    );
};

export default App;
