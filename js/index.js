"use strict"
Array.from(document.querySelectorAll('.room')).map(room => {
    room.addEventListener('click', function (e) {
        const t = e.currentTarget.querySelector('.room__reserved');
        const d = e.currentTarget.querySelector('.room__reserved-reserved');
        const i = e.currentTarget.querySelector('.room__image');

        const addClass = () => {
            t.classList.add('hidden');
            d.classList.add('visible');
            i.classList.add('room__image-reserv');
        };

        const removeClass = () => {
            t.classList.add('visible');
            t.classList.remove('hidden');
            i.classList.remove('room__image-reserv');
            d.classList.add('hidden');
            d.classList.remove('visible');
        };

        if (e.target.classList.contains('room__reserved-btn')) {
            e.currentTarget.onmouseleave = () => {
                debugger
                addClass()
            }
        }
        if (!e.target.classList.contains('room__reserved-btn')) {
            e.currentTarget.onmouseleave = () => {
                removeClass();
            }
        }
    });
});











