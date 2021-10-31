import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Components/header'
import Post from "./Components/post";
import Stats from "./Components/stats";
import RecomendedHashtags from "./Components/recomended_hashtags";
import Footer from "./Components/footer";

const App = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12 bg-gray-50'>
                <Stats></Stats>
                <Post></Post>
                <RecomendedHashtags></RecomendedHashtags>
            </div>
            <Footer></Footer>
        </div>
    );
}


ReactDOM.render(<App />,
    document.getElementById('root'))