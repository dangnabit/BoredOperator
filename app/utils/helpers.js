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
				return axios.post(`/api/patch`, patch)
					.then( (response) =>{
						console.log(`POST api/patch ${response}`);
						return response;
					})
					.catch ( (err) =>{
						console.error(err);
						throw err;
					});
			})
			.catch( (error) =>{
				console.error(error);
				throw error;
			});
	},


	createCue: function(cueForm){
		console.log(`Create Cue`);
		return axios.post('/api/cues', cueForm).then( (response) =>{
			console.log(`Sucessfully created cue`);
			return response;
		})
		.catch( (err) =>{
			console.error(err);
			throw err;
		})
	},

	getCues: function(){
		return axios.get('/api/cues').then(function(results){
        	return results;
    	});
	},

	getPatch: function(){
		return axios.get('/api/patch').then(function(results){
        	return results;
    	});
	},
	getFixtures: function(){
		return axios.get('/api/fixtures').then(function(results){
        	return results;
    	});
	}

}
