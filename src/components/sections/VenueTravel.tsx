import type { VenueData } from "@/lib/sanity/types";

interface VenueTravelProps {
  data: VenueData;
}

export default function VenueTravel({ data }: VenueTravelProps) {
  return (
    <section id="venue" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-dark mb-4">
            Location
          </span>
          <h2 className="heading-display text-4xl sm:text-5xl text-navy mb-4">{data.heading}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber to-amber-light mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map & Address */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-6">
              {data.mapEmbedUrl ? (
                <iframe
                  src={data.mapEmbedUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                />
              ) : (
                <div className="w-full h-[350px] bg-slate-200 flex items-center justify-center">
                  <p className="text-slate-500">Map will be displayed here</p>
                </div>
              )}
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <h3 className="heading-display text-xl text-navy mb-2">{data.venueName}</h3>
              <p className="text-slate-600 text-sm">{data.address}</p>
            </div>
          </div>

          {/* Travel Info */}
          <div className="space-y-6">
            {/* Nearby Hotels */}
            {data.nearbyHotels && data.nearbyHotels.length > 0 && (
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="heading-display text-lg text-navy mb-4 flex items-center gap-2">
                  <span>🏨</span> Nearby Hotels
                </h3>
                <div className="space-y-3">
                  {data.nearbyHotels.map((hotel, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm font-medium text-slate-700">{hotel.name}</span>
                      <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">{hotel.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Transport */}
            {data.transportOptions && data.transportOptions.length > 0 && (
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="heading-display text-lg text-navy mb-4 flex items-center gap-2">
                  <span>🚆</span> Getting There
                </h3>
                <div className="space-y-3">
                  {data.transportOptions.map((option, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed">{option}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Parking */}
            {data.parkingInfo && (
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
                <h3 className="heading-display text-lg text-navy mb-2 flex items-center gap-2">
                  <span>🅿️</span> Parking
                </h3>
                <p className="text-sm text-slate-600">{data.parkingInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
