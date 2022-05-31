<template>
    <section class="media-gallery">
        <h2 class="gallery-section-heading">
            {{ block.titleGeneral }}
        </h2>

        <media-gallery-new-lightbox
            v-if="showLightboxModal"
            :block="block.mediaGallery"
            :n-items="nItems"
            :selected-item="selectionIndex"
            @closeModal="hideLightboxModal"
        />
        <media-gallery-banner-image
            :image="block.mediaGallery[selectionIndex].image[0]"
            :n-items="nItems"
            :expanded="expandThumbnails"
            @click.native="toggleThumbnails"
        />
        <div
            v-if="expandThumbnails"
            class="thumbnails"
        >
            <media-gallery-thumbnail-card
                v-for="(item, index) in block.mediaGallery"
                :key="item.id"
                :image="item.image[0]"
                :caption-title="item.captionTitle"
                :caption-text="item.captionText"
                @click.native="selectItem(index)"
            />
        </div>
    </section>
</template>

<script>
export default 
{
    props: {
        block: {
            type: Object,
            required: true,
        },
    },
    data: function() {
        return {
            expandThumbnails: false,
            selectionIndex: 0,
            showLightboxModal: false,
        }
    },
    computed: {
        expand_toggle_text() {
            return `${this.block.mediaGallery.length} images ${this.expandThumbnails ? "-" : "+"}`
        },
        glyphExpandClass() {
            return [ "glyph-expand", this.isExpanded ? "glyph-expand-minus" : "glyph-expand-plus" ]
        },
        glyphExpandSVGContent() {
            return (
                '<line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />'
                + this.expandThumbnails ? "" : '<line x1="0" y1="80" x2="100" y2="20" stroke="black" />'
            )
        },
        nItems() {
            return this.block.mediaGallery.length
        },
        plusMinusIcon() {
            // These are the "fullwidth" unicode plus (U+FF0B) & minus (U+FF0D)
            return this.expandThumbnails ? "－" : "＋"
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                this.showLightboxModal = !this.showLightboxModal
            }
        })
    },
    methods: {
        hideLightboxModal() {
            console.log('click!')
            this.showLightboxModal = false
        },
        toggleThumbnails() {
            this.expandThumbnails = !this.expandThumbnails
        },
        clickNext() {
            if (this.selectionIndex + 1 < this.nItems) {
                this.selectionIndex += 1
            }
        },
        clickPrev() {
            if (this.selectionIndex > 0) {
                this.selectionIndex -= 1
            }
        },
        selectItem(itemIndex) {
            this.selectionIndex = itemIndex
            this.showLightboxModal = true
        },
    },
}
</script>

<style lang="scss" scoped>
.media-gallery {
    max-width: 960px;
    margin: 0 calc(var(--unit-gutter) - 16px);
    padding: 0;
    background-color: var(--color-white);
    margin: 0 auto;

    h2.gallery-section-heading {
        @include step-3;
        margin-bottom: var(--space-xl);
        color: var(--color-primary-blue-03);
    }

    .thumbnails {
        width: 100%;
        margin-top: var(--space-xl);

        display: grid;
        $column-gap: 32px;
        grid-template-columns: repeat(3, calc((100% - 2*$column-gap) / 3));
        column-gap: $column-gap;
        row-gap: var(--space-xl);
    }
}
</style>
