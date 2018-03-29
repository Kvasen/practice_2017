Vue.component('temp1', {    //模版
	template: '<p>hello</p>',
	props: [],
	data: function() {
		
	},
	methods: {

	},
	mounted: function() { //挂载完毕
		
	}
})

var app = new Vue({
	el: "span",
	data: {},
	methods: {},
	computed: {
		sum: function() {}, //可以缓存结果
	}
});