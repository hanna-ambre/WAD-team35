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
