<template lang="html">
    <main
        id="main"
        class="page page-job-opportunities"
    >
        <!-- TODO BROKEN BREADCRUMB -->
        <nav-breadcrumb
            to="/about/jobs"
            :title="page.title"
            parent-title="Jobs"
        />

        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :email="page.email"
            :phone="page.phoneNumber"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <!-- ASSOCIATED LIBRARIAN JOBS -->
        <section-wrapper
            section-title="Academic Librarian Jobs"
        >
            <section-generic-list
                v-if="parsedAcademicLibrarianJobs.length > 0"
                :items="parsedAcademicLibrarianJobs"
            />
            <div
                v-else
                class="no-positions"
            >
                No positions available
            </div>

            <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider"
                    color="about"
                />
            </section-wrapper>
        </section-wrapper>

        <!-- STAFF JOBS -->
        <section-wrapper
            section-title="Staff Jobs"
        >
            <section-generic-list
                v-if="parsedStaffJobs.length > 0"
                :items="parsedStaffJobs"
            />
            <div
                v-else
                class="no-positions"
            >
                No positions available
            </div>

            <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider"
                    color="about"
                />
            </section-wrapper>
        </section-wrapper>

        <!-- ASSOCIATED TOPICS -->
        <section-wrapper>
            <section-cards-with-illustrations
                v-if="associatedTopics.length > 0"
                :items="associatedTopics"
                section-title="Associated Topics"
                section-summary="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            />
            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import JOB_OPPORTUNITIES_LIST from "~/gql/queries/JobOpportunitiesList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(JOB_OPPORTUNITIES_LIST)
        return {
            page: _get(data, "entry", {}),
            associatedTopics: _get(data, "entry.associatedTopics", {}),
            allJobs: _get(data, "allJobs", {}),
        }
    },
    head() {
        let title = this.page
            ? this.page.title
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedAcademicLibrarianJobs() {
            let allAcademicLibrarianJobs = this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Academic Librarian"
            })
            return allAcademicLibrarianJobs.map((obj) => {
                return {
                    ...obj,
                    text: _get(obj, "text", ""),
                    associatedLocations: obj.associatedLocations.map((entry) => {
                        return {
                            ...entry,
                            uri: `/${entry.uri}`
                        }
                    })
                }
            })
        },
        parsedStaffJobs() {
            let allStaffJobs = this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Staff"
            })
            return allStaffJobs.map((obj) => {
                return {
                    ...obj,
                    text: _get(obj, "text", ""),
                    associatedLocations: obj.associatedLocations.map((entry) => {
                        return {
                            ...entry,
                            uri: `/${entry.uri}`
                        }
                    })
                }
            })
        },
        parsedAssociatedTopics() {
            return this.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-job-opportunities {
    .no-positions {
        @include step-1;
        font-style: italic;
        color: var(--color-primary-blue-05)
    }
}
</style>
