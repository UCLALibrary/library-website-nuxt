<template lang="html">
    <div class="block-staff-detail">
        <!-- HeadingStaff  -->
        <div class="heading-staff">
            <svg-heading-arrow />

            <h1
                class="staffName"
                v-html="staffName"
            />
        </div>

        <div class="section-staff-bio">
            <div class="body-contact">
                <responsive-image
                    v-if="image"
                    :image="image"
                    :aspect-ratio="100"
                    class="image"
                />
                <div class="staff-info">
                    <div
                        class="job-title"
                        v-html="jobTitle"
                    />

                    <ul class="departments">
                        <li
                            v-for="(department, index) in departments"
                            :key="index"
                            class="department"
                            v-html="department.title"
                        />
                    </ul>

                    <div
                        v-if="pronouns"
                        class="pronouns"
                    >
                        {{ parsedPronouns }}
                    </div>
                </div>
                <div class="contact-info-list">

                    <div class="contact-info">
                        <svg-icon-email class="svg" />
                        <smart-link
                            :to="`mailto:${email}`"
                            target="_blank"
                            class="link-icon"
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
                            class="link-icon"
                            v-html="phone"
                        />
                    </div>
                    <div class="contact-info">
                        <svg-icon-consultation class="svg" />
                        <smart-link
                            :to="consultation"
                            target="_blank"
                            class="link-icon"
                            v-html="`Book a consultation`"
                        />
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

            <div class="body-bio">
                <!-- SectionStaffBio -->
                <divider-way-finder
                    class="divider divider-first"
                    color="about"
                />
                <div v-if="topics.length" class="ask-me-about">
                    <h2 class="secondary-header">
                        Ask me About
                    </h2>
                    <rich-text>
                    <ul class="list topics">
                        <li
                            v-for="topic in topics"
                            :key="topic.id"
                            v-html="topic.title"
                        />
                    </ul>
                    </rich-text>
                </div>

                <!-- RICH TEXT-->
                <div v-if="biography" class="biography">
                    <h2 class="secondary-header">
                        Biography
                    </h2>
                    <rich-text :rich-text-content="biography" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgHeadingArrow from "~/node_modules/ucla-library-design-tokens/assets/svgs/graphic-chevron-right"
import SvgIconLocation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
import SvgIconEmail from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
import SvgIconPhone from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
import SvgIconConsultation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-chat"
import SvgIconPerson from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-person"

export default {
    components: {
        SvgHeadingArrow,
        SvgIconLocation,
        SvgIconEmail,
        SvgIconPhone,
        SvgIconConsultation,
        SvgIconPerson,
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
        departments: {
            type: Array,
            default: () => [],
        },
        locations: {
            type: Array,
            default: () => [],
        },
        pronouns: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
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
        consultation: {
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
    }
}
</script>

<style lang="scss" scoped>
.block-staff-detail {
    max-width: calc($container-l-main + 128) + px;
    .heading-staff {
        width: 100%;
        margin-left: -64px;
        margin-bottom: var(--space-xl);

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: var(--space-xl);
    }

    .svg__graphic-chevron-right {
        flex-shrink: 0;
        flex-basis: 80px;
        .svg__stroke--wayfinder {
            stroke: var(--color-about-purple-03);
        }
    }

    .staffName {
        letter-spacing: 0.01em;
        color: var(--color-primary-blue-03);
        @include step-4;
    }

    // CONTACT
    .body-contact {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        height: 352px;
        gap: 16px 48px;
        @include step-0;

        .image {
            width: 100%;
            max-width: 352px;
            height: auto;
        }

        .staff-info {
            border-bottom: 2px dotted var(--color-secondary-grey-02);
            padding-bottom: 16px;
        }

        .pronouns {
            color: var(--color-secondary-grey-04);
        }

        .contact-info {
            color: var(--color-primary-blue-03);
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: var(--space-xs);
            margin-bottom: var(--space-xs);
        }

        .divider {
            margin-bottom: var(--space-l);
            width: 100%;
        }
    }

    .job-title,
    .department,
    .location-link {
        @include step-0;
    }

    .departments,
    .location-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        color: var(--color-secondary-grey-05);
        list-style: none;
    }

    .department {
        margin: 6px 0;
        line-height: $line-height--2;

        border-right: 1px solid var(--color-secondary-grey-02);
        padding: 0 var(--space-xs);
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            border-right: 0;
        }
    }

    .location-group {
        color: var(--color-primary-blue-03);
        gap: var(--space-s);

        .location-link {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: 4px;
        }

        .location {
            @include step-0;
        }
    }

    .job-title,
    .departments {
        margin-bottom: var(--space-xs);
    }

    .no-image-divider {
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
    // Hover states
    @media #{$has-hover} {
        .location-link:hover {
            @include link-hover;
        }
    }

    // BODY
    .section-staff-bio {
        max-width: $container-l-main + px;
        margin: 0 auto var(--space-3xl);
        width: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;

        // SectionStaffBio
        .body-bio {
            width: 100%;

            ::v-deep .divider-way-finder {
                margin: var(--space-2xl) auto;
                padding: 0;
            }

            .ask-me-about {
                margin-bottom: var(--space-2xl);
            }

            .secondary-header {
                margin-bottom: var(--space-l);
                @include step-3;
                color: var(--color-primary-blue-03);
            }

            .topics li {
                margin: 0;
            }

            ::v-deep .rich-text p:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 1025px) and (max-width: 1300px) {
        padding: 0 var(--unit-gutter);

        .heading-staff {
            margin-left: 0;
            gap: var(--space-xs);
        }

        .svg__graphic-chevron-right {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            margin-top: 6px;
        }

        .section-staff-bio {
            padding: 0 calc(40px + var(--space-xs));
        }
    }

    @media #{$medium} {
        width: 100%;
        padding: 0 var(--unit-gutter);

        .heading-staff {
            margin-left: 0;
            gap: var(--space-xs);
        }

        .svg__graphic-chevron-right {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            margin-top: 6px;
        }

        .section-staff-bio {
            padding: 0 calc(40px + var(--space-xs));

            .body-contact {
                height: unset;
                flex-grow: 0;

                .image {
                    max-width: 327px;
                }

                .contact-info .svg {
                    width: 28px;
                }
            }
        }
    }

    @media #{$small} {
        .svg__graphic-chevron-right {
            display: none;
        }

        .job-title,
        .departments,
        .location-group {
            margin-bottom: 8px;
        }
        .job-title {
            line-height: $line-height--1;
        }
        .departments {
            flex-direction: column;

            .department {
                border-right: 0;
                padding: 0;
            }
        }

        .section-staff-bio {
            padding: 0;

            .body-contact {
                flex-basis: 100%;
                width: 100%;
                flex-grow: 0;

                .image {
                    max-width: 100%;
                }

                .contact-info .svg {
                    width: 28px;
                }
            }

            .body-bio {
                width: 100%;
            }
        }
    }
}
</style>
