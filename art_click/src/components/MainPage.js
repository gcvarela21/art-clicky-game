import React, { Component } from 'react';
import ImgBlock from './ImgBlock.js';
import Header from './Header.js';
import images from '../Art.json';

// render all images page and click events
class MainPage extends Component {

    state = {
        url: images,
        clicked: false,
        score: 0,
        topScore: 0,

    };


    
        handleClick = (id, clicked) => {
       
    
        if (clicked === false) {
          console.log(images);
    
          var newScore = this.state.score + 1
          console.log(newScore);
          if (newScore > this.state.topScore) {
            this.state.topScore = newScore
          }
    
          var img = this.state.url
    
          img.forEach((images, index) => {
            if (id === images.id) {
              img[index].clicked = true;
            }
          })
    
          return this.setState({
            // shuffle
            url: img.sort(() => Math.random() - 0.5),
            score: newScore,
            clicked: true
          })
        }
        // score depricated
        else {
          // reset reset score save hiscore
          images.forEach((index) => {index.clicked = false})
          return this.setState({
            score: 0
          })
        }
        // checks topscore
      }
        render() {
          return (
            <>
              <Header score={this.state.score} topScore={this.state.topScore} />
              <div className='row'>
               {this.state.url.map(image => (
                     <ImgBlock 
                     url={image.url} 
                     title={image.title} 
                     key={image.title} 
                     clicked={image.clicked} 
                     handleClick={this.handleClick} />
                 ))}
             </div>
    
            </>
    
          );
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