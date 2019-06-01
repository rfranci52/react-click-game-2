import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";


import friends from "./friends.json";



let answers =[];
// i dont think im actually using this answersdup variable
// let answersdup =[];
let score = 0;
// function getRandomItem(friends) {
//   let items = Array.from(friends);

//   return items[Math.floor(Math.random() * friends.length)];

// }
var randomItem =[friends[Math.floor (Math.random()*2)+1],friends[Math.floor(Math.random()*10)],  friends[Math.floor(Math.random()*12)],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*10)+2],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*7)+3],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)] , friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)]  ]



// var randomItem = friends[Math.floor(Math.random()*friends.length)];

// console.log(randomItem)


class App extends Component {
  
  
  // Setting this.state.friends to the friends json array
  state = {
    randomItem
    
  };
  
  

  removeFriend = id => {



    var randomItem =[friends[Math.floor (Math.random()*2)+1],friends[Math.floor(Math.random()*10)],  friends[Math.floor(Math.random()*12)],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*10)+2],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*7)+3],friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)] , friends[Math.floor(Math.random()*friends.length)],friends[Math.floor(Math.random()*friends.length)]  ]


    // if (id !== "used"){
    //   turns++
    // }
   
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ randomItem });

    for (var i = 0; i < friends.length; i++)

   if (friends[i].id=== id && answers.includes(j)!== friends[i].id){ 
    // this line below checks if a value is in the array
    // console.log(answers.includes(friends[i].name)); 
    if (answers.includes(friends[i].name) === true)

    
    {console.log("seems to work ");
    alert(`Game Over. Final Score: `+ score)
    window.location.reload();

    function empty() {
      //empty your array
      answers = [];
  }
  empty();
  
  score=0;

  console.log(score)

}

    answers.push(friends[i].name);
    for (var j = 0; j < answers.length; j++)
    // on the line below, if you dont go in order, the array does not push. when i commented out the (id===friends[j].id clause. that seems to fix the bug. i also need to add a reset function
    // if (id===friends[j].id){
    // answersdup.push(friends[i].name) ;
    // console.log(answersdup)
   

  // }
    // this.setState({ answers });
    // console.log(friends[i].id); 

    // console.log(answersdup.includes(friends[i].name))

    // console.log(answersdup); 
    // console.log(([friends[i].name])); 

    // this line below checks if a value is in the array
    //    console.log(answers.includes(friends[i].name)); 
    //    if (answers.includes(friends[i].name) === true)
    // {console.log("getting closer")}
      //  for (var j = 0; j < answers.length; j++)
       if(answers[j]=== friends[i].id
        && 
        answers.length>=2)
      //  )
        {console.log("here")}
        score++;
        console.log(score)


      // console.log(turns )
   }
      
      // console.log(friends[i])
    
  
    

// var score = 0;

   // if(friends[i].id !== answers){ 
      // friends[i].id = "used";
      // score++;
      // console.log(score)


      // console.log(friends)


    

 }
// }
 
// for (var i = 0; i <= friends.length; i++)
// console.log(friends[i])

  //   if(id=== "used" &&  turns >=2){
  //     console.log("score -1")
  //     console.log(turns )
      
  //   }
      
    
  // };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
   // for (var i = 0; i <= friends.length; i++)

    // var randomItem = friends[Math.floor(Math.random()*friends.length)];



    
    return (
      
      <Wrapper>

        <Title>Friends List         <Score>{[score]}</Score>
</Title>

        
        {this.state.randomItem.map(randomItem => (
          
          <FriendCard
            removeFriend={this.removeFriend}
            id={randomItem.id}
            key={randomItem.id}
            name={randomItem.name}
            
            image={randomItem.image}
            occupation={randomItem.occupation}
            location={randomItem.location}
          />
        ))}
        
      </Wrapper>
         
       
    );
  }
  
}

export default App;
