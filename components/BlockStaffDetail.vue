<template lang="html">
    <div class="block-staff-detail">
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
                    <svg-icon-location class="svg" />
                    <nuxt-link
                        v-for="location in locations"
                        :key="location.to"
                        :to="location.to"
                        class="location-link"
                    >
                        <span
                            v-for="location in locations"
                            class="locations"
                            v-html="locations"
                        />
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="meta-body">
            <div class="contact">
                <responsive-image
                    :image="image"
                    :aspect-ratio="100"
                    class="image"
                />

                <divider-general class="divider" />

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

            <div class="bio">
                <h2
                    v-if="topics"
                    class="text"
                    v-html="text"
                >
                    Ask me About
                </h2>

                <ul class="topics">
                    <li
                        v-for="topic in topics"
                        v-html="topic"
                    />
                </ul>

                <divider-general class="divider" />

                <h2
                    class="bio-header"
                    v-html="biography"
                />
                <p
                    class="bio-blurb"
                    v-html="bioBlurb"
                />
                </h2>
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
            type: String,
            default: "",
        },
        topics: {
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
        position: relative;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .title {
            color: hotpink;
            border-right: 1px solid indigo;
            padding-right: 14px;
        }

        .department {
            color: purple;
            border-right: 1px solid indigo;
            padding-left: 14px;
            padding-right: 14px;
        }

        .location-group {
            .svg {
                padding-left: 14px;
                padding-right: 14px;
                top: 10px;
            }
            .locations {
                color: coral;
            }
        }
    }
    }
    .meta-body {
        margin-left: 115px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .bio-header {
            font-size: 24px;
            //color: green;
        }

        .bio-blurb {
            font-size: 14px;
            color: indigo;
        }

        .contact {
            //background-color: coral;

            .image {
                width: 300px;
                max-height: 300px;
                margin-right: 80px;
            }
            .divider {
                margin: 45px 0px;
            }
        }
        .bio {
            .topics {
                list-style: circle;
                padding-left: 18px;
            }
            //background-color: aqua;
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

        max-height: 550px;
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
</style>
