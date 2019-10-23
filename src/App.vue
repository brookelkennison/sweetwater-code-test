<template>
    <div id="app">
        <Header />
        <Items />
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Items from "@/components/Items";
    import Footer from "@/components/Footer";

    export default {
        name: "App",
        components: {
            Header,
            Items,
            Footer
        }
    };
</script>
