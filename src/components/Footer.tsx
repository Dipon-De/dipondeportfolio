import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-purple/20 bg-background/40 backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-black sm:text-3xl">
            Let&apos;s <span className="text-gradient">work together</span>
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Have a role, a research collaboration or a project in mind? Send a message and I&apos;ll
            get back to you.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-purple"
              >
                <AiOutlineMail aria-hidden /> {profile.email}
              </a>
            </li>
            <li className="text-muted-foreground">{profile.phone}</li>
            <li className="text-muted-foreground">{profile.location}</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-purple/40 text-lg text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
            >
              <AiFillGithub aria-hidden />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-purple/40 text-lg text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
            >
              <AiFillLinkedin aria-hidden />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram profile"
              className="grid h-11 w-11 place-items-center rounded-full border border-purple/40 text-lg text-purple transition-all hover:-translate-y-1 hover:bg-purple/20"
            >
              <AiFillInstagram aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>

      <div className="border-t border-purple/15 px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        <p className="font-semibold text-purple">{profile.tagline}</p>
        <p className="mt-1">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
