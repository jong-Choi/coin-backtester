interface ITap {
  name: string;
  url: string;
}

const taps: ITap[] = [
  {
    name: "홈",
    url: "/",
  },
  {
    name: "배우기",
    url: "/learning",
  },
];

export default taps;
