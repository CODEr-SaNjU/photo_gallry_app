import React, { Component } from 'react';
import Title from './Title'
import Photoframe from "./photoframe";
import '../styles/stylesheet.css';

const allPhotos = [{
    id: "0",
    description: "beautiful sea",
    imageLink: "https://picsum.photos/800/600?image=14"
    }, {
    id: "1",
    description: "Coffee cup",
    imageLink: "https://picsum.photos/800/600?image=30"
    }, {
    id: "2",
    description: "Freedom",
    imageLink: "https://picsum.photos/800/600?image=50"
    }, {
    id: "3",
    description: "Farm",
    imageLink: "https://picsum.photos/800/600?image=85"
}]



class Main extends Component{
    render() {
        return <div>
            <Title />
            <Photoframe PhotoPart={allPhotos} />
        </div>
    }
}


export default Main;