<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>웨이브온</title>
	<link rel="stylesheet" href="./styles/main.css?v=4"/>
	<script type="text/javascript" src="./scripts/jquery.js"></script>
	<script charset="UTF-8" class="daum_roughmap_loader_script" src="//dmaps.daum.net/map_js_init/roughmapLoader.js"></script>
	<script>


        $(function () {

            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }

			$('#btn-go-top').on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: $('#div-top').offset().top}, 1000);
			});

			$('#btn-go-biz').on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: $('#area-biz').offset().top}, 1000);
			});

            $('#btn-go-company').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: $('#area-company').offset().top}, 1000);
            });

            $('#btn-go-recruit').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: $('#area-recruit').offset().top}, 1000);
            });

            $('#btn-go-map').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: $('#area-map').offset().top}, 1000);
            });


        });
	</script>
</head>
<body>
<div class="wrap" id="div-top">
	<header>
		<div class="top">
			<a href="/" class="logo"></a>
			<ul class="gnb">
				<li><a href="#" id="btn-go-biz">사업영역</a></li>
				<li><a href="#" id="btn-go-company">회사소개</a></li>
				<li><a href="#" id="btn-go-recruit">채용안내</a></li>
				<li><a href="#" id="btn-go-map">오시는길</a></li>
			</ul>
		</div>
	</header>
	<div class="header_space"></div>
	<section class="banner">
		<article>
			<div class="main_title">
				<h2>WAVE <span>ON</span></h2>
				<p class="txt28 bold">신뢰와 경험을 바탕으로 국내외 IT 비즈니스의 새로운 흐름을 이끌어 가겠습니다.</p>
				<p class="txt24">We Make New Wave With Intelligent Online Solution</p>
			</div>
		</article>
	</section>
	<section class="business01" id="area-biz">
		<article>
			<ul class="mobileservice">
				<li>
					<p class="service01">MOBILE WEB</p>
				</li>
				<li>
					<p class="service02">SERVICE CONSULTING</p>
				</li>
				<li>
					<p class="service03">UI/UX DESIGN</p>
				</li>
				<li>
					<p class="service04">APP & WEB DEVELOPMENT</p>
				</li>
				<li>
					<p class="service05">HYBRID APP</p>
				</li>
			</ul>
		</article>
	</section>

	<section class="business02">
		<article>
			<h3 class="txt28">원격 면접 시스템</h3>
			<p class="txt24 bold mt50">ONLINE INTERVIEW WEB/APP/BOOTH</p>
			<p class="txt24 bold">ONLINE JOB COACHING</p>
			<p class="txt24 bold">INTELLIGENT JOB MATCHING</p>
			<p class="txt24 bold">INTERVIEW/EMPLOYMENT PLATFORM SYSTEM</p>
		</article>
	</section>
	
	<section class="business03">
		<article>
			<h3 class="txt28">SI 비즈니스</h3>
			<div class="graph">
				<div class="title"><div><p class="txt24 bold">SYSTEM INTEGRATION</p></div></div>
				<ul>
					<li>
						<div class="circle">
							 <div class="line">
								 <p>고객요구사항 분석</p>
							 </div>
						</div>
					</li>
					<li>
						<div class="circle">
							<div class="line">
								<p>서비스 전략수립</p>
							</div>
						</div>
					</li>
					<li>
						<div class="circle">
							<div class="line">
								<p>서비스 전략컨설팅</p>
							</div>
						</div>
					</li>
					<li>
						<div class="circle">
							<div class="line">
								<p>서비스 구축</p>
							</div>
						</div>
					</li>
					<li>
						<div class="circle">
							<div class="line">
								<p>서비스 운영</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</article>
	</section>

	<section class="company" id="area-company">
		<article>
			<h3 class="txt28">회사소개</h3>
			<p class="txt24 bold">WAVEON은 IT 비즈니스를 위한 솔루션과 시스템을 제공합니다</p>
			<ul>
				<li>
					<h4 class="company01">MOBILE BUSINESS</h4>
					<p>빠르게 변화하고 있는 모바일 환경과 디바이스에 맞추어
						더욱 고도화된 비즈니스를 고객에게 제공하고자
						첨단 트렌드가 반영된 다양한 플랫폼을
						구축/운영/기획/개발하고 있습니다.
					</p>
				</li>

				<li>
					<h4 class="company03">WEB BUSINESS</h4>
					<p>고객의 경영환경과 요구에 맞게 기존 시스템을
						통합하거나 새로운 시스템을 구축하는 서비스를
						제공합니다.
					</p>
				</li>

				<li>
					<h4 class="company02">ONLINE VIDEO INTERVIEW</h4>
					<p>직무능력을 기반으로 하는 블라인드 채용처럼 새로운
						채용환경에 IT기술을 바탕으로 한 분석을 통해서 기업
						인재 채용에 새로운 패러다임을 제공합니다
					</p>
				</li>
				<li>
					<h4 class="company04">SMART KIOSK & MOBILE/IOT SOULUTOIN</h4>
					<p>지역상권 활성화를 위하여 O2O 프로모션 지원이 가능한 
					스마트 키오스트 및 모바일,IOT의 통합 관리 시스템을 제공합니다.
					</p>
				</li>
			
			</ul>
		</article>
	</section>

	<section class="vision">
		<article>
			<h3 class="txt28">VISION</h3>
			<p class="txt24 bold">IT비즈니스 성공을 위한 최고의 기술력으로 최선을 다하여 작지만 강한 글로벌 기업을 추구합니다.</p>
			<div class="imgbox web">
				<img src="./images/vision.png">
			</div>
			<div class="imgbox mobile">
				<img src="./images/vision2.png">
			</div>
		</article>
	</section>


	<section class="map" id="area-map">
		<article>
			<h3 class="txt28">오시는길</h3>
			<p class="txt24 bold">웨이브온으로 오시는 길입니다.</p>
			<div class="map_way">
				<div id="daumRoughmapContainer1521377464801" class="root_daum_roughmap root_daum_roughmap_landing mapwidth"></div>
				<div class="fleft">
					<p class="address">주소</p>
					<p>서울시 금천구 벚꽃로 254 월드메르디앙 1차 208-1</p>
					<p class="contact">연락처</p>
					<p>TEL. 070-4065-5942, FAX. 02-6008-5255</p>
					<p class="trans">교통</p>
					<p>가산디지털단지역 1호선 1번출구, 7호선 4번출구</p>

					<p class="bizintro">
						<a target="_blank" href="WAVEON_20200102.pdf">회사소개서 다운로드</a>
					</p>
				</div>

			</div>
		</article>
	</section>

	<div class="btn_top">
		<a href="#" id="btn-go-top">TOP</a>
	</div>

	<script charset="UTF-8">
    new daum.roughmap.Lander({
        "timestamp" : "1521377464801",
        "key" : "n9pr",
        "mapWidth" : "1080",
        "mapHeight" : "330"
    }).render();
</script>
</body>
</html>