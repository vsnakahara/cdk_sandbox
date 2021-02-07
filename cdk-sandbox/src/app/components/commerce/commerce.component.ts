import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-commerce",
  templateUrl: "./commerce.component.html",
  styleUrls: ["./commerce.component.scss"],
})
export class CommerceComponent implements OnInit {
  items = [
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      name: "Shiba Ino seminovo",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
