import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-riddles',
  templateUrl: './ng-riddles.component.html',
  styleUrls: ['./ng-riddles.component.css']
})
export class NgRiddlesComponent implements OnInit {
  riddle1 = 
  {
    beginCode: "XXX",
    bcIsCorrect : "false",
    riddle: "What does 2+2 equal?",
    answer: "4",
    ansIsCorrect: "false"
  };
  riddle2 = 
  {
    beginCode: "YYY",
    bcIsCorrect : "false",
    riddle: "What does 4+4 equal?",
    answer: "8",
    ansIsCorrect: "false"
  };
  riddle3 =   
  {
    beginCode: "ZZZ",
    bcIsCorrect : "false",
    riddle: "What does 6+6 equal?",
    answer: "12",
    ansIsCorrect: "false"
  };

  riddle1CodeCheck(givenCode)
  {
    if (givenCode == this.riddle1.beginCode)
    {
      this.riddle1.bcIsCorrect = 'true';
    }
  }

  riddle1AnsCheck(ans)
  {
    if (ans == this.riddle1.answer)
    {
      this.riddle1.ansIsCorrect = 'true';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
