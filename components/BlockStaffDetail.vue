<template lang="html">
    <div class="block-staff-detail">
        <!-- TODO Split this into HeadingStaff and SectionStaffBio -->

        <!-- HEADING -->
        <div class="meta-heading">
            <div class="heading">
                <svg-heading-arrow class="arrow-svg" />

                <h3
                    class="staffName"
                    v-html="staffName"
                />
            </div>

            <div class="dept-location">
                <div
                    class="job-title"
                    v-html="jobTitle"
                />

                <div class="department-group">
                    <ul class="departments">
                        <li
                            v-for="(department, index) in departments"
                            :key="index"
                            class="department"
                            v-html="department"
                        />
                    </ul>
                </div>

                <div class="location-group">
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
                <!-- TODO fix divider to go all the way across  heading if there is no picture -->
                <divider-general class="divider" />
                <div
                    v-if="pronouns"
                    class="pronouns"
                    v-html="parsedPronouns"
                />
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
                        :to="getBookingLink"
                        target="_blank"
                        class="text-link"
                        v-html="`Book a consultation`"
                    />
                </div>
            </div>

            <div class="body-bio">
                <div v-if="topics.length">
                    <!-- TODO new comps call this Subject Speciality areas-just for librarians? -->
                    <h2 class="bio-header">
                        Ask me About
                    </h2>

                    <ul class="topics">
                        <li
                            v-for="topic in topics"
                            :key="topic.id"
                            v-html="topic.title"
                        />
                    </ul>
                </div>

                <divider-general
                    v-if="biography"
                    class="divider"
                />

                <div v-if="biography">
                    <h2 class="bio-header">
                        Biography
                    </h2>
                    <div v-html="biography" />
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
        pronouns: {
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
        getBookingLink() {
            return this.$config.libcalAppointment
        },
        parsedPronouns() {
            return `Pronouns: ${this.pronouns}`
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
            .arrow-svg {
                margin-right: 48px;
            }
            .staffName {
                margin-top: 20px;
                font-weight: 400;
                font-size: 48px;
                line-height: 100%;
                letter-spacing: 0.01em;
                color: var(--color-primary-blue-03);
            }
        }
        .dept-location {
            position: relative;
            margin-left: 115px;
            margin-top: 15px;
            font-size: 20px;
            // background-color: cyan;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;

            .job-title {
                padding-right: 14px;
                margin-top: 10px;
                border-right: 1px solid var(--color-secondary-grey-02);
            }

            .departments {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                list-style: none;
                //padding-right: 14px;
                padding-left: 14px;
                margin-top: 10px;
                //border-right: 1px solid var(--color-secondary-grey-02);
                .department {
                    padding-right: 14px;
                }
            }

            .location-group {
                color: var(--color-primary-blue-03);
                font-family: var(--font-secondary);
                padding-bottom: -30px;

                .location-link {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    align-content: center;
                    align-items: center;
                }
                .svg {
                    padding-left: 14px;
                    //padding-bottom: -30px;
                }
                .location {
                    //margin-bottom: 30px;
                }
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
                color: var(--color-primary-blue-03);
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
                        border-bottom: 2px solid var(--color-default-cyan-03);
                        display: inline-block;
                        line-height: 1.25;
                        color: var(--color-primary-blue-03);
                        font-size: 2em;
                    }
                }
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        .location-link:hover {
            text-decoration: underline;
            text-decoration-color: var(--color-primary-blue-03);
            text-decoration-thickness: 1.5px;
        }
    }

    // Breakpoints
    @media #{$medium} {
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

    @media #{$small} {
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

                .location-link {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    align-content: center;
                    align-items: center;
                }
                .svg {
                    padding-left: 14px;
                    //padding-bottom: -30px;
                }
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
