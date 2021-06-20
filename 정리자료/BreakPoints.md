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

### mobile

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

`$vuetify.breakpoint.mobileBreakpoint`를 통해 모바일 환경의 화면 크기를 알 수 있다. default로 1264 이상일 경우 false 이하일 경우 true를  반한한다.

