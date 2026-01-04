const input = document.getElementById('search');
const items = document.querySelectorAll('#list li');

input.addEventListener('input', () => {
    const query = input.value.trim().toUpperCase();

    items.forEach(li => {
        const text = li.textContent.toUpperCase();
        li.style.display = text.includes(query) ? '' : 'none';
    });
});
