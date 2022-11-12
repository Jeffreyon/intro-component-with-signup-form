export default function TaskCard(props) {
    let display = props.task.completed && "text-secondary ";

    function handleClick(e) {
        props.toggleTask(props.index);
    }

    return (
        <>
            <div
                className={`card card-body mt-3 ${display}`}
                onClick={handleClick}>
                <p className="card-text" key={props.index}>
                    {props.task.title}
                </p>
            </div>
        </>
    );
}
