<script>
	export let short;
	export let full;

	const handleDelete = async () => {
		const endpoint = `https://coast-url.herokuapp.com/${short}`;
		fetch(endpoint, {
			method: 'DELETE'
		})
			.then((r) => r.json())
			.then((data) => (window.location.href = '/'));
	};
</script>

<div class="card mb-3 shadow">
	<a class="card-header" href="https://coast-url.netlify.app/{short}">https://coast-url.netlify.app/{short}</a>
	<div class="card-body">
		<h5 class="card-title">{short}</h5>
		<p class="card-text">
			{full}
		</p>
		<a href={`/${short}`} class="btn btn-primary">Go</a>
		<!-- <button on:click={handleDelete} class="btn btn-danger">Delete</button> -->
	</div>
</div>
