import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="box-border bg-stone-950 text-neutral-300 h-screen overflow-y-scroll font-sans">
        {/*VIDEO*/}
        <div className="top-0 left-0 w-screen h-4/5 -z-10 overflow-hidden right-0">
          <video
            className="w-full h-full object-cover"
            width="vw"
            height="100%"
            preload="auto"
            autoPlay
            loop
            muted
          >
            <source src="/videos/pangaea.mp4" type="video/mp4" />
            Enter the Pangaea
          </video>
        </div>

        {/*HEADER*/}
        <div className="flex flex-row p-10 justify-between items-start w-full text-white font-sans text-lg sticky top-0 z-30 overflow-hidden bg-stone-950">
          <p className="font-sans font-bold">PANGAEA</p>
          <ul className="ml-auto gap-4 flex font-clear-sans">
            <li className="hover-scale">
              <Link
                href="/articles"
                className="margin-5 hover-underline-animation"
              >
                ARTICLES.
              </Link>
            </li>
            <li className="hover-scale">
              <Link
                href="/radio"
                className="margin-5 hover-underline-animation"
              >
                RADIO.
              </Link>
            </li>
            <li className="hover-scale">
              <a
                href="https://www.instagram.com/pangea.fm/"
                target="_blank"
                className="margin-5 hover-underline-animation"
              >
                INSTAGRAM.
              </a>
            </li>
            <li className="hover-scale">
              <Link
                href="/about"
                className="margin-5 hover-underline-animation"
              >
                ABOUT.
              </Link>
            </li>
          </ul>
        </div>

        {/*BODY*/}
        <div className="w-screen wrap-break-word">
          {/*PAGE ONE*/}
          <div className="flex m-10 text-gray-400">
            <div className="max-w-2/5 p-10 justify-center">
              <p className="justify-self-center max-w-3/4 max-h-1/4">
                Femme African DJs in Chicago are shaping the vibrant music scene
                with their creativity, resilience, and cultural influence.
              </p>
              <Image
                src="/images/weaving.jpg"
                width={500}
                height={500}
                alt="Picture of a lady weaving"
              />
            </div>
            <div className="max-w-3/5 p-10 justify-center">
              <p className="justify-self-center max-w-3/4 pr-40 max-h-1/4">
                Amapiano is a vibrant South African genre that blends African
                rhythms with deep house, jazz, and lounge music, characterized
                by smooth piano melodies and catchy beats.
              </p>
              <Image
                src="/images/boilerroom.jpg"
                width={700}
                height={600}
                alt="Picture of a lady weaving"
              />
            </div>
          </div>

          {/*PAGE TWO*/}
          <div className="flex m-10">
            <div className="max-w-1/2">
              <p className="text-6xl font-extrabold max-w-4/5 m-5 text-white">
                IS NAIROBI THE NEW CAPTIAL OF AFROHOUSE?
              </p>
              <p className="m-5">
                There&apos;s a quiet we&apos;ve grown accustomed to, a stillness
                we&apos;ve cultivated in isolation. Waking dreams keep us from
                falling at the seams. The stories go on because even if the
                world stops turning on its usual axis, we don&apos;t stay still.
                This blog chronicles this strange global metamorphosis from the
                lens of creatives.
              </p>
              <p className="m-5">
                The images and narratives here prove something precious in these
                times: No matter how transformed beyond recognition, this new
                normal is Still Life.
              </p>
            </div>
            <div className="w-1/2 flex flex-col">
              <p className="m-5 text-lime-300 self-center pt-5 pr-5 pb-10">
                ORIGINAL ARTICLES
              </p>
              <Image
                src="/images/sarz.jpg"
                width={600}
                height={500}
                alt="Picture of Sarz's Boiler Room"
                className="self-start"
              />
            </div>
          </div>

          {/*PAGE THREE*/}
          <div className="flex m-15">
            <div className="w-1/2">
              <p className="m-5 flex-end text-lime-300 italic">SUN EL MUSICIAN</p>
              <Image
                src="/images/blackCoffee.jpg"
                width={500}
                height={600}
                alt="Picture of Black Coffee"
                className="self-end"
              />
            </div>
            <div className="w-1/2 m-5">
              <p className="text-xl text-lime-300 pb-10">SUNDAY SAMPLER</p>
              <p className="pb-10 max-w-3/5">
                One creative deep dives into how the new normal changed her way
                of working - and ultimately, her way of living. She tells us
                about her great unmasking.
              </p>
              <a 
                href="https://open.spotify.com/playlist/1PscmEz8uvhuIKfJEWhNtJ?si=8717ff6a97c54ca3"
                target="_blank"
                className="margin-5 hover-underline-animation hover-scale"
              > 
                SEE PLAYLIST HERE 
              </a>
            </div>
          </div>
          <div>
            <p> RADIO</p>
          </div>
          <div>
            <div>
              <p>SUNDAY SAMPLER</p>
              <p>bun xapa the godzilla in a seven-song sampler</p>
            </div>
            <div>
              <p>CURATED PLAYLIST</p>
              <p>trumpets, trumpets, trumpets: A private school playlist</p>
            </div>
            <div>
              <p>PANGAEA PLAYLIST</p>
              <p>
                the best of afrohouse today: updated weekly by a leading
                cultural curator
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>ABOUT PANGAEA</p>
              <p>{"Pangaea's statement"}</p>
            </div>
          </div>
          <div>
            <p> THESIS </p>
            <p>
              Write a paragraph that talks about your company here. You can talk
              about your company&apos;s background, history, mission, vision, or
              philosophy. Anything that will introduce your brand&apos;s persona
              to your clients. This will help build a connection between you and
              them, that hopefully leads to a working relationship.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
