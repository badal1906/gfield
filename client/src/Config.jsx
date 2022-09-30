// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "https://victorious-pajamas-eel.cyclic.app",
});

export default instance;
