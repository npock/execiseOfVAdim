import { professionsObject as professions } from "./profession";

const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Нудила",
    color: "primary",
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Странный",
    color: "secondary",
  },
  buller: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "Троль",
    color: "success",
  },
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Алкоголик",
    color: "danger",
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info",
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Неуверенный",
    color: "dark",
  },
};

const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Джон Дориан",
    profession: professions.doctor,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    age: 45,
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Кокс",
    profession: professions.doctor,
    qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    age: 45,
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Боб Келсо",
    profession: professions.doctor,
    qualities: [qualities.buller],
    age: 44,
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Рэйчел Грин",
    profession: professions.waiter,
    qualities: [qualities.uncertain],
    age: 35,
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Шелдон Купер",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.tedious],
    age: 24,
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Леонард Хофстедтер",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.uncertain],
    age: 28,
  },
  {
    _id: "67rdca3eeb7f6fgeed471821",
    name: "Говард Воловиц",
    profession: professions.engineer,
    qualities: [qualities.strange, qualities.tedious],
    age: 23,
  },
  {
    _id: "67rdca3eeb7f6fgeed471822",
    name: "Никола Тесла",
    profession: professions.engineer,
    qualities: [qualities.handsome],
    age: 45,
  },
  {
    _id: "67rdca3eeb7f6fgeed471823",
    name: "Моника Геллер",
    profession: professions.cook,
    qualities: [qualities.strange, qualities.uncertain],
    age: 32,
  },
  {
    _id: "67rdca3eeb7f6fgeed471824",
    name: "Рататуй",
    profession: professions.cook,
    qualities: [qualities.handsome, qualities.buller],
    age: 32,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181f",
    name: "Джоуи Триббиани",
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    age: 22,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181r",
    name: "Брэд Питт",
    profession: professions.actor,
    qualities: [qualities.handsome],
    age: 45,
  },
];

export const data = {
  users,
  qualities,
  professions,
};
