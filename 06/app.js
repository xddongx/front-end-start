console.log('app');

var appkey = '18da6e9b69375ae2e0f843494be7ee87';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;




var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK 18da6e9b69375ae2e0f843494be7ee87');
var options = {
    headers: myHeaders
}

fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })