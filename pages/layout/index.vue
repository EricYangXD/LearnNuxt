<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:06:23
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-12 16:46:05
 * @Description: 
-->
<template>
	<div id="layout">
		<nav class="navbar navbar-light">
			<div class="container">
				<!-- <a class="navbar-brand" href="index.html">conduit</a> -->
				<nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>

				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						<!-- Add "active" class when you're on that page" -->
						<!-- <a class="nav-link active" href="">Home</a> -->
						<nuxt-link class="nav-link" to="/" exact
							>Home</nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/editor">
							<i class="ion-compose"></i>&nbsp;New Post
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/settings">
							<i class="ion-gear-a"></i>&nbsp;Settings
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" to="/register"
							>Sign up</nuxt-link
						>
					</li>
					<li class="nav-item">
						<!-- <li class="nav-item" v-if="isLogin"> -->
						<nuxt-link to="/profile/:username" class="nav-link">
							<img
								class="user-pic"
								src="http://i.imgur.com/Qr71crq.jpg"
							/>
							EricYangXD
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>

		<!-- 子路由 -->
		<nuxt-child />
		<!-- 子路由 -->

		<footer>
			<div class="container">
				<nuxt-link to="/" class="logo-font">conduit</nuxt-link>
				<span class="attribution">
					An interactive learning project from
					<a href="https://thinkster.io">Thinkster</a>. Code &amp;
					design licensed under MIT.
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: "LayoutIndex",
	data() {
		return {};
	},
	methods: {},
	components: {},
	//created: {

	//},
	mounted() {},
	beforeDestroy() {},
	watch: {},
	computed: {},
};
</script>

<style lang="less" scoped></style>
