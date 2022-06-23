<template>
    <div class="form">
        <h3 class="title">
            This is the Form
        </h3>

        <div
            v-if="form"
            class="content"
            v-html="form"
        />
    </div>
</template>

<script>
// allFpb {
//     ... on allFpb_form_BlockType {
//         id
//         title
//         form
//     }
// }
export default {
    props: {
        form: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 930px;
    width: 100%;

    .title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: var(--space-m);
    }

    .content {
        color: coral;
        background-color: aqua;
    }
}
</style>
