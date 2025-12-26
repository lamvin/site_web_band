"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');

    return (
        <nav className="fixed w-full z-50 bg-cafelatte/90 backdrop-blur-md border-b border-beeswax/20 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold uppercase tracking-widest text-beeswax hover:text-white transition font-display">
                            BAIE DES CHALEURS
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="hover:text-beeswax px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors">
                                {t('home')}
                            </Link>
                            <Link href="#shows" className="hover:text-beeswax px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors">
                                {t('shows')}
                            </Link>
                            <Link href="#music" className="hover:text-beeswax px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors">
                                {t('music')}
                            </Link>
                            <Link href="#about" className="hover:text-beeswax px-3 py-2 rounded-md text-sm font-medium tracking-wider transition-colors">
                                {t('about')}
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-cafelatte inline-flex items-center justify-center p-2 rounded-md text-beeswax hover:text-white hover:bg-grenadine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cafelatte focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-cafelatte border-b border-beeswax/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-white hover:text-beeswax block px-3 py-2 rounded-md text-base font-medium">
                            {t('home')}
                        </Link>
                        <Link href="#shows" className="text-white hover:text-beeswax block px-3 py-2 rounded-md text-base font-medium">
                            {t('shows')}
                        </Link>
                        <Link href="#music" className="text-white hover:text-beeswax block px-3 py-2 rounded-md text-base font-medium">
                            {t('music')}
                        </Link>
                        <Link href="#about" className="text-white hover:text-beeswax block px-3 py-2 rounded-md text-base font-medium">
                            {t('about')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
