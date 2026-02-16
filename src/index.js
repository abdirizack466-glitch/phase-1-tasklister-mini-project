document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const input = document.querySelector('#new-task-description');
  const tasks = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const li = document.createElement('li');
    li.textContent = input.value;
    tasks.appendChild(li);
    input.value = ''; // clear input
  });
});

