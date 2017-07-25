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
		let fixtureName = patchFormJSON.fixtureName;

		return axios.post(`/api/patch`, patchFormJSON)
			.then( (response) =>{
				console.log(`POST api/patch ${response}`);
				return response;
			})
			.catch ( (err) =>{
				console.error(err);
				throw err;
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

	createFixture: function(fixtureForm){
		console.log(`Create Fixture`);
		return axios.post('/api/fixtures', fixtureForm).then( (response) =>{
			console.log(`Sucessfully created fixture`);
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

	deleteCue: function(cueNumber, callback){
		return axios.delete('/api/cues/' + cueNumber).then(function(results){
			callback();
			return results;
    	});
	},

	getPatch: function(){
		return axios.get('/api/patch').then(function(results){
        	return results;
    	});
	},

	deletePatch: function(patch, callback){
		return axios.delete('/api/patch/' + patch).then(function(results){
			callback();
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
		$('#patch-slider').slick('unslick');
		// this.startSlickSlider();		
	},

	startSlickSlider: function(){
		$("#patch-slider").slick({
            variableWidth: true,
            dots: true,
            centerMode: true,
            centerPadding: "40px",
            infinite: false
		});
		// console.log('Slider loaded');
	},

	tooltipHelper: function(){
		$('[data-toggle="tooltip"]').tooltip();
	}


}
