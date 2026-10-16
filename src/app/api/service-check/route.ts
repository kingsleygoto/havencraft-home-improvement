import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const zip = searchParams.get("zip")?.trim();

  if (!zip || !/^\d{5}$/.test(zip)) {
    return NextResponse.json(
      { error: "Please enter a valid 5-digit US ZIP code." },
      { status: 400 }
    );
  }

  const isSupported = siteConfig.serviceAreas.supportedZipCodes.includes(zip);

  if (isSupported) {
    return NextResponse.json({
      zip,
      serviceable: true,
      message: `Great news! ZIP code ${zip} is within our primary service area across ${siteConfig.serviceAreas.regionName}. Our crews regularly work in your neighborhood.`,
      region: siteConfig.serviceAreas.regionName,
    });
  } else {
    return NextResponse.json({
      zip,
      serviceable: false,
      message: `ZIP code ${zip} is just outside our primary scheduled routes. However, we occasionally accept projects in neighboring areas depending on project scope. Please call (800) 555-0199 or submit an inquiry to verify availability.`,
      region: siteConfig.serviceAreas.regionName,
    });
  }
}
