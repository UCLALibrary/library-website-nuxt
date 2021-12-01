<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            :image="image"
            :aspect-ratio="100"
            sizes="300px"
            class="image"
        />
        <svg-heading-arrow
            v-if="!image"
            class="no-image"
        />
        <div class="meta">
            <nuxt-link
                :to="to"
                class="name"
            >
                <h3 v-html="staffName" />
            </nuxt-link>

            <div
                class="title"
                v-html="jobTitle"
            />
            <div class="dept-location">
                <ul class="departments">
                    <li
                        v-for="department in departments"
                        :key="department.id"
                        class="department"
                        v-html="department.title"
                    />
                </ul>
                <div
                    v-if="locations.length"
                    class="location-group"
                >
                    <nuxt-link
                        v-for="location in locations"
                        :key="`location-${location.id}`"
                        :to="location.to"
                        class="location-link"
                    >
                        <svg-icon-location class="svg" />
                        <span
                            class="location"
                            v-html="location.title"
                        />
                    </nuxt-link>
                </div>
            </div>

            <div class="email">
                <svg-icon-email class="svg" />
                <smart-link
                    :to="`mailto:${email}`"
                    target="_blank"
                    class="text-link"
                    v-html="email"
                />
            </div>
            <div
                v-if="phone"
                class="phone"
            >
                <svg-icon-phone class="svg" />
                <smart-link
                    :to="`tel:${phone}`"
                    target="_blank"
                    class="text-link"
                    v-html="phone"
                />
            </div>
            <div class="consultation">
                <svg-icon-consultation class="svg" />
                <smart-link
                    :to="bookingLink.theUrl"
                    target="_blank"
                    class="text-link"
                    v-html="bookingLink.urlText"
                />
            </div>
        </div>
    </section>
</template>

<script>
import _isEmpty from "lodash/isEmpty"
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
        departments: {
            type: Array,
            default: () => [],
        },
        image: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        bookingLink() {
            // TODO Make this a prop, and do the $store from the page
            return !_isEmpty(this.$store.state.global)
                ? this.$store.state.globals.appointmentsLink
                : {
                    theUrl: this.$config.libcalAppointment,
                    urlText: "Book a consultation",
                }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-list {
    // TODO Stop using max-height. You don't know how tall anything will be ever

    background-color: var(--color-white);
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;
    padding: 48px 32px 48px 64px;

    // TODO Make this vert cetnering too
    display: flex;
    flex-direction: row;

    .image {
        width: 33%;
        margin-right: 56px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: center;
    }
    .no-image {
        margin-right: 32px;
    }
    .meta {
        max-height: 277px;
        font-weight: normal;
        font-size: 18px;
        line-height: 120%;
        color: var(--color-primary-blue-03);

        .svg {
            margin-bottom: -10px;
        }
        .name {
            font-weight: 400;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue-03);
        }
        .title {
            margin-top: 8px;
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: var(--color-black);
        }
        .dept-location {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;

            margin-top: 16px;
            max-width: 659px;
            .svg {
                margin-bottom: -10px;
            }
        }
        .departments {
            display: flex;
            flex-direction: column;

            list-style: none;
            margin-bottom: 5px;
            .department {
                font-weight: 400;
                font-size: 18px;
                line-height: 140%;
                color: var(--color-secondary-grey-04);
            }
        }

        .location-group {
            padding-bottom: 2px;
            // margin-left: 8px;
            // border-left: solid 1px var(--color-secondary-grey-02);
            // padding-left: 8px;
        }
        .location-link + .location-link {
            border-left: solid 1px var(--color-primary-blue-03);
            margin-left: 10px;
            padding-left: 10px;
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
        .name:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }

        .location-link:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }
    }

    // Breakpoints
    @media #{$small} {
        display: flex;
        flex-direction: column;

        width: 400px;

        padding: 30px 30px;
        max-height: unset;
        .image {
            margin-right: 0;
            padding-right: 30px;
            max-width: 100%;
        }
        .meta {
            margin-top: 20px;

            .dept-location {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
            }
            .location-group {
                margin-left: 0;
                border-left: none;
                padding-left: 0px;
            }
        }
    }
}
</style>
