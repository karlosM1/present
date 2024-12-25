import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Reply1 from "./reply1.png";
import Reply3 from "./reply3.png";
import Reply4 from "./reply4.png";
import Reply6 from "./reply6.jpg";
import Reply7 from "./reply7.jpg";
import Reply8 from "./reply8.jpg";
import Reply9 from "./reply9.jpg";
import Reply10 from "./reply10.jpg";
import Reply11 from "./reply11.png";
import Proile from "./tweet-profile.png";

const reviews = [
  {
    name: "Karlos",
    username: "@karlos",
    body: "Happy Birthday! Hope your day is filled with joys and happiness.",
    img: { Proile },
  },
  {
    name: "dsiaefdf",
    username: "@fldfeg",
    body: "Wishing you a wonderful birthday and a year full of peace.",
    img: { Reply9 },
  },
  {
    name: "Lee",
    username: "@lee",
    body: "Happy Birthday! May your day be calm, bright, and special.",
    img: { Reply11 },
  },
  {
    name: "gtefwr",
    username: "@yerdreew",
    body: "Hope this birthday brings you warmth and smiles. Enjoy your day!",
    img: { Reply10 },
  },
  {
    name: "カルロス",
    username: "@カルロス",
    body: "Happy Birthday! Here's to a day that feels just right.",
    img: { Reply4 },
  },
  {
    name: "ミゲル",
    username: "@ミゲル",
    body: "Wishing you a birthday filled with small moments to treasure.",
    img: { Reply6 },
  },
  {
    name: "セラーノ",
    username: "@セラーノ",
    body: "Happy Birthday! May your day be gentle and kind, just like you.",
    img: { Reply7 },
  },
  {
    name: "Miguel",
    username: "@miguel",
    body: "Hope you feel loved and appreciated on your birthday.",
    img: { Reply1 },
  },
  {
    name: "gfg",
    username: "@j54y45",
    body: "Happy Birthday! May today be a time to relax and enjoy.",
    img: { Reply8 },
  },
  {
    name: "Serrano",
    username: "@serrano",
    body: "Wishing you a birthday that’s simple, sweet, and meaningful.",
    img: { Reply3 },
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img:
    | string
    | Partial<{
        Reply1: string;
        Reply7: string;
        Reply9: string;
        Reply3: string;
        Reply4: string;
        Reply6: string;
        Reply8: string;
        Reply10: string;
        Reply11: string;
        Proile: string;
      }>;
  name: string;
  username: string;
  body: string;
}) => {
  const imgSrc =
    typeof img === "object"
      ? img.Reply1 ||
        img.Reply7 ||
        img.Reply9 ||
        img.Reply3 ||
        img.Reply4 ||
        img.Reply6 ||
        img.Reply8 ||
        img.Reply10 ||
        img.Reply11 ||
        img.Proile
      : img;
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img
          className="h-12 w-12 object-contain rounded-full"
          width="32"
          height="32"
          alt=""
          src={imgSrc}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reply() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
