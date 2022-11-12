import TaskCard from "./TaskCard";

function DisplayTasks(props) {
    let tasks = props.tasks.map((task, i) => {
        return <TaskCard toggleTask={props.toggleTask} task={task} index={i} />;
    });

    return (
        <>
            <div className="row mt-5">
                <h3>Tasks</h3>
                <div>{tasks}</div>
            </div>
        </>
    );
}

export default DisplayTasks;
