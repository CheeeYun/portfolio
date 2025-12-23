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
      <ul class="skill-list">
        <li>HTML5 / CSS3</li>
        <li>JavaScript</li>
        <li>Vue.js / Nuxt.js</li>
        <li>SCSS / SASS</li>
        <li>Git</li>
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
<style>
    .nav-links{
    display: flex;
    list-style: none;
    gap:2rem;
}
.nav-links a{
    color:white;
    text-decoration: none;
}
.logo{
    color: white;
    text-decoration: none;
}
.hero{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
}

.skill-list{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:1rem;
    list-style:none;
}
.skill-list li{
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color:white;
    border-radius:20px;
}
.project-grid{
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
}
.project-card{
    flex: 1 1 500px;
    max-width: 500px;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius:10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>