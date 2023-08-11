# Login  
queryselector로 class 와 id를 선택할 수도 있지만 input과 button같은 태그도 선택이 가능하다.  
h1태그를 선택할 수 있는 것처럼!! 왜 이 생각을 못햇지..  

- input 과 btn 생성, input filed의 입력받은 값 가져오기 loginInput.value  
- if statement 추가  (유효성검사)
- 그러나 위의 유효성검사는 input태그에서 form태그를 이용함으로써 해결할 수 있다.
- input 안에 requried 와 max length를 추가한다
- input에 글을 작성하게 되면 form이라 자동으로 submit되면서 웹페이지가 새로고침된다.
- 작성되는 정보를 갖오기 위해서 함수에 아규먼트를 받아서 이벤트 리스너의 이벤트를 콘솔에 출력할 수 있다
- 브라우저의 default 행동은 폼을 서밋하고 리프레쉬한다.
- 함수의 ()은 자동으로 실행하고 웹프라우저를 재시작한다.
- .preventDefault(); 을 추가하여 웹사이트를 리프레쉬하지 않고 input과 관련된 행동들을 확인 할 수 있다.
- 링크를 만든다.
- 링크의 디폴트 행동은 클릭시 웹사이로 이동 하는 것이다.
- get username and hide the form by using CSS

## Saving username
- Local storage.seitem, getitem

## Loading username
