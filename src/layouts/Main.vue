<template>
  <!--
    router-view
    https://router.vuejs.org/zh/guide/migration/index.html#router-view-%E3%80%81-keep-alive-%E5%92%8C-transition
    v-slot
    https://v3.cn.vuejs.org/api/directives.html#v-slot
  -->
  <router-view v-slot="{ Component, route }">
    <!-- https://v3.cn.vuejs.org/api/built-in-components.html#transition -->
    <transition :name="appStore.pageAnim + '-transform'" mode="out-in" appear>
      <!--
        https://v3.cn.vuejs.org/api/built-in-components.html#keep-alive
        keep-alive
        include - string | RegExp | Array。只有名称匹配的组件会被缓存。
        exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存。
        max - number | string。最多可以缓存多少组件实例。
      -->
      <!-- https://v3.cn.vuejs.org/api/built-in-components.html#component -->
      <keep-alive :include="cacheRoutes.cachedRoutes">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
  import useAppConfigStore from '@/store/modules/app-config'
  import useCachedRouteStore from '@/store/modules/cached-routes'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Main',
    setup() {
      const appStore = useAppConfigStore()
      const cacheRoutes = useCachedRouteStore()
      return {
        appStore,
        cacheRoutes,
      }
    },
  })
</script>
