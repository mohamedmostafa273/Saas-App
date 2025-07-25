import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Populer Companion</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          subject="science"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="2"
          subject="maths"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="3"
          subject="language"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionList
        title="Recent Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
