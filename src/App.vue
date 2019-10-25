<template>
    <div id="app">
        <Header />
        <Items />
        <div id="example">
            <h5>{{myItems[0].image}}</h5>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Items from "./components/Items";
    import items from "../public/items.json";

    export default {
        name: "App",
        data(){
            return{
                myItems: items
            }
        },
        components: {
            Header,
            Items
        }
    }

</script>
