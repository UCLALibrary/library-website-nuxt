<template lang="html">
    <main
        id="main"
        class="page page-student-opportunities"
    >
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
            :buttonText="page.buttonUrl[0].buttonText"
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
// Helpers
import _get from "lodash/get"

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
        let title = this.page
            ? this.page.title
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        // TODO The link in the associatedLocations is 
        // /about/jobs/visit/locations/powel-library

        // parsedAssociatedLocations() {
        //     let parsedJobs = this.allJobs.filter((obj) => {
        //         return obj.jobType[0].title === "Academic Librarian"
        //     })
        //     return parsedJobs.map((obj) => {
        //         return 
        //         obj.associatedLocations.uri
                
        //     })
        // },
        parsedStudentJobs() {
            // return this.allJobs.filter((obj) => {
            //     return obj.jobType[0].title === "Academic Librarian"
            // })
            let allStudentJobs = this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Student Job"
            })
            return allStudentJobs.map((obj, index) => {
                return {
                    ...obj,
                    to: `/${obj.associatedLocations[index].uri}`,
                }
            })
        },
        parsedStudentInternships() {
            return this.allJobs.filter((obj) => {
                return obj.jobType[0].title === "Student Internship"
            })
        },
        parsedAssociatedPrograms() {
            return this.page.associatedPrograms.map((obj) => {
                return {
                    ...obj,
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
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
.page-student-opportunities {
    .no-positions {
        @include step-1;
        font-style: italic;
        color: var(--color-primary-blue-05);
    }
}
</style>
