## BreakPoints

BreakPoints는 반응형 웹 사이트를 구현하는 데 유용하다.

컴포넌트 내에서 뷰포트에 접근하는 프로그래밍 방법

뷰포트란 애플리케이션 화면 컴포넌트 내에서 화면크기에 접근하는 프로그래밍적 방법

```vue
<v-card>
    <v-card-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
    </v-card-title>
    <v-container class="grey lighten-3">
        <v-card class="pa-3" :height="200" outlined> 콘텐츠 </v-card>
    </v-container>
</v-card>
```

```javascript
<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 200;
        case "md":
          return 300;
        case "lg":
          return 400;
        default:
          return 500;
      }
    },
  },
};
</script>
```

`$vuetify.breakpoint.name`를 통해 현재 브레이크포인트의 이름을 얻어 올 수 있다.

브레이크 포인트 이름을 통해 computed 속성을 사용하여 사이즈를 자동으로 조절할 수 있다.

---

### mobile 환경

```Vue
    <v-card class="mt-5">
      <v-card-title>
        $vuetify.breakpoint.mobile:  {{ $vuetify.breakpoint.mobile }} {{ $vuetify.breakpoint.mobileBreakpoint }}
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3" :height="200" outlined> 콘텐츠 </v-card>
      </v-container>
    </v-card>
```

`$vuetify.breakpoint.mobile`를 통해 모바일 환경의 화면인지 아닌지 true 또는 false로 알 수 있다.

`$vuetify.breakpoint.mobileBreakpoint`를 통해 모바일 환경의 화면 크기를 알 수 있다. default로 1264 이상일 경우 false 이하일 경우 true를  반환한다.

### 모바일 환경에서만 모달창 fullscreen으로 띄우기

```Vue

      <v-card-title>
        $vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }}
        {{ $vuetify.breakpoint.mobileBreakpoint }}
      </v-card-title>
      <v-container class="grey lighten-3">
        <v-dialog
          v-model="dialog"
          width="500"
          :fullscreen="$vuetify.breakpoint.mobile"
        >
          <template v-slot:activator="{on, attrs}">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-card>
```

```Vue
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
```

`v-dialog`에 `:fullscreen="$vuetify.breakpoint.mobile"`를  바인딩 시켜서 모바일 환경의 화면 크기 일 때만 다이얼로그를 전체화면으로 띄우고 아닐 경우에는 작게 띄운다.



### 모바일 환경 크기 변경

```js
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "xs",
  },
});

```

모바일 크기를 plugins 폴더에 vuetify.js에서 위와 같이 오버라이드하여 원하는 크기로 설정 해줄 수 있다.

defalut 크기는 위에서 말했듯이 1264이다.

---

### breakpoints들의 변수

```js
{
  // Breakpoints
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean

  // Conditionals(조건)
  xsOnly: boolean 
  smOnly: boolean
  smAndDown: boolean
  smAndUp: boolean
  mdOnly: boolean
  mdAndDown: boolean
  mdAndUp: boolean
  lgOnly: boolean
  lgAndDown: boolean
  lgAndUp: boolean
  xlOnly: boolean

  // true if screen width < mobileBreakpoint
  mobile: boolean
  mobileBreakpoint: number

  // Current breakpoint name (e.g. 'md')
  name: string

  // Dimensions
  height: number
  width: number

  // Thresholds
  // Configurable through options
  {
    xs: number
    sm: number
    md: number
    lg: number
  }

  // Scrollbar
  scrollBarWidth: number
}
```



### 🧲 소스코드에서 확인하기    

https://github.com/tkdals2317/Vuetify-Practice/blob/main/src/views/Breakpoints.vue

https://github.com/tkdals2317/Vuetify-Practice/blob/main/src/plugins/vuetify.js
