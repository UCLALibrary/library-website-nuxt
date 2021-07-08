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
                        to="https://calendar.library.ucla.edu/appointments"
                        target="_blank"
                        class="text-link"
                        v-html="`Book a consultation`"
                    />
                </div>
            </div>

            <div class="bio">
                <div
                    v-if="topics.length >= 1"
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

                    <divider-general class="divider" />
                </div>

                <div
                    v-if="biography.length >= 1"
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
            margin-top: 15px;
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
                margin-top: 10px;
            }

            .department {
                color: purple;
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
    .meta-body {
        margin-left: 115px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .contact {
            .image {
                width: 300px;
                max-height: 300px;
                margin-top: 75px;
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

        .svg {
            margin-bottom: -10px;
        }

        .divider {
            margin: 45px 0px;
        }

        .bio {
            margin-top: 75px;
            margin-left: 80px;
            .bio-header {
                font-size: 28px;
                //margin-bottom: ;
                line-height: 35px;
            }
            .topic {
                .topics {
                    list-style: circle;
                    padding-left: 18px;
                    font-family: Karbon;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0.01em;
                    text-align: left;
                    ul li::before {
                        color: var(--color-primary-blue);
                    }
                }
            }

                color: pink;
                margin-top: 36px;
                padding-left: 18px;
                font-family: Karbon;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.01em;
                text-align: left;
            }

            .bio-blurb {
                font-size: 14px;
            }
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
