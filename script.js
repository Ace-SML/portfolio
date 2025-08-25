// Select all .work-item elements
const workItems = document.querySelectorAll('.work-item');

// Define an array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FF8C33', '#6A33FF', '#33FFF3'];

// Loop through each work-item and assign a random color
workItems.forEach(item => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    item.style.backgroundColor = colors[randomIndex];
});
