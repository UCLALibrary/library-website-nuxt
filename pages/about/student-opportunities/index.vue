<template lang="html">
    <main
        id="main"
        class="page page-student-opportunities"
    >
        <!-- TODO BROKEN BREADCRUMB  -->
        <nav-breadcrumb
            to="/about"
            :title="page.title"
            parent-title="About"
        />

        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :email="page.email"
            :phone="page.phoneNumber"
            :button-text="page.buttonUrl[0].buttonText"
            :to="page.buttonUrl[0].buttonUrl"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <!-- STUDENT JOBS -->
        <section-wrapper
            section-title="Student Jobs"
        >
            <section-generic-list
                v-if="parsedStudentJobs.length > 0"
                :items="parsedStudentJobs"
            />
            <div
                v-else
                class="no-positions"
            >
                No positions available
            </div>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <!-- STUDENT INTERNSHIPS -->
        <section-wrapper
            section-title="Student Internships"
        >
            <section-generic-list
                v-if="parsedStudentInternships.length > 0"
                :items="parsedStudentInternships"
            />
            <div
                v-else
                class="no-positions"
            >
                No positions available
            </div>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper section-title="Awards, Grants, and Fellowships">
            <section-generic-list
                v-if="parsedAssociatedPrograms.length > 0"
                :items="parsedAssociatedPrograms"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
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
import removeTags from "~/utils/removeTags"

// GQL
import STUDENT_OPPORTUNITIES_LIST from "~/gql/queries/JobStudentOpportunitiesList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(STUDENT_OPPORTUNITIES_LIST)
        return {
            page: _get(data, "entry", {}),
            allJobs: _get(data, "allJobs", {}),
            // associatedTopics: _get(data, "entry.associatedTopics", {}),
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
        parsedStudentJobs() {
            let allStudentJobs = this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Student Job"
            })
            return allStudentJobs.map((obj) => {
                return {
                    ...obj,
                    payRate: _get(obj, "payRate", null),
                    associatedLocations: obj.associatedLocations.map((entry) => {
                        return {
                            ...entry,
                            uri: `/${entry.uri}`
                        }
                    })
                }
            })
        },
        parsedStudentInternships() {
            let allInternships = this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Student Internship"
            })
            return allInternships.map((obj) => {
                return {
                    ...obj,
                    payRate: _get(obj, "payRate", null),
                    associatedLocations: obj.associatedLocations.map((entry) => {
                        return {
                            ...entry,
                            uri: `/${entry.uri}`
                        }
                    })
                }
            })
        },
        parsedAssociatedPrograms() {
            return this.page.associatedPrograms.map((obj) => {
                return {
                    ...obj,
                    jobPostingURL: obj.programUrlBehavior === "externalSite"
                        ? obj.buttonUrl[0].buttonUrl
                        : `/${obj.jobPostingURL}`,
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.to}`,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-student-opportunities {
    .no-positions {
        @include step-1;
        font-style: italic;
        color: var(--color-primary-blue-05);
    }
}
</style>
