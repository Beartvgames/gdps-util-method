function getLinkSong(songID) {
  const secret = 'Wmdf2893gb7';
  const songInfoUrl = 'http://YOURGDPS/getGJSongInfo.php';

  return new Promise((resolve, reject) => {
    request.post({
      url: songInfoUrl,
      form: {
        songID: songID,
        secret: secret
      }
    }, function callback(err, httpResponse, body) {
      if (err) {
        reject(err);
        return;
      }

      if (body == -1) {
        resolve({ songID: songID, downloadLink: 'NO MUSIC' });
        return;
      }

      let songData = body.split('|~');
      let parsedDownloadLink = '';
      let songName = songData[3];

      songName = songName.replace(/~/g, ' ');

      for (let i = 0; i < songData.length; i++) {
        if (songData[i].startsWith('http')) {
          parsedDownloadLink = decodeURIComponent(songData[i]);
          parsedDownloadLink = parsedDownloadLink.replace(/~/g, '');
          break;
        }
      }

      resolve({ songID: songID, downloadLink: parsedDownloadLink });
    });
  });
}
