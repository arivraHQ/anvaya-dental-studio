export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  priceHint: string;
  duration: string;
  imagePrompt: string; // Exact art direction brief for photographers/production
}

export interface DoctorProfile {
  name: string;
  title: string;
  degrees: string;
  experienceYears: number;
  clinicRole: string;
  philosophy: string[];
  bioParagraphs: string[];
  memberships: string[];
  imagePrompt: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface ResultCase {
  id: string;
  tag: string;
  title: string;
  patientNote: string;
  timeframe: string;
  doctorNote: string;
  beforePrompt: string;
  afterPrompt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  relation: string;
  treatment: string;
  locality: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const siteContent = {
  brand: {
    name: "Anvaya Dental Studio",
    tagline: "Dentistry that feels unhurried.",
    city: "Kanpur",
    foundedYear: 2012,
    rating: "4.9",
    reviewCount: "680+",
    yearsInPractice: "12+",
    phoneDisplay: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappHref: "https://wa.me/919876543210?text=Hello%20Anvaya%20Dental%20Studio,%20I%20would%20like%20to%20schedule%20an%20appointment.",
    addressLine1: "14/112 Civil Lines, Opposite Green Park Stadium",
    addressLine2: "Kanpur, Uttar Pradesh 208001",
    googleMapsUrl: "https://maps.google.com/?q=Civil+Lines+Kanpur+Anvaya+Dental",
    hoursWeekday: "Monday – Saturday: 9:30 AM – 7:30 PM",
    hoursSunday: "Sunday: 10:00 AM – 1:30 PM (By Appointment Only)",
    consultationFeeHint: "Consultation from ₹300",
  },

  navigation: [
    { label: "Care Philosophy", href: "#philosophy" },
    { label: "Treatments", href: "#services" },
    { label: "Doctor", href: "#doctor" },
    { label: "First Visit", href: "#first-visit" },
  ] as NavLink[],

  hero: {
    badge: "Civil Lines, Kanpur • Est. 2012",
    headlineLine1: "Dentistry that feels",
    headlineLine2: "calm & unhurried.",
    subtext:
      "We practice gentle, conservative oral healthcare in a quiet, light-filled practice. No rushed chairs, no unnecessary procedures—just thorough diagnostic care for families who value lasting comfort.",
    primaryCta: {
      label: "Book via WhatsApp",
      href: "https://wa.me/919415128940?text=Hello%20Anvaya%20Dental%20Studio,%20I%20would%20like%20to%20schedule%20an%20appointment.",
    },
    secondaryCta: {
      label: "Call +91 98765 43210",
      href: "tel:+919876543210",
    },
    trustStats: [
      { value: "4.9 / 5", label: "Patient satisfaction (680+ Kanpur families)" },
      { value: "12+ Years", label: "Continuous clinical practice in Civil Lines" },
      { value: "₹300", label: "Comprehensive clinical consultation" },
    ],
    imageBrief:
      "Warm natural sunlight pouring through tall arched studio window onto clean oak wooden finishes; gentle dental chair visible in soft focus; relaxed patient conversing with doctor in cream coat; authentic warm Kodachrome grading, no cold blues.",
    floatingChip: {
      label: "Today's Clinic Rhythm",
      value: "Private 45-min slots per patient",
    },
  },

  trustStrip: [
    "Class-B European Autoclave Sterilisation",
    "Microscope-Assisted Single-Sitting RCT",
    "Clear Ceramic & Invisible Aligners",
    "Zero-Interest 3 to 12 Month EMI Options",
    "Dedicated Child-Friendly Treatment Bay",
    "Digital Low-Radiation Intraoral Imaging",
    "Same-Day Urgent Care for Dental Pain",
  ],

  services: [
    {
      id: "general-care",
      number: "01",
      title: "Comprehensive Dental Exams & Hygiene",
      tagline: "Plaque removal, deep periodontal scaling, and preventive enamel remineralisation.",
      description:
        "Every routine visit includes high-resolution digital intraoral photographs and ultrasonic tartar removal with heated water streams to eliminate sensitivity. We document enamel health meticulously and guide you on home hygiene without lecturing.",
      priceHint: "Consultation from ₹300 • Scaling from ₹1,200",
      duration: "45 mins",
      imagePrompt:
        "Close-up of gentle hands holding polished dental mirror inspecting clean tooth enamel, soft warm morning light, warm beige linen sleeve, tranquil atmosphere.",
    },
    {
      id: "root-canal",
      number: "02",
      title: "Painless Microscope-Guided Root Canal",
      tagline: "Preserve your natural tooth roots using motorized endodontic systems.",
      description:
        "Gone are the days of painful multi-visit root canals. Using rotary nickel-titanium instruments, apex locators, and localized computer-controlled anesthesia, 94% of our root canal procedures conclude comfortably in one single 60-minute sitting.",
      priceHint: "Single-sitting RCT from ₹3,800 • Zirconia crown from ₹4,500",
      duration: "60 mins",
      imagePrompt:
        "Quiet clinic interior showing illuminated surgical dental magnifying loupes resting beside an organized stainless steel tray; calm warm earthy lighting.",
    },
    {
      id: "aligners-braces",
      number: "03",
      title: "Clear Aligners & Ceramic Braces",
      tagline: "Discreet alignment for teens and working professionals.",
      description:
        "Correct crowding, gaps, and overbites with virtually invisible custom aligners or tooth-colored ceramic brackets. We map tooth movement with 3D digital planning, showing you the anticipated end result before treatment begins.",
      priceHint: "Custom aligner packages from ₹38,000 • Flexible EMI available",
      duration: "15 to 45 mins per review",
      imagePrompt:
        "A set of crystalline transparent dental aligners resting on a textured raw travertine stone dish, illuminated by soft window daylight.",
    },
    {
      id: "whitening-cosmetic",
      number: "04",
      title: "Gentle In-Clinic Teeth Whitening",
      tagline: "pH-neutral peroxide formulas designed to avoid tooth sensitivity.",
      description:
        "We avoid harsh bleaching lamps that dehydrate teeth. Our measured in-office protocol lifts stains from tea, coffee, and spices by 4 to 6 shades using enamel-safe remineralising gels that soothe dentinal tubules throughout the appointment.",
      priceHint: "In-office session from ₹4,500 • Take-home maintenance kit included",
      duration: "50 mins",
      imagePrompt:
        "Warm portrait of a smiling Indian woman in her early thirties sitting comfortably with natural, bright healthy teeth in pleasant ambient sunlight.",
    },
    {
      id: "implants-restoration",
      number: "05",
      title: "Titanium Implants & Permanent Crowns",
      tagline: "Replace missing teeth with biocompatible, bone-anchored restorations.",
      description:
        "Restore full biting strength and prevent facial bone loss. We use Grade-4 medical titanium implants with CAD/CAM milled monolithic zirconia crowns that match the translucency and color nuance of your surrounding natural teeth.",
      priceHint: "Implant with ceramic crown from ₹24,000",
      duration: "30–60 mins per stage",
      imagePrompt:
        "Precision-crafted zirconia crown held with gentle tweezers against a warm terracotta ceramic backdrop, showing tooth texture and natural translucency.",
    },
    {
      id: "kids-dentistry",
      number: "06",
      title: "Pediatric & Preventive Dentistry",
      tagline: "Positive first experiences that remove fear from clinic visits.",
      description:
        "From pit-and-fissure sealants and fluoride varnishes to milk-tooth fillings, we take things at your child's pace. We explain every tool with play-based terminology and never restrain or rush a hesitant young patient.",
      priceHint: "Pediatric checkup from ₹300 • Sealants from ₹600 per tooth",
      duration: "30–40 mins",
      imagePrompt:
        "Doctor gently chatting with a smiling 7-year-old child holding a fun dental mirror, relaxed mother sitting nearby in warm wooden chair.",
    },
  ] as ServiceItem[],

  doctor: {
    name: "Dr. Ananya Mishra",
    title: "Lead Prosthodontist & Implantologist",
    degrees: "BDS (KGMC Lucknow), MDS (Prosthodontics), FICOI (USA)",
    experienceYears: 12,
    clinicRole: "Founder & Clinical Director, Anvaya Dental Studio",
    philosophy: [
      "Every procedure should preserve as much natural tooth structure as biology allows.",
      "Patients deserve unhurried conversations about why a tooth hurts, not just a price quote.",
      "Pain management is not an afterthought; it is our primary clinical obligation.",
    ],
    bioParagraphs: [
      "Dr. Ananya Mishra founded Anvaya Dental Studio in 2012 with a singular premise: dental care in Kanpur should be gentle, transparent, and completely free of anxiety. After completing her postgraduate training in Prosthodontics at King George's Medical University (KGMC), Lucknow, she pursued advanced surgical fellowship in implant dentistry.",
      "Over the past 12 years in Civil Lines, she has treated over 8,500 patients—from grandmothers getting their first comfortable dentures to young professionals seeking discreet aligners. She personally examines every patient, writes their diagnostic plan, and never delegates surgical or restorative procedures to junior interns.",
      "Outside the operating operatory, Dr. Mishra conducts community dental awareness workshops across Kanpur schools and mentors young women pursuing healthcare careers in Uttar Pradesh.",
    ],
    memberships: [
      "Life Member, Indian Prosthodontic Society (IPS)",
      "Member, Indian Dental Association (Kanpur Branch)",
      "Fellow, International Congress of Oral Implantologists (FICOI)",
    ],
    imageBrief:
      "Dr. Ananya Mishra in her mid-thirties wearing a tailored sage-green scrub top and warm cream cardigan, standing beside a sunlit clinic window holding clinical notes, genuine warm and composed expression, Indian clinic context.",
  },

  firstVisit: {
    tagline: "What to expect when you walk through our doors",
    steps: [
      {
        step: "01",
        title: "Unhurried Consultation",
        subtitle: "15 minutes of attentive listening",
        description:
          "We begin over warm tea or water in our consultation lounge—not in the treatment chair. Dr. Mishra listens to your concerns, medical history, and any past dental anxiety.",
        duration: "15 mins",
      },
      {
        step: "02",
        title: "Digital High-Definition Imaging",
        subtitle: "Low-radiation intraoral sensor",
        description:
          "If needed, we take targeted high-definition digital radiographs and intraoral macro photos so you can see exactly what we see on a high-resolution display.",
        duration: "10 mins",
      },
      {
        step: "03",
        title: "Transparent Care Plan & Pricing",
        subtitle: "Zero surprise charges",
        description:
          "We present a written diagnostic overview outlining your treatment choices, expected longevity, session count, and exact INR pricing before any treatment begins.",
        duration: "15 mins",
      },
      {
        step: "04",
        title: "Comfortable Treatment or Scheduling",
        subtitle: "At your chosen pace",
        description:
          "If you are in acute pain, we relieve it immediately during this visit. For elective treatments, you choose when to begin with zero pressure to book on the spot.",
        duration: "Flexible",
      },
    ] as TimelineStep[],
  },

  results: [
    {
      id: "case-01",
      tag: "Ceramic Veneers & Gum Reshaping",
      title: "Enamel Restoration for Micro-Fractured Front Incisors",
      patientNote:
        "“I avoided smiling in family photos for five years following a college scooter bump that chipped both my front teeth. Dr. Ananya matched the color so closely with my natural teeth that even my mother couldn't tell where the ceramic starts.”",
      timeframe: "Completed in 2 visits over 9 days",
      doctorNote:
        "Conservative 0.3mm preparation preserving 90% natural enamel, layered IPS e.max lithium disilicate veneers.",
      beforePrompt:
        "Medical before-photo graphic illustration of worn chipped incisors with slight discoloration on cream background.",
      afterPrompt:
        "Medical after-photo graphic illustration of beautifully restored harmonious natural enamel with warm luster.",
    },
    {
      id: "case-02",
      tag: "Clear Aligners",
      title: "Non-Extraction Alignment of Lower Crowding & Crossbite",
      patientNote:
        "“As a school teacher in Swaroop Nagar, I didn't want metallic wire braces. The transparent aligners were so comfortable that my students never noticed I was wearing them during morning assembly.”",
      timeframe: "Completed in 8 months with 16 tray pairs",
      doctorNote:
        "Arch expansion with IPR (interproximal reduction) to resolve 4.5mm crowding without removing any premolars.",
      beforePrompt:
        "Close-up illustration of crowded lower anterior dentition before aligner therapy.",
      afterPrompt:
        "Close-up illustration of gently aligned arch with balanced occlusion and healthy pink gingiva.",
    },
  ] as ResultCase[],

  testimonials: [
    {
      quote:
        "“My eight-year-old daughter used to tremble before any doctor visit. At Anvaya, Dr. Mishra took twenty minutes just talking about her drawing book before even checking her teeth. She came out asking when we can visit again.”",
      author: "Pooja Singhania",
      relation: "Mother of Advika (8 yrs)",
      treatment: "Pediatric Preventive Care & Sealants",
      locality: "Tilak Nagar, Kanpur",
    },
    {
      quote:
        "“I walked in with severe midnight tooth pain expecting a harrowing root canal. Instead, Dr. Ananya gave the gentlest local anesthesia injection I have ever experienced. I literally rested with my eyes closed throughout the procedure.”",
      author: "Rajeshwar Tandon",
      relation: "Business Owner",
      treatment: "Single-Sitting Molar Root Canal",
      locality: "Civil Lines, Kanpur",
    },
    {
      quote:
        "“What stands out about Anvaya is the total absence of aggressive sales pitches. They told me my back teeth did not need replacement crowns, just simple composite touch-ups. That honesty is rare in private medical clinics today.”",
      author: "Dr. Sunita Bajpai",
      relation: "Retired Professor of Botany",
      treatment: "Preventive Periodontal Maintenance",
      locality: "Kakadeo, Kanpur",
    },
    {
      quote:
        "“Got my clear aligners here. The monthly review visits were always strictly on time—never kept waiting for more than five minutes in the lobby. The results have transformed how confidently I present in client meetings.”",
      author: "Vikramaditya Saxena",
      relation: "Software Consultant",
      treatment: "10-Month Clear Aligner Protocol",
      locality: "Swaroop Nagar, Kanpur",
    },
  ] as Testimonial[],

  faq: [
    {
      category: "Pain & Comfort",
      question: "Will my dental treatment or root canal be painful?",
      answer:
        "No. We utilize computer-regulated local anesthesia delivering temperature-buffered anesthetic at microscopic flow rates. This eliminates the 'pinch and sting' sensation typical of conventional injections. If you experience dental anxiety, we provide quiet appointments, weighted blankets, and take pauses whenever you raise your hand.",
    },
    {
      category: "Fees & Payment",
      question: "How much does a routine checkup and treatment cost?",
      answer:
        "Our comprehensive first consultation is ₹300, which includes a complete clinical oral exam, digital intraoral camera assessment, and an unhurried treatment consultation. Ultrasonic scaling starts at ₹1,200, and single-sitting root canals start at ₹3,800. You receive a complete written quote before any procedure begins.",
    },
    {
      category: "Flexible EMI",
      question: "Do you offer zero-interest EMI payment options?",
      answer:
        "Yes. For treatments above ₹10,000—such as clear aligners, dental implants, or full-mouth rehabilitations—we provide 0% interest EMI options spread across 3, 6, 9, or 12 months in partnership with major Indian debit and credit cards (HDFC, ICICI, SBI, Axis) and Bajaj Finserv.",
    },
    {
      category: "Children's Care",
      question: "At what age should I bring my child for their first checkup?",
      answer:
        "We recommend bringing children by their first birthday or when their first baby tooth erupts. Early visits allow us to check jaw development, apply gentle fluoride varnish, and let your child become comfortable with the clinic atmosphere before any tooth decay occurs.",
    },
    {
      category: "Appointments & Timings",
      question: "What are your clinic hours? Do I need an advance appointment?",
      answer:
        "We are open Monday to Saturday from 9:30 AM to 7:30 PM, and on Sundays from 10:00 AM to 1:30 PM by prior appointment. To ensure you never wait in a crowded lobby and receive Dr. Mishra's undivided attention, we schedule appointments in dedicated 45-minute slots via WhatsApp or phone.",
    },
    {
      category: "Urgent Care",
      question: "What should I do if I have a sudden dental emergency or acute pain?",
      answer:
        "Please call us directly at +91 98765 43210 or message on WhatsApp. We reserve daily emergency priority slots between scheduled appointments specifically to relieve acute toothaches, chipped teeth, dislodged crowns, or facial swelling on the same day.",
    },
  ] as FAQItem[],

  footer: {
    heroHeading: "Gentle dental care, right in the heart of Civil Lines.",
    subheading: "Book a 45-minute calm consultation with Dr. Ananya Mishra today.",
    whatsappCta: "Message on WhatsApp",
    callCta: "Call the Clinic",
    timingsHeading: "Clinic Hours",
    addressHeading: "Location & Visiting Us",
    landmark: "Directly opposite Green Park Stadium gate 3, Civil Lines, Kanpur",
    emergencyNote: "Emergency acute pain cases attended on priority during clinic hours.",
  },
};
