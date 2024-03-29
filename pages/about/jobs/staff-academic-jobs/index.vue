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
                No positions available at this time
            </div>
        </section-wrapper>

        <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider"
                    color="about"
                />
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
                No positions available at this time
            </div>
        </section-wrapper>
        <section-wrapper theme="divider" v-if="parsedAssociatedTopics.length > 0">
                <divider-way-finder
                    class="divider"
                    color="about"
                />
            </section-wrapper>

        <!-- ASSOCIATED TOPICS -->
        <section-wrapper>
            <section-cards-with-illustrations
                v-if="parsedAssociatedTopics.length > 0"
                :items="parsedAssociatedTopics"
                section-title="Associated Topics"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import fixUri from "~/utils/fixUri"
import removeTags from "~/utils/removeTags"

// GQL
import JOB_OPPORTUNITIES_LIST from "~/gql/queries/JobOpportunitiesList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(JOB_OPPORTUNITIES_LIST)
        return {
            page: _get(data, "entry", {}),
            //associatedTopics: _get(data, "entry.associatedTopics", {}),
            allJobs: _get(data, "allJobs", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
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
                            uri: fixUri(entry.uri),
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
                    payRate: _get(obj, "payRate", null),
                    text: _get(obj, "text", ""),
                    associatedLocations: obj.associatedLocations.map((entry) => {
                        return {
                            ...entry,
                            uri: fixUri(entry.uri),
                        }
                    })
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
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
