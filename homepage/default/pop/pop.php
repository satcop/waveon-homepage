<!DOCTYPE html>
<html>
<head>
<title>인증서 크게보기</title>
<link rel="stylesheet" type="text/css" href="/homepage/default/inc/css/layout.css" />
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
</head>
<body>

<div>
  <!-- <img src="{{$template}}/img/ce_1.gif" width="100%"> -->
  <img id="img" src="/homepage/default/img/ce_4.gif" width="100%">
</div>
</body>

<script>
  (function (location) {
  
    const $img = document.getElementById('img');
    const baseUrl = '/homepage/waveon/pop/';

    const search = location.search;
    if (search && search.length) {

      const searchValues = search.substring(1, search.length);
      const searchKeyValue = searchValues.split('&');

      if (Array.isArray(searchKeyValue)) {
        searchKeyValue.forEach(function (s) {
          let key = undefined;
          let value = undefined;

          if (s.indexOf('=') > -1) {
            const kv = s.split('=');
            key = kv[0];
            value = kv[1];
          }

          if (key === 'img') {
            console.log(value);
            $img.setAttribute('src', baseUrl.concat(value));
          }
        });
      }

    }

  })(location);
</script>
</html>