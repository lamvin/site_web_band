"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');

    return (
        <nav className="fixed w-full z-50 bg-pastel-purple/95 backdrop-blur-md border-b border-purple-300/40 text-purple-950 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-36">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-4 group">
                            <Image
                                src="/images/band/logo_v2.png"
                                alt="Thérapie Club Logo"
                                width={120}
                                height={120}
                                className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                            <span className="text-3xl font-black uppercase tracking-widest text-purple-950 group-hover:text-grenadine transition-colors font-display">
                                THÉRAPIE CLUB
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-purple-950 hover:text-grenadine px-3 py-2 rounded-md text-base font-bold tracking-wider transition-colors">
                                {t('home')}
                            </Link>
                            <Link href="#shows" className="text-purple-950 hover:text-grenadine px-3 py-2 rounded-md text-base font-bold tracking-wider transition-colors">
                                {t('shows')}
                            </Link>
                            <Link href="#music" className="text-purple-950 hover:text-grenadine px-3 py-2 rounded-md text-base font-bold tracking-wider transition-colors">
                                {t('music')}
                            </Link>
                            <Link href="#about" className="text-purple-950 hover:text-grenadine px-3 py-2 rounded-md text-base font-bold tracking-wider transition-colors">
                                {t('about')}
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-purple-300/50 inline-flex items-center justify-center p-2 rounded-md text-purple-950 hover:text-white hover:bg-grenadine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pastel-purple focus:ring-purple-950"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-pastel-purple border-b border-purple-300/40">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-purple-950 hover:text-grenadine block px-3 py-2 rounded-md text-base font-bold">
                            {t('home')}
                        </Link>
                        <Link href="#shows" className="text-purple-950 hover:text-grenadine block px-3 py-2 rounded-md text-base font-bold">
                            {t('shows')}
                        </Link>
                        <Link href="#music" className="text-purple-950 hover:text-grenadine block px-3 py-2 rounded-md text-base font-bold">
                            {t('music')}
                        </Link>
                        <Link href="#about" className="text-purple-950 hover:text-grenadine block px-3 py-2 rounded-md text-base font-bold">
                            {t('about')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

