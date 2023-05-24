<!--
App Landing Page

As a club organizer, I want to be able to register my football club and create a shareable link for members to join, so that I can easily manage attendance and organization of our weekly games.
-->

<script>
// Gray 80 theme
import "carbon-components-svelte/css/g80.css";
import { Button } from "carbon-components-svelte";

import { auth } from '$lib/firebase';
import { userStore } from 'sveltefire';
const user = userStore(auth);

</script>

<svelte:head>
    <title>Verein - Your Club, Organized</title>
    <meta name="description" content="Manage attendance for your sports club.">
</svelte:head>

<!-- Carbon-based form to enter club name and get the link -->

Hello {$user?.uid}

Easy Club Registration: Create a club in seconds and share a unique link with members.
