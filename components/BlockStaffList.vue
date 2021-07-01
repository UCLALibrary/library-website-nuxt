<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            v-if="imageUrl"
            :image="image"
            :aspect-ratio="100"
            class="image"
        />
        <svg-heading-arrow
            v-if="!imageUrl"
            class="svg"
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

            <div class="email">
                <svg-icon-email />
                <span
                    class="text"
                    v-html="email"
                />
            </div>
            <div
                v-if="phone"
                class="phone"
            >
                <svg-icon-phone />
                <span
                    class="text"
                    v-html="phone"
                />
            </div>
            <div class="consultation">
                <svg-icon-consultation />
                <smart-link
                    to="https://calendar.library.ucla.edu/appointments"
                    target="_blank"
                >
                    <span class="text">Book a consultation </span>
                </smart-link>
            </div>
        </div>
    </section>
</template>

<script>
import SvgHeadingArrow from "~/assets/svg/heading-arrow"
import SvgIconLocation from "~/assets/svg/icon-location"
import SvgIconEmail from "~/assets/svg/icon-email"
import SvgIconPhone from "~/assets/svg/icon-phone"
import SvgIconConsultation from "~/assets/svg/icon-consultation"

export default {
    components: {
        SvgHeadingArrow,
        SvgIconLocation,
        SvgIconEmail,
        SvgIconPhone,
        SvgIconConsultation,
    },
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
            const image = {
                src: this.imageUrl,
            }
            return image
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
            font-weight: 400;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue);
        }
        .title {
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: var(--color-black);
        }
    }
}
</style>
