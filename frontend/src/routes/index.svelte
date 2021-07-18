<script lang="ts">
	import { onMount } from 'svelte';
	import UrlCard from '$lib/UrlCard.svelte';

	let fullUrl: string;
	let urls = [];
	const url = 'https://coast-url-shorter.herokuapp.com/shortUrls';
	let resData = {
		redirect: '',
		alert: ''
	};

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
			.then((data) => (resData = data))
			.then(() => checkUrl());
	};

	const checkUrl = () => {
		if (resData.alert != '') {
			window.alert(resData.alert);
		} else {
			window.location.href = resData.redirect;
		}
	};

	async function fetchAllUrls() {
		await fetch('https://coast-url-shorter.herokuapp.com')
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
	{#if urls.length > 0}
		{#each urls as url}
			<UrlCard {...url} />
		{/each}
	{:else}
		<p>No urls yet..</p>
	{/if}
</div>
