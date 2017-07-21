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
	},
	getChannelParameters: function(){
		return axios.get('/api/channels').then(function(results){
        	return results;
    	});
	},

	generateLiveView: function(patchData, callback){
		var liveDmx= [];

		// Iterates over patched fixtures, pushing them to the live DMX array
		for (var i = 0; i < patchData.length; i++) {
			var startingChannel = patchData[i].startingChannel;
			var channelParameters = patchData[i].channelParameters;

			// If a patch starting number does not match the current length of the array, nulls are added to help only render used channels
			while (liveDmx.length + 1 < startingChannel) { 
				liveDmx.push(null);
			}

			// Pushing all of the default channel infor into the live array.
			for (var j = liveDmx.length; j < (startingChannel + channelParameters.length) - 1; j++) {
				// Shifting channels down to compensate for the starting channel
				var channel = channelParameters[j - startingChannel + 1].default;
				// Pushing the default value to the array
				liveDmx[j] = channel;
			}
		}
		
		// returns the data and runs the callback function (in most cases a Socket.io call)
		return callback(liveDmx);
	},

	reloadSlickSlider:function(){
		$('.slick-slider').slick('unslick');
		this.startSlickSlider();		
	},

	startSlickSlider: function(){
		$(".slick-slider").slick({
            variableWidth: true,
            dots: true,
            centerMode: true,
            centerPadding: "40px",
            infinite: false
		});
		console.log('Slider loaded');
	}


}
