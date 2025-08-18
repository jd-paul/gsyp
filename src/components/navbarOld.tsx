// src/components/navbar.tsx
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Logo + Text */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="GSYP Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-semibold">
            Global Society of Young Physicists
          </span>
        </div>

        {/* Right: Join Us */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/join"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Join Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
