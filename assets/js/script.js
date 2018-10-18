/*Работа со днями, месяцами*/
var times = document.getElementsByClassName("currentDate");
var lastDay = document.getElementsByClassName("lastDay");
var myDate = new Date();
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var month = myDate.getMonth() + 1;
var date = myDate.getDate();

var numberMonth = addZero(month);
var myDate = addZero(date);

/*Функция для добавления 0 к месяцу или дате */
function addZero(variable) {
    return variable < 10 ? variable = "0" + variable : variable;
}

/*Вывод*/
for (var i = 0; i < times.length; i++) {
    times[i].innerHTML = myDate + "." + numberMonth;
}
for (var i = 0; i < lastDay.length; i++) {
    lastDay[i].innerHTML = myDate + " " + months[month - 1];
}

/*Работа с JSON*/
var url = 'https://ipapi.co/json/';
var DATA;
getFile(url); //путь к файлу
function getFile(fileName) {
    var request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function() {
        parse(request.responseText);
    }
    request.send();
}

function parse(obj) {
    DATA = JSON.parse(obj);
    console.log(DATA.country_name);
    priceCityCountry(DATA.country_name);
}

/*Работа с выводом города, страны и стоимости оффера*/
var price = 0;
var city;
var myCountry;
var myCountryTwo;
var priceEl = document.getElementsByClassName('price');
var cityEl = document.getElementsByClassName('city');
var myCountryEl = document.getElementsByClassName('country');
var myCountryElTwo = document.getElementsByClassName('country2');

function priceCityCountry(country) {
    switch (country) {
        case 'Kazakhstan':
            myCountry = 'Казахстане';
            myCountryTwo = 'Казахстана';
            city = 'Астан';
            price = '99 тенге';
            break;

        case 'Russia':
            myCountry = 'России';
            myCountryTwo = 'Росии';
            city = 'Москв';
            price = '99 руб';
            break;

        case 'Belarus':
            myCountry = 'Республике Беларусь';
            myCountryTwo = "Республики Беларусь";
            city = 'Минск';
            price = '1 рубль';
            break;

        case 'Georgia':
            myCountry = 'Грузии';
            myCountryTwo = 'Грузии';
            city = 'Тбилис '
            price = '1 лари';
            break;

        case 'Armenia':
            myCountry = 'Армении';
            myCountryTwo = 'Армении';
            city = 'Ереван';
            price = '1 драм';
            break;

        case 'Kyrgyzstan':
            myCountry = 'Кыргызстане';
            myCountryTwo = 'Кыргызстана';
            city = 'Бишкек';
            price = '1690 сом';
            break;

        case 'Austria':
            myCountry = 'Австрии';
            myCountryTwo = 'Австрии';
            city = 'Вен';
            price = '1 фор';
            break;

        case 'Belgium':
            myCountry = 'Бельгии';
            myCountryTwo = 'Бельгии';
            city = 'Брюссел';
            price = '1 лев';
            break;

        case 'Bulgaria':
            myCountry = 'Болгарии';
            myCountryTwo = 'Болгарии';
            city = 'София';
            price = '1 лев';
            break;

        case 'Hungary':
            myCountry = 'Венгрии';
            myCountryTwo = 'Венгрии';
            city = 'Будапешт';
            price = '1 рон';
            break;

        case 'Germany':
            myCountry = 'Германии';
            myCountryTwo = 'Германии';
            city = 'Берлин';
            price = '1 крон';
            break;

        case 'Greece':
            myCountry = 'Греции';
            myCountryTwo = 'Греции';
            city = 'Афины '
            price = '1 евро';
            break;

        case 'Spain':
            myCountry = 'Испании';
            myCountryTwo = 'Испании';
            city = 'Мадрид';
            price = '1 евро';
            break;

        case 'Italy':
            myCountry = 'Италии';
            myCountryTwo = 'Италии';
            city = 'Рим';
            price = '1 евро';
            break;

        case 'Cyprus':
            myCountry = 'Кипре';
            myCountryTwo = 'Кипра';
            city = 'Никосий';
            price = '1 евро';
            break;

        case 'Latvia':
            myCountry = 'Латвии';
            myCountryTwo = 'Латвии';
            city = 'Ригу';
            price = '1 евро';
            break;

        case 'Lithuania':
            myCountry = 'Литве';
            myCountryTwo = 'Литвы';
            city = 'Вильнюс';
            price = '1 евро';
            break;

        case 'Poland':
            myCountry = 'Польше';
            myCountryTwo = 'Польши';
            city = 'Варшава';
            price = '1 злотый';
            break;

        case 'Portugal':
            myCountry = 'Португалии';
            myCountryTwo = 'Португалии';
            city = 'Лиссабон';
            price = '1 евро';
            break;

        case 'Romania':
            myCountry = 'Румынии';
            myCountryTwo = 'Румынии';
            city = 'Бухарест';
            price = '1 лей';
            break;

        case 'Slovakia':
            myCountry = 'Словакии';
            myCountryTwo = 'Словакии';
            city = 'Братислав';
            price = '1 евро';
            break;

        case 'Slovenia':
            myCountry = 'Словении';
            myCountryTwo = 'Словении';
            city = 'Люблян';
            price = '1 евро';
            break;

        case 'France':
            myCountry = 'Франции';
            myCountryTwo = 'Франции';
            city = 'Париж';
            price = '1 евро';
            break;

        case 'Croatia':
            myCountry = 'Хорватии';
            myCountryTwo = 'Хорватии';
            city = 'Загреб';
            price = '1 куна';
            break;

        case 'Czech':
            myCountry = 'Чехии';
            myCountryTwo = 'Чехии';
            city = 'Прага';
            price = '1 крона';
            break;

        case 'Switzerland':
            myCountry = 'Швейцарии';
            myCountryTwo = 'Швейцарии';
            city = 'Берн';
            price = '1 евро';
            break;

        case 'Estonia':
            myCountry = 'Эстонии';
            myCountryTwo = 'Эстонии';
            city = 'Таллин';
            price = '1 евро';
            break;

        default:
            myCountry = 'Европе';
            myCountryTwo = 'Европы';
            city = 'Берлин';
            price = '1 евро';
            break;
    }
    OutputPCC(priceEl, price);
    OutputPCC(cityEl, city);
    OutputPCC(myCountryEl, myCountry);
    OutputPCC(myCountryElTwo, myCountryTwo);
}
function OutputPCC(variable, inner) {
    for (var i = 0; i < variable.length; i++) {
        variable[i].innerHTML = inner;
    }
}

