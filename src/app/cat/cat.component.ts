import { Component, OnInit, ViewChild, ElementRef,  Input} from '@angular/core';
import { Type } from '@angular/compiler';
import { Cat } from './cat.model'


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @ViewChild('catName', { static:false}) catNameRef: ElementRef;
  @ViewChild('catColor', { static:false}) catColorRef: ElementRef;

 cats: Cat[] = [
   
 ]

 @Input() bee: string;


 allowDog: boolean = true;

 

  constructor() {
    console.log("constructor called")


    

    setTimeout(()=>{
      this.allowDog = !true; 
    }, 3000)

    }

    
   

  ngOnInit(): void {
    console.log("OnInit called")
  }

  ngDoCheck():any {
    console.log("doCheck called")
    console.log(this.bee)
  }

  // updateName(event: any) {
  //   this.newName = (<HTMLInputElement>event.target).value;
  // }

  // updateColor(event: any) {
  //   this.newColor = (<HTMLInputElement>event.target).value;
  // }


  // addNewCat(name: string, color: string) {
  //     this.cats.push(new Cat(name, color))
  // }

  addNewCat() {
    const name = this.catNameRef.nativeElement.value;
    const col =  this.catColorRef.nativeElement.value
    this.cats.push(new Cat(name, col))
  }



}
