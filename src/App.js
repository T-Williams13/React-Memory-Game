import React, { Component } from 'react';
import picsJSON from "./pics.json";
import PicCard from "./components/PicCard";
import NavBar from "./components/NavBar";


class App extends Component {
  // Setting this.state.pics to the pics json array
 state = {
   pics: [],
   score: 0,
   topScore: 0
 };
 
 componentDidMount(){
  this.setState({pics:this.shuffle(picsJSON)});
 }

 
//functions to increase score on a click event and shuffel cards in random order if that img has not been clicked before. 
scoreCounter = id => {
  let flag = false;
  const newPicsArray = this.state.pics.map(pic => {
  // this.setState({pics:this.shuffle(this.state.pics)});
//get the value of the clicked boolean where the id = id
    if (pic.id === id){
      if(pic.clicked === false){
        pic.clicked = true;
          
      }else{ 
        flag = true;
      }
    }
    return pic;
  });
  // !flag means image has not been clicked before
  if(!flag) {

    // Since it has not been clicked before, we are going to create a newScore by adding one to the existing
    // We're also grabbing the existing topScore as well
    let newScore = this.state.score + 1;
    let newTopScore = this.state.topScore;

    // Now we will compare the newScore with topScore to see if we need to update the top score
    if(newScore >= newTopScore) {
      console.log('Top Score Updated');
      newTopScore = newScore;
    }

    this.setState({
      score: newScore,
      topScore: newTopScore,
      pics: newPicsArray
      
    })
  // If image has been clicked before, we are going to invoke our resetGame() function;
  } else {
    this.resetGame();
  }
//filter the this.state.pics array for all pics other than the one being clicked(which is identified by its id).
// const pics = this.state.pics.filter(pic => pic.id !== id);
}

shuffle = array => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  
}

resetGame = clickCheck =>{
  console.log('Game Over');
  
  const newArray = this.state.pics.map(pic => { 
    pic.clicked = false;
    return pic; 
  });
  this.setState({
    pics:this.shuffle(newArray),
    score: 0
  });
}


  
  render() {
    return (
      <div className="app">
      <NavBar
      score={this.state.score}
      topScore={this.state.topScore}
      />
        <h1>Choose a picture only once!</h1> 
      <div className="flex-container">
      {/* Map over this.state.pics and render a picCard component for each pic object */}
        {this.state.pics.map(pic => (
          <PicCard
          scoreCounter={this.scoreCounter}
            id={pic.id}
            key={pic.id}
            name={pic.className}
            image={pic.image}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
