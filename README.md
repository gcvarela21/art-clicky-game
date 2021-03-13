# Art Memory Game ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)

A Web based Memory Game.

## Table of Contents

* [Summary](#summary)
* [User Story](#user-story)
* [Dependencies](#Dependencies)
* [Installation](#Installation)
* [Functionality](#Functionality)
* [Creator](#creator)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

______________________________________________________________________________

## Summary

This web application is a memory game, that randomizes the image locations on a grid. Clicking on different images increases your score, and clicking on the same image twice zeroes out your score.

* [Live Site](https://gcvarela21.github.io/art-clicky-game/)
* [Project Repository](https://github.com/gcvarela21/art-clicky-game)

![GIF Visual of The Deployed Web Application](https://github.com/gcvarela21/art-clicky-game/blob/main/art_click.gif?raw=true)

______________________________________________________________________________

## User-Story

______________________________________________________________________________

## Dependencies

Built With

* [HTML 5](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/css_howto.asp)
* [GitHub](https://github.com/)
* [JavaScript](https://www.w3schools.com/js/default.asp)
* [BootStrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Git](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/)
* [react](https://reactjs.org/docs/getting-started.html)

______________________________________________________________________________
  
## Installation

For local installation [Node.js](https://nodejs.org/en/) needs to be installed.

Please clone or download the project folder.

Open your prefered terminal or comand_promt program and navigate into the project folder, and then the slapapp folder. From the root of that folder run the following commands:

```javascript
npm install
```

and then run the application with the next command:

```javascript
npm start
```

The application should launch a web-browser with the running app. The application will be visible in your web browser of choice at:

```javascript
localhost:3000
```

______________________________________________________________________________
  
## Funtionality

This Apllication in its development uses Node Js and React to render the single web page. Using various componets and passing variables through propbs we build the functionallity of the game.

The images objects are stored in a json folder and imported for use in within the componets. Components are exported to the App.js file, and then exported to the index.js where the index.html renders page.

The main functionality is created in the MainPage.js where the state is set and the json images are imported. A funnction runs through to see if the imagaes have bee selected based on a true or false bolean value, the images are shuffled and the score is incremented with a handle click fumction that is passed tp a buttum in the image card component through props.

```javascript
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
```


______________________________________________________________________________

## Creator

Gloria C Varela

* [GitHub Profile Page](https://github.com/gcvarela21)
* [Web Developer Portfoio Website](https://gcvarela21.github.io/glo.digital/)
* [Interactive Design Portfolio Website](https://www.glo.digital/)
* [LinkenIn](https://www.linkedin.com/in/glovarela/)

______________________________________________________________________________

### Contributing

```javascript
// There are no contributions at this time
```

______________________________________________________________________________

### Tests

```javascript
// There is no test at this time
```

______________________________________________________________________________

### Questions

If you have any questions contact: Any of the [Creators](#creators)

______________________________________________________________________________

### License

This project is licensed under: ![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)
