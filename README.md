# gdps-util-method

Don't forget to install the necessary packages:

```
npm install request
```
Remember to replace what says ```http://YOURGDPS```
* for your gdps data Remember!, in most of the sites to make a request you need the url to be "http" instead of "https".


## getLinkSong

Obtains the download link of a custom music through the id of a level


**Example of Use** 
```
const song = await getLinkSong(73);
```

Response 
``` 
http://audio.ngfiles.com/587000/587870_NK---Poltergeist-OLD-mix.mp3
```

