import { Component, OnInit } from '@angular/core';
import { IrregularVerb, VerbForm } from './IrregularVerb.class';
import { IrregularVerbsService } from './irregularVerbs.service';

@Component({
  selector: 'app-irregular-verbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.css'],
})
export class IrregularVerbsComponent implements OnInit {
  verbs: IrregularVerb[] = [];
  questionMode: boolean = false;
  questionChecked: boolean = false;

  constructor(private irregularVerbsService: IrregularVerbsService) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.irregularVerbsService
      .getVerbs()
      .subscribe((data) => (this.verbs = data));
  }

  toggle(verb: IrregularVerb, form: VerbForm) {
    verb.toggle(form);
  }

  initQuestionMode() {
    this.init();
    this.questionChecked = false;
  }

  checkAnswers() {
    let result = this.verbs.reduce(
      (sum, verb) => {
        let right = 0,
          wrong = 0;

        if (verb.check(verb.pastSimple)) {
          right++;
        } else {
          wrong++;
        }

        if (verb.check(verb.pastParticiple)) {
          right++;
        } else {
          wrong++;
        }
        return [sum[0] + right, sum[1] + wrong];
      },
      [0, 0]
    );

    alert(`You got ${result[0]} verbs right, and got ${result[1]} wrong`);
    this.questionChecked = true;
  }
}
