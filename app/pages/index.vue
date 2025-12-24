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
      <p>技能數量{{ skills.length }}
      </p>
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
  </main>

  <footer id="contact">
    <h2>聯絡我</h2>
    <p>Email: eric@example.com</p>
    <p>GitHub: github.com/CheeeYun</p>
  </footer>
</template>
<script setup>
const count = ref(0);
const skills = reactive(['HTML5 / CSS3','JavaScript','Vue.js / Nuxt.js','SCSS / SASS','Git'])
const addSkill = ()=>{
    skills.push('SCSS')
}
const removeSkill = (index)=>{
    skills.splice(index,1)
}
</script>