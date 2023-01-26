//Example fetch using pokemonapi.co
//document.querySelector('button').addEventListener('click', getFetch)

//function getFetch(){
  //const choice = document.querySelector('input').value
  const url = 'https://api.gameofthronesquotes.xyz/v1/random/5' 

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0])
       document.querySelector('h2').innerText = data[0].sentence
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
//}