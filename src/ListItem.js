import { makerStyles } from "./guitarStyles";

function ListItem(props) {
    const maker = props.item.text && props.item.text.toLowerCase();

    return (
        <li style={maker && makerStyles[maker]}>
            <h5>{props.item.title}</h5>
            <p>{props.item.text}</p>
        </li>
    );
}

export default ListItem;
