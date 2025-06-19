import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";
import CTA from "@/components/CTA";


const Page = () => {
    return (
        <main>
            <h1> Popular Companions
                <section className="home-section">
                    <CompanionCard id="123" name="Neura the Brainy Explorer" topic="Neural Network of the Brain"
                                   subject="Science" duration={45} color="#e5d0ff"/>
                    <CompanionCard id="456" name="Countsy the Number Wizard" topic="Derivatives & Integrals"
                                   subject="Math" duration={30} color="#ffda6e"/>
                    <CompanionCard id="123" name="Verba the Vocabulary Builder" topic="English Literature "
                                   subject="Language" duration={30} color="#bde7ff"/>
                </section>

                <section className="home-section">
                    <CompanionsList
                        title="Recently completed sessions"
                        companions={recentSessions}
                        classNames="w-2/3 max-lg:w-full"
                    />

                    <CTA/>

                </section>
            </h1>
        </main>
    )
}

export default Page