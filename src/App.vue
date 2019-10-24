<template>
    <div id="app">
        <Header />
        <Items />
        <ul>
            <li>{{myItems}}</li>
        </ul>
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
