import './list_item.css';

const list_item = (props) => {
    return(
        <li className='item'>
            <p>{props.text}</p>
        </li>
    )
}

export default list_item;