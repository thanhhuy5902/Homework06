import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { userin4 } from 'src/models/userin4';
@Injectable({
  providedIn: 'root'
})
export class Userin4Service {
userin4 : BehaviorSubject<userin4 | null >
  constructor(private auth: Auth) {
    this.userin4 = new BehaviorSubject< userin4 |null>({
      id:'1',
      name:'huy',
      email:'huy@gmail.com',
      imgUrl:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png'
    } as userin4)

    onAuthStateChanged(this.auth,(user)=>{
      console.log(user);
      if(user){
        this.userin4.next({
          id: user.uid,
          name: user.displayName,
          email:user.email,
          imgUrl:user.photoURL,
        } as userin4)

      }else{
        this.userin4.next(null)
      }
     
    },
    (error) =>{
    console.log(error)
    })
  }
  async logout() {
    await signOut(this.auth);
  }
}
