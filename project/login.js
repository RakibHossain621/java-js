document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';
    errorMessage.style.color = '';
   
    
    try {
        reuseLoader(true)
       const app_data = {
        email,
         password
       }
        const response = await fetch('https://rakib-bhai-api.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(app_data)
        });

        console.log('Request sent:', response);

        const data = await response.json();

        // console.log('Response received:', data);

        if (response.ok && response.status === 201) {
            reuseLoader(false)
            errorMessage.textContent = 'Login successful!';
            errorMessage.style.color = 'green';
            localStorage.setItem('acces_token', data.token)
            window.location.href = '/project/todo.html';
        } else {
            reuseLoader(false)
            errorMessage.textContent = 'Login failed. Please try again: ' + data.message;
            errorMessage.style.color = 'red';
        }
    } catch (error) {
        reuseLoader(false)
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
        errorMessage.style.color = 'red';
    }
});


function reuseLoader(value){
     const login_btn = document.querySelector(".login_btn");
    if(value){
    login_btn.innerHTML = 'loading...';
    login_btn.setAttribute("disabled", value);
    }
}




















    // var users = {
    //     'user1': 'password1',
    //     'user2': 'password2'
    // };

    // if (users[username] && users[username] === password) {
    //     alert('Login Successfully!');
    //     errorMessage.textContent = '';
    //     // document.querySelector('.login-container').style.display = 'none';
    //     // document.querySelector('.container-Task').style.display = 'block';
    // } else {
    //     errorMessage.textContent = 'Wrong Password. Please try Again.';
    // }






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