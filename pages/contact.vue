<template>
    <div class="bg-white rounded-lg shadow-lg p-6">
    <p class="text-gray-700 mb-4">I'm currently looking for new opportunities. If you have a project or job offer you'd like to discuss, please get in touch.</p>
        <p class="text-gray-700">Alternatively, you can use the form below to send me a message.</p>
        <form action="https://formspree.io/f/xrgvypyo" method="POST" class="mt-8">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 mb-4 md:mr-4">
                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                </div>
                <div class="flex-1 mb-4 md:ml-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" name="_replyto" id="email" placeholder="Your email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                </div>
            </div>
            <div class="mb-4">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea name="message" id="message" rows="5" placeholder="Your message" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
            </div>
        </form>
        <div class="container mx-auto my-8">
            <div class="flex justify-center">
                <div class="grid grid-cols-3 gap-4">
                    <a href="https://www.instagram.com/waumbolli/?hl=en" target="_blank" class="btn-instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:info@isphero.com" class="btn-email">
                        <i class="far fa-envelope"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-witt-8125b113a/" target="_blank" class="btn-linkedin">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-instagram,
.btn-email,
.btn-linkedin {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #E5E7EB; /* Add background color */
    transition: background-color 0.3s ease;
}

.btn-instagram:hover {
    background-color: #E1306C;
}

.btn-email:hover {
    background-color: #D44638;
}

.btn-linkedin:hover {
    background-color: #0072B1;
}

</style>