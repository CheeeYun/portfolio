<template>
  <div class="slot-card">
    <!-- 具名插槽：header -->
    <div class="card-header">
      <slot name="header">
        預設標題
      </slot>
    </div>

    <!-- 預設插槽：主要內容 -->
    <div class="card-body">
      <slot name="content">
        預設內容區域
      </slot>
    </div>

    <!-- 具名插槽：footer -->
    <div class="card-footer">
      <slot name="footer">
        預設 Footer
      </slot>
    </div>
    <div>
        <slot>999</slot>
    </div>
  </div>
</template>

<script setup>
// SlotCard - 插槽練習元件
// 包含三種插槽：header (具名), default (預設), footer (具名)
</script>

<style scoped>
.slot-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  font-weight: bold;
}

.card-body {
  padding: 1.5rem;
  background: white;
  min-height: 60px;
}

.card-footer {
  background: #f5f5f5;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e0e0e0;
  color: #666;
}
</style>
