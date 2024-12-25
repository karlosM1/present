import { ThemeProvider } from "@/components/theme-provider";
import { TwitterCard } from "./components/sections/tweet";
import confetti from "canvas-confetti";
import TextRevealByWord from "./components/ui/text-reveal";
import { ModeToggle } from "./components/toggle-mode";
import { Reply } from "./components/sections/reply";
import { RainbowButton } from "@/components/ui/rainbow-button";
function App() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-end">
        <ModeToggle />
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen gap-10"> */}
      <div className="z-10 flex min-h-64 items-center justify-center ">
        <TextRevealByWord
          className="leading-loose font-bold"
          text={`Treat yourself to something nice today—you totally deserve an acad break. Enjoy your day! 🎂📚\n Scroll down for more...`}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <TwitterCard />
        <div className="relative">
          <RainbowButton onClick={handleClick}>Trigger Me</RainbowButton>
        </div>
      </div>
      <div>
        <Reply />
      </div>

      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
