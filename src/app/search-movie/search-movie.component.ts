import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { isRequiredValidator, rangeDateValidator } from '../validators';



@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  List = ["Série", "Films", "Episodes"]
  FicheList =["Complete", "Courte"]
  minDate = new Date(1900,1,1)
  maxDate = new Date()


  signInForm = this.fb.group({
    etat: this.fb.group({
    Identifiant: ['', Validators.required],
    Titre: ['', Validators.required],
    },
    {
    validator: isRequiredValidator('Identifiant', 'Titre') 
    
    }),
   
    Type:[this.List[0]],
    Fiche:[''],
    AnneeDeSortie:['', [Validators.required,rangeDateValidator(this.minDate, this.maxDate)]]
 
});


  constructor(private fb: FormBuilder) { 
    
  }
  initFiche() {
   
    this.signInForm.patchValue({
      Fiche: "Courte"
    })
  }

 onSubmit(){
   console.log('signInForm submitted :', this.signInForm.value)
 }
  
  ngOnInit() {
    this.initFiche()
  }

}
