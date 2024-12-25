import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const TwitterCard = () => {
  return (
    <Card className="w-full sm:w-[300px] md:w-[500px] lg:w-[500px]">
      <CardHeader className="flex flex-row justify-between tracking-tight">
        <div className="flex items-center space-x-2">
          <img
            title={`Profile picture of Karlos`}
            alt="Karlos"
            height={48}
            width={48}
            src="../src/assets/tweet-profile.png"
            className="overflow-hidden rounded-full border border-transparent w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          />
          <div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center whitespace-nowrap font-semibold"
            >
              Karlos Miguel
            </a>
            <div className="flex items-center space-x-1">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition-all duration-75"
              >
                @karlos
              </a>
            </div>
          </div>
        </div>

        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
          </g>
        </svg>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <div className="break-words leading-normal tracking-tighter">
          <p>
            Happy Birthday!🎉@itskrh_xoxo Hope your day’s full of fun, good
            vibes, and all the things you love most. Cheers to another awesome
            year ahead! 🎂🎁.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex  transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto ">
            <div className="shrink-0 snap-center sm:w-2" />
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={`../src/assets/image${index + 1}.jpg`}
                title={"Photo by " + `${index + 1}`}
                alt={`Image ${index + 1}`}
                className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm "
              />
            ))}
            <div className="shrink-0 snap-center sm:w-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
