<template>
  <div class="scoped-slot-demo">
    <ul class="item-list">
      <li v-for="(item, index) in items" :key="index" class="item">
        <!-- 作用域插槽：把 item 和 index 傳給父元件 -->
        <slot :item="item" :index="index">
          {{ item }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
// ScopedSlotList - 作用域插槽練習
// 透過 :item 和 :index 把資料傳給父元件
defineProps({
  items: {
    type: Array,
    default: () => ['項目 1', '項目 2', '項目 3']
  }
})
</script>

<style scoped>
.scoped-slot-demo {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  background: white;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
