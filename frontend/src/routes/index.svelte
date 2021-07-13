<script lang="ts">
	import { onMount } from 'svelte';
	import UrlCard from '$lib/UrlCard.svelte';

	let fullUrl: string;
	let urls = [];
	const url = 'http://localhost:5000/shortUrls';

	const handleSubmit = () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({ fullUrl }),
			headers: {
				'Content-type': 'application/json'
			}
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((res) => (window.location.href = res.redirect));
	};

	async function fetchAllUrls() {
		await fetch('http://localhost:5000/')
			.then((r) => r.json())
			.then((data) => (urls = data.shortUrls));
		console.log(urls);
	}

	onMount(fetchAllUrls);
</script>

<div class="container text-center mt-5">
	<h1 class="display-6">Url Shortner</h1>
	<div class="d-flex justify-content-center">
		<input placeholder="Url" name="fullUrl" class="form-control" type="url" bind:value={fullUrl} />

		<button class="btn btn-primary" on:click={handleSubmit}>Submit</button>
	</div>
</div>

<div class="container mt-5">
	{#if urls.length > 0}
		{#each urls as url}
			<UrlCard {...url} />
		{/each}
	{:else}
		<p>No urls yet..</p>
	{/if}
</div>
