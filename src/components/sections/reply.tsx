import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Karlos",
    username: "@karlos",
    body: "Happy Birthday! Hope your day is filled with joys and happiness.",
    img: "./src/assets/tweet-profile.png",
  },
  {
    name: "dsiaefdf",
    username: "@fldfeg",
    body: "Wishing you a wonderful birthday and a year full of peace.",
    img: "./src/assets/reply9.jpg",
  },
  {
    name: "Lee",
    username: "@lee",
    body: "Happy Birthday! May your day be calm, bright, and special.",
    img: "./src/assets/reply11.png",
  },
  {
    name: "gtefwr",
    username: "@yerdreew",
    body: "Hope this birthday brings you warmth and smiles. Enjoy your day!",
    img: "./src/assets/reply10.jpg",
  },
  {
    name: "カルロス",
    username: "@カルロス",
    body: "Happy Birthday! Here's to a day that feels just right.",
    img: "./src/assets/reply4.png",
  },
  {
    name: "ミゲル",
    username: "@ミゲル",
    body: "Wishing you a birthday filled with small moments to treasure.",
    img: "./src/assets/reply6.jpg",
  },
  {
    name: "セラーノ",
    username: "@セラーノ",
    body: "Happy Birthday! May your day be gentle and kind, just like you.",
    img: "./src/assets/reply7.jpg",
  },
  {
    name: "Miguel",
    username: "@miguel",
    body: "Hope you feel loved and appreciated on your birthday.",
    img: "./src/assets/reply1.png",
  },
  {
    name: "gfg",
    username: "@j54y45",
    body: "Happy Birthday! May today be a time to relax and enjoy.",
    img: "./src/assets/reply9.jpg",
  },
  {
    name: "Serrano",
    username: "@serrano",
    body: "Wishing you a birthday that’s simple, sweet, and meaningful.",
    img: "./src/assets/reply3.png",
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
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
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
          src={img}
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
