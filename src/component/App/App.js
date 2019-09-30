import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal';
import './App.css';

const App = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">UserList</Link></li>
                <li><Link to="/grouplist">GroupList</Link></li>
            </ul>
            <Modal />
        </div>
    )
}

export default App;