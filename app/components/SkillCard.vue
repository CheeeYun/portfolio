<template>
    <li class="skill-item">
        {{ name }}
        <button @click="$emit('remove')">X</button>
    </li>
</template>
<script setup>
    defineProps({
        name:{
            type: String,
            require:true
        }
    })

    defineEmits(['remove'])
</script>
<style scoped>
    .skill-item button{
        background-color: transparent;
        border:none;
        color:red;
        cursor:pointer;
        margin-left: 0.5rem;
    }
</style>