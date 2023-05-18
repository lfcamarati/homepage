export class IrregularVerb {
  base: string;
  pastSimple: VerbForm;
  pastParticiple: VerbForm;

  constructor(base: string, pastSimple: string, pastParticiple: string) {
    this.base = base;
    this.pastSimple = {
      verb: pastSimple,
      show: false,
      answer: null,
    };
    this.pastParticiple = {
      verb: pastParticiple,
      show: false,
      answer: null,
    };
  }

  getValue(verbForm: VerbForm): string {
    return this.isShow(verbForm) ? verbForm.verb : '?';
  }

  toggle(verbForm: VerbForm) {
    verbForm.show = !verbForm.show;
  }

  isShow(verbForm: VerbForm): boolean {
    return verbForm.show;
  }

  check(verbForm: VerbForm): boolean {
    return (
      verbForm.answer !== null &&
      verbForm.verb.toLowerCase().trim() ===
        verbForm.answer.toLowerCase().trim()
    );
  }
}

export interface VerbForm {
  verb: string;
  show: boolean;
  answer: string | null;
}
