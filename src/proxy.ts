import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fallbackSiteSettings } from "@/lib/fallback-data";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect certificates page and certificates lookup API route
  if (pathname === "/certificates" || pathname === "/api/certificate") {
    let showCertificates = fallbackSiteSettings.showCertificates;

    try {
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o7jlk18r";
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
      const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
      const query = encodeURIComponent('*[_type == "siteSettings"][0]{ showCertificates }');
      const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

      const res = await fetch(url, {
        next: { revalidate: 10 } // Lightweight cache limit
      });

      if (res.ok) {
        const { result } = await res.json();
        if (result) {
          showCertificates = !!result.showCertificates;
        }
      }
    } catch (err) {
      console.error("Sanity CMS fetch error in proxy middleware:", err);
    }

    if (!showCertificates) {
      // Redirect unauthorized/locked requests back to homepage
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/certificates", "/api/certificate"],
};
export { proxy as middleware }; // Support either name for maximum compatibility
