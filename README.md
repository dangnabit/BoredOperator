# BoredOperator
An Art-net Lighting Controller run on a Node Express Server

For many small coffeshops and theaters, a lighting board is a considerable investment given that a high quality console can go for several thousands of dollars. The goal of BoredOperator is to provide the functionality of a professional lighting at a reduced cost and a lower form factor. (A laptop comptuer vs a full sized lighting board). All our data is saved onto a Mongo database.

## How to use

Our code is designed to utlilize a Raspberry Pi as the server which connects to the Art-net router which splits the DMX value to the connected fixtures. All users must create a login. Once a user logs in, they are taken to the console page, which is rather blank until we add some fixtures and patch them, so let's do that!

### 1. Create fixture
 
Click the *Create Fixture* button on the right hand side. Type the name of the fixture into the input field and add the necessary channel parameters from the select boxes. (You must have a name and at least one channel parameter in order to create a fixture)

### 2. Patch a fixture

Once you create a fixture, you can patch it to the DMX universe. Click the *Patch Fixture* button and select a fixture from the dropdown menu. Select a channel number you wish to start the patch at. NOTE: You cannot patch two fixtures to the same channel. i.e. If you fixture has *x* channels and you start the patch from channel *y*, the DMX channels *y* through *y + x* cannot be assigned already. 

Once patched, the channels the fixture has been patch to will display in the console along with their percent values. At the bottom, each patch is displayed in a carousel. Each patch channel will have a slider which can controll the live value of that channel. 

### 3. Create a cue

Create a cue when you want to take a snapshot of all the DMX values in the console. Simply assign the values a cue number-which must be unique-and the cue will appear on the *Cue List* on the left hand side. 


## Future Development 

**Under Construction**
