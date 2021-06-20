## Helper Classes

CSS 속성을 일일히 지정하지 않고 편하기 지정하기 위한 클래스

자주 사용되는 속성을 Vuetify에서 클래스로 지정해 놓음

inline으로 스타일을 하드코딩 하면 추후에 확장성이 떨어지므로 Helper 클래스를 확실히 학습하자

---

### Spacing

```Vue
형식
{property}{direction}-{size}

example)
<v-col class="pa-4">
<v-col class="mt-3">
```

**속성(property)**

* `m` : 마진을 적용
* `p` : 패딩을 적용

**방향(direction)**

* t : margin-top, padding-top 과 같이 위에 적용
* b : margin-bottom, padding-bottom과 같이 아래에 적용
* l : margin-left, padding-left과 같이 왼쪽에 적용
* r : margin-right, padding-right과 같이 오른쪽에 적용
* x : left와 right에 적용
* y : top과 bottom에 적용
* a : 좌,우,상단,하단 4방향에 모두 적용

**크기(size)**

1은 4px을 뜻함 곧 3은 12px

0(0px)부터 16(64px)까지 가능

앞에 `n1`과 같이 n이 붙으면 Nagative margin으로 마진을 반대로 적용 가능(패딩은 불가능!)

auto는 자동으로 패딩과 마진을 조절

---

### Display

`d-none` : display-none의 효과로 화면에서 안보이게 한다

`class = "d-none d-sm-block"`과 같이 sm 이상일 경우 block으로 처리하고 sm보다 작아지면 화면에 사라지게 할 수도 있다



