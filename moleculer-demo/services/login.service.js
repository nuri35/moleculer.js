"use strict";


const authcontrol = require("./api.service")
const MyAuthMixin = require("./../mixins/auth.mixin");
//desturctıon


 const {methods} = authcontrol;
	
			


/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	
	name: "login",
	



	settings: {
		
		fields: [
			
			"name",
			"password",
			
		],

		

	},


	actions: {
		
	
		login: {
			rest: "/login",
			params: {
				name: "string",
				password: "string"
			},
			async handler(ctx) {

				methods.authenticate(ctx)
			
			}
		},


	
	},


};