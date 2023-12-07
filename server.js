import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// allows to get api key from private env
dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/sound', async (req, res) => {
//   try {
//     const tag = 'creepy';
//     // const soundId = 110011;
//     var randomID = Math.floor(Math.random() * 999999); // generates a random sound id from 0 to 999998
//     const apiUrl = `https://freesound.org/apiv2/sounds/${randomID}/?token=${process.env.API_KEY}&filter=tag:${tag}`;

//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
try {
    const tag = 'experimental';

    // Fetch a list of sounds for the specified tag
    const apiUrl = `https://freesound.org/apiv2/search/text/?query=${tag}&token=${process.env.API_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract sound IDs from the result
    const soundIds = data.results.map(sound => sound.id);

    // Choose a random sound ID from the list
    const randomSoundId = soundIds[Math.floor(Math.random() * soundIds.length)];

    // Fetch the details of the randomly chosen sound
    const randomSoundUrl = `https://freesound.org/apiv2/sounds/${randomSoundId}/?token=${process.env.API_KEY}`;
    const randomSoundResponse = await fetch(randomSoundUrl);
    const randomSoundData = await randomSoundResponse.json();

    res.json(randomSoundData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});