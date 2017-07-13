const axios = require('axios');

module.exports = {

	getFixtureByName: function(fixtureName){
		return axios.get(`/api/fixture/${fixtureName}`)
			.then((response) =>{
				console.log(response)
				return response;
			})
			.catch( (err) =>{
				console.error(err);
				throw err;
			})
	},

	validatePatchLength: function(startChannel, patchLength){
			return (startChannel + patchLength > 512);
	},

	createPatch: function(patchFormJSON){
		let fixtureName = patchJSON.fixtureName;
		getFixtureByName(fixtureName)
			.then( (fixtureDoc) =>{
				let patch = {
					fixtureName : fixtureDoc.fixtureName,
					startingChannel: patchFormJSON.startingChannel
				}
				try{
					validatePatchLength(patchFormJSON.startingChannel, fixtureDoc.channelParameters.length);
				} catch (e){
					throw e;
				}
				return axios.post(`api/patch`, patch)
					.then( (response) =>{
						console.log(response);
						return response;
					})
					.catch ( (err) =>{
						console.error(err);
						throw err;
					});
			}
		)
	},


}