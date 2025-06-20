import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (<nav className="navbar">
        <Link href="/">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.png" alt="logo" width={100} height={100} className="object-cover invert"/>
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems/>
            <SignedOut>
                <SignInButton>
                    <Button className="btn-signin">Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </nav>)
}
export default Navbar
