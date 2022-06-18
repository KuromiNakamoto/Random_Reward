import list_item from './config.js';

let timer = document.querySelector('config[name="timer"]').innerHTML;
let speed = document.querySelector('config[name="speed"]').innerHTML;

document.getElementById('my_event_01').addEventListener('click', function () {
    let _this = this;

    let target = document.querySelector('.my_style_03');

    target.setAttribute('disabled', '');

    _this.style = "display:none;";

    let rest = setInterval(function () {
        target.setAttribute('value', random_array(list_item));
    }, speed);

    setTimeout(function () {
        clearInterval(rest);

        setTimeout(function () {
            let get_reward = target.getAttribute('value');

            target.removeAttribute('disabled');

            target.setAttribute('value', 'Nhấn vào nút START bên dưới để bắt đầu !');

            _this.style = "";

            alert("Bạn đã trúng giải thưởng : " + get_reward + " !");
        }, 200);
    }, timer);
});

function random_array(array = []) {
    return array[Math.floor(Math.random() * array.length)];
}

Array.prototype.slice.call(document.getElementsByTagName('config')).forEach(
    function(item) {
        item.remove();
    }
);