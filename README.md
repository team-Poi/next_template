# THE CODE DESIGN

## 변수명, 함수명

- 이름은 한국어로.
- 어떤 값을 가지고 있는지 명확하게.
- for문에서 i, j, k같은 경우는 예외.
- `export default Page` 같은경우는 NextJS가 알아 먹어야 하니까 영어로.
- 이름에서 뛰어쓰기는 `_` 로 대체

## 함수

- 함수는 오직 한가지 동작만 실행 할 수 있음.

### Good Example

```typescript
const 유저권한_가져오기 = async () => {
  return await axios.get("...");
};

const 유저정보_가져오기 = async () => {
  switch (await 유저권한_가져오기()) {
    case "관리자":
      return await axios.get("...");
    case "유저":
      return await axios.get("...");
  }
};
```

### Bad Exmaple

```typescript
const 유저정보_가져오기 = async () => {
  let 유저권한 = await axios.get("...");
  if (유저권한.관리자) return await axios.get("...");
  if (유저권한.유저) return await axios.get("...");
  throw new Error("");
};
```

## Component

- React의 정체성을 모르는 바보가 아니면, 겹치는 부분은 Component로 만들어 버리자!

## Provider and Context

- 전역에서 사용되는 state 혹은 prop은 React의 Context기능을 사용하여 `useXXX` 로 만들자!

## .module.css

- 스타일의 위치는 페이지.tsx의 위치와 같게하고, 이름또한 같게하자.
- 공통적으로 사용되는 스타일은 styles 폴더에, skeleton, font와 같이 어디서든 사용되는 스타일은 global css에 넣자.

## 작업방식!

- 프론트 엔드를 짜는 사람은 벡엔드의 API가 나오기까지 오랜시간이 걸린다. 그러니 Mock Data(서버에서 반환할 데이터와 Type만 같은 데이터)를 사용해서 UI를 만들고 있자!
- 프론트 엔더는 사용할 API들을 전부 백엔더의 Todo리스트에 넣어주자. (물론 API도 한가지 동작만 하는것을 목표로 두는것을 추천한다.)

```typescript
async function 급식정보_가져오기() {
    if(isMockMode) return { ... };
    let rawData = await axios.get("...");
    return {
        a: ...,
        b: ...,
        ...
    };
}
```

## Event Listener

- 이건 예시로 보여주는게 더 빠르다

### Good Example

```tsx
const 실행버튼_클릭 = () => { ... };
<button onClick={실행버튼_클릭}>실행</button>
```

### Bad Example

```tsx
<button onClick={() => { ... }}>실행</button>
```

## state, setState!

- state와 setState의 이름은 아래와 같은 규칙으로 정하자.
- state의 이름이 count일경우 setState는 setCount가 되는것이다.
- 첫글자를 대문자로 변경후 앞에 set을 붙여서 setState의 이름을 정하는 것이다.

## API!

- 모든 API를 만들때는 @/utils/api를 사용해서 만들자.
- 한 API endpoint에서 method만 바꿔서 다른 역할을 실행할 수 있게 하는것이 목표이다.
- 예시는 `pages/api/example.tsx` 를 참조하자.
- API의 Response 또한 규칙이 정해져 있다. 이것 또한 `pages/api/example.tsx`를 참조하자.
- 또한 Typescript의 Autocomplete를 사용해서 실전에서 사용하는것도 좋다.
- API의 Method 인식 순서는 아래와 같다.

```md
1. GET
2. POST
3. PUT
4. DELETE
5. ANY (모든 Method를 감지)
```
