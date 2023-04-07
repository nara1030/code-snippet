간단한 코드 조각들
=====
## 목차
1. 자바스크립트
    * [requestAnimationFrame](#requestAnimationFrame)
2. 리액트
3. CSS

### requestAnimationFrame
```javascript
/**
 * 화면에 새로운 애니메이션을 업데이트할 준비가 될때마다 이 메소드를 호출하는것이 좋습니다.
 * 다음 리페인트에서 그 다음 프레임을 애니메이트하려면 콜백 루틴이 반드시 스스로 requestAnimationFrame()을 호출해야합니다.
 */
window.requestAnimationFrame(callback);
```

* 예제
    * JS] [날아가는 풍선](javascript/requestAnimationFrame.html)
    * JS] [사용자 정의 성능 위젯](performanceMonitoringWidget.html)
* 문서
    * HTML5] [Web Animation API](https://sculove.github.io/slides/webAnimation/#/)
    * JS] [모듈 소개](https://ko.javascript.info/modules-intro)

##### [목차로 이동](#목차)