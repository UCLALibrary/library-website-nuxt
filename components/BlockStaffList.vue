<template lang="html">
    <li class="block-staff-list">
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
            <svg-heading-arrow class="icon-heading-arrow" />
        </div>

        <div class="meta">
            <div class="name-title">
                <h3 class="staff-name">
                    <nuxt-link
                        :to="to"
                        v-html="staffName"
                    />
                </h3>
                <div
                    class="job-title"
                    v-html="jobTitle"
                />
                <ul
                    v-if="departments.length"
                    class="departments"
                >
                    <li
                        class="department"
                        v-html="lastDepartment"
                    />
                </ul>
            </div>

            <div class="contact-info">
                <div class="email">
                    <svg-icon-email class="icon" />
                    <smart-link
                        :to="`mailto:${email}`"
                        target="_blank"
                        class="text-link"
                    >
                        {{ email }}
                    </smart-link>
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
                    >
                        {{ phone }}
                    </smart-link>
                </div>

                <div
                    v-if="consultation"
                    class="consultation"
                >
                    <svg-icon-consultation class="icon" />
                    <smart-link
                        :to="consultation"
                        target="_blank"
                        class="text-link"
                    >
                        {{ "Book a consultation" }}
                    </smart-link>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import _isEmpty from "lodash/isEmpty"
import SvgHeadingArrow from "~/node_modules/ucla-library-design-tokens/assets/svgs/graphic-chevron-right"
import SvgIconEmail from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
import SvgIconPhone from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
import SvgIconConsultation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-chat"

export default {
    components: {
        SvgHeadingArrow,
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
        consultation: {
            type: String,
            default: "",
        },
    },
    computed: {
        lastDepartment() {
            return this.departments[this.departments.length - 1].title
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-list {
    --image-size: 272px;

    display: flex;
    flex-direction: row;
    gap: var(--space-xl);

    @include step-0;
    line-height: $line-height--1;
    background-color: var(--color-white);
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);

    padding: var(--space-xl);
    position: relative;

    transition-property: box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

    .image {
        flex-shrink: 0;
        width: var(--image-size);
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
        width: var(--image-size);
        height: var(--image-size);
        .icon-heading-arrow {
            margin: 0 auto;

            .svg__stroke--wayfinder {
                stroke: var(--color-about-purple-03);
            }
        }
    }

    .meta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--space-m);

        .name-title {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
        }

        .staff-name {
            @include step-2;
            color: var(--color-primary-blue-03);

            a::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
        }
        .job-title {
            color: var(--color-black);
        }
        .departments {
            display: flex;
            flex-direction: column;

            list-style: none;
        }
        .department {
            color: var(--color-secondary-grey-04);
        }
    }

    .contact-info a {
        @include button;
        z-index: 10;
    }

    .email,
    .phone,
    .consultation {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space-xs);

        color: var(--color-primary-blue-03);

        .icon {
            flex-shrink: 0;
        }
    }

    // Hover states
    @media #{$has-hover} {
        .staff-name a:hover,
        .is-link:hover {
            @include link-hover;
        }

        &:hover {
            transform: scale(1.01);
            @include shadow-state-change;
        }
    }

    // Breakpoints
    @media #{$medium} {
        align-items: center;

        .image,
        .no-image {
            --image-size: 220px;
            flex-shrink: 0;
        }

        .job-title,
        .department,
        .contact-info {
            font-size: 18px;
        }

        .contact-info .icon {
            width: 28px;
            height: 28px;
        }
    }
    @media #{$small} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;

        border: 0;

        &.block-staff-list-item {
            border-bottom: 2px dotted var(--color-secondary-grey-02);
            padding-left: 0;
            padding-right: 0;

            &:last-child {
                border-bottom: 0;
            }
        }

        .image,
        .no-image {
            display: none;
        }

        .meta {
            width: 100%;
        }
    }
}
</style>
