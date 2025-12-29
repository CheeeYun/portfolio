<template>
  <header>
    <nav>
      <a href="#" class="logo">Eric Chen</a>
      <ul class="nav-links">
        <li><a href="#about">關於我</a></li>
        <li><a href="#skills">技能</a></li>
        <li><a href="#projects">作品集</a></li>
        <li><a href="#contact">聯絡</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="hero" class="hero">
      <h1>我是 Eric Chen</h1>
      <p>前端開發者 | Vue.js 愛好者</p>
      <a href="#contact" class="btn">聯絡我</a>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <h2>關於我</h2>
      <p>我是一位熱愛前端開發的工程師，專注於使用 Vue.js 和 Nuxt.js 建構現代化的網頁應用。</p>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
      <h2>技能</h2>
      <p>{{skillsSummary}}
      </p>
      <input type="text" v-model="newSkills" placeholder="輸入新技能"/>
      <button class="btn" @click="addSkill">新增技能</button>
      <ul class="skill-list">
        <li v-for="(skill,index) in skills" :key="index">
            <SkillCard :name="skill" @remove="removeSkill(index)"/>
        </li>
      </ul>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <h2>作品集</h2>
      <div class="project-grid">
        <article class="project-card">
          <h3>專案 1</h3>
          <p>專案描述...</p>
        </article>
        <article class="project-card">
          <h3>專案 2</h3>
          <p>專案描述...</p>
        </article>
      </div>
    </section>
    <section>
        <button class="btn" @click="showCount = !showCount">按我！</button>
        <div v-show="showCount">
            <p>現在{{ count }}</p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <button @click="reset">reset</button>
        </div>
    </section>
    <section>
        <div v-if="loading">載入中...</div>
        <div v-else-if="error">錯誤:{{ error }}</div>
        <ul v-else>
            <li v-for=" user in data" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </section>
  
  </main>

  <footer id="contact">
    <h2>聯絡我</h2>
    <p>Email: eric@example.com</p>
    <p>GitHub: github.com/CheeeYun</p>
  </footer>

        <button class="btn" @click="showModal=true">打開Modal</button>
        <Teleport to="body">
            <div v-if="showModal" class="modal">
                <p>Modal內容111111123{{ skillsSummary }}</p>
                <button @click="showModal=false">關閉</button>
            </div>
        </Teleport>

</template>

<script setup>
 const {count,increment,decrement,reset} = useCounter(10)
 const {data,loading,error,fetchData} = useApi()
// const count2 = ref(0);

const user = reactive({name:'Eric',age:30})

const nameRef = toRef(user,'name')
const {name,age} = toRefs(user);

const showCount = ref(false);
const showModal = ref(false);
const skills = reactive(['HTML5 / CSS3','JavaScript','Vue.js / Nuxt.js','SCSS / SASS','Git'])
const addSkill = ()=>{
    if(newSkills.value.trim()){
    skills.push(newSkills.value);
    newSkills.value = '';
    }
}
const newSkills = ref('');
const skillsSummary = computed(()=>{
    return `你有${skills.length}個技能:${skills.join(',')}`
})
const removeSkill = (index)=>{
    skills.splice(index,1)
}
onMounted(()=>{
    console.log('組建已掛載');
    fetchData('https://jsonplaceholder.typicode.com/users')
})
onUnmounted(()=>{
    console.log('組建已卸載');
})
onUpdated(()=>{
    console.log('組建已更新');
})
watch(()=>[...skills],(newSkills,oldSkills)=>{
    console.log(`skills更新了`,newSkills,oldSkills);
})
watchEffect(()=>{
    console.log('count',count.value);
    console.log('skills',skills.length);
})
</script>
<style>
    .modal{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>
