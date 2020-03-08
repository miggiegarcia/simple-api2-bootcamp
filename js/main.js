let artistName = document.getElementById("typeArtistName").value;
let button =document.getElementById("search")
let paragraph = document.getElementById("showArtistInfo")

const key="c79383322823e5bec73cfc7921e2e9c6"


button.addEventListener('click',function(){
  console.log("fired after click")
  artistName = document.getElementById("typeArtistName").value;
  console.log(artistName)
fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${key}&format=json`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(toptracks => {
    console.log(toptracks)
    console.log(toptracks.toptracks.track[1].name)

    toptracks.toptracks.track.forEach( (titles,i) =>{
      let ul =document.querySelector("#resultList")
      let li=document.createElement("LI")
      let topSongs = toptracks.toptracks.track[i].name
      let newContent = document.createTextNode(toptracks.toptracks.track[i].name)
        li.appendChild(newContent);
        ul.appendChild(li);


      li.innerHTML=toptracks.toptracks.track[i].name
    })

  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
})
