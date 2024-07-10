import React from 'react'
import Link from 'next/link';
import { Button } from '@/ui/button';

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto">
                <Link href="/">
                    <a className="text-4xl font-semibold">
                        Avik<span className='text-accent'>.</span>
                    </a>
                </Link>
            </div>
        </header>
    );
}

export default Header;