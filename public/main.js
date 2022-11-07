// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");
var done = document.getElementsByClassName("fa-check");
var primary = document.getElementsByClassName("fa-face-frown");
var warning= document.getElementsByClassName("fa-face-sad-tear");
var danger = document.getElementsByClassName("fa-face-sad-cry");

// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('thumbUp', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('thumbDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown':thumbDown
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
  element.addEventListener("click", function(){
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const location = this.parentNode.parentNode.childNodes[7].innerText
    const date = this.parentNode.parentNode.childNodes[11].innerText
    const cell= this.parentNode.parentNode.childNodes[15].innerText
    const msg = this.parentNode.parentNode.childNodes[19].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'location': location,
        'date': date,
        'cell': cell,
        'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


Array.from(done).forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault()
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const location = this.parentNode.parentNode.childNodes[7].innerText
    const date = this.parentNode.parentNode.childNodes[11].innerText
    const cell= this.parentNode.parentNode.childNodes[15].innerText
    const msg = this.parentNode.parentNode.childNodes[19].innerText
    const complete = e.target.classList.contains('strike') ? true : false  
    fetch('complete', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'location': location,
        'date': date,
        'cell': cell,
        'msg': msg,
        'complete': complete
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
   });
});

Array.from(primary).forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault()
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const location = this.parentNode.parentNode.childNodes[7].innerText
    const date = this.parentNode.parentNode.childNodes[11].innerText
    const cell= this.parentNode.parentNode.childNodes[15].innerText
    const msg = this.parentNode.parentNode.childNodes[19].innerText
    const blue = e.target.classList.contains('blueS') ? true : false  
    fetch('blue', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'location': location,
        'date': date,
        'cell': cell,
        'msg': msg,
        'blue': blue
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
   });
});

Array.from(warning).forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault()
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const location = this.parentNode.parentNode.childNodes[7].innerText
    const date = this.parentNode.parentNode.childNodes[11].innerText
    const cell= this.parentNode.parentNode.childNodes[15].innerText
    const msg = this.parentNode.parentNode.childNodes[19].innerText
    const yellow = e.target.classList.contains('yellowS') ? true : false  
    fetch('yellow', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'location': location,
        'date': date,
        'cell': cell,
        'msg': msg,
        'yellow': yellow
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
   });
});

Array.from(danger).forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault()
    const name = this.parentNode.parentNode.childNodes[3].innerText
    const location = this.parentNode.parentNode.childNodes[7].innerText
    const date = this.parentNode.parentNode.childNodes[11].innerText
    const cell= this.parentNode.parentNode.childNodes[15].innerText
    const msg = this.parentNode.parentNode.childNodes[19].innerText
    const red = e.target.classList.contains('redS') ? true : false  
    fetch('red', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'location': location,
        'date': date,
        'cell': cell,
        'msg': msg,
        'red': red
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
   });
});