import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List(props) {
    let items = props.items.map((item) => <ListItem item={item} />);

    return (
        <>
            <h1>{props.title}</h1>
            <ul>{items}</ul>
        </>
    );
}

List.defaultProps = {
    item: [],
    background: "primary",
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    background: PropTypes.oneOf(["primary", "secondary"]),
};

export default List;
