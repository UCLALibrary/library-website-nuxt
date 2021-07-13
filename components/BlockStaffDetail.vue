<template lang="html">
    <div class="block-staff-detail">
        <!-- HEADING -->
        <div class="meta-heading">
            <div class="heading">
                <svg-heading-arrow class="svg" />
                <nuxt-link
                    :to="to"
                    class="staffName"
                >
                    <h3 v-html="staffName" />
                </nuxt-link>
            </div>

            <div class="dept-location">
                <div
                    class="title"
                    v-html="jobTitle"
                />
                <span
                    class="department"
                    v-html="department"
                />
                <div class="location-group">
                    <svg-icon-location class="location-svg" />
                    <nuxt-link
                        v-for="location in locations"
                        :key="`location-${location.to}`"
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
        </div>

        <!-- ---------BODY----------- -->
        <div class="body">
            <div class="body-contact">
                <responsive-image
                    :image="image"
                    :aspect-ratio="100"
                    class="image"
                />

                <divider-general class="divider" />

                <div class="contact-info">
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
                    class="contact-info"
                >
                    <svg-icon-phone class="svg" />
                    <smart-link
                        :to="`tel:${phone}`"
                        target="_blank"
                        class="text-link"
                        v-html="phone"
                    />
                </div>
                <div class="contact-info">
                    <svg-icon-consultation class="svg" />
                    <smart-link
                        to="https://calendar.library.ucla.edu/appointments"
                        target="_blank"
                        class="text-link"
                        v-html="`Book a consultation`"
                    />
                </div>
            </div>

            <div class="body-bio">
                <div
                    v-if="topics.length"
                    class="topic"
                >
                    <h2 class="bio-header">
                        Ask me About
                    </h2>

                    <ul class="topics">
                        <li
                            v-for="topic in topics"
                            v-html="topic"
                        />
                    </ul>
                </div>

                <divider-general class="divider" />


                <div
                    v-if="biography"
                    class="biography"
                >
                    <h2
                        class="bio-header"
                    />Biography</h2>
                    <p
                        class="bio-blurb"
                        v-html="biography"
                    />
                </div>
            </div>
        </div>
    </div>
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
        image: {
            type: Object,
            default: () => {},
        },
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
            type: Array,
            default: () => [],
        },
        topics: { // ask-me-about
            type: Array,
            default: () => [],
        },
        biography: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-detail {
    max-width: 990px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;

    .meta-heading {
    // -------HEADING------------
        .heading {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;
            .svg {
                margin-right: 48px;
            }
            .staffName {
                margin-top: 20px;
                font-weight: 400;
                font-size: 48px;
                line-height: 100%;
                letter-spacing: 0.01em;
                color: var(--color-primary-blue);
            }
        }
        .dept-location {
            margin-left: 115px;
            margin-top: 15px;
            position: relative;

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;

            .title {
                border-right: 1px solid indigo;
                padding-right: 14px;
                margin-top: 10px;
            }

            .department {
                border-right: 1px solid indigo;
                padding-left: 14px;
                padding-right: 14px;
                margin-top: 10px;
            }

            .location-group {
                padding-left: 14px;

                display: flex;
                align-items: center;
            }
            .location-link + .location-link {
                border-left: solid 1px var(--color-primary-blue);
                margin-left: 10px;
                padding-left: 10px;
            }
        }
    }

    // -------BODY-----------------------
    // -------CONTACT------------
    .body {
        margin-left: 115px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .body-contact {
            font-size: 20px;

            .image {
                width: 300px;
                max-height: 300px;
                margin-top: 75px;
            }

            .contact-info {
                margin-top: 10px;
            }

            .svg {
                margin-bottom: -10px;
            }

            .divider {
                margin: 45px 0px;
            }
        }

    // -------BIO------------
        .body-bio {
            margin-top: 75px;
            margin-left: 80px;

            font-family: Karbon;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-align: left;
            line-height: 32px;

            .bio-header {
                font-size: 28px;
                margin-bottom: 35px;
                line-height: 35px;
            }

            .topic {
                .topics {
                    list-style: circle;
                    // list-style-image: "molecule-background.svg";
                    padding-left: 18px;
                    li::marker {
                        color: var(--color-primary-blue);
                    }
                }
            }
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
    @media #{$lte-tablet} {
        .block-staff-detail {
            max-width: 95%;
            padding-left: 5px;
            padding-right: 5px;
        }
    }

    @media #{$lte-phone} {
        .block-staff-detail {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            width: 400px;
            max-height: unset;
            max-width: 100%;
            padding-left: 5px;
            padding-right: 5px;

            .image {
                max-width: 100%;
            }
            .block-staff {
                max-width: 100%;
            }
        }
    }
}
</style>
