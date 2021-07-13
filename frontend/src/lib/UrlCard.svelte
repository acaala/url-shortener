<script>
	export let _id;
	export let short;
	export let full;
</script>

<div class="card mb-2">
	<div class="card-header">url id: {_id}</div>
	<div class="card-body">
		<h5 class="card-title">{short}</h5>
		<p class="card-text">
			{full}
		</p>
		<a href={`/${short}`} class="btn btn-primary">Go</a>
	</div>
</div>
