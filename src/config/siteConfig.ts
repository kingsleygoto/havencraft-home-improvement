export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  imageUrl: string;
  iconName: string;
  commonProblems: string[];
  whatWeProvide: string[];
  costFactors: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  relatedServiceSlug: string;
  imageUrl: string;
  content: string[];
}

export const siteConfig = {
  brand: {
    name: "HavenCraft Home Improvement",
    legalName: "HavenCraft Home Improvement, LLC",
    tagline: "Your home deserves better.",
    supportingMessage:
      "Thoughtful home upgrades. Professional installation. A smoother experience from the first call to the final walkthrough.",
    eyebrow: "HOME IMPROVEMENT, MADE EASIER",
    heroHeadline: "A Better Home Starts With a Better Plan.",
    heroCopy:
      "Planning a home upgrade should feel exciting, not overwhelming. Explore your options, understand the next steps, and connect with our team to discuss the right improvements for your home.",
    reassuranceLine:
      "Tell us about your project. We’ll help you understand the next step.",
  },

  contact: {
    phoneDisplay: "(800) 555-0199",
    phoneTel: "+18005550199",
    email: "contact@havencrafthome.com",
    // Configurable service office / primary operations hub
    address: {
      type: "ServiceAreaBusiness", // Set to "PhysicalShowroom" or "ServiceAreaBusiness"
      streetAddress: "100 Innovation Way, Suite 400",
      city: "King of Prussia",
      state: "PA",
      zipCode: "19406",
      country: "US",
      displayNote:
        "Field installation hub serving the Greater Philadelphia & Delaware Valley region. In-home consultations scheduled by appointment.",
    },
    businessHours: [
      { days: "Monday – Friday", hours: "8:00 AM – 7:00 PM EST" },
      { days: "Saturday", hours: "9:00 AM – 3:00 PM EST" },
      { days: "Sunday", hours: "Closed (Online requests reviewed Monday morning)" },
    ],
  },

  announcement: {
    enabled: true,
    message: "Now scheduling free in-home consultations for upcoming season renovation calendars.",
    linkText: "Check availability in your ZIP",
    linkHref: "#service-area",
  },

  serviceAreas: {
    regionName: "Greater Philadelphia & Delaware Valley",
    state: "PA / NJ / DE Regional Coverage",
    counties: [
      "Montgomery County",
      "Chester County",
      "Delaware County",
      "Bucks County",
      "Philadelphia County",
      "Camden County (Selected areas)",
    ],
    primaryCities: [
      "King of Prussia",
      "West Chester",
      "Wayne",
      "Conshohocken",
      "Media",
      "Doylestown",
      "Exton",
      "Bryn Mawr",
      "Newtown",
      "Blue Bell",
      "Phoenixville",
      "Ardmore",
    ],
    supportedZipCodes: [
      "19406", "19380", "19382", "19087", "19428", "19063",
      "18901", "19341", "19010", "18940", "19422", "19460",
      "19003", "19072", "19083", "19085", "19401", "19426",
      "19444", "19462", "19464", "19473", "18902", "18974",
    ],
    // Embeddable Google Maps iframe source showing regional service center
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195610.14652233632!2d-75.5229567936173!3d40.09848529329712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6947bc6477d9f%3A0xc3ec78e47bf1b0e5!2sKing%20of%20Prussia%2C%20PA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  },

  commitments: [
    {
      title: "Clear Communication",
      description:
        "No guesswork or disappearing contractors. We keep you updated at every milestone, from the initial consultation to final walkthrough.",
    },
    {
      title: "Thoughtful Project Planning",
      description:
        "Every home is distinct. We evaluate your structure, plumbing, electrical, and aesthetic goals to create an accurate plan before work begins.",
    },
    {
      title: "Transparent Process & Estimates",
      description:
        "Detailed, written estimates explaining scope, materials, and labor. No surprise line items or high-pressure sales tactics.",
    },
    {
      title: "Respect for Your Living Space",
      description:
        "We protect floors, seal off dust zones, clean up at the end of each work session, and treat your family and home with dignity.",
    },
    {
      title: "Accountable Installation",
      description:
        "Work executed by trained installation specialists who follow manufacturer specifications and local building safety codes.",
    },
  ],

  // Note: Only verified reviews are shown. If unverified, the site displays our standards & verified client process.
  verifiedReviews: [],

  services: [
    {
      id: "bathroom-remodeling",
      slug: "bathroom-remodeling",
      name: "Bathroom Remodeling",
      shortDescription:
        "Functional, moisture-resistant bathroom transformations designed for comfort, modern style, and lasting water protection.",
      metaDescription:
        "Transform your bathroom with HavenCraft Home Improvement. High-durability showers, walk-in tubs, custom tile, and modern plumbing fixtures. Request a free estimate.",
      heroHeadline: "Thoughtful Bathroom Upgrades Built for Everyday Comfort.",
      heroSubheadline:
        "From modern walk-in showers to complete bathroom renovations, we create spaces that combine resilient waterproofing with clean, enduring design.",
      imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      iconName: "Bath",
      commonProblems: [
        "Dated tile, peeling grout, and persistent moisture or mildew issues",
        "Inefficient layouts with inadequate vanity storage and poor lighting",
        "Slippery high-sided tubs that pose safety and accessibility risks",
        "Leaky fixtures and aged plumbing leading to water damage risks",
      ],
      whatWeProvide: [
        "Low-maintenance walk-in shower conversions and acrylic surrounds",
        "Waterproof membrane systems under all tile and wet zones",
        "Custom vanities, quartz/granite countertops, and LED mirror fixtures",
        "Accessible safety features including grab bars, low thresholds, and bench seating",
        "Complete plumbing rough-in updates and ventilation fan upgrades",
      ],
      costFactors: [
        "Bathroom footprint (half-bath powder room vs. master suite)",
        "Plumbing relocation requirements (moving waste lines vs. same-layout replacement)",
        "Material selections (custom natural tile vs. solid composite wall surrounds)",
        "Subfloor moisture remediation or structural floor reinforcement",
      ],
      processSteps: [
        { title: "Design Consultation", desc: "We measure your room, assess existing plumbing, and review surface and layout options." },
        { title: "Material & Scope Confirmation", desc: "Select fixtures, tile or surrounds, vanity cabinetry, and receive a comprehensive written estimate." },
        { title: "Meticulous Installation", desc: "Demolition, moisture-barrier installation, certified plumbing connections, and finish carpentry." },
        { title: "Final Walkthrough", desc: "Detailed quality inspection, water flow testing, and care instructions." },
      ],
      faqs: [
        {
          q: "How long does a typical bathroom remodel take to complete?",
          a: "Most focused wet-area conversions (tub-to-shower replacements) take 1 to 3 days on site, while full custom master bathroom renovations typically range from 1 to 2.5 weeks depending on scope and tile work.",
        },
        {
          q: "Do you pull required permits for plumbing and electrical work?",
          a: "Yes. When a municipality requires building, plumbing, or electrical permits for structural changes or major line moves, all necessary permits are filed and inspected according to local codes.",
        },
      ],
    },
    {
      id: "kitchen-remodeling",
      slug: "kitchen-remodeling",
      name: "Kitchen Remodeling",
      shortDescription:
        "Thoughtfully planned culinary spaces featuring durable cabinetry, quartz countertops, improved storage, and functional lighting.",
      metaDescription:
        "Explore professional kitchen remodeling with HavenCraft Home Improvement. Cabinetry, islands, durable countertops, and smart workflow layouts. Request your estimate.",
      heroHeadline: "Kitchens Built for Cooking, Gathering, and Everyday Life.",
      heroSubheadline:
        "Upgrade your home’s central gathering space with better workflow, premium cabinetry, durable countertops, and reliable craftsmanship.",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      iconName: "Utensils",
      commonProblems: [
        "Cramped counter space and awkward workflow between sink, stove, and fridge",
        "Worn, warped cabinet faces with sagging hardware and poor pantry organization",
        "Dim under-cabinet task lighting and inadequate electrical outlets for modern appliances",
        "Chipped laminate surfaces vulnerable to heat, staining, and moisture",
      ],
      whatWeProvide: [
        "Solid-wood and soft-close cabinet systems with pull-out organizers",
        "Quartz, granite, and porcelain slab countertops cut to precise laser measurements",
        "Tile backsplashes, farm sinks, and high-efficiency spray faucets",
        "Multi-zone LED under-cabinet and pendant lighting packages",
        "Kitchen island additions and open-concept layout reconfiguration",
      ],
      costFactors: [
        "Cabinetry type (refacing existing boxes vs. new custom solid-wood cabinets)",
        "Countertop material square footage and sink cutouts",
        "Appliance relocations requiring gas, 220V electrical, or water line rerouting",
        "Structural wall alterations or load-bearing header installations",
      ],
      processSteps: [
        { title: "Space Planning", desc: "In-depth spatial analysis of the work triangle, storage needs, and traffic flow." },
        { title: "Finish Selection", desc: "Cabinet door profiles, countertop slabs, backsplash tile, hardware, and fixtures." },
        { title: "Precision Build", desc: "Careful removal, rough MEP trades, cabinet leveling, countertop templating, and install." },
        { title: "Walkthrough & Review", desc: "Full cabinet adjustment, drawer alignment check, and cleanup." },
      ],
      faqs: [
        {
          q: "Can I keep my existing layout to save on renovation costs?",
          a: "Yes. Keeping existing plumbing stacks and electrical hookups in their current locations is one of the most effective ways to maximize your budget for higher-end cabinetry and countertops.",
        },
        {
          q: "How do you help manage dust during a kitchen remodel?",
          a: "We isolate the work zone using floor-to-ceiling zip-wall plastic barriers, cover adjacent living room floors with ram-board, and utilize HEPA air scrubbers during dust-generating phases.",
        },
      ],
    },
    {
      id: "window-replacement",
      slug: "window-replacement",
      name: "Window Replacement",
      shortDescription:
        "Energy-efficient, custom-measured replacement windows that enhance indoor comfort, reduce drafts, and elevate curb appeal.",
      metaDescription:
        "Energy-efficient replacement windows by HavenCraft Home Improvement. Double-hung, casement, slider, and bay windows with Low-E glass. Free home estimates.",
      heroHeadline: "Draft-Free Comfort and Energy Performance for Every Season.",
      heroSubheadline:
        "Custom-fit replacement windows engineered to insulate against extreme weather, reduce outdoor noise, and lower heating and cooling strain.",
      imageUrl: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80",
      iconName: "Maximize2",
      commonProblems: [
        "Drafty sashes and cold spots around window frames in winter",
        "Moisture or fogging trapped between double-pane glass layers (failed seals)",
        "Stuck, painted-shut, or hard-to-crank sashes that will not open or stay up",
        "Rotting exterior sill wood and faded cladding that requires frequent repainting",
      ],
      whatWeProvide: [
        "High-performance double and triple-pane Low-E insulated glass units",
        "Argon gas thermal fills and warm-edge spacer technology",
        "Durable vinyl, composite, and wood-clad framing options",
        "Custom laser-measured manufacturing to fit your home's exact rough openings",
        "Full exterior aluminum capping and weatherproof sealant perimeter",
      ],
      costFactors: [
        "Number of window openings and standard vs. architectural specialty shapes",
        "Glass package (double pane with Low-E vs. triple-pane acoustic/solar control)",
        "Frame material (heavy-gauge vinyl vs. composite vs. clad-wood)",
        "Condition of existing window frame sills and surrounding wall flashing",
      ],
      processSteps: [
        { title: "In-Home Assessment", desc: "Inspect each existing window opening for air leaks, water intrusion, and squareness." },
        { title: "Custom Order Measurement", desc: "Laser-measure each rough opening down to the 1/8th inch for airtight factory fabrication." },
        { title: "Clean Installation", desc: "Removal of old units, level shim installation, expanding foam air sealing, and trim capping." },
        { title: "Operation Demonstration", desc: "Test sash locks, tilt-in cleaning latches, and provide manufacturer warranty documentation." },
      ],
      faqs: [
        {
          q: "What is the difference between pocket replacement and full-frame replacement?",
          a: "Pocket replacement installs a new window inside the existing sound wood frame without disturbing your exterior siding or interior casing. Full-frame replacement removes everything down to the studs, ideal when older frames have rot or air gaps.",
        },
        {
          q: "Can window replacement happen during winter or wet weather?",
          a: "Yes. Our crews work one window at a time, keeping room doors closed so each opening is exposed to outside air for only 15 to 20 minutes.",
        },
      ],
    },
    {
      id: "door-installation",
      slug: "door-installation",
      name: "Door Installation",
      shortDescription:
        "Secure, weather-sealed exterior entry doors, patio sliding doors, and French doors built to protect and welcome.",
      metaDescription:
        "Upgrade your entryway with HavenCraft Home Improvement. High-security fiberglass and steel entry doors, smooth patio doors, and storm doors. Schedule a consultation.",
      heroHeadline: "Security, Insulation, and Unmistakable Curb Appeal.",
      heroSubheadline:
        "Protect your home from weather and intrusion with heavy-duty entry doors, French doors, and smooth-gliding patio doors installed to precision.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      iconName: "DoorOpen",
      commonProblems: [
        "Drafts whistling under thresholds and daylight visible around door perimeters",
        "Warped wooden doors that stick, rub the jamb, or refuse to latch securely",
        "Older patio sliders that jump off their tracks or are heavy and difficult to slide",
        "Dented or uninsulated metal doors that conduct cold directly into entryways",
      ],
      whatWeProvide: [
        "Fiberglass entry doors with realistic woodgrain embossing that never rot or swell",
        "Reinforced 20-gauge steel security entry doors with commercial-grade strike plates",
        "Multi-point locking systems securing the door at top, center, and bottom",
        "Heavy-duty roller patio doors with tempered safety glass and keyed foot locks",
        "Custom transoms, sidelites, and decorative impact-resistant privacy glass",
      ],
      costFactors: [
        "Door style (single entry door vs. double entry doors with sidelites and transoms)",
        "Material selection (insulated fiberglass vs. heavy steel vs. glass patio slider)",
        "Hardware package (smart keypad locksets vs. multi-point security mechanisms)",
        "Threshold subfloor condition and exterior trim rot repair",
      ],
      processSteps: [
        { title: "Entryway Evaluation", desc: "Check jamb plumb, header support, threshold condition, and swing clearance." },
        { title: "Design Customization", desc: "Choose color, glass inserts, hardware finishes, and complementary storm doors." },
        { title: "Weatherproof Install", desc: "Install pre-hung unit, flash sill pan, insulate with low-expansion foam, and trim." },
        { title: "Latch & Lock Check", desc: "Fine-tune strike alignment so door shuts smoothly with a reassuring airtight seal." },
      ],
      faqs: [
        {
          q: "Why choose fiberglass over traditional solid wood?",
          a: "Fiberglass provides the warm texture of real wood without shrinking, swelling, cracking, or rotting when exposed to rain, snow, and direct sunlight, plus offers substantially higher insulating value.",
        },
      ],
    },
    {
      id: "flooring-installation",
      slug: "flooring-installation",
      name: "Flooring Installation",
      shortDescription:
        "Durable luxury vinyl plank (LVP), engineered hardwood, and porcelain tile floors installed over properly prepped subfloors.",
      metaDescription:
        "Professional flooring installation by HavenCraft Home Improvement. Luxury vinyl plank (LVP), hardwood, and waterproof tile. Request a free estimate.",
      heroHeadline: "Flooring Built for High Traffic, Pets, and Real Family Life.",
      heroSubheadline:
        "Upgrade your floors with durable, scratch-resistant luxury vinyl plank, natural engineered hardwood, or waterproof porcelain tile.",
      imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
      iconName: "Layers",
      commonProblems: [
        "Scratched, faded, or cupping hardwood that has seen decades of heavy foot traffic",
        "Worn carpeting holding allergens, stains, and lingering household odors",
        "Uneven or squeaking subfloors that cause loose planks and clicking sounds",
        "Water-damaged laminate in kitchens or entryways with swollen joints",
      ],
      whatWeProvide: [
        "100% waterproof luxury vinyl plank (LVP) with commercial-grade wear layers",
        "Engineered hardwood offering natural timber warmth with enhanced dimensional stability",
        "Complete subfloor leveling, screw-down reinforcement to stop squeaks, and acoustic underlayment",
        "Matching transition moldings, stair treads, and color-matched shoe molding",
        "Safe removal and eco-conscious disposal of existing carpet and old flooring",
      ],
      costFactors: [
        "Total square footage and number of rooms / hallways",
        "Subfloor remediation (leveling compound application, moisture barriers)",
        "Staircases (treads, risers, and nosing fabrication)",
        "Material thickness and commercial wear layer grade (12 mil vs. 20+ mil)",
      ],
      processSteps: [
        { title: "Floor Assessment", desc: "Moisture testing of concrete or wood subfloor and square footage laser measurement." },
        { title: "Product Selection", desc: "Review plank widths, textures, acoustic ratings, and transition profiles." },
        { title: "Subfloor Prep & Lay", desc: "Old floor tear-out, leveling high/low spots, underlayment placement, and tight plank click/glue install." },
        { title: "Trim & Detailing", desc: "Baseboard re-installation or shoe molding addition, threshold transitions, and clean sweep." },
      ],
      faqs: [
        {
          q: "What makes Luxury Vinyl Plank (LVP) so popular for active households?",
          a: "LVP combines the authentic visual appearance of textured hardwood with 100% waterproof protection and high resistance to pet claws, dropped items, and spills.",
        },
        {
          q: "Do you move heavy furniture before installing new floors?",
          a: "Yes. Our team can coordinate careful furniture moving, appliance disconnects/reconnects, and protective placement so you don't have to strain yourself.",
        },
      ],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Main Line Walk-In Shower Transformation",
      category: "Bathroom Remodeling",
      location: "Wayne, PA",
      description:
        "Replaced a cramped 1980s acrylic tub-and-shower combo with an open, curbless walk-in shower featuring matte black hardware, textured non-slip floor tiles, and a custom frameless glass panel.",
      duration: "3 Days on Site",
      conceptNote: "Representative project concept illustrating standard installation specifications and materials.",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "project-2",
      title: "Chester County Open Kitchen Reconfiguration",
      category: "Kitchen Remodeling",
      location: "West Chester, PA",
      description:
        "Upgraded worn oak cabinetry with soft-close shaker units in forest and white tones, added a large quartz prep island with deep drawers, and installed layered under-cabinet LED task illumination.",
      duration: "2 Weeks on Site",
      conceptNote: "Representative project concept illustrating layout optimization and cabinet construction.",
      beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "project-3",
      title: "Whole-Home Energy Window Upgrade",
      category: "Window Replacement",
      location: "Doylestown, PA",
      description:
        "Replaced 16 drafty single-pane wood windows with custom Low-E argon-insulated double-hung units. Exterior sills were clad in maintenance-free custom aluminum capping.",
      duration: "2 Days on Site",
      conceptNote: "Representative project concept showcasing thermal sealing and exterior architectural capping.",
      beforeImage: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "project-4",
      title: "Craftsman Fiberglass Entry Door & Sidelite",
      category: "Door Installation",
      location: "Media, PA",
      description:
        "Installed an insulated fiberglass front door system with dual decorative glass sidelites and a three-point deadbolt security mechanism.",
      duration: "1 Day on Site",
      conceptNote: "Representative project concept showing weatherstripped fiberglass entryway installation.",
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
  ],

  resources: [
    {
      slug: "how-to-plan-a-bathroom-remodel",
      title: "How to Plan a Bathroom Remodel: A Step-by-Step Homeowner Guide",
      category: "Planning & Advice",
      readTime: "5 min read",
      publishedDate: "October 2026",
      excerpt:
        "Discover how to evaluate your bathroom layout, understand waterproofing requirements, choose long-lasting fixtures, and avoid unexpected budget surprises.",
      relatedServiceSlug: "bathroom-remodeling",
      imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
      content: [
        "A bathroom renovation is one of the most rewarding upgrades you can make to your home, but it also involves high concentrations of moisture, plumbing, and electrical lines in a compact footprint.",
        "Step 1: Clarify Your Primary Goal. Are you looking to remove an unused tub in favor of an accessible walk-in shower? Do you need more vanity storage for morning routines? Defining your priority helps guide where to allocate your budget.",
        "Step 2: Understand What's Behind the Walls. In older homes, removing original tile often reveals outdated galvanized pipes or subflooring that requires reinforcement. A thorough pre-construction inspection ensures no surprises arise halfway through.",
        "Step 3: Prioritize High-Performance Waterproofing. The beauty of tile is only as durable as the waterproof membrane underneath it. Insist on continuous moisture barriers around all shower walls and pan corners.",
        "Step 4: Request a Written Scope of Work. Ensure your contractor provides an itemized agreement outlining who supplies fixtures, permit handling, daily cleanup policies, and timeline expectations.",
      ],
    },
    {
      slug: "what-affects-the-cost-of-kitchen-remodeling",
      title: "What Affects the Cost of Kitchen Remodeling?",
      category: "Cost & Budgeting",
      readTime: "6 min read",
      publishedDate: "October 2026",
      excerpt:
        "An honest look at the major cost drivers in kitchen renovations, from cabinetry construction and countertop materials to plumbing re-routing.",
      relatedServiceSlug: "kitchen-remodeling",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      content: [
        "Every kitchen is unique, and renovation costs vary widely based on scope, dimensions, and material grades rather than a single flat fee.",
        "Cabinetry Accounts for 30% to 40% of Project Cost. Standard stock boxes, semi-custom cabinets with soft-close dovetail drawers, and full architectural cabinetry represent distinct price tiers.",
        "Layout Changes vs. Footprint Preservation. Keeping your sink, dishwasher, and cooking range in their current positions eliminates substantial plumbing and electrical relocation costs.",
        "Countertop Materials. While laminate provides budget savings, engineered quartz and natural granite offer decades of heat and scratch resistance that enhance long-term property value.",
        "Hidden Structural Factors. Removing partition walls to create an open concept may require structural engineered beams, HVAC duct rerouting, and local building permits.",
      ],
    },
    {
      slug: "signs-your-windows-may-need-replacing",
      title: "5 Clear Signs Your Windows May Need Replacing",
      category: "Maintenance & Diagnostics",
      readTime: "4 min read",
      publishedDate: "October 2026",
      excerpt:
        "Learn how to spot drafty seals, failed insulated glass units, operational sticking, and frame rot before moisture causes interior wall damage.",
      relatedServiceSlug: "window-replacement",
      imageUrl: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80",
      content: [
        "Windows protect your home against the elements day in and day out. When they fail, you feel it in drafts and high utility bills.",
        "1. Persistent Condensation or Fog Between Panes. If fogging appears between the glass layers where you cannot wipe it off, the seal has failed and the insulating gas has leaked out.",
        "2. Noticeable Drafts Near Closed Windows. If a lit candle flickers near your window trim on a breezy day, air infiltration is actively working against your HVAC system.",
        "3. Difficult Operation or Sashes Sticking. Wood frames warp and vinyl balances wear out over time. If windows stick or refuse to stay propped open, it becomes both a convenience and emergency exit safety issue.",
        "4. Exterior Frame Decay or Soft Wood. Poke exterior wood sills with a screwdriver; if wood gives easily, rot has set in and water could penetrate wall cavities.",
        "5. Excessive Outside Noise. Modern double-pane acoustic packages dramatically dampen street traffic and neighborhood noise compared to older single-pane windows.",
      ],
    },
    {
      slug: "questions-to-ask-before-hiring-a-contractor",
      title: "Essential Questions to Ask Before Hiring a Home Improvement Contractor",
      category: "Hiring Advice",
      readTime: "5 min read",
      publishedDate: "October 2026",
      excerpt:
        "Protect your home and investment with these practical, direct questions covering licensing, insurance, daily protocols, and warranty coverage.",
      relatedServiceSlug: "bathroom-remodeling",
      imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80",
      content: [
        "Hiring a contractor is a partnership of trust. Asking direct questions during your estimate meeting helps ensure you hire a reputable, accountable team.",
        "1. Can you provide active proof of general liability and workers' compensation insurance? Never hire a company whose workers might hold you liable for an on-site injury.",
        "2. Who oversees daily work on site? Will there be a dedicated project lead or supervisor you can communicate with each morning?",
        "3. How do you protect the rest of my home during construction? Ask about dust barriers, floor runners, daily debris disposal, and cleanup protocols.",
        "4. What is the procedure if unexpected damage is discovered inside a wall or subfloor? Transparent companies outline change order processes in advance without surprises.",
        "5. What written warranty do you provide on both materials and workmanship? Distinguish between manufacturer product warranties and installation guarantees.",
      ],
    },
    {
      slug: "how-to-prepare-your-home-for-installation",
      title: "How to Prepare Your Home for a Smooth Installation Day",
      category: "Installation Preparation",
      readTime: "4 min read",
      publishedDate: "October 2026",
      excerpt:
        "Simple steps homeowners can take to clear walkways, protect fragile items, and ensure installers can start work safely on day one.",
      relatedServiceSlug: "flooring-installation",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      content: [
        "A little preparation before the crew arrives ensures that installation day proceeds quickly and cleanly.",
        "1. Clear Access Walkways. Ensure your driveway, front pathway, hallways, and stairwells are free of vehicles, toys, and outdoor garden hoses so heavy materials can be carried in smoothly.",
        "2. Remove Fragile Wall Hangings. Vibrations from sawing and nailing can transmit through adjoining walls. Take down picture frames, mirrors, and delicate decor on shared walls.",
        "3. Empty Closets and Cabinets in the Work Zone. For bathroom and kitchen remodels, remove toiletries, towels, cookware, and pantry goods prior to demolition day.",
        "4. Secure Pets and Children. Construction sites involve open doors, power tools, and cords. Designate a quiet, closed-off room or coordinate pet care during peak work hours.",
        "5. Confirm Water and Electrical Shutoffs. Know where your main water shutoff valve is located in case temporary water isolation is required during plumbing connections.",
      ],
    },
  ],

  faqs: [
    {
      q: "What services do you offer?",
      a: "HavenCraft Home Improvement specializes in high-quality residential renovations: Bathroom Remodeling (including walk-in shower conversions), Kitchen Remodeling, Window Replacement, Door Installation, and Flooring Installation (Luxury Vinyl Plank, Hardwood, Tile).",
    },
    {
      q: "Which areas do you serve?",
      a: "We proudly serve homeowners across the Greater Philadelphia and Delaware Valley region, including Montgomery, Chester, Delaware, Bucks, and Philadelphia counties. Enter your ZIP code in our service area checker to confirm immediate availability.",
    },
    {
      q: "How do I request an estimate?",
      a: "You can request an estimate right on our website by clicking 'GET MY FREE ESTIMATE', selecting your project type, and submitting your contact details. You can also call our team directly at (800) 555-0199 during business hours.",
    },
    {
      q: "What information should I prepare before a consultation?",
      a: "Having a clear idea of your priorities (such as replacing a tub with a walk-in shower or updating kitchen countertops), any style photos you love, and a rough target timeline will help us make the most of your consultation. We handle all measurements and technical evaluations.",
    },
    {
      q: "How long might a home improvement project take?",
      a: "Timelines depend on the specific project scope. Targeted upgrades like window replacements, exterior door installations, or wet-area shower conversions often take 1 to 3 days on site. Full custom kitchen or master bathroom renovations typically range from 1 to 3 weeks.",
    },
    {
      q: "What affects the cost of a renovation?",
      a: "Project cost is determined by room dimensions, material grades (e.g. custom tile vs. acrylic surrounds; quartz vs. laminate), structural repairs (such as subfloor leveling or plumbing updates), and whether the layout remains in place or requires relocation of utilities.",
    },
    {
      q: "Do you offer warranties or financing?",
      a: "Yes. All installations are backed by written workmanship standards in addition to specific manufacturer product warranties. Verified financing options are discussed directly during your consultation so you can choose a payment structure that suits your budget.",
    },
    {
      q: "How do I prepare my home for installation?",
      a: "We recommend clearing personal items from the work area, removing wall hangings on adjacent walls, keeping pets in a secure space, and ensuring driveway or entryway access for our installation team. We bring floor protection and dust barriers.",
    },
  ],
};
