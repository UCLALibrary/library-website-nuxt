<script setup>
import { mock as mockMediaWithText } from '../data/mock/BlockMediaWithText.js'
import * as MEDIA from '../data/mock/Media.js'
import { mockBlockToAction, mockItemsBlockCallToActionTwoUp, mockSearchResult } from '../data/mock/mock.js'

const richTextContent = computed(() => {
  return '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://static.library.ucla.edu/craftassetstest/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3><a href="http://google.com/" target="_blank" rel="noreferrer noopener">This is an <strong>EXTERNAL link</strong></a></h3><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw" target="_blank">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>'
})
const title = 'Dropio, heroku'
const text
  = 'Napster mozy sococo orkut <a href=\'http://google.com/\'>convore scribd napster</a>, twones diigo joukuu weebly. <i>Sclipo jibjab scribd</i>.'
const textLong
  = 'Greplin prezi zillow zoosk orkut, zoosk gooru. Kiko xobni joukuu ideeli bitly joukuu, squidoo heroku hulu sifteo, zooomr jumo dropio chumby. Qeyno wikia oooooc jajah, ebay qeyno lala, jajah lijit. Etsy wufoo flickr movity sclipo heroku, oooooc etsy oooooc. Vimeo foodzie zoosk ebay, wesabe. Ebay doostang vuvox, xobni. Mozy joyent dropio gooru kippt, greplin skype. Kiko napster geni dogster yoono yammer disqus, hipmunk xobni odeo zynga loopt. Groupon klout divvyshot zinch elgg yoono airbnb, orkut zinch chartly squidoo.'
const sectionTitle = 'Section Title'
const sectionSummary = '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'

const propsForMediaWithText = {
  sectionHeader: mockMediaWithText.mediaWithText[0].titleLink,
  shortDescription: mockMediaWithText.mediaWithText[0].description,
  buttonText: mockMediaWithText.mediaWithText[0].buttonText,
  buttonUrl: mockMediaWithText.mediaWithText[0].buttonUrl,
  mediaLink: mockMediaWithText.mediaWithText[0].linkToMedia,
  item: mockMediaWithText.mediaWithText[0].coverImage,
  typeMedia: mockMediaWithText.mediaWithText[0].typeMedia,
}
const itemVideo = MEDIA.VideoFile
const coverImage = MEDIA.VideoFileCoverImage
const mockStaff = {
  subjectArea: 'African American Studies',
  nameFirst: 'Ariane',
  nameLast: 'Bicho',
  to: '/about/staff/ariane-bicho',
  staffName: 'Ariane Bicho 娘の洋子より',
  image: null,

  jobTitle: 'Director of Communications and Marketing',
  departments: [
    {
      id: '7272',
      title: 'Communications',
    },
    {
      id: '7373',
      title: 'Marketing',
    },
  ],
  alternativeName: [
    {
      fullName: '娘の洋子より',
      languageAltName: 'zh',
    },
  ],
  uri: 'about/staff/ariane-bicho',
  phone: '(222) 444-5555',
  email: 'abicho@library.ucla.edu',
  consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
  academicDepartments: [
    {
      id: '11947',
      title: 'African American Studies',
    },
    {
      id: '11955',
      title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
    },
  ],
  locations: [
    {
      title: 'DIIT',
      to: 'location/bar',
    },
  ],
}

const mockStaff2 = {
  title: 'Humanities and Social Sciences Librarian',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  text:
    '<p><span>The UCLA Library seeks a highly collaborative, user-focused professional for the position of Humanities and Social Sciences Librarian. The incumbent will join a multi-location, cross disciplinary team that supports teaching and all levels of research in the humanities and social sciences. </span><span>Note: Two positions are being filled.</span><br /></p>',
  jobType: [
    {
      title: 'Academic Librarian',
    },
  ],
  jobRequisitionNumber: 'JPF08053',
  jobPostingURL: 'https://recruit.apo.ucla.edu/JPF08053',
  department: [
    {
      title: 'User Engagement',
    },
    {
      title: 'Human Resources',
    },
  ],
  associatedLocations: [
    {
      title: 'UCLA Film & Television Archive',
      uri: 'visit/locations/film-television-archive',
    },
    {
      title: 'Powell Library',
      uri: 'visit/locations/powell-library',
    },
  ],
}
const amenities = [
  'icon-clock',
  'icon-accessible',
  'icon-chair',
  'icon-virtual',
  'icon-laptop',
  'icon-locker',
  'icon-light',
  'icon-share-printer',
  'icon-book',
]
</script>

