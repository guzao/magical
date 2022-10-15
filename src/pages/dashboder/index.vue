
<template>
  <n-space vertical>
  
    <n-card title="工作站" >
      <div class="h-40">  测试 </div>
    </n-card>
    


    <div class="flex flex-wrap justify-between">
      <n-card  style="width: 49.5%;" class="mt-2" :title="`工作站${item}`"  v-for="item in 2" :key="item">
        <div class="h-40">  测试 </div>
      </n-card>
    </div>

    <div class="flex flex-wrap justify-between">
      <n-card  style="width: 24.5%;" class="mt-2" :title="`工作站${item}`"  v-for="item in 4" :key="item">
        <div class="h-40">  测试 </div>
      </n-card>
    </div>

    <n-card  :title="`工作站${item}`"  v-for="item in 4" :key="item" >
      <div class="h-40">  测试 </div>
    </n-card>

  </n-space>
</template>
  
  
     