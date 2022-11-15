function Error(props) {
    let errorComponent = props.error && (
        <p className="text-xs italic text-rose-500 font-semibold text-right mt-1">
            {props.errorText}
        </p>
    );

    return errorComponent;
}

export default Error;
