<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            :image="image"
            :aspect-ratio="100"
            class="image"
        />
        <div class="meta">
            <nuxt-link :to="to">
                <h3
                    class="name"
                    v-html="staffName"
                />
            </nuxt-link>

            <div
                class="title"
                v-html="jobTitle"
            />
            <div class="dep-location">
                <span
                    class="department"
                    v-html="department"
                />
                <svg-icon-location class="svf" />
                <nuxt-link
                    v-for="location in locations"
                    :key="location.to"
                    :to="location.to"
                >
                    <span
                        class="location"
                        v-html="location.title"
                    />
                </nuxt-link>
            </div>

            <div class="date-time">
                <time
                    :datetime="date"
                    v-html="parsedDateTime"
                />

                <span v-if="showPipe"> | </span>

                <component
                    :is="parsedSvgOnline"
                    v-if="isOnline"
                    class="svg svg-online"
                />
                <span
                    v-if="isOnline"
                    v-html="parseOnline"
                />
            </div>
            <p
                v-if="showText"
                class="text"
                v-html="text"
            />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: "",
        },
        staffName: {
            type: String,
            default: "",
        },
        jobTitle: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },

        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        department: {
            type: String,
            default: "",
        },
        imageUrl: {
            type: String,
            default: "",
        },
    },
    computed: {
        image() {
            return { src: this.imageUrl }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-list {
    max-width: 990px;
    max-height: 274px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;

    .image {
        width: 456px;
        max-height: 274px;
        margin-right: 56px;
    }
    .meta {
        width: 412px;
        max-height: 222px;
        margin-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;

        .name {
            font-weight: 500;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue);
        }
        .title {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
            color: var(--color-black);
        }
    }

    /deep/ {
        .block-teaser-meta {
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}

// Breakpoints
@media #{$lte-tablet} {
    .block-teaser-list {
        max-width: 95%;
        padding-left: 5px;
        padding-right: 5px;
    }
}

@media #{$lte-phone} {
    .block-teaser-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        max-height: 550px;
        max-width: 100%;
        padding-left: 5px;
        padding-right: 5px;

        .image {
            max-width: 100%;
        }
        .block-teaser {
            max-width: 100%;
        }
    }
}
</style>
