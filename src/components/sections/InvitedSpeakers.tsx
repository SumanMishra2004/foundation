import Image from "next/image";
import type { Speaker } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

interface InvitedSpeakersProps {
  speakers: Speaker[];
}

export default function InvitedSpeakers({ speakers }: InvitedSpeakersProps) {
  if (!speakers || speakers.length === 0) return null;

  return (
    <section className="pb-20 lg:pb-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="heading-display text-3xl text-navy mb-2">Invited Speakers</h3>
          <p className="text-slate-500">Distinguished experts joining the conversation</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => {
            const photoUrl = speaker.photo
              ? urlFor(speaker.photo).width(200).height(200).url()
              : `https://i.pravatar.cc/200?img=${i + 10}`;

            return (
              <div
                key={speaker._id}
                className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-sm group-hover:ring-amber/20 transition-all shrink-0">
                  <Image
                    src={photoUrl}
                    alt={speaker.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-navy text-sm truncate">{speaker.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{speaker.designation}</p>
                  <p className="text-xs text-amber-dark truncate">{speaker.organization}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
