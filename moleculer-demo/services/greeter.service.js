
const axios = require("axios");

"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler() {
				try{

					const baseurl = "https://api.openweathermap.org";
					const clientID = "b3a423e8db7ac836addc5be83f0e7fd9";
				  	const city = city;
     
					const wheather = await axios.get(`${baseUrl}/data/2.5/weather?q=${city}&appid=${clientID}&lang=tr&units=metric`);
				 const  {weather,main} = wheather.data;
			 
				 const {description} = weather[0];
			 
				   console.log();
				   return 
			 
			 
			   
				 
				 }catch(err){  
					 console.log(err.response);
				   
				 }
			 
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				try{

					const baseurl = "https://api.openweathermap.org";
					const clientID = "b3a423e8db7ac836addc5be83f0e7fd9";
				  	const city = ctx.params.name;
     
					const wheather = await axios.get(`${baseurl}/data/2.5/weather?q=${city}&appid=${clientID}&lang=tr&units=metric`);
				 const  {weather,main} = wheather.data;
			 
				 const {description} = weather[0];
			 
				
				  return "Hissedilen sıcaklık " + main.temp_max + " " + description
			 
			 
			   
				 
				 }catch(err){  
					 console.log(err.response);
				   
				 }
			
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
