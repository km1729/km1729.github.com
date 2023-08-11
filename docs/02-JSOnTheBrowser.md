# JS on the browser  
The Document Object    
console에 document를 적으면 접근할수있는 html doc을 보여준다   
```Javascript
// tpye in a brower console
document
// output >> html doc return
```
###  **Searching for elements**
>> search by class name
>> search by id
>> search by tagname
>> query selector - element를 "css 방식"으로 선택할 수 있다. return a single element
>> Most of time we use class to find elements

###  **Events**
>어떤 이벤트를 사용할 수 있는가?  
> - 이벤트 종류는 [mdn의 웹 api](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) 에서 찾을 수 있다.
> - console.dir(<변수>) 입력시 사용가능한 이벤트 확인 할 수 있다.
> - Event types - event, UIevent, MouseEvent, DragEvent, Window Event, Connection event  
> -  사용방법
> -  variable.addEventlistener("EventType")
> -  variable.onclick = EventType;
> - 이벤트리스너를 적용하고자 하는 변수에다가 붙이기. h1 글자를 클릭하면 콘솔에 title was clicked라고 출력된


### **CSS in Javascript**  
> 첫번재 예제는 이벤트를 찾고, 이벤트를 들어서, 리액트(폰트색깔변경)했다  
> 두번째 예제에서는 컬러와 트랜지션은 css에서 설정하고 js파일에서 클라스이름을 불러와서 인터랙트가능하게 업데이트 했다
> ClassList를 이용하여 클라스를 추가, 삭제 하고 존재 유무 확인
> ClassList toggle 사용


  