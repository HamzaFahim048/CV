/* Add Skill Functionality
function addSkill() {
  const skillList = document.querySelector('#skills-list');
  const newSkill = document.querySelector('#new-skill').value;

  if (newSkill) {
    const li = document.createElement('li');
    li.textContent = newSkill;
    skillList.appendChild(li);
    document.querySelector('#new-skill').value = '';
  } else {
    alert('Please enter a skill');
  }
}
*/
// Download Resume Functionality
function downloadResume() {
  const link = document.createElement('a');
  link.href = './HamzaFahim_Resume.pdf';
  link.download = 'HamzaFahim_Resume.pdf';
  link.click();
}

// Form Validation
/*function validateForm() {
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  if (!email || !message) {
    alert('Please fill out all fields');
    return false;
  }
  return true;
}

// Theme Toggle Functionality
const toggleSwitch = document.querySelector('#theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

// Set initial theme based on localStorage
document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') 
  toggleSwitch.checked = true;

// Toggle theme based on switch state
toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});*/