# freesoundAPI-Generation

This project utilizes the Freesound.org API and the Web Audio API to randomly generate sounds to back up a live audiovisual project. It was inspired by the wearehere.fm project, after having a thoughtful discussion with Betsey Biggs.

It utilizes both server-side and client-side JS, with the hopes of integrating more interaction on the client-side eventually during a live performance. Once the server is launched, the script will automatically run and start generating noises. This is pretty bare-bones for now, but I will be expanding on it in the future.

The script runs on a loop and chooses sounds to play based on storing sounds with the entered tag in an array, then randomly choosing an array index. Currently, there is a limit to how long sounds can play as I am using this program for short live performances.
