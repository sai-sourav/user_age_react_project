import { useState } from 'react';
import './form.css';
import Wrapper from './helpers/wrapper';

const Form = (props) => {
    const [username, changeusename] = useState('');
    const [age, ChangeAge] = useState('');

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        props.callbackfromApp({username: username, age: age});
        changeusename('')
        ChangeAge('')
    }

    const UserName = (e) => {
        changeusename(e.target.value)
    }

    const UserAge = (e) => {
        ChangeAge(e.target.value)
    }
    return (
        <Wrapper>
            <form onSubmit={SubmitHandler}>
                <div id="forminputs" className='form-control'>
                    <label htmlFor='user'>Username:</label>
                    <input type="text" id='user' name='username' value={username} onChange={UserName}></input>
                    <label htmlFor='Age'>Age:</label>
                    <input type="number" id='Age' name='age' value={age} onChange={UserAge}></input>
                </div>
                <div id="formactions">
                    <button type='submit'>Add user</button>
                </div>
            </form>
        </Wrapper>
    )
}


export default Form;