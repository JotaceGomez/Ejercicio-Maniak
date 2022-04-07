import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ManiakApp';


  ngOnInit(): void {
    document.cookie = "isDeviceTablet=isDeviceTablet";

   if (window.innerWidth < 768) {
      alert("Esta aplicación no funciona en dispositivos móviles");
    }
   else if (window.innerWidth > 1023) {
      alert("Esta aplicación no funciona en ordenadores");
    }
  }
}
