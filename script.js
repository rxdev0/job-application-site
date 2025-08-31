document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = document.querySelector('button');
    button.textContent = 'Submitting...';
    
    setTimeout(function() {
        button.textContent = 'Submitted';
        button.style.backgroundColor = '#3e8b41ff';
        button.style.color = '#fff';
    }, 4000);
});

document.getElementById('upload').addEventListener('change', function() {
    if (this.files[0]) {
        console.log('File selected:', this.files[0].name);
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (this.value && !this.value.includes('@')) {
        this.style.border = '2px solid red';
    }
});
