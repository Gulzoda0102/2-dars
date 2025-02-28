
document.addEventListener("DOMContentLoaded", function () {
    fetchTodos(); 
});

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById("todo-body");
            tbody.innerHTML = ""; 

            data.slice(0, 10).forEach(item => { 
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.completed ? "✅ Done" : "❌ Not Done"}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Xatolik yuz berdi:", error));
}






function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
















// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(data => {
//     data.map(item => {
//         const table = document.createElement('table');
//         table.className = 'table';
//         table.innerHTML = `

//      <tr>
//     <td>${item.id}</td>
//     <td>${item.title}</td>
//     <td>${item.completed}</td>
//     </tr>

//         `
//         wrapper.appendChild(table)
//     })
//     console.log(data);
    
// }
// )
// const wrapper = document.querySelector('.wrapper')

// document.addEventListener("DOMContentLoaded", function () {
//     fetchTodos(); // Sahifa yuklanganda avtomatik chaqiriladi
// });












// const users = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
//     { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
// ]

// console.log((users));

// const wrapper = document.querySelector('.wrapper')

// users.map(item =>{
//     const table = document.createElement('table');
//     table.className = 'table'
//     table.innerHTML = `
//     <tr>
//     <td>${item.id}</td>
//     <td>${item.name}</td>
//     <td>${item.email}</td>
//     </tr>


//     `
//     wrapper.appendChild(table)
// })
