import { useEffect, useRef } from "react";

function AddTask(props) {
    let taskInput = useRef(null);

    function handleClick(e) {
        e.preventDefault();

        if (taskInput.current.value) {
            props.onSubmit(taskInput.current.value);

            taskInput.current.value = "";
            taskInput.current.focus();
        }
    }

    return (
        <>
            <form action="" className="row">
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        ref={taskInput}
                    />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleClick}>
                        Add Task
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddTask;
