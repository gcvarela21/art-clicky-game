import React, { Component } from 'react';
import ImgBlock from './ImgBlock';
import art from '../Art.json';

// render all images page and click events
class MainPage extends Component {

    state = {
        url: art,
        clicked: false,
        count: 0,
        topScore: 0,

    };

    handleClick = (props) => {
        const art = this.state.art;
        if (clickeded) {
            art.forEach((art, index) => {
                art[index].clicked = false;
                console.log(clicked);
            }); return this.setState({
                art: art.sort(() => Math.random() - 0.5),
                count: this.state.count + 1
            })
        } else {
            console.log("else");
        }
    };



    render() {
        return (
            <>
                <div className='row'>
                    {art.map(image => (
                    <ImgBlock
                        count={this.state.count}
                        url={image.url}
                        title={image.title}
                        key={image.title}
                        click={image.click}
                        handleClick={this.handleClick} />
                ))}
                </div>

            </>
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

//     state = {
//         url: art,
//         clicked: false,
//         count: 0,
//         topScore: 0,

//     };

//     handleClick = (title, clicked) => {
//         const art = this.state.art;
//         if (clickeded) {
//             art.forEach((art, index) => {
//                 art[index].clicked = false;
//                 console.log(clicked);
//             }); return this.setState({
//                 url: art.sort(() => Math.random() - 0.5), 
//                 count: this.state.count + 1
//             })
//         } else {
//                 console.log("else");
//                 }
//             };

//     render() {
//         return (
//             <div className='row'>
//                 {art.map(image => (
//                     <ImgBlock 
//                     count={this.state.count}
//                     url={image.url} 
//                     title={image.title} 
//                     key={image.title} 
//                     click={image.click} 
//                     handleClick={this.handleClick} />
//                 ))}
//             </div>
//         )
//     }

// }