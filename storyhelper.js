let vinst = new Vue({
	el: '#app',
	data: {
			fibs: [1,2,3,5,8,13,21],					// Fibonacci numbers. No danger of going above 21.
			selectedTopicType: 0.5,
			optionsTopicType: [
				{text: 'Updated (revised)', value: 0.5},
				{text: 'New (revised)', value: 0.75},
				{text: 'Updated (added)', value: 1.0},
				{text: 'New (added)', value: 1.25}
			],
			selectedContentComplexity: 1,
			optionsContentComplexity: [
				{text: 'Low', value: 1},
				{text: 'Medium', value: 1.25},
				{text: 'High', value: 1.5},
			],
			selectedRisk: 1,
			optionsRisk: [
				{text: 'Low', value: 1},
				{text: 'Medium', value: 1.25},
				{text: 'High', value: 1.5},
			],
			selectedFormattingComplexity: 1,
			optionsFormattingComplexity: [
				{text: 'Low', value: 1},
				{text: 'Medium', value: 1.25},
				{text: 'High', value: 1.5},
			],
			selectedGraphics: 0.75,
			optionsGraphics: [
			    {text: 'Low', value: 0.75},
			    {text: 'Medium', value: 1},
			    {text: 'High', value: 1.25},
		    ],
		    selectedReview: 1,
		    optionsReview: [
			    {text: 'Peer', value: 1},
			    {text: 'Technical', value: 1.25},
			  	{text: 'Stakeholder', value: 1.5},
		    ],
		   },
	computed: {
			pointsTotal: function() {
				return this.selectedContentComplexity * this.selectedTopicType * this.selectedRisk * this.selectedFormattingComplexity * this.selectedGraphics * this.selectedReview;
			},
			nextFib: function() {
				for (let i = 0; i < this.fibs.length; i++) {
					if (this.pointsTotal <= this.fibs[i]) {
						return this.fibs[i];
					}
				}
			}
	},
	methods: {
	 			changeGreeting: function(event) {
				this.greeting = event.target.value;
			 }
			}
	}
)