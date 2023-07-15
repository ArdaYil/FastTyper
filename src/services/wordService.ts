import APIClient from "../util/APIClient";

export type Word = string;

const wordService = new APIClient<Word>("/words");

export default wordService;