<template>
  <div class="components">
    <hr>
    <h2>DividerGeneral Component</h2>
    <DividerGeneral />
    <DividerGeneral :is-bold="true" />
    <hr>
    <h2>DividerWayFinder Component</h2>
    <DividerWayFinder color="visit" />
    <hr>
    <h2>RichText Component</h2>
    <rich-text :rich-text-content="richTextContent" />
    <hr>
    <h2>SiteNotificationAlert Component</h2>
    <site-notification-alert :title="title" :text="text" />
    <site-notification-alert :title="title" :text="textLong" />
    <hr>
    <h2>ButtonLink Component</h2>
    <button-link label="Etiam et Ultrices" :is-secondary="true" to="/help/more" />
    <br>
    <br>

    <button-link label="Egest perl Conub" to="/help/more" />
    <br>
    <br>
    <button-link label="Etiam et Ultrices" :is-secondary="true" :is-download="true"
      to="https://calendar.library.ucla.edu/" />
    <br>
    <br>
    <button-link label="Etiam et Ultrices" :is-secondary="true" to="https://calendar.library.ucla.edu/" />
    <br>
    <br>
    <hr>
    <br>
    <button-hide />
    <br>
    <hr>
    <br>
    <h2> Section Wrapper component</h2>
    <br>
    <section-wrapper :section-title="sectionTitle" :section-summary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    <hr>
    <br>
    <h2> BlockMediaWithText</h2>
    <br>
    <block-media-with-text :section-header="mockMediaWithText.mediaWithText[0].titleLink"
      :short-description="mockMediaWithText.mediaWithText[0].description"
      :button-text="mockMediaWithText.mediaWithText[0].buttonText"
      :button-url="mockMediaWithText.mediaWithText[0].buttonUrl" :item="itemVideo" :cover-image="coverImage"
      type-media="video" />
    <br>
    <br>
    <h2>AlphabeticalBrowseBy Component</h2>
    <br>
    <AlphabeticalBrowseBy />
    <br>
    <AlphabeticalBrowseBy selected-letter-prop="A" />
    <hr>
    <br>
    <h2>SearchResult Component</h2>
    <br>
    <SearchResult :category="mockSearchResult.category" :title="mockSearchResult.title"
      :summary="mockSearchResult.summary" :to="mockSearchResult.to" />
    <br>
    <hr>
    <br>
    <h2>SingleCheckbox Component</h2>
    <br>
    <SingleCheckbox />
    <br>
    <hr>
    <br>
    <h2>BlockCallToAction Component</h2>
    <br>
    <BlockCallToAction :svg-name="mockBlockToAction.svgName" :title="mockBlockToAction.title"
      :text="mockBlockToAction.text" :name="mockBlockToAction.name" :to="mockBlockToAction.to" :is-dark="false"
      :is-small-size="false" />
    <br>
    <BlockCallToAction svg-name="svg-call-to-action-money" :title="mockBlockToAction.title" :text="mockBlockToAction.text"
      :name="mockBlockToAction.name" :to="mockBlockToAction.to" :is-small-size="true" :is-dark="true" />
    <br>
    <hr>
    <br>
    <h2>BlockCallToActionTwoUp Component</h2>
    <BlockCallToActionTwoUp :items="mockItemsBlockCallToActionTwoUp" />
    <hr>
    <br>
    <br>
    <h2>BlockStaffSubjectLibrarian Component</h2>
    <table>
      <tbody>
        <BlockStaffSubjectLibrarian v-bind="mockStaff" />
      </tbody>
    </table>
    <br>
    <hr>
    <br>
    <h2>BlockGenericList Component</h2>
    <ul>
      <BlockGenericList v-bind="mockStaff2" />
    </ul>
    <br>
    <hr>
    <br>
    <block-amenities :amenities="amenities" />
    <br>
    <br>
  </div>
</template>

<style scoped>
div.components,
ul,
li,
div,
table {
  margin: 20px;
}
</style>
