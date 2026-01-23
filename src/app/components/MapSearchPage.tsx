import { useState } from "react";
import {
  Search,
  MapPin,
  Navigation,
  X,
  SlidersHorizontal,
  Home,
  Bookmark,
  User,
} from "lucide-react";

interface MapSearchPageProps {
  onNavigate: (page: string) => void;
}

export function MapSearchPage({
  onNavigate,
}: MapSearchPageProps) {
  const [filters, setFilters] = useState<string[]>(["canteen"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] =
    useState(false);
  const [activeNav, setActiveNav] = useState("map");

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const handleNavigation = (nav: string) => {
    setActiveNav(nav);
    if (nav !== "map") {
      onNavigate("home");
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Map Background - Using a placeholder gradient that resembles a map */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-100 to-blue-300">
        {/* Map styling overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_#22c55e_0%,_transparent_50%),radial-gradient(circle_at_70%_60%,_#3b82f6_0%,_transparent_50%)]"></div>

        {/* Location Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <MapPin className="size-12 text-primary fill-primary drop-shadow-lg" />
        </div>
      </div>

      {/* Search Bar Container */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10">
        <div
          className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3 mb-3 cursor-text"
          onClick={() => setShowSearchResults(true)}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
            placeholder="search"
            className="text-foreground flex-1 outline-none bg-transparent placeholder:text-foreground/60"
          />
          <Search className="size-5 text-foreground/60" />
        </div>

        {/* Filter Buttons */}
        {!showSearchResults && (
          <div className="flex gap-2">
            <button className="bg-white rounded-full shadow-md px-5 py-2 flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-transform">
              <SlidersHorizontal className="size-4" />
              <span className="text-sm">add filter</span>
            </button>

            {filters.map((filter) => (
              <button
                key={filter}
                className="bg-white rounded-full shadow-md px-5 py-2 flex items-center gap-2 hover:bg-gray-50 active:scale-95 transition-transform"
              >
                <span className="text-sm">{filter}</span>
                <div
                  className="bg-primary rounded-full p-0.5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFilter(filter);
                  }}
                >
                  <X className="size-3 text-white" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Results Overlay */}
      {showSearchResults && (
        <div className="absolute inset-0 bg-blue-200/90 backdrop-blur-sm z-20 animate-in fade-in duration-200">
          <div className="h-full flex flex-col p-4">
            {/* Search Bar in Overlay */}
            <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-3 mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search"
                autoFocus
                className="text-foreground flex-1 outline-none bg-transparent placeholder:text-foreground/60 text-center"
              />
              <button
                onClick={() => {
                  setShowSearchResults(false);
                  setSearchQuery("");
                }}
                className="bg-primary rounded-full p-1"
              >
                <X className="size-4 text-white" />
              </button>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Main Result */}
              <button className="w-full bg-white rounded-full shadow-md px-6 py-3 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                อาคาร1
              </button>

              {/* Category Filters */}
              <div className="flex gap-3">
                <button className="flex-1 bg-white rounded-full shadow-md px-6 py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                  ร้านอาหาร
                </button>
                <button className="flex-1 bg-white rounded-full shadow-md px-6 py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                  โรงอาหาร
                </button>
              </div>

              {/* Transportation Section */}
              <button className="w-full bg-white rounded-full shadow-md px-6 py-3 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                ขนส่ง
              </button>

              <div className="flex gap-3">
                <button className="flex-1 bg-white rounded-full shadow-md px-6 py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                  วินมอไซ
                </button>
                <button className="flex-1 bg-white rounded-full shadow-md px-6 py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                  รถตู้
                </button>
              </div>

              <button className="w-full bg-white rounded-full shadow-md px-6 py-2.5 text-center hover:bg-gray-50 active:scale-95 transition-transform">
                ปั๊มรถเมล์
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Compass Button */}
      <button className="absolute bottom-24 right-6 bg-white rounded-full p-4 shadow-lg hover:bg-gray-50 active:scale-95 transition-transform z-10">
        <Navigation className="size-6 text-foreground" />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border z-30 shadow-lg">
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