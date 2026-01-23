import { useState } from "react";
import {
  MapPin,
  Search,
  Bookmark,
  User,
  Home,
  Navigation as NavigationIcon,
  Clock,
  TrendingUp,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeNav, setActiveNav] = useState("home");

  const handleNavigation = (nav: string) => {
    setActiveNav(nav);
    if (nav === "map") {
      onNavigate("map");
    }
  };

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl mb-2">TU World Map</h1>
        <p className="text-muted-foreground text-sm">
          Welcome back! Where would you like to go today?
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-20">
        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate("map")}
              className="bg-primary text-primary-foreground rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-primary/90 active:scale-95 transition-transform shadow-lg"
            >
              <MapPin className="size-8" />
              <span>View Map</span>
            </button>

            <button
              onClick={() => handleNavigation("search")}
              className="bg-secondary text-secondary-foreground rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-secondary/90 active:scale-95 transition-transform shadow-lg"
            >
              <Search className="size-8" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Recent Locations */}
        <div className="mb-6">
          <h3 className="mb-3 flex items-center gap-2">
            <Clock className="size-5 text-muted-foreground" />
            Recent Locations
          </h3>
          <div className="space-y-2">
            <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="size-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">อาคาร 1</p>
                <p className="text-xs text-muted-foreground">
                  Engineering Building
                </p>
              </div>
            </button>

            <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="size-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">โรงอาหาร</p>
                <p className="text-xs text-muted-foreground">
                  Canteen Building
                </p>
              </div>
            </button>

            <button className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-primary/10 rounded-full p-2">
                <MapPin className="size-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">ห้องสมุด</p>
                <p className="text-xs text-muted-foreground">
                  Library
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-6">
          <h3 className="mb-3 flex items-center gap-2">
            <TrendingUp className="size-5 text-muted-foreground" />
            Popular Destinations
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-card border border-border rounded-xl p-4 flex flex-col items-start hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-secondary/20 rounded-lg p-2 mb-2">
                <NavigationIcon className="size-5 text-secondary-foreground" />
              </div>
              <p className="text-sm font-medium">ร้านอาหาร</p>
              <p className="text-xs text-muted-foreground">
                15 locations
              </p>
            </button>

            <button className="bg-card border border-border rounded-xl p-4 flex flex-col items-start hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-secondary/20 rounded-lg p-2 mb-2">
                <NavigationIcon className="size-5 text-secondary-foreground" />
              </div>
              <p className="text-sm font-medium">ห้องเรียน</p>
              <p className="text-xs text-muted-foreground">
                50+ rooms
              </p>
            </button>

            <button className="bg-card border border-border rounded-xl p-4 flex flex-col items-start hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-secondary/20 rounded-lg p-2 mb-2">
                <NavigationIcon className="size-5 text-secondary-foreground" />
              </div>
              <p className="text-sm font-medium">ลานจอดรถ</p>
              <p className="text-xs text-muted-foreground">
                8 parking lots
              </p>
            </button>

            <button className="bg-card border border-border rounded-xl p-4 flex flex-col items-start hover:bg-accent active:scale-95 transition-transform">
              <div className="bg-secondary/20 rounded-lg p-2 mb-2">
                <NavigationIcon className="size-5 text-secondary-foreground" />
              </div>
              <p className="text-sm font-medium">ปั๊มรถเมล์</p>
              <p className="text-xs text-muted-foreground">
                6 bus stops
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg">
        <div className="flex items-center justify-around py-3 px-4">
          <button
            onClick={() => handleNavigation("home")}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <Home
              className={`size-6 ${activeNav === "home" ? "text-primary" : "text-foreground/60"}`}
            />
            <span
              className={`text-xs ${activeNav === "home" ? "text-primary" : "text-foreground/60"}`}
            >
              Home
            </span>
          </button>

          <button
            onClick={() => handleNavigation("map")}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <MapPin
              className={`size-6 ${activeNav === "map" ? "text-primary" : "text-foreground/60"}`}
            />
            <span
              className={`text-xs ${activeNav === "map" ? "text-primary" : "text-foreground/60"}`}
            >
              Map
            </span>
          </button>

          <button
            onClick={() => handleNavigation("search")}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <Search
              className={`size-6 ${activeNav === "search" ? "text-primary" : "text-foreground/60"}`}
            />
            <span
              className={`text-xs ${activeNav === "search" ? "text-primary" : "text-foreground/60"}`}
            >
              Search
            </span>
          </button>

          <button
            onClick={() => handleNavigation("saved")}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <Bookmark
              className={`size-6 ${activeNav === "saved" ? "text-primary" : "text-foreground/60"}`}
            />
            <span
              className={`text-xs ${activeNav === "saved" ? "text-primary" : "text-foreground/60"}`}
            >
              Saved
            </span>
          </button>

          <button
            onClick={() => handleNavigation("profile")}
            className="flex flex-col items-center gap-1 transition-colors"
          >
            <User
              className={`size-6 ${activeNav === "profile" ? "text-primary" : "text-foreground/60"}`}
            />
            <span
              className={`text-xs ${activeNav === "profile" ? "text-primary" : "text-foreground/60"}`}
            >
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}