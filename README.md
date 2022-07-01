# 프로젝트 실행 방법

최상위 경로에서 npm install하신 후 npm start하시면 프로젝트가 실행됩니다.
<br/>
<br/>
<br/>
# 사용한 기술과 선택한 이유

React와 Styled-Component만을 이용해서 프로젝트를 구성했습니다.

Styled-Components를 사용한 이유는 조건부로 실행되어야 하는 애니메이션들은 Styled-Components를 이용해서 구현하면 편리하게 구현할 수 있다고 생각했기 때문입니다.

그렇게 생각한 이유는 스타일 컴포넌트에 Props로 지금 애니메이션이 실행돼야하는지 아니면 실행하지 않아야 하는지를 Boolean값으로 넘겨서 조건문으로 애니메이션의 실행시점에 대한 분기를 간편하게 구현할 수 있기 때문입니다.
<br/>
<br/>
<br/>
# HTML MarkUp & LayOut

HTML과 LayOut은 트리플사의 렌딩페이지를 보며 최대한 비슷하게 마크업하려 노력했습니다.
<br/>
<br/>
<br/>
# 애니메이션 처리
## 1. 영역별 등장 애니메이션

CSS를 통해 opacity와 transform 그리고 visibility속성을 이용해 영역별 등장 애니메이션을 fadeIn이라는 이름의 애니메이션으로 정의했습니다.

### ⦁ 영역별 등장 애니메이션의 실행시점

좌측 이미지 --100ms-> 지표 문구 --100ms-> 수상 내역

한번에 애니메이션이 실행되는것이 아니라 순차적으로 애니메이션이 실행돼야하기 때문에

애니메이션이 실행됐는지를 초기값이 false인 Boolean값이 들어가는 state를 2개 만들었습니다.
(secondAniTrigger, thirdAniTrigger)

그리고 DOM API의 onAnimationStart를 이용했습니다.

onAnimationStart는 HTML요소의 애니메이션 실행시점에 위에서 말한 state를 false에서 true로 바꾸는 콜백함수를 반환합니다.

true로 변경된 state는 다음 요소의 스타일컴포넌트에 props로 넘겨서 조건문을 이용해

'props로 넘겨받은 값이 true라면 100ms후 애니메이션 실행' 이런 로직으로 애니메이션의 실행시점을 결정했습니다.

## 2. 숫자가 올라가는 애니메이션

숫자가 올라가는 애니메이션은 CSS의 애니메이션만으로는 구현할 수 없을것 같아서 JS코드와 Hook을 이용해 구현했습니다.

시간단위가 아닌 프레임 단위로 작업했습니다. 시간단위만으로 애니메이션을 구현하니 숫자가 커질 수록 2초를 초과해서 애니메이션이 끝났기 때문입니다.

1초동안 60개의 프레임이 지나갑니다. 즉 애니메이션의 지속시간인 2초 동안 120개의 프레임(totalFrame)이 지나갑니다.

프레임 간 속도를 (2000ms / 120)로 계산했습니다. 1초에 60프레임으로 정했기 때문에 2000 / 120입니다.

현재 실행되는 프레임이 몇번째 프레임인지 알기 위해 let을 통해 curFrame이라는 변수를 만들고 setInterval이 실행될 때 마다 1을 누계시켰습니다.

curFrame을 totalFrame으로 나눈값을 easeOutExpo라는 함수의 인자로 넣습니다.

easeOutExpo는 https://spicyyoghurt.com/tools/easing-functions 에서 가져왔습니다.

easeOutExpo의 리턴값과 끝나는 값을 곱하면 frame당 변화되는 숫자를 구할 수 있습니다.
