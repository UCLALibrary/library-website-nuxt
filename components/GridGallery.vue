<template>
    <div class="grid-gallery">
        <div
            v-for="card in items"
            :key="card.to"
            :class="parsedClass"
        >
            <responsive-image
                :image="card.image"
                :aspect-ratio="parsedAspectRatio"
                class="image"
            />

            <h3
                v-if="!card.featured"
                v-html="card.headlineText"
            />
            <p
                v-if="!card.featured"
                v-html="card.shortSnippet"
            />
            <div
                v-if="card.featured"
                class="text"
            >
                <h3>Headline of article</h3>
                <p>Blurb / snippet</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        //  [{ image : Object, date: String, headlineText: String, to: URL, shortSnippet: String,  featured: boolean, longSnippet:String }]
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedClass() {
            return this.featured ? "card-featured" : "card"
        },
        parsedAspectRation() {
            return this.featured ? 100 : 60
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-gallery {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-flow: dense;
    max-width: 932px;

    padding: 0;
    margin: 0;
    margin-bottom: 64px;
    background-color: var(--color-white);

    .card {
        grid-column: span 2;
    }

    .card-featured {
        grid-column: span 6;

        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
    }

    @media #{$medium} {
        padding: 0 64px;
        .card {
            grid-column: span 3;
        }
        .card-featured {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }

    @media #{$small} {
        padding: 0 24px;
        .card {
            grid-column: span 6;
        }
    }
}
</style>
