document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    socket.on('connect', () => {
        console.log('connected to server');
    });

    socket.on('chat message', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        document.getElementById('messages').appendChild(item);
    });

    const form = document.getElementById('form');
    const input = document.getElementById('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });
});
