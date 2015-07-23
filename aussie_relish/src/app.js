import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class Awesome{
  heading = 'Are <em>you</em> awesome?';
  firstName = 'first name';
  lastName = 'last name';

  get fullName(){
    return '${this.firstName} ${this.lastName}';
  }

  awesome(){
    if ((firstName == 'Bryan' && lastName == 'Holdt')
        || (firstName == 'Jordan' && lastName == 'Dashel')){
      alert('${this.fullName} is awesome!')    
    }
  } 
}
