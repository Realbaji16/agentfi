import React from 'react'

import Link from 'next/link';
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import afilogo from "../public/afilogo.png"
import flow from "../public/flow.png"
import bcase from "../public/bcase.png"
import bchat from "../public/bchat.png"
import lchart from "../public/lchart.png"
import tree from "../public/tree.png"
import shield from "../public/shield.png"
import mat from "../public/mat.png"
import Image from "next/image";
import LogInButton from './(app)/_components/log-in-button';

const Graph = () => {
    const coreAgents = [
        {
          title: "Sentiment Analyzer Agent",
          description:
            "Analyzes token sentiment using social buzz, on-chain activity, and news feeds",
          icon: bchat,
          alt: "Noto bar chart",
        },
        {
          title: "Portfolio Manager Agent",
          description:
            "Monitors and rebalances your assets based on performance and risk profile",
          icon: bcase,
          alt: "Flat color icons",
        },
        {
          title: "Trading Agent",
          description:
            "Executes trades using AI strategies like DCA, trend-following, or arbitrage.",
          iconGroup: true,
        },
        {
          title: "Yield Farmer Agent",
          description:
            "Finds and farms top yield opportunities across DeFi protocols",
          icon: tree,
          alt: "Game icons tree",
        },
        {
          title: "Risk Assessor Agent",
          description:
            "Flags risky contracts, suspicious activity, and rugpull potential.",
          iconGroup: true,
        },
        {
          title: "Staking Strategist Agent",
          description:
            "Selects high-yield, secure staking options across networks.",
          icon: mat,
          alt: "Material icon theme",
        },
      ];
    
    return (
        <div>
            <main className="bg-[#04001a] flex flex-row justify-center w-full">
      <div className="bg-bkg overflow-hidden w-full max-w-[1440px] relative">
        {/* Background glow effects */}
        <div className="absolute w-full h-[1080px] top-0 left-0">
          <div className="absolute w-[634px] h-[534px] top-[546px] left-1/2 -translate-x-1/2">
            <div className="relative h-[534px]">
              <div className="h-[452px] top-0 left-0 rounded-[312.15px/225.87px] blur-[44.38px] absolute w-[624px] bg-pri" />
              <div className="h-[445px] top-[89px] left-2.5 rounded-[312.15px/222.52px] blur-[85.98px] absolute w-[624px] bg-[#770eff]" />
            </div>
          </div>

          {/* Grid background pattern */}

          {/* Logo and brand */}
          <header className="inline-flex items-center absolute top-[55px] left-[201px] max-md:left-6">
            <div className="relative w-[31.92px] h-[33.24px] rounded-[1px]">
              <Image
                className="absolute w-[19px] h-5 top-1.5 left-1.5"
                alt="Subtract"
                src={afilogo}
              />
            </div>
            <div className="relative w-fit [font-family:'General_Sans-Semibold',Helvetica] font-[600] text-white text-base text-center tracking-[0] leading-[normal]">
              AgentFi
            </div>
          </header>

          {/* Hero section */}
          <section className="flex flex-col w-[533px] items-center gap-5 absolute top-[253px] left-1/2 -translate-x-1/2 max-md:w-full max-md:px-4">
            <div className="flex flex-col items-center relative self-stretch w-full">
              <Badge className="flex w-[287px] text-[#770EFF] items-center justify-center gap-2.5 p-1 bg-white rounded-[20px] mb-4">
                <span className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-[#770EFF] text-sm text-center">
                  AI-First. Voice &amp; Text. Cross-Chain
                </span>
              </Badge>
              <h1 className="relative self-stretch [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-[62px] text-center tracking-[0] leading-[normal] max-md:text-[42px]">
                Command Your DeFi Agents
              </h1>
            </div>
            <p className="relative w-[385px] [font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-sm text-center leading-[normal] max-md:w-full">
              <span className="tracking-[0]">
                Composable AI agents that automate trading, farming, staking,
                and more — with your voic
              </span>
              <span className="tracking-[0.02px]">e🗣</span>
              <span className="tracking-[0]"> or text</span>
              <span className="tracking-[0]">💬</span>
            </p>
           <LogInButton />
          </section>

          {/* Diagram/Illustration */}
          <div className="absolute w-[405px] h-[358px] top-[633px] left-1/2 -translate-x-1/2 bg-bkg rounded-[30px] overflow-hidden max-md:w-[475px] flex items-center justify-center">
  <Image 
    src={flow}
    alt="flow"
    className="w-full h-full object-contain"
  />
</div>

        </div>

        {/* Core Agents Section */}
        <section className="mt-[1115px] flex flex-col items-center max-md:px-4">
          <h2 className="w-[614px] mx-auto [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-[62px] text-center tracking-[0] leading-[normal] max-md:w-full max-md:text-[42px]">
            Core Agents
          </h2>
          <div className="flex flex-wrap w-[575px] items-start gap-[20px_28px] mt-[157px] mx-auto 
  max-md:gap-4 max-md:w-full max-md:px-4">

            {coreAgents.map((agent, index) => (
              <Card
                key={index}
                className="relative w-[173px] h-48 bg-bkg rounded-[10px] overflow-hidden border-none 
                max-md:w-[calc(50%-0.5rem)]"
              
              >
                <CardContent className="p-0">
                  {agent.iconGroup ? (
                    <div className="absolute w-14 h-14 top-[27px] left-[59px] max-md:left-1/2 max-md:-translate-x-1/2">
                      {index === 2 ? (
                        <>
                          <Image
                            className="absolute w-11 h-[18px] top-[33px] left-1.5"
                            alt="Group"
                            src= {shield}
                          />
                          <Image
                            className="absolute w-11 h-[23px] top-1.5 left-1.5"
                            alt="Group"
                            src={lchart}
                          />
                        </>
                      ) : (
                        <Image
                          className="absolute w-[46px] h-[49px] top-[3px] left-[5px]"
                          alt="Group"
                          src={lchart}
                        />
                      )}
                    </div>
                  ) : (
                    <Image
                      className="absolute w-14 h-14 top-[27px] left-[59px] max-md:left-1/2 max-md:-translate-x-1/2"
                      alt={agent.alt}
                      src={agent.icon}
                    />
                  )}

                  <div className="flex flex-col w-[145px] items-start gap-[7px] absolute top-24 left-3.5 max-md:w-full max-md:left-1/2 max-md:-translate-x-1/2">
                    <div className="flex flex-col items-center gap-0.5 relative self-stretch w-full">
                      <h3 className="relative w-[134px] mt-[-1.00px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] max-md:w-full">
                        {agent.title}
                      </h3>
                    </div>
                    <p className="relative w-[156px] mr-[-11.00px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal] max-md:w-full max-md:mr-0 max-md:px-4">
                      {agent.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex w-[882px] items-center justify-center gap-2.5 px-9 py-[45px] mx-auto mt-[160px] rounded-[20px] max-md:w-full max-md:px-4">
          <div className="inline-flex flex-col items-start justify-center gap-8 relative">
            <h2 className="relative w-[554px] [font-family:'General_Sans-Semibold',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal] max-md:w-full max-md:text-[24px]">
              DeFi control at your command. Let AI agents do the heavy lifting
            </h2>
            <Button className="flex w-[554px] h-[39px] items-center justify-center gap-2.5 px-[19px] py-3.5 relative bg-pri rounded-[40px] max-md:w-full">
              <span className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-base">
                Get started
              </span>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[160px] pb-8 text-center max-md:px-4">
          <p className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Socials:&nbsp;&nbsp;Twitter | GitHub | Docs | Terms
          </p>
        </footer>
      </div>
    </main>

        </div>
    )
}

export default Graph;