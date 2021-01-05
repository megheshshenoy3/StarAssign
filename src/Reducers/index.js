import Posts from './PostsData'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    posts:Posts,
});
export default allReducers;
