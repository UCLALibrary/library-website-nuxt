<template lang="html">
    <div class="form">
        <div class="content">
            <iframe
                id="form-iframe"
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
                var form_iframe = document.getElementById("form-iframe")
                console.log("FORM HEIGHT" + form_iframe.height)
                var eventName = e.data[0]
                var data = e.data[1]

                switch (eventName) {
                    case "setHeight":
                        form_iframe.height = data + 20
                        break
                }
            },
            false
        )
    },
    methods: {
        resizeIframe(obj) {
            // TODO why is this not working?
            console.log(obj.target.contentWindow.document.body.scrollHeight)

            obj.target.style.height = "524px"
            console.log(obj.target.contentWindow.document.body.scrollHeight)
            /*obj.style.height =
                obj.contentWindow.document.body.scrollHeight + "px"*/
        },
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
        border-radius: var(--rounded-slightly-all);
        border: 1.5px solid var(--color-primary-blue-01);
        background-color: var(--color-primary-blue-01);
        height: 500px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: space-between;

        .page-title {
            color: coral;
        }
        button {
            .btn-primary {
                background-color: pink;
                color: green;
                border: 1px solid coral;
                max-width: 300px;
                margin-left: 10px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
        }

    }
}
</style>
