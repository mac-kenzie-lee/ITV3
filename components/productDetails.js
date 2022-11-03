app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
template: 

    /*html*/
    `
    <p>Details on item</p>
    <ul>
    <li v-for='detail in details'>{{ detail }}</li>
    </ul>`



} )