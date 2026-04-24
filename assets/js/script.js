'use strict';

const init = () => {
    'Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun'.split(', ').forEach(planet => {
        const el = document.createElement('p');
        el.innerText = planet;
        document.body.append(el);
    })
}

init();