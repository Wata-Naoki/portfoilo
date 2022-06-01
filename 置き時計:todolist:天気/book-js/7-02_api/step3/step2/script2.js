'use strict';

// geolocation
function success(pos) {
    ajaxRequest(pos.coords.latitude, pos.coords.logtitude);
}

function fail(error) {
    alert('位置情報に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);


//データ取得
function ajaxRequest(lat, long) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    const appId = '89d4fa08ca7b9e7e7c499742baa515c1';


$.ajax({
    url: url,
    data: {
        appid: appId,
        lat: lat,
        lon: long,
        units: 'metric',
        lang: 'ja'
    }
})
.done(function(data) {
    console.log(data);
})

.fail(function() {
    console.log(data);
})

.fail(function() {
    console.log('$.ajax failed');
})
}
