let count = Number(localStorage.getItem('reviewCount')) || 0;
count++;
localStorage.setItem('reviewCount', count);
document.getElementById('reviewCount').textContent = count;

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();