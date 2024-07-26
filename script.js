document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Vul alle velden in voordat je het formulier verzendt.');
    } else {
        alert('Formulier succesvol verzonden!');
    }
});

// Interactive feature: Toggle additional project details
document.querySelectorAll('.project').forEach(project => {
    let details = document.createElement('p');
    details.textContent = 'Extra projectinformatie hier...';
    details.style.display = 'none';
    details.classList.add('details');
    project.appendChild(details);

    let toggleButton = document.createElement('button');
    toggleButton.textContent = 'Meer info';
    toggleButton.addEventListener('click', () => {
        if (details.style.display === 'none') {
            details.style.display = 'block';
            toggleButton.textContent = 'Minder info';
        } else {
            details.style.display = 'none';
            toggleButton.textContent = 'Meer info';
        }
    });
    project.appendChild(toggleButton);
});
