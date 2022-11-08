const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = 'You Got This!';

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
