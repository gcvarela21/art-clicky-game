import React, { Component } from 'react';
import ImgBlock from './ImgBlock';
import art from '../Art.json';

// render all images page and click events
class MainPage extends Component {

    state = {
        art: art,
        clicked: false,
        count: 0,
        topScore: 0,
    };

    handleClick = (title, click) => {
        const art = this.state.art;
        if (click) {
            art.forEach((art, index) => {
                art[index].click = false;
            }); return this.setState({
                art: art.sort(() => Math.random() - 0.5), count: 0
            })
        } else {
            art.forEach((image, index) => {
                if (title === image.title) {
                    art[index].click = true;
                    const newScore = this.state.count + 1;
                    const newTopScore = newScore > this.state.topScore ? newScore : this.state.topScore;
                    return this.setState({
                        image: art.sort(() => Math.random() - 0.5), count: newScore, topScore: newTopScore,
                    })
                }
            });
        }
    };
    render() {
        return (
            <div className='row'>
                {this.state.art.map(image => (
                    <ImgBlock url={image.url} title={image.title} key={image.title} click={image.click} handleClick={this.handleClick} />
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

