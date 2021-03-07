let start = document.querySelector('button')
let key ="/facts"

start.addEventListener('click', () =>{
  fetch(`https://cat-fact.herokuapp.com/`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
       console.log(response.quote)
      document.getElementById('factz').innerHTML=response.quote
    })
    fetch( `https://cat-fact.herokuapp.com/facts`)
      .then(res => res.json())
      .then(response => {
   document.getElementById('click').innerHTML= response.response.results[1].facts

})
})
