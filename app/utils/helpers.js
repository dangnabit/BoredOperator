var axios = require("axios");

module.exports = {
  getFixtureByName: function(fixtureName) {
	"use strict";
    console.log("In GET FIXTURE function", fixtureName);
    return axios
      .get("/api/fixture/" + fixtureName)
      .then(function(response){
        console.log(response);
        return response;
      })
      .catch(function(err) {
        console.error(err);
        throw err;
      });
  },

  validatePatchLength: function(startChannel, patchLength) {
	"use strict";
    return startChannel + patchLength > 512;
  },

  createPatch: function(patchFormJSON) {
	"use strict";
    // var fixtureName = patchFormJSON.fixtureName;
    // console.log(this.getFixtureByName);
    // this.getFixtureByName(fixtureName)
    //   .then(function(fixtureDoc) {
    //     var patch = {
    //       fixtureName: fixtureDoc.fixtureName,
    //       startingChannel: patchFormJSON.startingChannel
    //     };
    //     try {
    //       this.validatePatchLength(
    //         patchFormJSON.startingChannel,
    //         fixtureDoc.channelParameters.length
    //       );
    //     } catch (e) {
    //       throw e;
	//     }
	    //Need to validate the fixture length
        return axios
          .post("/api/patch", patch)
          .then(function(response) {
			console.log("POST api/patch" + response);
            return response;
          })
          .catch(function(err){
            console.error(err);
            throw err;
          });
    //   })
    //   .catch(function(err) {
    //     console.error(err);
    //     throw err;
    //   });
  },

  createCue: function(cueForm) {
	"use strict";
    return axios
      .post("/api/cues", cueForm)
      .then(function(response){
        console.log("Sucessfully created cue");
        return response;
      })
      .catch(function(err) {
        console.error(err);
        throw err;
      });
  },

  createFixture: function(fixtureForm) {
	"use strict";
    // console.log(this.getFixtureByName);
    // this.getFixtureByName(fixtureForm.fixtureName)
    //   .then(function(result) {
	// 	  console.log(result);
    //     if (!result) {
          return axios
            .post("/api/fixtures", fixtureForm)
            .then(function(results) {
			  if(!results.data.errmsg){
                console.log("Successfully created fixture");
				return results;
			  }
			  else{
				  console.error(results.data.errmsg);
				  throw results.data.errmsg;
					
			  }
            })
            .catch(function(err) {
              console.error(err);
              throw err;
            });
    //     }
    //   })
    //   .catch(function(err) {
    //     console.error(err);
    //     throw err;
    //   });
  },

  getCues: function() {
	"use strict";
    return axios.get("/api/cues").then(function(results) {
      return results;
    });
  },

  getPatch: function() {
	"use strict";
    return axios.get("/api/patch").then(function(results) {
      return results;
    });
  },
  getFixtures: function() {
	"use strict";
    return axios.get("/api/fixtures").then(function(results) {
      return results;
    });
  }
};
