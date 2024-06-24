document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');

    var users = {
        'user1': 'password1',
        'user2': 'password2'
    };

    if (users[username] && users[username] === password) {
        alert('Login Successfully!');
        errorMessage.textContent = '';
        // document.querySelector('.login-container').style.display = 'none';
        // document.querySelector('.container-Task').style.display = 'block';
    } else {
        errorMessage.textContent = 'Wrong Password. Please try Again.';
    }
});





// const addTask = () => {
//     const taskInput = document.getElementById('taskInput');
//     const taskInputValue = taskInput.value.trim();

//     if (taskInputValue !== '') {
//         const taskListUl = document.getElementById('taskList');
//         const li = document.createElement('li');
//         li.innerHTML = '<input type="checkbox">' + taskInputValue + ' <button onclick="deleteTask(this)">Delete</button>';
//         taskListUl.appendChild(li);
//         taskInput.value = '';
//     } else {
//         alert('Please add Your Task');
//     }
// }

// const deleteTask = (btn) => {
//     const li = btn.parentNode;
//     li.parentNode.removeChild(li);
// }

// const deletedCheckd = () => {
//     const taskList = document.getElementById('taskList');
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

//     checkboxes.forEach(checkbox => {
//         const li = checkbox.parentNode;
//         li.parentNode.removeChild(li);
//     });
// }