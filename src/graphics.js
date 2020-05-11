import { rules } from "./data.js"
import {loadApiPokemonAsync} from "./pokemonapi.js"
import {elements} from "./elements.js"



async function takeValuesType() {
  let result = await loadApiPokemonAsync();
  let dataType = rules.computeStatsType(result);
  let takeObjectKeysType = Object.keys(dataType);
  let takeObjectValuesType = Object.values(dataType);
  
createGraphics(elements.graphicType, takeObjectKeysType, ["green"], takeObjectValuesType)

let takeValuesEgg = rules.computeStatsEgg(result);
let takeObjectKeysEgg = Object.keys(takeValuesEgg);
let takeObjectValuesEgg = Object.values(takeValuesEgg);
createGraphics(elements.graphicEggs, takeObjectKeysEgg, ["green"], takeObjectValuesEgg)

}

takeValuesType()
  

