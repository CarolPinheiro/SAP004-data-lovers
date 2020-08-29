import { rules, sortByType, getFilterPokemon, throwNewErrorFilters, throwNewErrorCalc } from '../src/data.js';
import { dataPokemon, Bulbasaur, Ivysaur, Venusaur, Charmander, Ditto } from './mockpokemon.js'

describe('rules', () => {

  it('should be an object', () => {
    expect(typeof rules).toBe('object');
  });

  describe('filterType', () => {
    it('is a function', () => {
      expect(typeof rules.filterType).toBe('function');
    });
    
    it('It should return the filter by right type', () => {
      expect(rules.filterType(dataPokemon, "Fire")).toEqual([Charmander]);
    });
  });

  describe('filterEgg', () => {
    it('is a function', () => {
      expect(typeof rules.filterEgg).toBe('function');
    });

    it('It should return the filter by distance of egg', () => {
      expect(rules.filterEgg(dataPokemon, "2 km")).toEqual([Bulbasaur, Charmander]);
    });
  });

  describe('searchPokemons', () => {
    it('is a function', () => {
      expect(typeof rules.searchPokemons).toBe('function');
    });

    it('It should return the right search', () => {
      expect(rules.searchPokemons(dataPokemon, "Venusaur")).toEqual([Venusaur]);
    });
  });

  describe('orderBy', () => {
    it('is a function', () => {
      expect(typeof rules.orderBy).toBe('function');
    });

    it('It should return the order by reverse Spawn Time', () => {
      expect(rules.orderBy(dataPokemon, sortByType.spawnTime, true)).toEqual(
        [Ditto, Ivysaur, Charmander, Venusaur, Bulbasaur]
      );
    });

    it('It should return the order by reverse Numbers', () => {
      expect(rules.orderBy(dataPokemon, sortByType.numeric, true)).toEqual(
        [Ditto, Charmander, Venusaur, Ivysaur, Bulbasaur]
      );
    });

    it('It should return the order by Alphabetic', () => {
      expect(rules.orderBy(dataPokemon, sortByType.alphabetic, false)).toEqual(
        [Bulbasaur, Charmander, Ditto, Ivysaur, Venusaur]
      );
    });

    it('It should return the order by Spawn Chance', () => {
      expect(rules.orderBy(dataPokemon, sortByType.spawnChance, false)).toEqual(
        [Bulbasaur, Charmander, Ivysaur, Venusaur, Ditto]
      );
    });
  });

  describe('computeStatsType', () => {
    it('is a function', () => {
      expect(typeof rules.computeStatsType).toBe('function');
    });

    it('It should return the sum of the values ​​of an object attribute', () => {
      expect(rules.computeStatsType(dataPokemon)).toEqual({ Grass: 3, Poison: 3, Fire: 1, Normal: 1 });
    });
  });
  
  describe('computeStatsEgg', () => {
    it('is a function', () => {
      expect(typeof rules.computeStatsEgg).toBe('function');
    });

    it('It should return the sum of the values ​​of an object attribute', () => {
      expect(rules.computeStatsEgg(dataPokemon)).toEqual({ '2 km': 2, 'Not in Eggs': 3 });
    });
  });
});

describe('getFilterPokemon', () => {
  it('is a function', () => {
    expect(typeof getFilterPokemon).toBe('function');
  });

  it('It should return "Charmander" for "fire" type', () => {
    expect(getFilterPokemon({ type: "Fire" }, dataPokemon)).toEqual([Charmander]);
  });
});

describe('throwNewErrorFilters', () => {
  it('is a function', () => {
    expect(typeof throwNewErrorFilters).toBe('function');
  });

  it('It should throw a TypeError when does not receive "objects" as parameters', () => {
    expect(() => throwNewErrorFilters()).toThrow(TypeError);
    expect(() => throwNewErrorFilters(undefined, [])).toThrow(TypeError);
  });
});

describe('throwNewErrorCalc', () => {
  it('is a function', () => {
    expect(typeof throwNewErrorCalc).toBe('function');
  });

  it('It should throw a TypeError when does not receive "object" as parameter', () => {
    expect(() => throwNewErrorCalc()).toThrow(TypeError);
    expect(() => throwNewErrorFilters([])).toThrow(TypeError);
  });
});

