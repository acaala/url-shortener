<script context="module" lang="ts">
	export async function load({ page, fetch }) {
		const url = `https://coast-url-shorter.herokuapp.com/${page.params.slug}`;

		await fetch(url)
			.then((r) => r.json())
			.then((data) => (window.location.href = data.redirect))
			.catch((err) => console.log(err));
		return {};
	}
</script>

<h1>Redirecting you now!</h1>
