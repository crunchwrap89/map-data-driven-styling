<script setup lang="ts">
import { useMapStyling } from "@/composables/useMapStyling";
import { initMap } from "@/utils/mapUtils";
import { tilesLoaded } from "@/utils/mapUtils";

const {setMapStyling} = useMapStyling();
const map = await initMap("map-mount");
await tilesLoaded(map);
setMapStyling(map);
</script>

<template><div></div></template>
