<script setup>
import { ref } from 'vue'

// const videoUrl = ref('https://www.youtube.com/embed/26PaWIYYaLg')
</script>

<template>
    <!--<section id="video" class="contentVideo pt-0 d-flex justify-content-center align-items-center">
        <a href="#" class="d-inline-block" data-bs-toggle="modal" data-bs-target="#videoModal">
            <img src="@/assets/play.svg" alt="" />
        </a>
    </section>-->

    <div
        class="modal fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered custom-modal-width">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <!-- Contenedor del video -->
                    <div class="ratio ratio-16x9">
                        <!--<iframe
                            id="youtubeVideo"
                            :src="videoUrl"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>-->

                        <lite-youtube
                            videoid="26PaWIYYaLg"
                            params="controls=0&amp;playlist=Vj8uZSi0upE&amp;loop=1&amp;rel=0&amp;modestbranding=1&amp;showinfo=0&amp;wmode=transparent"
                        ></lite-youtube>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
