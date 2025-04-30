let tasks = [];
const taskList = document.getElementById('taskList');
const taskTitleInput = document.getElementById('taskTitleInput');
const taskDescInput = document.getElementById('taskDescInput');
const addTaskButton = document.getElementById('addTaskButton');
const deleteTaskButton = document.getElementById('deleteTaskButton');
const filterSelect = document.getElementById('filterSelect');

// Initialize the application
window.onload = function() {
    loadTasksFromLocalStorage();
    displayTasks();
    
    // Event Listeners
    addTaskButton.addEventListener('click', addTask);
    deleteTaskButton.addEventListener('click', () => deleteTask("all"));
    filterSelect.addEventListener('change', displayTasks);
};



// Function to add a new task
function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescInput.value.trim();
    
    if (!title) {
        alert('Please enter a task title');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasksToLocalStorage();
    displayTasks();
    
    // Clear input fields
    taskTitleInput.value = '';
    taskDescInput.value = '';
    taskTitleInput.focus();
}

// Function to display tasks based on filter
function displayTasks() {
    // Clear the task list
    taskList.innerHTML = '';
    
    // Get the current filter value
    const filter = filterSelect.value;
    
    // Filter tasks based on the selected filter
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });
    
    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <li class="text-center p-5 text-[#777]">No tasks found</li>
            <li class="text-center">
                <button onclick="loadSampleData()"
                    class="bg-blue-600 text-white rounded-[4px] hover:cursor-pointer h-10 px-5">
                    Load Sample Data
                </button>
            </li>
        `;
        return;
    }
    
    // Create and append task items
    filteredTasks.forEach(task => {
        taskList.innerHTML += `
          <li class="bg-blue-50/60 p-2 rounded-[4px] border-l-[4px] ${task.completed ? 'border-red-500' : 'border-green-500'} shadow-md relative cursor-pointer hover:bg-blue-100/70 hover:translate-x-1 transition duration-200 ease-in-out">
            <p class="font-bold sm:font-semibold text-xl w-[calc(100%-80px)]">${task.title}</p>
            <p class="text-gray-500 text-[0.9rem]">${task.description}</p>
            <p class="text-[0.9rem]">Created at: ${new Date(task.createdAt).toLocaleString()}</p>
            <div class="absolute top-[8px] right-[10px] flex gap-1">
                <button class="border border-gray-300 inset-shadow-sm h-7 w-7 rounded-[4px] bg-white cursor-pointer" onclick="toggleTaskCompletion(${task.id})">
                    ${task.completed ? '<i class="fa-solid fa-hourglass-half"></i>' : '<i class="fa-solid fa-circle-check text-green-500"></i>'}
                </button>
                <p>:</p>
                <button class="border border-blue-50 h-7 w-7 rounded-[4px] bg-red-500 text-white text-[0.9rem] cursor-pointer" onclick="deleteTask(${task.id})"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </li>
        `;
    });
}

// Function to delete a task
function deleteTask(taskId) {
  if (taskId == "all" && confirm('Are you sure you want to clear all the tasks?')) {
    tasks = [];
    saveTasksToLocalStorage();
    displayTasks();
    return;
  }
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage();
        displayTasks();
    }
}

// Function to toggle task completion status
function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasksToLocalStorage();
    displayTasks();
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

// Function to Load Sample Data
function loadSampleData() {
    tasks = [
        {
            id: 1714567890123,
            title: "Morning Exercise",
            description: "Do 30 minutes of cardio",
            completed: false,
            createdAt: "2024-05-01T08:30:00.000Z"
        },
        {
            id: 1714567890124,
            title: "Buy Groceries",
            description: "Milk, eggs, bread, and fruits",
            completed: true,
            createdAt: "2024-05-01T09:15:00.000Z"
        },
        {
            id: 1714567890125,
            title: "Read Book",
            description: "Finish chapter 5 of current novel",
            completed: false,
            createdAt: "2024-05-01T10:00:00.000Z"
        },
        {
            id: 1714567890126,
            title: "Call Mom",
            description: "Weekly catch-up call",
            completed: false,
            createdAt: "2024-05-01T12:30:00.000Z"
        },
        {
            id: 1714567890127,
            title: "Finish Report",
            description: "Complete quarterly sales report",
            completed: true,
            createdAt: "2024-05-01T14:45:00.000Z"
        },
        {
            id: 1714567890128,
            title: "Water Plants",
            description: "All indoor and balcony plants",
            completed: false,
            createdAt: "2024-05-01T16:00:00.000Z"
        },
        {
            id: 1714567890129,
            title: "Plan Weekend Trip",
            description: "Research destinations and book hotels",
            completed: true,
            createdAt: "2024-05-01T17:20:00.000Z"
        },
        {
            id: 1714567890130,
            title: "Bathing",
            description: "Evening shower with relaxing music",
            completed: true,
            createdAt: "2024-05-01T19:00:00.000Z"
        },
        {
            id: 1714567890131,
            title: "Learn New Recipe",
            description: "Try making pasta carbonara",
            completed: false,
            createdAt: "2024-05-01T20:15:00.000Z"
        },
        {
            id: 1714567890132,
            title: "Meditate",
            description: "15 minutes of mindfulness meditation",
            completed: false,
            createdAt: "2024-05-01T21:30:00.000Z"
        }
    ];

    saveTasksToLocalStorage();
    displayTasks();
}