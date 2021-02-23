import React, { Component } from 'react';
import ImgBlock from './ImgBlock';
import art from '../Art.json';

// render all images page and click events
class MainPage extends Component {

    state = {
        art: art
    };
    render() {
        return (
            <div className='row'>
                {this.state.art.map(image => (
                    <ImgBlock url={image.url} title={image.title} />
                ))}
            </div>
        )
    }

}
export default MainPage;
    // shuffle = () => {
    //     return art.sort(() => Math.random() - 0.5);
    // };

    // test = () => {
    //     const shuffledData = shuffle(imgUrl)
    //     console.log(shuffledData);
    //     // setImgUrl(shuffledData);
    // }
    // step 1: add eventListner to the img not the row 
    // step 2: make react reload when state has been changed
    // step 3: write the logic if they click the same img 

