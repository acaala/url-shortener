<div class="loading2"><i /><i /></div>

<style>
	.loading2 i {
		width: 25px;
		height: 25px;
		display: inline-block;
		background: #ff5954;
		border-radius: 50%;
	}
	.loading2 i:nth-child(1) {
		animation: loading2-ani1 1s ease-in-out infinite;
	}
	.loading2 i:nth-child(2) {
		background: #00a8ce;
		margin-left: -10px;
		animation: loading2-ani1 1s ease-in-out 0.5s infinite;
	}
	@keyframes loading2-ani1 {
		70% {
			transform: scale(0.5);
		}
	}
</style>
