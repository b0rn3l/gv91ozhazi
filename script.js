document.getElementById("load-users").addEventListener("click", function () {
    fetch('https://randomuser.me/api/?results=4') 
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            const userList = document.getElementById("user-list");

            userList.style.display = "grid";
            userList.innerHTML = ''; 

            users.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-item");

                userDiv.innerHTML = `
                    <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>Age: ${user.dob.age}</p>
                    <p>Location: ${user.location.city}, ${user.location.country}</p>
                    <p>Email: ${user.email}</p>
                `;

                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Hiba történt a felhasználók betöltésekor:', error);
        });
});
