import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}


@Injectable({
  providedIn: 'root'
})
export class MainService {
  mainToggle:boolean = false
  currentPokemon:string = ""
  constructor(private http:HttpClient) { }
  getPokemons(){
    return this.http.get("http://localhost:8000/allpokemon")
    .pipe(map((response:any)=>response.map((item:any) =>item["name"])))
  }
  getPokemonDetails(poke:string){
    return this.http.get("https://localhost:8000/"+poke)
  }
}
