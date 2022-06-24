// Storybook default settings
export default {
    title: "FLEXIBLE / Form",
}

const mock = {
    "id": "20792",
    "form": '<div id=\"form_95580ed5e8d04c56e4afbf9e91781b28\"></div><script type=\"text/javascript\" src=\"https://ucla.libwizard.com/form_loader.php?id=95580ed5e8d04c56e4afbf9e91781b28&noheader=0\"></script>',
}

// Variations of stories below
// export const Default = () => ({
//     data() {
//         return {
//             items: {
//                 ...mock,
//             }
//         }
//     },
//     template: `<flexible-form :items="items" />`,
// })


export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
            },
        }
    },
    template: `<flexible-form
        :form = "<div id=\"form_95580ed5e8d04c56e4afbf9e91781b28\"></div><script type=\"text/javascript\" src=\"https://ucla.libwizard.com/form_loader.php?id=95580ed5e8d04c56e4afbf9e91781b28&noheader=0\"></script>"
    />`,
})

export const Form2 = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<flexible-form
    :form = 'form'
    />`,
})
