const fs = require("fs").promises;

console.log("Current working directory", process.cwd());

//different for everyone. don't copy
const BASE_DIRECTORY = "./lab-demos/demo-02-song-lyrics";

const songLyrics = async () => {
  const files = await fs.readdir(BASE_DIRECTORY + "/song_lyrics");
  console.log("Files: ", files);

  const selectedFile = await fs.readFile(
    BASE_DIRECTORY + "/song_lyrics" + "/" + files[0]
  );
  //console.log("Selected file: ", selectedFile);

  const lyrics = selectedFile.toString();
  console.log(lyrics);
};

songLyrics();
