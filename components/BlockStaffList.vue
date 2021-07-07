<template lang="html">
    <section class="block-staff-list">
        <responsive-image
            v-if="image"
            :image="image"
            :aspect-ratio="100"
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
                <span
                    class="department"
                    v-html="department"
                />
                <div class="location-group">
                    <svg-icon-location class="svg" />
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
    </section>
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
        image: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-list {
    width: 959px;
    max-height: 396px;
    background-color: var(--color-white);
    border: 2px solid var(--color-primary-lightest-blue);
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;
    padding: 48px 32px 48px 64px;

    display: flex;
    flex-direction: row;

    .image {
        width: 300px;
        max-height: 300px;
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
        width: 476px;
        max-height: 277px;
        font-weight: normal;
        font-size: 18px;
        line-height: 120%;
        color: var(--color-primary-blue);

        .svg {
            margin-bottom: -10px;
        }
        .name {
            font-weight: 400;
            font-size: 48px;
            line-height: 100%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue);
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
            align-items: flex-end;

            margin-top: 16px;
            .svg {
                margin-bottom: -10px;
            }
        }
        .location-group {
            padding-bottom: 2px;
        }
        .location-link + .location-link {
            border-left: solid 1px var(--color-primary-blue);
            margin-left: 10px;
            padding-left: 10px;
        }
        .department {
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: var(--color-secondary-grey-04);
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
    @media #{$lte-phone} {
        display: flex;
        flex-direction: column;

        max-width: 100%;
        padding: 30px 30px;
        max-height: unset;
        .image {
            margin-right: 0;
            padding-right: 30px;
            max-width: 100%;
        }
        .meta {
            margin-top: 20px;
            max-width: 100%;
            max-height: 400px;
            .dept-location {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
}
</style>
