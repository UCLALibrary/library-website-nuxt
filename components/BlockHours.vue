<template>
    <div class="block-hours">
        <h2 class="heading-subtitle">
            Hours
        </h2>
        <div class="content">
            <iframe
                class="iframe"
                :src="`/blockHours.html?lid=${lid}`"
                allowfullscreen
                frameBorder="0"
            />
            <button-link
                label="All Library Hours"
                :is-secondary="true"
                to="https://calendar.library.ucla.edu/hours"
                class="btn-lnk"
            />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        lid: {
            type: String,
            default: "",
        },
    },
}
</script>
<style lang="scss" scoped>
.block-hours {
    .content {
        border-radius: var(--rounded-slightly-all);
        border: 1.5px solid var(--color-primary-blue-01);

        display: flex;
        flex-direction: column;

        .iframe {
            max-width: $container-l-main + px;
            width: 100%;

            min-height: 500px;
            height: 100%;
        }
        .btn-lnk {
            max-width: 300px;
            margin-left: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>
