function getPosts(id, event = "event") {
    
  // Create an XMLHttpRequest object
  const xhttp = new XMLHttpRequest();

  // Define a callback function
    xhttp.onload = function () {
        document.getElementById("posts").innerHTML = '';
        let resp = this.response
        let posts =JSON.parse(resp)
        for (const post of posts) {
            document.getElementById("posts").innerHTML +=
            `
             <div class="post">
                  <p>
                     ${post.body}
                  </p>
              </div>
            `
        }
     
  };

  // Send a request
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + id);
  xhttp.send();
}

// for add active class 
let users = document.getElementsByClassName('user')
for (let user of users) { 
    user.addEventListener('click', function() {
        for (let user of users) {
            user.classList.remove('active')
        }
        this.classList.add('active')
    })
}

