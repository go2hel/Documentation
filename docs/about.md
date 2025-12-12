---
layout: home
title: About Me
---

<div class="about-container">
  <div class="about-header">
    <div class="avatar">
      <img src="https://github.com/go2hel.png" alt="Yash Gohel" />
    </div>
    <h1>Yash Gohel</h1>
  </div>

  <div class="bio">
    <p>
      I'm software engineer with 3+ years of experience in building scalable microservice based applications.
    </p>
    <p>
      I also like doing a bit of game development. 
    </p>
  </div>

  <div class="socials">
    <a href="https://github.com/go2hel" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </a>
    <a href="https://linkedin.com/in/yash-gohel-7bb121168" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    </a>
  </div>
</div>

<style>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.about-header {
  margin-bottom: 2rem;
}

.avatar {
  margin-bottom: 1.5rem;
}

.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tagline {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  background-color: var(--vp-c-brand);
  color: white;
  transform: translateY(-2px);
}
</style>
