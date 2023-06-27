import { Component } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor (private mainService:MainService){
    console.log(this.pokeDetails)
  }
  pokemon = this.mainService.currentPokemon
  pokeDetails = this.mainService.getPokemonDetails(this.pokemon)
}
