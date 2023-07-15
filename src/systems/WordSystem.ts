const wordsAtOnce = 20;

class WordSystem {
  private rightWords: number;
  private wrongWords: number;
  private startTime: number;
  private words: string[];

  constructor(words: string[]) {
    this.rightWords = 0;
    this.wrongWords = 0;
    this.startTime = new Date().getTime();
    this.words = words;
  }

  getWords() {
    const totalWords = this.rightWords + this.wrongWords - 1;

    return this.words.filter(
      (_, index) => index > totalWords && index < totalWords + 20
    );
  }
}
