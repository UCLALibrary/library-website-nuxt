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
                <div class="department-group">
                    <ul class="departments">
                        <li
                            v-for="department in departments"
                            class="department"
                            v-html="department"
                        />
                    </ul>
                </div>
                <!-- <div class="department-group">
                    <span
                        v-for="department in departments"
                        class="departments"
                        v-html="department"
                    />
                </div> -->
                <div class="location-group">
                    <nuxt-link
                        v-for="location in locations"
                        :key="`location-${location.to}`"
                        :to="location.to"
                        class="location-link"
                    >
                        <svg-icon-location class="svg" /> <span
                            class="location"
                            v-html="location.title"
                        />
                    </nuxt-link>
                </div>
            </div>
        </div>

        <!-- ---------BODY----------- -->
        <div class="meta">
            <div class="body-contact">
                <responsive-image
                    v-if="image"
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
                <div v-if="topics.length">
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

                <div v-if="biography">
                    <h2 class="bio-header">
                        Biography
                    </h2>
                    <p v-html="biography" />
                </div>
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
        departments: {
            type: Array,
            default: () => [],
        },
        topics: {
            // ask-me-about
            type: Array,
            default: () => [],
        },
        biography: {
            type: String,
            default: "",
        },
    },
    computed: {
        locationsWithIcon: function() {
            return this.locations.map(function(location) {
                return `<svg-icon-consultation class="svg" />` + location.title
                //return location
            })
        }
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
            position: relative;
            margin-left: 115px;
            margin-top: 15px;
            font-size: 20px;

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;

            .title {
                padding-right: 14px;
                margin-top: 10px;
                border-right: 1px solid var(--color-secondary-grey-02);
            }

            .departments {
                display: flex;
                flex-direction: row;

                list-style: none;
                padding-right: 14px;
                padding-left: 14px;
                margin-top: 10px;
                border-right: 1px solid var(--color-secondary-grey-02);
                .department {
                    padding-right: 14px;
                }
            }

            .location-group {
                padding-left: 14px;
                color: var(--color-primary-blue);

                display: flex;
                align-items: center;
            }
            .location-link + .location-link {
                border-left: solid 1px var(--color-secondary-grey-02);
                margin-left: 10px;
                padding-left: 10px;
            }
        }
    }

    // -------BODY-----------------------
    // -------CONTACT------------
    .meta {
        margin-left: 115px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-start;

        .body-contact {
            font-size: 20px;
            min-width: 300px;

            .image {
                width: 300px;
                max-height: 300px;
                margin-top: 75px;
            }

            .contact-info {
                color: var(--color-primary-blue);
                margin-top: 10px;
            }

            .svg {
                margin-bottom: -10px;
            }

            .divider {
                margin: 45px 0px;
                width: 100%;
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
                margin-bottom: 18px;
            }
            .divider {
                margin: 45px 0px;
                width: 100%;
            }

            .topics {
                li {
                    background: url("~/assets/svg/molecule-bullet.svg?url")
                        no-repeat left center;
                    padding: 0px 10px 0px 35px;
                    list-style: none;
                    margin: 0;
                    vertical-align: middle;
                    li::marker {
                        border-bottom: 2px solid var(--color-default-cyan-base);
                        display: inline-block;
                        line-height: 1.25;
                        color: var(--color-primary-blue);
                        font-size: 2em;
                    }
                }
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            .staffName {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue);
                text-decoration-thickness: 2px;
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
        max-width: 95%;
        padding-left: 5px;
        padding-right: 5px;

        .meta-heading {
            .dept-location {
                display: flex;
                flex-direction: column;
            }
        }
        .departments {
            display: flex;
            flex-direction: column;
            margin-left: 0px;
        }
    }

    @media #{$lte-phone} {
            display: flex;
            flex-direction: column;

            width: 400px;
            max-height: unset;
            max-width: 100%;
            padding-right: 5px;

            .meta-heading {
                .dept-location {
                    margin-left: 15px;

                    display: flex;
                    flex-direction: column;
                    .department {
                    padding-right: 0px;
                    }
                }
                .location-group {
                    display: flex;
                    flex-direction: column;
                }
            }


            .meta {
                margin-left: 15px;

                .body-contact {
                    .image {
                        margin-top: 45px;
                    }
                }

                display: flex;
                flex-direction: column;
                .body-bio {
                    margin-top: 43px;
                    margin-left: 10px;
                }
            }
        }
    
}
</style>
