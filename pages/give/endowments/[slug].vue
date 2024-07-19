<script setup>
// COMPONENTS
import { NavBreadcrumb, BannerText, SectionWrapper, RichText, ResponsiveImage, DividerWayFinder, IconWithLink, BlockCallToAction } from 'ucla-library-website-components'

// HELPERS
import _get from 'lodash/get'
import removeTags from '../utils/removeTags'

// GQL
import ENDOWMENT_DETAIL from '../gql/queries/EndowmentDetail.gql'

const { $graphql } = useNuxtApp()

const route = useRoute()

const { data, error } = await useAsyncData(`endowment-detail-${route.params.slug}`, async () => {
  const data = await $graphql.default.request(ENDOWMENT_DETAIL, {
    slug: route.params.slug,
  })

  return data
})

if (error.value) {
  throw createError({
    ...error.value, statusMessage: 'Page not found.' + error.value, fatal: true
  })
}

if (!data.value.entry) {
  // console.log('no data')
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}

if (data.value.entry.slug && import.meta.server) {
  const { $elasticsearchplugin } = useNuxtApp()
  // console.log("elasticsearchplugin", $elasticsearchplugin, data.value.entry.slug)
  data.value.entry.donorNames = parsedDonorsForES(data.value.entry.donors)
  await $elasticsearchplugin?.index(data.value.entry, data.value.entry.slug)
}

const page = ref(_get(data.value, 'entry', {}))
watch(data, (newVal, oldVal) => {
  // console.log('In watch preview enabled, newVal, oldVal', newVal, oldVal)
  page.value = _get(newVal, 'entry', {})
})

useHead({
  title: page.value ? page.value.title : '... loading',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: removeTags(page.value.text)
    },
  ],
})

const parsedDonors = computed(() => {
  if (page.value?.donors && page.value?.donors.length > 0) {
    return computeDonors(page.value.donors)
  } else {
    return ''
  }
})

const parsedAssociatedLocations = computed(() => {
  return page.value.associatedLocations.map((obj) => {
    return {
      ...obj,
      to: `/${obj.uri}`,
    }
  })
})

const parsedSubjectAreaLink = computed(() => {
  if (page.value.subjectAreas[0].title) {
    const searchLibrary = page.value.subjectAreas[0].title
    const libConcat = `/give/endowments/?q=&filters={subjectAreas.title.keyword:['${encodeURIComponent(searchLibrary)}']}`

    // '/give/endowments?q=&filters={\"subjectAreas.title.keyword\":[\"' + encodeURIComponent(searchLibrary) + '\"]}'

    return libConcat
  } else {
    return ''
  }
})

const parsedImage = computed(() => {
  return page.value.heroImage[0].image[0]
})

const catalogLink = computed(() => {
  return `https://search.library.ucla.edu/discovery/search?query=lds04,contains,${page.value.spakCode},AND&tab=LibraryCatalog&search_scope=MyInstitution&vid=01UCS_LAL:UCLA&mode=advanced&offset=0`
})

function parsedDonorsForES(donors) {
  return donors && donors.length > 0 ? computeDonors(donors) : ''
}

function computeDonors(donors) {
  const donorNames = []
  for (const donor of donors) {
    let name = ''
    if (
      donor.firstName &&
      donor.firstName !== '' &&
      (!donor.lastName || donor.lastName === '')
    ) {
      name = donor.firstName
    } else if (
      donor.firstName &&
      donor.firstName !== '' &&
      donor.lastName &&
      donor.lastName !== ''
    ) {
      name = donor.firstName + ' ' + donor.lastName
    } else {
      name = donor.lastName
    }
    if (name !== '') donorNames.push(name)
  }

  if (donorNames.length === 1) {
    return `${donorNames[0]}`
  } else {
    const names = [
      donorNames.slice(0, -1).join(', '),
      donorNames.slice(-1)[0],
    ].join(donorNames.length < 2 ? '' : ' and ')
    return `${names}`
  }
}
</script>

<template>
  <main
    id="main"
    class="page page-endowments-detail"
  >
    <NavBreadcrumb
      to="/give/endowments"
      :title="page.title"
      parent-title="Collection Endowments"
    />

    <BannerText
      :title="page.title"
      :text="page.text"
      :alternative-full-name="(page.alternativeName &&
        page.alternativeName[0] &&
        page.alternativeName[0].fullName) ||
        ''
      "
      :language="(page.alternativeName &&
        page.alternativeName[0] &&
        page.alternativeName[0].languageAltName) ||
        ''
      "
      button-text="Give Now"
      :to="page.to"
    />

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <SectionWrapper>
      <div class="description-with-image">
        <div class="description">
          <RichText
            v-if="page.donors[0].lastName"
            class="donors"
          >
            Made possible by a gift from {{ parsedDonors }}
          </RichText>

          <IconWithLink
            v-if="page.subjectAreas[0]"
            class="subject-area"
            icon-name="svg-icon-book"
            :text="page.subjectAreas[0].title"
            :to="parsedSubjectAreaLink"
          />

          <ul v-if="parsedAssociatedLocations.length > 0">
            <li
              v-for="(
                location, index
              ) in parsedAssociatedLocations"
              :key="`AssociatedLocation-${location}-${index}`"
            >
              <IconWithLink
                class="associated-locations"
                icon-name="svg-icon-location"
                :text="location.title"
                :to="location.to"
              />
            </li>
          </ul>

          <RichText
            v-if="page.endowmentDescription"
            class="description-text"
            :rich-text-content="page.endowmentDescription"
          />
          <NuxtLink
            v-if="page.spakCode"
            class="catalog-link"
            :to="catalogLink"
          >
            See all items purchased through this Endowment
          </NuxtLink>
        </div>

        <ResponsiveImage
          v-if="page.heroImage.length > 0"
          :media="parsedImage"
          class="bookplate"
        />
      </div>
    </SectionWrapper>

    <SectionWrapper theme="divider">
      <DividerWayFinder
        class="divider"
        color="about"
      />
    </SectionWrapper>

    <SectionWrapper>
      <BlockCallToAction
        svg-name="svg-call-to-action-money"
        title="Give to this endowment"
        text="Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public."
        name="Donate"
        :to="page.to"
      />
    </SectionWrapper>
  </main>
</template>

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
    display: flex;
    flex-flow: column;
    gap: 4px;

    ul {
      list-style: none;
    }

    .description-text {
      padding-right: 0;
      margin: 20px 0;
    }
  }

  .donors {
    @include step-1;
    color: var(--color-primary-blue-03);
    margin-bottom: 12px;
    margin-left: 0;
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
