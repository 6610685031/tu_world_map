import { useState } from 'react';
import { MapPin, Navigation, BookOpen, Check } from 'lucide-react';
import { MapSearchPage } from '@/app/components/MapSearchPage';
import { HomePage } from '@/app/components/HomePage';

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [activePage, setActivePage] = useState<'home' | 'map'>('home');

  const onboardingPages = [
    {
      icon: <MapPin className="size-16 text-primary" />,
      title: "Welcome to TU World Map",
      description: "Navigate your campus with ease. Find buildings, facilities, and points of interest all in one place."
    },
    {
      icon: <Navigation className="size-16 text-primary" />,
      title: "Real-time Navigation",
      description: "Get turn-by-turn directions to any location on campus. Never get lost on your way to class again."
    },
    {
      icon: <BookOpen className="size-16 text-primary" />,
      title: "Discover Campus Life",
      description: "Explore dining halls, libraries, study spaces, and more. Everything you need is at your fingertips."
    }
  ];

  if (started) {
    if (activePage === 'map') {
      return <MapSearchPage onNavigate={(page) => setActivePage(page as 'home' | 'map')} />;
    }
    return <HomePage onNavigate={(page) => setActivePage(page as 'home' | 'map')} />;
  }

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 text-center">
        <h1 className="text-2xl">TU World Map</h1>
      </div>

      {/* Scrollable Pages */}
      <div 
        className="flex-1 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const pageWidth = e.currentTarget.offsetWidth;
          const page = Math.round(scrollLeft / pageWidth);
          setCurrentPage(page);
        }}
      >
        <div className="h-full flex">
          {onboardingPages.map((page, index) => (
            <div
              key={index}
              className="min-w-full h-full snap-center flex items-center justify-center px-8"
            >
              <div className="max-w-sm text-center">
                <div className="mb-8 flex justify-center">
                  {page.icon}
                </div>
                <h2 className="mb-4">{page.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {page.description}
                </p>
                
                {/* Acknowledge Button - Only on last page */}
                {index === onboardingPages.length - 1 && (
                  <button
                    onClick={() => setStarted(true)}
                    className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2 shadow-lg"
                  >
                    <Check className="size-4" />
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pb-12 flex justify-center gap-2">
        {onboardingPages.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentPage
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}