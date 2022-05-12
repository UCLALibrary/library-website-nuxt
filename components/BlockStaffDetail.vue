<template lang="html">
    <div class="block-staff-detail">
        <!-- HeadingStaff  -->
        <div class="heading-staff">
            <svg-heading-arrow />

            <h1
                class="staffName"
                v-html="staffName"
            />
            <div
                v-if="pronouns"
                class="pronouns"
            >
                {{ parsedPronouns }}
            </div>
        </div>

        <div class="section-staff-bio">
            <div :class="image ? 'body-contact' : 'body-contact no-image'">
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

                    <ul
                        v-if="departments.length"
                        class="departments"
                    >
                        <li
                            v-for="(department, index) in departments"
                            :key="index"
                            class="department"
                            v-html="department.title"
                        />
                    </ul>
                    <ul
                        v-if="locations.length"
                        class="location-group"
                    >
                        <li
                            v-for="location in locations"
                            :key="`location-${location.id}`"
                            class="location"
                        >
                            <nuxt-link
                                :to="location.to"
                                class="location-link"
                            >
                                <svg-icon-location class="svg" />
                                <span
                                    class="location-title"
                                    v-html="location.title"
                                />
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="contact-info-list">
                    <div class="contact-info">
                        <svg-icon-email class="svg" />
                        <smart-link
                            :to="`mailto:${email}`"
                            target="_blank"
                            class="link-icon"
                        >
                            {{ email }}
                        </smart-link>
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
                        >
                            {{ phone }}
                        </smart-link>
                    </div>
                    <div
                        v-if="consultation"
                        class="contact-info"
                    >
                        <svg-icon-consultation class="svg" />
                        <smart-link
                            :to="consultation"
                            class="link-icon"
                        >
                            {{ "Book a consultation" }}
                        </smart-link>
                    </div>
                </div>
            </div>

            <div class="body-bio">
                <!-- SectionStaffBio -->
                <divider-way-finder
                    v-if="
                        topics.length || academicDepartments.length || biography
                    "
                    class="divider divider-first"
                    color="about"
                />
                <div
                    v-if="topics.length || academicDepartments.length"
                    class="ask-me-about"
                >
                    <h2 class="secondary-header">
                        Ask Me About
                    </h2>
                    <rich-text>
                        <ul class="list topics">
                            <li
                                v-for="topic in mergeSortTopics"
                                :key="topic.id"
                                v-html="topic.title"
                            />
                        </ul>
                    </rich-text>
                </div>

                <!-- RICH TEXT-->
                <div
                    v-if="biography"
                    class="biography"
                >
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
        academicDepartments: {
            // merge this with ask-me-about data and then sort it
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
        parsedPronouns() {
            return `Pronouns: ${this.pronouns}`
        },
        mergeSortTopics() {
            return this.topics
                .concat(this.academicDepartments)
                .sort((a, b) =>
                    a.title.toUpperCase() > b.title.toUpperCase()
                        ? 1
                        : b.title.toUpperCase() > a.title.toUpperCase()
                            ? -1
                            : 0
                )
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-detail {
    max-width: calc($container-l-main + 128) + px;
    .heading-staff {
        width: 100%;
        margin-left: -64px;
        margin-bottom: var(--space-l);

        display: flex;
        align-items: center;
        flex-flow: column wrap;
        justify-content: center;
        align-items: normal;
        height: 80px;
        gap: var(--space-xs) var(--space-xl);
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
        width: 100%;
    }

    .pronouns {
        @include step-0;
        line-height: 1;
        color: var(--color-secondary-grey-05);
    }

    // CONTACT
    .body-contact {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        height: 352px;
        gap: var(--space-s) var(--space-xl);
        @include step-0;

        .image {
            width: 100%;
            max-width: 352px;
            height: auto;
        }

        .staff-info {
            border-bottom: 2px dotted var(--color-secondary-grey-02);
            padding-bottom: var(--space-s);
            width: calc(100% - 400px);
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
            width: 100%;
        }
    }

    .job-title,
    .department,
    .location-link {
        @include step-0;
        line-height: $line-height--2;
    }

    .location-group,
    .departments {
        margin: 6px 0 calc(var(--space-xs) + 6px);
        list-style: none;
        line-height: $line-height--1;
    }

    .department {
        display: inline;
    }

    .location {
        display: inline-block;
    }

    .departments {
        color: var(--color-secondary-grey-05);
    }

    .department {
        line-height: $line-height--1;

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
        margin-bottom: 0;

        .location-link {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: var(--space-xs);
        }
    }

    .location-title,
    .contact-info {
        @include button;
    }

    .location-link .svg,
    .contact-info .svg {
        flex-shrink: 0;
    }

    .job-title {
        margin: 6px 0 calc(var(--space-xs) + 6px);
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
        justify-content: flex-start;

        // SectionStaffBio
        .body-bio {
            width: 100%;

            > div:last-child {
                margin-bottom: 0;
            }

            ::v-deep .divider-way-finder {
                margin: var(--space-xl) auto;
                padding: 0;
            }

            .ask-me-about {
                margin-bottom: var(--space-2xl);
                ul {
                    margin: 0;
                }
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

    .body-contact.no-image {
        height: unset;
        .staff-info {
            width: 100%;
        }
    }

    @media (min-width: 1025px) and (max-width: 1300px) {
        padding: 0 var(--unit-gutter);

        .heading-staff {
            margin-left: 0;
            gap: var(--space-xs);
            justify-content: flex-start;
        }

        .svg__graphic-chevron-right {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            margin-top: 6px;
        }

        .location-link .svg,
        .contact-info .svg {
            width: 28px;
            height: 28px;
        }

        .department,
        .location-group .location-title {
            line-height: 1;
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
            justify-content: flex-start;
            gap: var(--space-xs);
        }

        .svg__graphic-chevron-right {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            margin-top: 6px;
        }

        .departments,
        .location-group {
            display: flex;
            flex-direction: column;
            gap: 0 var(--space-xs);

            .department {
                border: 0;
                padding: 0;
            }
        }

        .contact-info .svg,
        .location-link .svg {
            width: 28px;
            height: 28px;
        }

        .section-staff-bio {
            padding: 0 calc(40px + var(--space-xs));

            .staff-info {
                width: 100%;
            }

            .body-contact {
                height: unset;
                flex-grow: 0;

                .image {
                    max-width: 327px;
                }
            }
        }
    }

    @media #{$small} {
        .svg__graphic-chevron-right {
            display: none;
        }

        .heading-staff {
            height: unset;
        }

        .job-title,
        .departments,
        .location-group {
            margin-bottom: 8px;
        }
        .job-title {
            line-height: $line-height--1;
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
            }

            .body-bio {
                width: 100%;
            }
        }
    }
}
</style>
