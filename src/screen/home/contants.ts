export interface JokeType {
  id: number;
  joke: string;
  isRead: boolean;
  like: boolean;
}

export const listJoke: JokeType[] = [
  {
    id: 1,
    joke: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."',
    isRead: false,
    like: false,
  },
  {
    id: 2,
    joke: 'The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."',
    isRead: false,
    like: false,
  },
  {
    id: 3,
    joke: 'The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    isRead: false,
    like: false,
  },
  {
    id: 4,
    joke: 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    isRead: false,
    like: false,
  },
  {
    id: 5,
    joke: 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, I am going to eat that pussy once Jimmy leaves for school today!"',
    isRead: false,
    like: false,
  },
  {
    id: 6,
    joke: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"'`,
    isRead: false,
    like: false,
  },
];
