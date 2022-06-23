<template lang="html">
    <section class="section-teaser-highlight">
        <block-highlight
            v-for="item in parsedItems"
            :key="item.to"
            :to="item.to"
            :image="item.image[0].image[0]"
            :category="item.category"
            :title="item.title"
            :start-date="item.date[0].startDate"
            :end-date="item.date[0].endDate"
            :locations="item.associatedLocations"
            :text="item.text"
            :has-triangle="true"
            :is-vertical="true"
            class="block"
        />
    </section>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedItems() {
            let items = []
            for (let item in this.block.highlight) {
                items.push(this.block.highlight[item].contentLink[0])
            }
            return items
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
    padding: 0 calc(var(--unit-gutter) - 16px);
    background-color: var(--color-white);
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        width: calc(50% - 16px);
        margin: 0 8px 50px 8px;
    }

    // Breakpoints
    @media #{$small} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}

// "highlight": [
//             {
//               "id": "21244",
//               "uri": null,
//               "typeHandle": "highlight",
//               "title": null,
//               "summary": "Arizona has two native species of tortoise, the Sonoran desert tortoise, Gopherus morafkai; and the Mojave desert tortoise",
//               "location": [
//                 {
//                   "title": "UCLA Film & Television Archive",
//                   "uri": "visit/locations/film-television-archive"
//                 }
//               ],
//               "image": [
//                 {
//                   "id": "21241",
//                   "src": "https://static.library.ucla.edu/craftassetstest/_fullscreen/somoran-desert-tortoise.jpg",
//                   "height": 1600,
//                   "width": 2560,
//                   "srcset": "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/somoran-desert-tortoise.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/somoran-desert-tortoise.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/somoran-desert-tortoise.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/somoran-desert-tortoise.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/somoran-desert-tortoise.jpg 2560w",
//                   "alt": "Sonoran desert tortoise",
//                   "focalPoint": [
//                     0.5,
//                     0.5
//                   ]
//                 }
//               ],
//               "dateOrAuthor": "Jen Diamond",
//               "articleEventOrExhibit": []
//             },
//             {
//               "id": "21245",
//               "uri": null,
//               "typeHandle": "highlight",
//               "title": null,
//               "summary": "Desert tortoises live in desert valleys between about 1,000 and 4,000 feet in elevation.",
//               "location": [
//                 {
//                   "title": "Richard C. Rudolph East Asian Library",
//                   "uri": "visit/locations/east-asian-library"
//                 }
//               ],
//               "image": [
//                 {
//                   "id": "21242",
//                   "src": "https://static.library.ucla.edu/craftassetstest/_fullscreen/desert-tortoise-2.jpg",
//                   "height": 1920,
//                   "width": 2560,
//                   "srcset": "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/desert-tortoise-2.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/desert-tortoise-2.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/desert-tortoise-2.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/desert-tortoise-2.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/desert-tortoise-2.jpg 2560w",
//                   "alt": "Desert tortoise 2",
//                   "focalPoint": [
//                     0.5,
//                     0.5
//                   ]
//                 }
//               ],
//               "dateOrAuthor": "August 13. 2022",
//               "articleEventOrExhibit": [
//                 {
//                   "title": "Getting Started With Research - 03/31/22"
//                 }
//               ]
//             }
//           ]
//         }
//       ]

</style>
