<script lang="ts">
	import { onMount } from 'svelte';
	import UrlCard from '$lib/UrlCard.svelte';
	import Loading from '$lib/Loading.svelte';

	let fullUrl: string;
	let urls = [];
	const url = 'https://coast-url.herokuapp.com/shortUrls';

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
			.then((data) => (window.location.href = data.redirect));
	};

	async function fetchAllUrls() {
		await fetch('https://coast-url.herokuapp.com')
			.then((r) => r.json())
			.then((data) => (urls = data.shortUrls));
	}

	onMount(fetchAllUrls);
</script>

<div class="container text-center mt-5">
	<h1 class="display-6">Enter a url below</h1>
	<div class="d-flex justify-content-center">
		<input placeholder="Url" name="fullUrl" class="form-control" type="url" bind:value={fullUrl} />

		<button class="btn btn-primary" on:click={handleSubmit}>Submit</button>
	</div>
</div>

<div class="container mt-5">
	<h4 class="text-muted">Recently Created Urls</h4>
	{#if urls.length > 0}
		{#each urls as url}
			<UrlCard {...url} />
		{/each}
	{:else}
		<div class="d-flex justify-content-center mt-5">
			<Loading />
		</div>
	{/if}
</div>
