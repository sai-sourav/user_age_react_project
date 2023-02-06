import './users_list.css';
import ListItem from './list_item';

const Users_list = (props) => {
    return(
        <ul className='userslist'>
            {props.list.map((item) => <ListItem key={Math.random().toString()} text={`${item.username} (${item.age} years old)`}></ListItem>)}
        </ul>
    )
}

export default Users_list;