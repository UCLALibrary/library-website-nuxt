<template lang="html">
    <main
        id="main"
        class="page page-student-opportunities"
    >
        <!-- <nav-breadcrumb
            to="/students"
            :title="page.title"
            parent-title="Jobs"
        /> -->
        <h1>STUDENT OPPORTUNITIES</h1>
        <h3>GOOD MORNING</h3>
        <h3>{{ page }}</h3>
        <!-- <hr>
        <h3>{{ allJobs }}</h3> -->

        <!-- <banner-text
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
        </section-wrapper> -->

        <!-- ASSOCIATED LIBRARIAN JOBS -->
        <!-- <section-wrapper
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
        </section-wrapper> -->

        <!-- STAFF JOBS -->
        <!-- <section-wrapper
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
        </section-wrapper> -->

        <!-- ASSOCIATED TOPICS -->
        <!-- <section-wrapper>
            <section-cards-with-illustrations
                v-if="associatedTopics.length > 0"
                :items="associatedTopics"
                section-title="Associated Topics"
                section-summary="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            />
            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper> -->
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
            // allJobs: _get(data, "allJobs", {}),
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
    // computed: {
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
        // parsedStudentJobs() {
        //     // return this.allJobs.filter((obj) => {
        //     //     return obj.jobType[0].title === "Academic Librarian"
        //     // })
        //     let allStudentJobs = this.allJobs.filter((obj) => {
        //         return obj.jobType[0].title === "Student"
        //     })
        //     return allStudentJobs.map((obj, index) => {
        //         return {
        //             ...obj,
        //             to: `/${obj.associatedLocations[index].uri}`,
        //         }
        //     })
        // },
        // parsedInternshipJobs() {
        //     return this.allJobs.filter((obj) => {
        //         return obj.jobType[0].title === "Internship"
        //     })
        // },
        // parsedAssociatedTopics() {
        //     return this.associatedTopics.map((obj) => {
        //         return {
        //             ...obj,
        //             to: `/${obj.uri}`,
        //         }
        //     })
        // }
    // }
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
