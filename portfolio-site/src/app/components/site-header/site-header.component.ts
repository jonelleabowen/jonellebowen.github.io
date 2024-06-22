import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'site-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {

  public links = [
    {label:'About Me', href:'#aboutMe'},
    {label:'Education', href:'#education'},
    {label:'Portfolio', href:'#portfolio'},
    {label:'Resume', href:'Resume - Jonelle Bowen 2021.pdf'},
    {label:'Contact', href:'#contact'}

  ] 

  onCollapseMenuClicked() {
    var x = document.getElementById("myTopnav");
    if (x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    
  }
}
