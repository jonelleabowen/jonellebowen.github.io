import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {

  links = [
    {label:'About Me', href:'#aboutMe'},
    {label:'Education', href:'#education'},
    {label:'Portfolio', href:'#portfolio'},
    {label:'Resume', href:'Resume - Jonelle Bowen 2021.pdf'},
    {label:'Contact', href:'#contact'}

  ] 
}
