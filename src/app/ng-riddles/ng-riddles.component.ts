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
    bcIsCorrect : "true",
    riddle: "How many cylinders are in a V8?",
    answer: "8",
    ansIsCorrect: "false",
    nextLocation: "8800 Grossmont College Dr, El Cajon, CA 92020",
    showLoc: 'false'
  };
  riddle2 =
  {
    beginCode: "550",
    bcIsCorrect : "false",
    riddle: "How many feet are in a quarter mile?",
    answer: "1320",
    ansIsCorrect: "false",
    nextLocation: "United States Postal Office: 6030 Santo Rd Ste I, San Diego CA 92124",
    showLoc: 'false'
  };
  riddle3 =
  {
    beginCode: "469",
    bcIsCorrect : "false",
    riddle: "I have keys but no doors, I have space but no room.. You can \"enter\" but you can't leave. What am I?",
    answer: "a keyboard",
    ansIsCorrect: "false",
    nextLocation: "Pockets Billiards & Brew: 5610 Kearny Mesa Rd, Unit E, San Diego, CA 92111 [TURN LEFT ON MAGNETRON]",
    showLoc: 'false'
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

  riddle2CodeCheck(givenCode)
  {
    if (givenCode == this.riddle2.beginCode)
    {
      this.riddle2.bcIsCorrect = 'true';
    }
  }

  riddle2AnsCheck(ans)
  {
    if (ans == this.riddle2.answer)
    {
      this.riddle2.ansIsCorrect = 'true';
    }
  }

  riddle3CodeCheck(givenCode)
  {
    if (givenCode == this.riddle3.beginCode)
    {
      this.riddle3.bcIsCorrect = 'true';
    }
  }

  riddle3AnsCheck(ans)
  {
    if (ans.toLowerCase() == this.riddle3.answer.toLowerCase())
    {
      this.riddle3.ansIsCorrect = 'true';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
