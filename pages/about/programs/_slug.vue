<template>
    <div class="page-program-detail">
        <!-- <h3>{{ page }}</h3> -->
        <h2>parsedButtonText  {{page.buttonUrl[0].buttonText}}</h2>
        <nav-breadcrumb
            to="/about/program"
            :title="page.title"
            parent-title="Programs"
        />

        <banner-text
        v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Program"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
            :email="page.email"
            :phone-number="page.phoneNumber"
        />

        <section-wrapper>
            <h3>{{ parsedButtonText }}</h3>
            <block-hours
                v-if="page.id == 38020"
                lid=0
            />
        </section-wrapper>

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                :title="page.title"
                category="Program"
                :locations="page.locations"
                :align-right="true"
                :text="page.text"
                :prompt="parsedButtonText"
                :to="parsedButtonTo"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <!-- <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper> -->

        <!-- <section-wrapper v-if="parsedAssociatedStaffMember.length > 0">
            <h2 class="section-heading">
                Associated Staff Member
            </h2>

            <section-staff-list :items="parsedAssociatedStaffMember" />
        </section-wrapper> -->
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import PROGRAM_DETAIL from "~/gql/queries/ProgramDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(PROGRAM_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedButtonText() {
            return _get(this.page, "buttonUrl[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "buttonUrl[0].buttonUrl", "")
        },
        parsedCliccHours(){
            var week2081 = new $.LibCalWeeklyGrid( $("#s-lc-whw2081"), { iid: 3244, lid: 0, systemTime: false }); 
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.page-program-detail {
/** CLICC HACK **/
.s-lc-whw-loc,
.s-lc-whw-subloc {
display: none;
}

.s-lc-whw-loc-tr-4691,
.s-lc-whw-loc-tr-3291,
.s-lc-whw-loc-tr-4698,
.s-lc-whw-loc-tr-2609,
.s-lc-whw-loc-tr-2607,
.s-lc-whw-loc-tr-2608,
.s-lc-whw-loc-tr-2614,
.s-lc-whw-loc-tr-4705,
.s-lc-whw-loc-tr-4706 {
  display: table-row;
} 
}
</style>
