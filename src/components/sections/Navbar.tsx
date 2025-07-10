"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

//Default Navbar
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/logo-lan.png"
              alt="Logo LAN"
              className="h-10 w-auto"
              width={40}
              height={40}
              priority
            />
          </div>
          <span className="text-l text-gray-900">Survei Maturitas</span>
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/dashboard">Beranda</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/input-survey">Survey</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/profile">Profile</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/tentang">Tentang</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/berita">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/kontak">Kontak</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
          <Button asChild>
            <Link href="/daftar">Daftar</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 mt-3 pt-3">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/input-survey"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Survey
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/tentang"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/berita"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/kontak"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Masuk
                </Link>
              </Button>
              <Button asChild className="justify-start">
                <Link href="/daftar" onClick={() => setIsOpen(false)}>
                  Daftar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

//Navbar if session logged in
export function NavbarSuccessLogin() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white justify-between shadow-sm px-6 py-3 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/logo-lan.png"
              alt="Logo LAN"
              className="h-10 w-auto"
              width={40}
              height={40}
              priority
            />
          </div>
          <span className="text-l text-gray-900">Survei Maturitas</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Beranda</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/input-survey">Survey</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/profile">Profile</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/tentang">Tentang</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/berita">Resources</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/kontak">Kontak</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
          <Button asChild>
            <Link href="/daftar">Daftar</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 mt-3 pt-3">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/input-survey"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Survey
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/tentang"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/berita"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/kontak"
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  Masuk
                </Link>
              </Button>
              <Button asChild className="justify-start">
                <Link href="/daftar" onClick={() => setIsOpen(false)}>
                  Daftar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
