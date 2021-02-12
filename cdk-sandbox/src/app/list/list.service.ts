import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100');
  }

  getPokemon(url: string) {
    return this.http.get<any>(url);
  }
}
