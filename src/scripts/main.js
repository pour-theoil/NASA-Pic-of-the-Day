import { getNasaPic } from "../data/datamanager.js"
import { postCard } from "./post.js"



const showNasaPic = () => {
    const postElement = document.querySelector("#nasapost");
      getNasaPic().then((post) => {
          postElement.innerHTML += postCard(post);
      })
}

showNasaPic();