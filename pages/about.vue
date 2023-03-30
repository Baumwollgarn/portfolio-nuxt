<template>
    <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Hello, I'm Alex.</h2>
        <p class="text-gray-700 mb-4">I was born in Germany and spent my early childhood there, but when I was young,
            my family moved to Spain, where I grew up and completed my degree in Web Development at <a href="https://www.iesmanacor.cat">IES Manacor.</a>
            Being bilingual in German and Spanish has been a valuable asset in my career, as it allowed me to work in the hotel
            business and tourism industry for eight years. During that time, I honed my language skills and gained valuable
            experience in customer service and management.</p>
        <p class="text-gray-700 mb-4">Despite my success in the hospitality industry, I always felt a strong pull toward the
            world of technology and web development. I decided to pursue my passion for programming and enrolled in a Web
            Development degree program at <a href="https://www.iesmanacor.cat">IES Manacor</a>. Over the course of my studies, I gained expertise in a wide
            range of programming languages, frameworks, and tools, including <a href="https://spring.io">Spring Boot</a>, <a href="https://nuxt.com">NuxtJS</a>, <a href="https://laravel.com">Laravel</a>, etc.</p>
        <p class="text-gray-700 mb-4">Throughout my career, I have worked on a diverse range of projects, from e-commerce
            websites to custom web applications. I am experienced in both front-end and back-end development using a mix of the earlier mentioned technologies.
            In addition to my technical skills, I am also committed to delivering outstanding customer service. I pride myself on my ability to communicate
            effectively with clients, understand their needs, and deliver solutions that exceed their expectations.</p>
        <p class="text-gray-700 mb-4">When I'm not coding, you can usually find me exploring new technologies or contributing
            to open-source projects. I am always looking for new challenges and opportunities to expand my skills.</p>
        <p class="text-gray-700">If you're looking for a dedicated web developer to help bring your ideas to
            life, please don't hesitate to get in touch. I'd love to hear from you!</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin-bottom: 20px;
  font-size: 18px;
}

a {
  color: #42b983;
  text-decoration: none;
  position: relative;
}

a::before,
a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #42b983;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

a::before {
  transform-origin: right;
}

a:hover::before,
a:hover::after {
  transform: scaleX(1);
}

a:hover::before {
  transition-delay: 0.2s;
}

a:hover::after {
  transition-delay: 0s;
}
</style>