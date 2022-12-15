<template>
    <main
        id="main"
        class="page page-endowments-detail"
    >
        <nav-breadcrumb
            to="/give/endowments"
            :title="page.title"
            parent-title="Endowments"
        />

        <banner-text
            :title="page.title"
            :text="page.text"
            button-text="Give Now"
            :to="page.to"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <div class="description-with-image">
                <div class="description">
                    <rich-text
                        v-if="page.donors[0].lastName"
                        class="donors"
                    >
                        Made possible by a gift from {{ parsedDonors }}
                    </rich-text>
                    <icon-with-link
                        v-if="page.subjectAreas[0]"
                        class="subject-area"
                        icon-name="svg-icon-book"
                        :text="page.subjectAreas[0].title"
                        to="/give"
                    />
                    <rich-text
                        class="description-text"
                        :rich-text-content="page.endowmentDescription"
                    />
                    <smart-link
                        v-if="page.spakCode"
                        class="catalog-link"
                        :to="catalogLink"
                    >
                        See all items purchased through this Endowment
                    </smart-link>
                </div>

                <img
                    v-if="page.heroImage.length > 0"
                    :src="parsedImage.src"
                    :alt="parsedImage.alt"
                    class="bookplate"
                >
            </div>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                svg-name="svg-call-to-action-money"
                title="Give to this endowment"
                text="Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public."
                name="Donate"
                :to="page.to"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import ENDOWMENT_DETAIL from "~/gql/queries/EndowmentDetail"

function parsedDonorsForES(donors) {
    if (donors && donors.length > 0) {
        computeDonors(donors)
    } else {
        return ""
    }
}
function computeDonors(donors) {
    let donorNames = []
    for (let donor of donors) {
        let name = ""
        if (
            donor.firstName &&
            donor.firstName !== "" &&
            (!donor.lastName || donor.lastName === "")
        ) {
            name = donor.firstName
        } else if (
            donor.firstName &&
            donor.firstName !== "" &&
            donor.lastName &&
            donor.lastName !== ""
        ) {
            name = donor.firstName + " " + donor.lastName
        } else {
            name = donor.lastName
        }
        if (name !== "") donorNames.push(name)
    }

    if (donorNames.length == 1) {
        return `${donorNames[0]}`
    } else {
        let names = [
            donorNames.slice(0, -1).join(", "),
            donorNames.slice(-1)[0],
        ].join(donorNames.length < 2 ? "" : " and ")
        return `${names}`
    }
}

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error, app }) {
        const data = await $graphql.default.request(ENDOWMENT_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: "Page not found" })
        }

        if (data && data.entry) {
            console.log(
                "Endowment detail page: slug: " +
                    data.entry.slug +
                    "Now uri:" +
                    data.entry.uri
            )
            data.entry.donorNames = parsedDonorsForES(data.entry.donors)
            await $elasticsearchplugin.index(data.entry, params.slug)
        }

        return {
            page: _get(data, "entry", {}),
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
        parsedDonors() {
            if (this.page.donors && this.page.donors.length > 0) {
                return computeDonors(this.page.donors)
            } else {
                return ""
            }
        },
        parsedImage() {
            return this.page.heroImage[0].image[0]
        },
        catalogLink() {
            return `https://search.library.ucla.edu/discovery/search?query=lds04,contains,${this.page.spakCode},AND&tab=LibraryCatalog&search_scope=MyInstitution&vid=01UCS_LAL:UCLA&mode=advanced&offset=0`
        },
    },
}
</script>

<style lang="scss" scoped>
.page-endowments-detail {
    .description-with-image {
        max-width: $container-l-main + px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 32px;
        flex-wrap: wrap;

        .bookplate {
            width: 300px;
            height: auto;
            object-fit: contain;
            align-self: start;
        }
    }

    .description {
        max-width: 596px;

        .description-text {
            padding-right: 0;
        }
    }

    .donors {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: 12px;
    }

    .subject-area,
    .description-text {
        margin-bottom: 20px;
    }

    .catalog-link {
        font-family: var(--font-secodary);
        font-size: 20px;
        @include link-default;
        text-decoration: none;

        &:hover {
            @include link-hover;
        }

        &::after {
            content: "";
            width: 22px;
            height: 22px;
            margin-left: 4px;
            line-height: 1;
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMiAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3ZnX19pY29uLWV4dGVybmFsLWxpbmsiPgogIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgICA8cGF0aCBkPSJtMTEuODc4IDE5LjU2NzEgOS41NDE0LTkuNTQxNSIgc3Ryb2tlPSIjMEI2QUI3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIKICAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9InN2Z19fc3Ryb2tlLS1wcmltYXJ5LWJsdWUtMDMiIC8+CiAgICA8cGF0aAogICAgICBkPSJNMjIuNzA5MiAxOS41NjY3di43NWgtMS41di0uNzVoMS41Wm0tLjc1LTEwLjA4MTU5di0uNzVoLjc1di43NWgtLjc1Wm0tMTAuMDgxNS43NDk5OWgtLjc1VjguNzM1MTFoLjc1djEuNDk5OTlabTkuMzMxNSA5LjMzMTZWOS40ODUxMWgxLjVWMTkuNTY2N2gtMS41Wm0uNzUtOS4zMzE2SDExLjg3NzdWOC43MzUxMWgxMC4wODE1djEuNDk5OTlaIgogICAgICBmaWxsPSIjMEI2QUI3IiBjbGFzcz0ic3ZnX19maWxsLS1wcmltYXJ5LWJsdWUtMDMiIC8+CiAgICA8cGF0aCBkPSJNNyAyNS40NzQ0aDE0LjI4NTciIHN0cm9rZT0iIzBBQTVGRiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGNsYXNzPSJzdmdfX3N0cm9rZS0tZGVmYXVsdC1jeWFuLTAzIiAvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDMyIDApIiBkPSJNMCAwaDMydjMyLjg2NDRIMHoiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: middle;
            display: inline-block;
        }
    }

    @media #{$medium} {
        .description {
            max-width: 100%;
        }
    }
}
</style>
