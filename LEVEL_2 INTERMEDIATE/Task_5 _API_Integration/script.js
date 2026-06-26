function loadPosts(){

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

    .then(response => response.json())

    .then(data => {

        let output = "";

        data.forEach(post => {

            output += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });

        document.getElementById("posts").innerHTML = output;
    })

    .catch(error => {

        document.getElementById("posts").innerHTML =
        "<p>Failed to load data.</p>";

        console.log(error);
    });
}