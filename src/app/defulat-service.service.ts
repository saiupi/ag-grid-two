import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefulatServiceService {

  constructor() { }
  searchStartWith(data, searchvalue) {
    let result = data.filter(d => (d.Brand.toLowerCase()).startsWith(searchvalue.toLowerCase()))
    return result
  }
 
  filetrWithRange(data,rangeArray){
    let result = data.filter(d => d.age >=rangeArray[0] && d.age <=rangeArray[1])
    console.log(result);
    
    return result
  }
}
