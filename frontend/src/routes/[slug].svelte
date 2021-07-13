<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const url = `http://localhost:5000/${page.params.slug}`;

		await fetch(url)
			.then((r) => r.json())
			.then((data) => (window.location.href = data.redirect))
			.catch((err) => console.log(err));
		return {};
	}
</script>

<h1>Redirecting you now!</h1>
