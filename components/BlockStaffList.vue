<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            v-if="image"
            :image="image"
            :aspect-ratio="100"
            class="image"
        />
        <svg-heading-arrow
            v-if="!image"
            class="svg"
        />
        <div class="meta">
            <nuxt-link
                :to="to"
                class="name"
            >
                <span v-html="staffName" />
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
                <div class="location-group">
                    <svg-icon-location class="svg" />
                    <nuxt-link
                        v-for="location in locations"
                        :key="location.to"
                        :to="location.to"
                        class="location-link"
                    >
                        <span
                            class="location"
                            v-html="location.title"
                        />
                    </nuxt-link>
                </div>
            </div>

            <div class="email">
                <svg-icon-email class="svg" />
                <span
                    class="text"
                    v-html="email"
                />
            </div>
            <div
                v-if="phone"
                class="phone"
            >
                <svg-icon-phone class="svg" />
                <span
                    class="text"
                    v-html="phone"
                />
            </div>
            <div class="consultation">
                <svg-icon-consultation class="svg" />
                <smart-link
                    to="https://calendar.library.ucla.edu/appointments"
                    target="_blank"
                    class="text-link"
                    v-html="`Book a consultation`"
                />
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
        image: {
            type: Object,
            default: () => {},
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
        width: 300px;
        max-height: 300px;
        margin-right: 56px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: center;
    }
    .meta {
        width: 476px;
        max-height: 277px;
        margin-top: 16px;
        padding-bottom: 16px;

        font-weight: normal;
        font-size: 18px;
        line-height: 120%;
        color: var(--color-primary-blue);

        .svg {
            margin-bottom: -10px;
        }

        .name {
            font-weight: 400;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue);
        }
        .title {
            margin-top: 8px;
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: var(--color-black);
        }
        .dep-location {
            margin-top: 16px;
            .svg {
                margin-bottom: -10px;
            }
        }
        .location-link + .location-link {
            border-left: solid 1px var(--color-primary-blue);
            margin-left: 10px;
            padding-left: 10px;
        }
        .department {
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;

            color: var(--color-secondary-grey-04);
        }
        .email {
            margin-top: 10px;
        }
        .phone {
            margin-top: 10px;
        }
        .consultation {
            margin-top: 10px;
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .name {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue);
                text-decoration-thickness: 1.5px;
            }
            .location-link {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue);
                text-decoration-thickness: 1.5px;
            }
        }
    }

    // Breakpoints
    @media #{$lte-phone} {
        display: flex;
        flex-direction: column;

        max-height: unset;

        .dep-location {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
