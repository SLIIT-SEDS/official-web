import Landing from "../components/landing";
import GlobalStars from "../components/GlobalStars";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <GlobalStars />
      <div className="relative z-10 flex flex-col w-full">
        <Landing />
      </div>
    </main>
  );
};

export default Index;
