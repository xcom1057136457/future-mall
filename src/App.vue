<script setup lang="ts"></script>

<template>
  <van-config-provider h-full :theme-vars="{ primaryColor: '#f87171' }" theme-vars-scope="global">
    <router-view />
  </van-config-provider>

  <van-watermark content="Future Mall" :opacity="0.3" />
</template>

<style scoped></style>
