const TOKEN = '8144530788:AAEGfTSo5es2EQsyms8YY0xk0aT3yFQjRko';
const CHAT_ID = '-1002892616391';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// это элемент сообщения, который будет появляться, если сообщение
// будет успешно отправлено
const succes = document.querySelector('.succes');

document.getElementById('form').addEventListener('submit', function(e) {

    e.preventDefault();

    let message = 'Заявка с сайта\n' + 'Имя: ' + this.name.value + '\n' +
    'Номер тел./email/соц.сеть: ' + this.phone.value + '\n' +
    'Город: ' + this.city.value + '\n' +
    'Вопрос: ' + this.question.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {

        succes.classList.remove('display');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })

})