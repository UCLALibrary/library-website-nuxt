<template>
    <div class="block-hours">
        <h3 class="title">
            Hours
        </h3>

        <div class="content">
            <!--div class="iframe-container"-->
            <iframe
                id="the-iframe"
                refs="hours_iframe"
                class="iframe"
                :src="`/blockHours.html?lid=${lid}`"
                frameBorder="0"
                width="100%"
                height="100%"
            />
            <!-- @load="resizeIframe"
                @resize="resizeIframe" -->
            <!--/div-->
            <!--div
                class="hours-data"
                v-html="hoursData"
            /-->

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
    /* data() {
        return {
            hoursData: "",
        }
    },
    async fetch() {
        const response = await fetch("/blockHours.html")
        const html = await response.text()
        var parser = new DOMParser()
        var doc = parser.parseFromString(html, "text/html")
        // this.hoursData = doc.body.innerHTML
        // Get the image file

        console.log(doc.body)
        this.hoursData = doc.body.innerHTML
    },
    fetchKey(getCounter) {
        return `block-hours-${getCounter("block-hours")}`
    },*/
    mounted() {
        window.addEventListener(
            "message",
            function (e) {
                var hours_iframe = document.getElementById("the-iframe")
                console.log(hours_iframe.height)
                var eventName = e.data[0]
                var data = e.data[1]

                switch (eventName) {
                    case "setHeight":
                        hours_iframe.height = data + 20
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
.block-hours {
    max-width: 930px;
    width: 100%;

    .title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: var(--space-m);
    }

    .content {
        border-radius: var(--rounded-slightly-all);
        border: 1.5px solid var(--color-primary-blue-01);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: space-between;

        .btn-lnk {
            max-width: 300px;
            margin-left: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .iframe {
            max-width: 928px;
            padding: 12px;
            // resize: both;
        }
    }
}
</style>
