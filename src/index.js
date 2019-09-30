import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import UserList from './component/Users/UserList';
import GroupList from './component/Groups/GroupList';
import {Provider} from 'react-redux';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userList from './data/reducer/userReducer';
import groupList from './data/reducer/groupReducer';
import modalDetails from './data/reducer/modalReducer';
import {HashRouter as Router,Route} from 'react-router-dom';

let reducer = combineReducers({
    userList,
    groupList,
    modalDetails
});
const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                <Router>
                    <Route path='/' component={App} />
                    <Route exact path='/' component={UserList} />
                    <Route exact path='/grouplist' component={GroupList} />
                </Router>
                </Provider>,document.getElementById('app'));
