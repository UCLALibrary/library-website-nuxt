// Import mock api data
import * as API from "~/stories/mock-api.json";

export default {
  title: "Banner Featured",
};

const mock = {
  image: API.image,
  to: "/visit/foo/bar/",
  title: "New Director of Film and Television Archive",
  category: "Featured",
  breadcrumb: { text: "Title", to: "http://fake.url" },
  dates: " July 1, 2020 - December 31, 2021",
  isOnline: "true",
};

export const Default = () => ({
  data() {
    return {
      ...mock,
    };
  },
  template: `<banner-featured
   :image="image"
   :to="to"
   :title="title"
   :category="category"
   :breadcrumb="breadcrumb"
   :dates="dates"
   :isOnline="isOline"
  /> `,
});
