document.getElementById('confessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const crushName = document.getElementById('crushName').value;
    
    document.getElementById('nameOutput').textContent = crushName;
    document.querySelector('.output').classList.remove('hidden');
    document.querySelector('.textOuput').classList.add('active');
})