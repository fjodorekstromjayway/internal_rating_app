internal_rating_app
===================
**API**   
   The api part is hosted on Heroku with a free sandbox database from mongolabs.  
   ***Deploy***  
   To deploy the api, do this:  
   Download and install the Heroku Toolbelt or learn more about the Heroku Command Line Interface.  
  
	If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.  
  
	$ heroku login  
	Clone the repository  
  
	Use Git to clone rateapp-api's source code to your local machine.  
  
	$ heroku git:clone -a rateapp-api  
	$ cd rateapp-api  
	Deploy your changes  
  
	Make some changes to the code you just cloned deploy them to Heroku using Git.  
  
	$ git add .  
	$ git commit -am "make it better"  
	$ git push heroku master  

     
**Client**  
    The client is built in Ember.js with ember-cli and hosted on heroku as such an app.  
    To start it up you need to clone the repo:  
    cd client && npm install  
    bower install  
    ember serve
    
    The client build tool is broccolli so to get a better understanding of how to use is take a look at https://github.com/broccolijs/broccoli  

    ***Deploy***  
    To deploy to the client you need to do this:  
    Download and install the Heroku Toolbelt or learn more about the Heroku Command Line Interface.  
  
	If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.  
  
	$ heroku login  
	Clone the repository  
  
	Use Git to clone oredev-rating's source code to your local machine.  
  
	$ heroku git:clone -a oredev-rating  
	$ cd oredev-rating  
	Deploy your changes  
  
	Make some changes to the code you just cloned deploy them to Heroku using Git.  
  
	$ git add .  
	$ git commit -am "make it better"  
	$ git push heroku master  
    
   
  


