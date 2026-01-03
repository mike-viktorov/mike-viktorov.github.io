import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Credentials } from './components/Credentials';
import { Approach } from './components/Approach';
import { TrainingTypes } from './components/TrainingTypes';
import { Athletes } from './components/Athletes';
import { RecentAchievements } from './components/RecentAchievements';
import { Social } from './components/Social';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Approach />
        <TrainingTypes />
        <Athletes />
        <RecentAchievements />
        <Social />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
