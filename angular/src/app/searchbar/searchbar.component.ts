import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  options = []
  filteredOptions = []
  searchValue = ""
  inputValue = ""
  formGroup : FormGroup=this.fb.group({
    "search":[""]
   })
  constructor(private main:MainService,private fb:FormBuilder){}

  ngOnInit() {
    this.getPokeNames()
    this.initForm()
  }
  searchFunction(){
    if (this.inputValue){
      this.main.currentPokemon = this.inputValue
      this.main.mainToggle = true
      // console.log("search value = ",this.main.currentPokemon)
    }
  }
  initForm(){
    this.formGroup.get("search")?.valueChanges.subscribe((response:string)=>{
      if ((this.options as string[]).includes(response)){
        this.inputValue = response
      }
      this.filterPokemon(response)
    })
  }
  filterPokemon(enteredPoke: any){
    this.filteredOptions = this.options.filter((item:String) =>{
      return item.toLowerCase().indexOf(enteredPoke.toLowerCase()) > -1
    })
  }

  getPokeNames(){
    this.main.getPokemons().subscribe(response=>{
      this.options = response
      this.filteredOptions = response
    })
  }
}
