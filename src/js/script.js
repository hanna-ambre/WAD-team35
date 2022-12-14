window.onload = function() {


    //fetch('https://api.npoint.io/301cabff92cca1e31c1d')
    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(posts => {

            const div_middle = document.getElementById('posts_div');

            for (let post of posts) {
                console.log(posts);
                const div_post = document.createElement('div');
                div_post.classList.add('post');
                const div_post_Header = document.createElement('div');
                div_post_Header.classList.add('post-Header');
                const div_post_nav = document.createElement('div');
                div_post_nav.classList.add('post-nav');
                const div_post_body = document.createElement('div');
                div_post_body.classList.add('post-body');

                const avatar = document.createElement('a');
                avatar.classList.add('avatar');
                const avatar_image = document.createElement('img');
                avatar_image.src = post.avatar;
                avatar.appendChild(avatar_image);
                div_post_nav.appendChild(avatar);

                const name = document.createElement('a');
                name.textContent = post.name;
                div_post_nav.appendChild(name);
                div_post_Header.appendChild(div_post_nav);

                const date = document.createElement('a');
                date.textContent = post.date;
                div_post_Header.appendChild(date);

                const text = document.createElement('p');
                text.textContent = post.text;
                div_post_body.appendChild(text);

                if (post.image != "") {
                    const image_link = document.createElement('a');
                    const image = document.createElement('img');
                    image.classList.add('post-pictures');
                    image.src = post.image;
                    image_link.appendChild(image);
                    div_post_body.appendChild(image_link);
                }

                div_post.appendChild(div_post_Header);
                div_post.appendChild(div_post_body);



                div_middle.appendChild(div_post);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.classList.add('post');
            errDiv.innerText = err;
            document.getElementById('posts_div').appendChild(errDiv);
        })

}


/* i attemted to take data from json for droptown menue,
i changed my mind as the json file does not currently have a users hasmap, good luck with your job
i left this code here, mayby it will be useful
window.onload = function() {

//takes out binary form json and transports it here
    fetch('res/json/myjson.json')  //praegu on brauseri turvalisuse reeglitega probleeme
    //turns binary back into json
        .then((response) => response.json())
        .then(dropdown-content => {
            var dropdown = document.getElementById("dropdown");

            //const body= document.getElementsByTagName()[0]
            for (let content of dropdown-content) {
                const a1 = document.createElement('a');
                a1.textContent = content.name

                const a2 = document.createElement('a');
                a2.textContent = content.name

                dropdown.appendChild(a1);
            }
        })

}
*/
function change_dropdown_menu() {
    console.log("clicked")
    if (document.getElementById("Dropdown").style.display=="table"){
        document.getElementById("Dropdown").style.display="none";
    }
    else{
        document.getElementById("Dropdown").style.display="table";
    }
}