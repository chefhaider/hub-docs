import type { TaskDataCustom } from "../Types";

const taskData: TaskDataCustom = {
	datasets: [],
	demo: {
		inputs: [
			{
				filename: "depth-estimation-input.jpg",
				type:     "img",
			},
		],
		outputs: [
			{
				filename: "depth-estimation-output.png",
				type:     "img",
			},
		],
	},
	metrics: [],
	models: [
		{
			// TO DO: write description
			description: "Strong Depth Estimation model trained on 1.4 million images.",
			id:          "Intel/dpt-large",
		},
		{
			// TO DO: write description
			description: "Strong Depth Estimation model trained on the KITTI dataset.",
			id:          "vinvino02/glpn-kitti",
		},
	],
	summary:      "Depth estimation is the task of predicting depth of the objects present in an image.",
	widgetModels: [""],
	youtubeId:    "",
};

export default taskData;
