<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            :image="image"
            :aspect-ratio="100"
            sizes="300px"
            class="image"
        />
        <div
            v-if="!image"
            class="no-image"
        >
            <svg-heading-arrow
                
                class="icon-heading-arrow"
            />
        </div>

        <div class="meta">
            <h3 class="staff-name">
                <nuxt-link
                    :to="to"
                    v-html="staffName"
                />
            </h3>

            <div class="title-department">
                <h4
                    class="job-title"
                    v-html="jobTitle"
                />
                <ul class="department">
                    <li
                        v-for="department in departments"
                        :key="department.id"
                        v-html="department.title"
                    />
                </ul>
            </div>

            <div class="icon-block">
                <div
                    v-if="locations.length"
                    class="location"
                >
                    <nuxt-link
                        v-for="location in locations"
                        :key="`location-${location.id}`"
                        :to="location.to"
                        class="location-link"
                    >
                        <svg-icon-location class="icon" />
                        <span
                            class="location"
                            v-html="location.title"
                        />
                    </nuxt-link>
                </div>

                <div class="email">
                    <svg-icon-email class="icon" />
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
                    <svg-icon-phone class="icon" />
                    <smart-link
                        :to="`tel:${phone}`"
                        target="_blank"
                        class="text-link"
                        v-html="phone"
                    />
                </div>

                <div class="consultation">
                    <svg-icon-consultation class="icon" />
                    <smart-link
                        :to="bookingLink.theUrl"
                        target="_blank"
                        class="text-link"
                        v-html="bookingLink.urlText"
                    />
                </div>
            </div>
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
        image: {
            type: Object,
            default: () => {},
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
    font-family: var(--font-primary);
    background-color: var(--color-white);
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;

    display: flex;
    flex-direction: row;

    .image {
        width: 352px;
        margin: 48px 56px 64px;
    }
    .no-image {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;

        border: 1px solid var(--color-primary-blue-01);
        border-radius: var(--rounded-slightly-all);
        width: 267px;
        height:  267px;
        .icon-heading-arrow {
            margin: 0 auto;
        }

    }

    .meta {
        border: 1px solid indigo;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: flex-start;
        align-items: flex-start;

    .staff-name{
        border: 1px solid green;
        font-weight: 500;
        font-size: 36px;
        line-height: 120%;
        color: var(--color-primary-blue-03);

    }

    .title-department {
        border: 1px solid pink;
        .job-title {
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
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
        .department {
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
    }
    }
    .icon-block {
        border: 1px solid gold;
        .location {
            padding-bottom: 2px;
            // margin-left: 8px;
            // border-left: solid 1px var(--color-secondary-grey-02);
            // padding-left: 8px;
        }
        .icon {
            margin-bottom: -10px;
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
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: moccasin;
        .image {

        }
    }
}
</style>
