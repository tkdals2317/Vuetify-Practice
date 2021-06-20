## Typography

글꼴이나 서체들의 구성, 웹디자인에서 폰트 사이즈를 조절 해야 되는 경우가 있는데 너무 많은 크기의 종류를 가지면 사이트가 지저분해 보이고 일관성이 안맞아 보일 수 있으므로 Typography를 사용 한다.

```Vue
<template>
  <v-container>
    <v-card>
      <v-card-title> Typography </v-card-title>
      <v-container>
        <v-card class="pa-3" outlined>
          <p class="text-h1">Heading 1</p>
          <p class="text-h2">Heading 2</p>
          <p class="text-h3 text-sm-subtitle-1">Heading 3</p>
          <p class="display-4">Heading 4</p>
          <p class="font-weight-black">black text</p>
          <p class="font-weight-thin">font-weight-thin</p>
          <p>
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
            faucibus non, euismod id, nulla. Fusce convallis metus id felis
            luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque
            ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
            Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
            vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut
            neque.
          </p>
          <p class="text-justify">
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
            faucibus non, euismod id, nulla. Fusce convallis metus id felis
            luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque
            ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
            Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
            vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut
            neque.
          </p>
          <p class="text-left">Left aligned text on all viewport sizes.</p>
          <p class="text-center">Center aligned text on all viewport sizes.</p>
          <p class="text-right">Right aligned text on all viewport sizes.</p>
          <p class="text-center text-sm-right">
            Right aligned text on all viewport sizes.
          </p>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {};
</script>
<style lang=""></style>

```

`text-sm-subtitle-1`  : 화면 크기가 sm이 이상이 되면 subtitle 크기로 폰트사이즈를 조절한다.

`display-4` : 구 버전에서 사용하던 사이즈 조절

`font-weight-black` : 폰트를 굵게 표시

`font-weight-thin`  : 폰트를 얇게 표시

`text-justify` : 텍스트를 중앙 정렬

`text-left` `text-center` `text-right` : 텍스트의 align을 조절

`text-center text-sm-right` : 화면이  sm 이상이라면 우측 정렬 이하라면 중앙 정렬



### 🧲 소스코드에서 확인하기    

https://github.com/tkdals2317/Vuetify-Practice/blob/main/src/views/Typography.vue

