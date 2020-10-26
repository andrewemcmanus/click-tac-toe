


let counter = 0;


const buttons = document.querySelectorAll('button')

document.querySelector('#start-game').addEventListener('click', function() {
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      counter ++;
      console.log(`you have clicked ${counter} buttons total`);
      // buttons[i].classList.add('active-button')
      const textToLog = event.target.innerText
      console.log(`You clicked the ${textToLog}!`);
    })
  }
  
  document.querySelector('#first').addEventListener('click', function() {
    const newButton = document.createElement('button')

    newButton.innerText = 'I am new here!'
    
    document.querySelector('#buttons-container').append(newButton)
  })



  
  
  // this is the hard-coded way, don't do it!
  // document.querySelector('#first').addEventListener('click', function() {
  //   // const info = document.querySelector('#game-info').innerText
  //   // console.log(info);
  //   console.log(`You clicked the first button!`);
  // })
  
  // document.querySelector('#second').addEventListener('click', function() {
  //   // document.querySelector('#game-info').innerText = "I just accessed the DOM!!"
  //   console.log(`You clicked the first button!`);

  // })
  // document.querySelector('#third').addEventListener('click', function() {
  //   // document.querySelector('#game-info').innerText = "I just accessed the DOM!!"
  //   console.log(`You clicked the first button!`);

  // })
  // document.querySelector('#fourth').addEventListener('click', function() {
  //   // document.querySelector('#game-info').innerText = "I just accessed the DOM!!"
  //   console.log(`You clicked the first button!`);

  // })
})  



