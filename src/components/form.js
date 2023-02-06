import { useRef } from 'react';
import './form.css';
import Wrapper from './helpers/wrapper';

const Form = (props) => {
    // const [username, changeusename] = useState('');
    // const [age, ChangeAge] = useState('');

    const usernameinput = useRef();
    const ageinput = useRef();

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        const username = usernameinput.current.value;
        const age = ageinput.current.value;
        props.callbackfromApp({username: username, age: age});
        usernameinput.current.value = '';
        ageinput.current.value = '';
        // changeusename('')
        // ChangeAge('')
    }
    return (
        <Wrapper>
            <form onSubmit={SubmitHandler}>
                <div id="forminputs" className='form-control'>
                    <label htmlFor='user'>Username:</label>
                    <input type="text" id='user' name='username' ref={usernameinput}></input>
                    <label htmlFor='Age'>Age:</label>
                    <input type="number" id='Age' name='age' ref={ageinput}></input>
                </div>
                <div id="formactions">
                    <button type='submit'>Add user</button>
                </div>
            </form>
        </Wrapper>
    )
}


export default Form;