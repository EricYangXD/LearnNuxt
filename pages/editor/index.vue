<!--
 * @Author: Eric YangXinde
 * @Date: 2020-10-12 14:59:37
 * @LastModifiedBy: Eric YangXinde
 * @LastEditTime: 2020-10-13 18:26:28
 * @Description: 
-->
<template>
	<div class="editor-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-10 offset-md-1 col-xs-12">
					<form>
						<fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control form-control-lg"
									placeholder="Article Title"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="What's this article about?"
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									class="form-control"
									rows="8"
									placeholder="Write your article (in markdown)"
								></textarea>
							</fieldset>
							<fieldset class="form-group">
								<input
									type="text"
									class="form-control"
									placeholder="Enter tags"
								/>
								<div class="tag-list"></div>
							</fieldset>
							<button
								class="btn btn-lg pull-xs-right btn-primary"
								type="button"
							>
								Publish Article
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 在路由匹配组件渲染之前会先执行中间件处理逻辑
	middleware: "auth",
	name: "",
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
