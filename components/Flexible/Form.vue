<template lang="html">
    <div class="form">
        <div class="content">
            <iframe
                id="form-iframe"
                refs="form_iframe"
                class="iframe"
                :srcdoc="parsedFormContent"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedFormContent() {
            return this.block.form
        },
    },
    mounted() {
        window.addEventListener(
            "message",
            function (e) {
                // var form_iframe = document.getElementById("form-iframe")
                var form_iframe = document.getElementById("form-iframe").height
                var eventName = e.data[0]
                var data = e.data[1]

                let testiframe = document.querySelector("#form-iframe")

                testiframe.addEventListener('load', function() {
                    testiframe.style.height = testiframe.contentDocument.body.scrollHeight + form_iframe.height
                })

                switch (eventName) {
                    case "setHeight":
                        form_iframe.height = testiframe.style.height
                        break
                }
            },
            false
        )
    },
}
</script>

<style lang="scss" scoped>
.form {
    max-width: 930px;
    width: 100%;
    height: auto;
    margin: var(--space-3xl) auto;
    max-width: $container-l-main + px;

    .content {
        height: 375px;
    }
}
</style>
