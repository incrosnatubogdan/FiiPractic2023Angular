import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor() {

   }

  availableTitles: string[] = [
    "The time is always right to do what is right.", "Life`s most persistent and urgent question is, `What are you doing for others?",
    "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Book Review : The Design of Everyday Things by Don Norman"]

  get title(): string {
    // in our case it will return 3 as we have 4 items inside the availableTitles array
    // we use this so that we know how many items we have in the array
    const noOfTitles = this.availableTitles.length - 1
    // return this.getRandomInt(0, noOfTitles)
    const randomTitleIndex = this.getRandomInt(0, noOfTitles)
    return this.availableTitles[randomTitleIndex]
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

}
