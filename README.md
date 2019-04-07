# hardware_weather

This is a simple weather app, with a fun twist! Using Fetch API to get Data from DarkSky, this electron application can sit in the
background of you desktop, auto fetching the weather ever 15 minutes. If you want an extra challenge, you can make it run on a 
raspberry pi! Checkout the github link below to learn more!

If you just wanna take a sneak peak in the browser click here... http://sheryak-weather.surge.sh/

# install for laptop/desktop
- clone the repo
- change the lat/lng on line 13 in app.js
  ex) fetch(`https://api.darksky.net/forecast/e20fe780791cad1d4d4d7b8484f970a5/YOURLAT,YOURLNG`)
- run the command 'npm run start'

-- voilà! Nice work! You should have a weather app running on your computer!


# install for Raspberry Pi
Electron seems to butt heads with Raspbian OS - A long form tutorial will be coming soon!
