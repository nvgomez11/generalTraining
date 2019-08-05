/*
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: pokemon.js
 * Author:      ngomez@akurey.com
 * Date:        5/08/2019
 * Description: POKEMON asignation.
 */

  /**
 * This method creates a new pokemon instance with the information recieved in the parameters
 * @return {Obj} with the information of the pokemon
 * @public
 */

function pokemonConstructor(pName, pType, pAttack, pDefense){
    pokemon = {
        "name" : pName,
        "type" : pType,
        "attack" : pAttack,
        "defense" : pDefense,
    }
    return pokemon;
}

var rules = {
    "fire": {
        "grass" : 2,
        "electric" : 1,
        "water" : 0.5,
        "fire" : 0.5
    },
    "grass": {
        "fire" : 2,
        "electric" : 1,
        "water" : 0.5,
        "grass" : 0.5
    },
    "water": {
        "fire" : 2,
        "grass " : 0.5,
        "electric" : 0.5,
        "water" : 0.5
    },
    "electric": {
        "water" : 2,
        "fire" : 1,
        "grass" : 1,
        "electric" : 0.5
    }
}

/**
 * This starts the pokemon battle with the pokemons in the parameters
 * The first pokemon represents the attacker and the second one the defender
 * @return it returns the damage 
 * @public
 */

function pokemonBattle (pokemon1, pokemon2){
    var efectiveness = rules[pokemon1.type][pokemon2.type]
    return damage(pokemon1, pokemon2, efectiveness);
}

/**
 * This method purpose is to get the damage of an attack according to the
 * formula and the values previosly set to the pokemons.
 * @return this function returns the damage
 * @public
 */

function damage (pokemon1, pokemon2, efectiveness) {
    let damage = 50 * (pokemon1.attack/pokemon2.defense) * efectiveness;
    return Math.ceil(damage);
}


var pokemon1 = pokemonConstructor("Bulbasaur", "grass", 40, 35);
var pokemon2 = pokemonConstructor("Charizard", "fire", 50, 15);
console.log(pokemonBattle(pokemon1,pokemon2));