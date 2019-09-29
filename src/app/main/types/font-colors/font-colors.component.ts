import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-colors',
  templateUrl: './font-colors.component.html',
  styleUrls: ['./font-colors.component.css']
})
export class FontColorsComponent implements OnInit {
  randomSentence: string;
  allSent: string[];
  color = 'pink';

  constructor() {}

  ngOnInit() {
    this.randomSentenceGenerator();
  }

  randomSentenceGenerator() {
    const sentenceArray = [
      'Wow, does that work?',
      'He told us a very exciting adventure story.',
      'She only paints with bold colors; she does not like pastels.',
      'I want more detailed information.',
      'Writing a list of random sentences is harder than I initially thought it would be.',
      'I hear that Nancy is very pretty.',
      'The book is in front of the table.',
      'Yeah, I think it\'s a good environment for learning English.',
      'Everyone was busy, so I went to the movie alone.',
      'I\'d rather be a bird than a fish.'
    ];
    this.allSent = sentenceArray;
    const totalSentences = sentenceArray.length;
    const randomNumber = Math.floor(Math.random() * totalSentences);

    this.randomSentence = sentenceArray[randomNumber];
  }
}
