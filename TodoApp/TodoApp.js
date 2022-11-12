import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import DisplayTasks from "./DisplayTasks";

function App() {
    const [tasks, setTasks] = useState([
        {
            title: "Read for Exams",
            completed: false,
        },
    ]);

    function handleSubmit(newTask) {
        setTasks([...tasks, { title: newTask, completed: false }]);
    }

    function toggleTask(index) {
        let newState = [...tasks];
        newState[index].completed = !newState[index].completed;

        setTasks(newState);
    }

    return (
        <div className="container">
            <AddTask onSubmit={handleSubmit} />
            <DisplayTasks toggleTask={toggleTask} tasks={tasks} />
        </div>
    );
}

export default App;
