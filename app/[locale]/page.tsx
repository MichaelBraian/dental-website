import { VideoHero } from "@/components/video-hero"
import { AnimatedSection, StaggeredChildren } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedBackground } from "@/components/animated-background"
import { Tooth3D } from "@/components/3d-tooth"
import { ServicesOverview } from "@/components/services-overview"
import { TechnologySection } from "@/components/technology-section"
import { Testimonials } from "@/components/testimonials"
import { getDictionary } from "@/lib/dictionaries"
import { HomeStaffSection } from "@/components/home-staff-section"

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const dict = await getDictionary(locale)

  // Staff data
  const doctors = [
    {
      name: "Michael Braian",
      role:
        locale === "sv"
          ? "Specialist oral protetik, odontologisk doktor, tandtekniker, delägare"
          : "Specialist in Oral Prosthodontics, PhD, Dental Technician, Co-owner",
      image: "/images/staff/michael.png",
      bio:
        locale === "sv"
          ? "Michael är en mångfacetterad specialist i protetik som kombinerar djup teoretisk kunskap med praktisk skicklighet."
          : "Michael is a multifaceted specialist in prosthodontics who combines deep theoretical knowledge with practical skills.",
      expandedBio:
        locale === "sv"
          ? "Michael är en mångfacetterad specialist i protetik som kombinerar djup teoretisk kunskap med praktisk skicklighet. Med en dubbelexamen som tandläkare och tandtekniker har han unika förutsättningar att hantera hela behandlingsprocessen, från design till färdigt arbete. Hans karriär inkluderar 12 år som lärare vid Tandvårdshögskolan i Malmö och han har även forskat om digitala metoder inom tandvården. År 2018 avslutade han sin forskning med en disputation. Michael är en pionjär i användningen av 3D-scanning av tänder och dess integration i patientbehandling, något han passionerat föreläser om i Skandinavien. Hans entusiasm för yrket och lättsamma natur gör honom till en omtyckt kollega och uppskattad vårdgivare."
          : "Michael is a multifaceted specialist in prosthodontics who combines deep theoretical knowledge with practical skills. With dual qualifications as a dentist and dental technician, he has unique capabilities to handle the entire treatment process, from design to finished work. His career includes 12 years as a teacher at the Dental School in Malmö, and he has also researched digital methods in dental care. In 2018, he completed his research with a dissertation. Michael is a pioneer in the use of 3D scanning of teeth and its integration into patient treatment, something he passionately lectures about in Scandinavia. His enthusiasm for the profession and easy-going nature make him a popular colleague and appreciated care provider.",
      education: [
        locale === "sv" ? "Doktor i odontologi, Malmö Universitet" : "PhD in Dentistry, Malmö University",
        locale === "sv" ? "Specialist i oral protetik" : "Specialist in Oral Prosthodontics",
        locale === "sv" ? "Utbildad tandtekniker" : "Qualified Dental Technician",
      ],
      specialties: [
        locale === "sv" ? "Digital implantatbehandling" : "Digital implant treatment",
        locale === "sv" ? "Helkäksrekonstruktioner" : "Full arch reconstructions",
        locale === "sv" ? "3D-scanning och digital tandvård" : "3D scanning and digital dentistry",
      ],
    },
    {
      name: "Arman Ameri",
      role: locale === "sv" ? "Specialist oral protetik, delägare" : "Specialist in Oral Prosthodontics, Co-owner",
      image: "/images/staff/arman.png",
      bio:
        locale === "sv"
          ? "Arman är en stolt medgrundare till Baltzar Tandvård samt specialisttandläkare inom oral protetik."
          : "Arman is a proud co-founder of Baltzar Tandvård and a specialist dentist in oral prosthodontics.",
      expandedBio:
        locale === "sv"
          ? "Arman är en stolt medgrundare till Baltzar Tandvård samt specialisttandläkare inom oral protetik. Med en djupgående passion för estetisk tandvård och omfattande restaurativa procedurer, är hans mål att återskapa vackra leenden och främja tandhälsan genom innovativa och beprövade metoder. Hans expertis inom protetik spänner över allt från enkla ingrepp till komplexa rehabiliteringar, som kräver noggrann planering och precision. I sitt arbete kombinerar han hantverk och vetenskap för att skapa funktionella och estetiskt tilltalande tandlösningar som är skräddarsydda för varje patients unika behov. Arman är djupt engagerad i att skapa en välkomnande och stödjande miljö där patienterna känner sig trygga och väl omhändertagna. Han är dedikerad till att erbjuda högsta möjliga kvalitet på tandvård och en patientupplevelse som är både bekväm och resultatinriktad."
          : "Arman is a proud co-founder of Baltzar Tandvård and a specialist dentist in oral prosthodontics. With a deep passion for aesthetic dentistry and extensive restorative procedures, his goal is to recreate beautiful smiles and promote dental health through innovative and proven methods. His expertise in prosthodontics spans everything from simple procedures to complex rehabilitations that require careful planning and precision. In his work, he combines craftsmanship and science to create functional and aesthetically pleasing dental solutions that are tailored to each patient's unique needs. Arman is deeply committed to creating a welcoming and supportive environment where patients feel safe and well cared for. He is dedicated to offering the highest possible quality of dental care and a patient experience that is both comfortable and results-oriented.",
      education: [
        locale === "sv" ? "Specialist i oral protetik" : "Specialist in Oral Prosthodontics",
        locale === "sv" ? "Tandläkarexamen" : "Dental Degree",
        locale === "sv" ? "Vidareutbildning i estetisk tandvård" : "Advanced training in aesthetic dentistry",
      ],
      specialties: [
        locale === "sv" ? "Estetisk tandvård" : "Aesthetic dentistry",
        locale === "sv" ? "Komplexa protetiska rehabiliteringar" : "Complex prosthetic rehabilitations",
        locale === "sv" ? "Implantatbehandlingar" : "Implant treatments",
      ],
    },
    {
      name: "Filip Rebelo Dessborn",
      role: locale === "sv" ? "Legitimerad tandläkare" : "Licensed Dentist",
      image: "/images/staff/filip.png",
      bio:
        locale === "sv"
          ? "Filip har en gedigen erfarenhet som tandläkare med ett särskilt intresse för Oral Protetik."
          : "Filip has solid experience as a dentist with a special interest in Oral Prosthodontics.",
      expandedBio:
        locale === "sv"
          ? "Filip har en gedigen erfarenhet som tandläkare med ett särskilt intresse för Oral Protetik, ett område han fördjupade sig i efter att ha startat sin karriär inom tandteknik. Han har mångårig erfarenhet som lärare vid Tandvårdshögskolan i Malmö och är nu verksamhetschef på kliniken. Filip är känd för sitt lugna och metodiska arbetssätt, vilket gör honom särskilt omtyckt bland patienter som kan känna oro inför tandvårdsbesök. Han erbjuder allt från allmäntandvård till mer avancerade behandlingar för bettrehabilitering på tänder och implantat."
          : "Filip has solid experience as a dentist with a special interest in Oral Prosthodontics, an area he deepened his knowledge in after starting his career in dental technology. He has many years of experience as a teacher at the Dental School in Malmö and is now the clinic manager. Filip is known for his calm and methodical approach, which makes him particularly popular among patients who may feel anxious about dental visits. He offers everything from general dentistry to more advanced treatments for bite rehabilitation on teeth and implants.",
      education: [
        locale === "sv" ? "Legitimerad tandläkare" : "Licensed Dentist",
        locale === "sv" ? "Bakgrund inom tandteknik" : "Background in dental technology",
        locale === "sv" ? "Lärare vid Tandvårdshögskolan i Malmö" : "Teacher at the Dental School in Malmö",
      ],
      specialties: [
        locale === "sv" ? "Oral Protetik" : "Oral Prosthodontics",
        locale === "sv" ? "Bettrehabilitering" : "Bite rehabilitation",
        locale === "sv" ? "Behandling av tandvårdsrädda patienter" : "Treatment of patients with dental anxiety",
      ],
    },
    {
      name: "Daniel Jönsson",
      role: locale === "sv" ? "Specialist parodontologi, Docent" : "Specialist in Periodontology, Associate Professor",
      image: "/images/staff/daniel.png",
      bio:
        locale === "sv"
          ? "Daniel är specialisttandläkare i parodontologi samt docent inom parodontologi och internmedicinsk forskning."
          : "Daniel is a specialist dentist in periodontology and an associate professor in periodontology and internal medicine research.",
      expandedBio:
        locale === "sv"
          ? "Daniel är specialisttandläkare i parodontologi samt docent inom parodontologi och internmedicinsk forskning. Han har alltid jobbat kliniskt vid sidan av forskningen med stort patientfokus och särskilt intresse för sambandet mellan munhälsa och allmänhälsa. Daniel behandlar tandlossningssjukdomar, infektioner vid tandimplantat, tandköttsretraktioner och utför komplicerade implantatinstallationer."
          : "Daniel is a specialist dentist in periodontology and an associate professor in periodontology and internal medicine research. He has always worked clinically alongside his research with a strong patient focus and a special interest in the connection between oral health and general health. Daniel treats periodontal diseases, infections around dental implants, gingival retractions, and performs complex implant installations.",
      education: [
        locale === "sv" ? "Specialist i parodontologi" : "Specialist in Periodontology",
        locale === "sv" ? "Docent inom parodontologi" : "Associate Professor in Periodontology",
        locale === "sv" ? "Forskning inom internmedicin" : "Research in internal medicine",
      ],
      specialties: [
        locale === "sv" ? "Behandling av tandlossningssjukdomar" : "Treatment of periodontal diseases",
        locale === "sv" ? "Implantatinfektioner" : "Implant infections",
        locale === "sv" ? "Komplicerade implantatinstallationer" : "Complex implant installations",
      ],
    },
  ]

  // Staff members (hygienists, assistants, etc.)
  const staff = [
    {
      name: "Malin Andersson",
      role: locale === "sv" ? "Tandhygienist" : "Dental Hygienist",
      image: "/images/staff/malin.png",
      bio:
        locale === "sv"
          ? "Malin är en dynamisk tandhygienist som också assisterar tandläkarna. Med sitt stora intresse för tandvård har hon snabbt blivit en ovärderlig del av vårt team. Malins engagemang och noggrannhet i patientvården bidrar till att alla känner sig välkomna och trygga. Hon är alltid redo att lära sig nya tekniker och strävar efter att ge bästa möjliga vård till våra patienter."
          : "Malin is a dynamic dental hygienist who also assists the dentists. With her great interest in dental care, she has quickly become an invaluable part of our team. Malin's commitment and thoroughness in patient care helps everyone feel welcome and secure. She is always ready to learn new techniques and strives to provide the best possible care to our patients.",
    },
    {
      name: "Johanna Nielsen",
      role: locale === "sv" ? "Tandhygienist" : "Dental Hygienist",
      image: "/images/staff/johanna.png",
      bio:
        locale === "sv"
          ? "Johanna är en ovärderlig medlem i vårt team och har en gedigen bakgrund inom tandvård samt erfarenhet från ortopedi och förlossningsvård. Hon tar hand om sina egna patienter och bistår även med assistans, vilket gör henne till ett centralt kugghjul i kliniken. Johanna är djupt engagerad i sitt arbete och har en passion för att hjälpa människor leva ett hälsosammare liv med ett strålande leende."
          : "Johanna is an invaluable member of our team and has a solid background in dental care as well as experience from orthopedics and obstetric care. She takes care of her own patients and also provides assistance, making her a central cog in the clinic. Johanna is deeply committed to her work and has a passion for helping people live healthier lives with a radiant smile.",
    },
    {
      name: "Samra Salama",
      role: locale === "sv" ? "Tandsköterska" : "Dental Assistant",
      image: "/placeholder.svg?height=400&width=300",
      bio: locale === "sv" ? "Mer information kommer snart." : "More information will be added soon.",
    },
  ]

  // Values
  const values = [
    {
      title: locale === "sv" ? "Digital Precision" : "Digital Precision",
      description:
        locale === "sv"
          ? "Vi använder den senaste digitala teknologin för att säkerställa precision, förutsägbarhet och optimala resultat i alla behandlingar."
          : "We use the latest digital technology to ensure precision, predictability, and optimal results in all treatments.",
    },
    {
      title: locale === "sv" ? "Personlig Omsorg" : "Personal Care",
      description:
        locale === "sv"
          ? "Varje patient är unik och förtjänar en individuellt anpassad behandlingsplan och personlig uppmärksamhet."
          : "Every patient is unique and deserves an individually tailored treatment plan and personal attention.",
    },
    {
      title: locale === "sv" ? "Kontinuerlig Utveckling" : "Continuous Development",
      description:
        locale === "sv"
          ? "Vi investerar kontinuerligt i utbildning och ny teknologi för att ligga i framkant inom modern tandvård."
          : "We continuously invest in education and new technology to stay at the forefront of modern dentistry.",
    },
  ]

  return (
    <div className="flex flex-col pb-16">
      <AnimatedBackground />

      <VideoHero dictionary={dict.home.hero} />

      <AnimatedSection animation="slideUp" className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <AnimatedCounter end={5000} suffix="+" title="Happy Patients" description="Satisfied smiles and counting" />
          <AnimatedCounter end={15} suffix="+" title="Years Experience" description="Providing quality dental care" />
          <AnimatedCounter end={12} title="Dental Experts" description="Highly qualified professionals" />
          <AnimatedCounter end={25} suffix="+" title="Services" description="Comprehensive dental solutions" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn">
        <ServicesOverview dictionary={dict.home.services} />
      </AnimatedSection>

      <AnimatedSection animation="slideUp">
        <TechnologySection dictionary={dict.home.technology} />
      </AnimatedSection>

      <AnimatedSection animation="slideUp" className="container py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            {locale === "sv" ? "Digital Precision i Praktiken" : "Digital Precision in Practice"}
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            {locale === "sv"
              ? "Upplev skillnaden med vår digitala tandvårdsteknologi"
              : "Experience the difference with our digital dental technology"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Tooth3D />
          </div>
          <StaggeredChildren>
            <h3 className="text-2xl font-bold text-white mb-4">
              {locale === "sv" ? "Digital Tandvård" : "Digital Dentistry"}
            </h3>
            <p className="text-gray-400 mb-4">
              {locale === "sv"
                ? "Vår klinik använder den senaste digitala teknologin för att ge precis, effektiv och bekväm tandvård."
                : "Our clinic utilizes the latest digital technology to provide precise, efficient, and comfortable dental care."}
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span>
                  {locale === "sv"
                    ? "3D digital scanning för exakta avtryck"
                    : "3D digital scanning for accurate impressions"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span>
                  {locale === "sv" ? "Digital röntgen med minimal strålning" : "Digital X-rays with minimal radiation"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span>{locale === "sv" ? "Datorguidad implantatplacering" : "Computer-guided implant placement"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span>
                  {locale === "sv"
                    ? "Samma-dag-kronor med CAD/CAM-teknologi"
                    : "Same-day crowns with CAD/CAM technology"}
                </span>
              </li>
            </ul>
          </StaggeredChildren>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn">
        <Testimonials dictionary={dict.home.testimonials} />
      </AnimatedSection>

      {/* Integrated Staff Section */}
      <HomeStaffSection
        doctors={doctors}
        staff={staff}
        values={values}
        locale={locale}
        titles={{
          doctors: locale === "sv" ? "Våra Tandläkare" : "Our Dentists",
          doctorsSubtitle:
            locale === "sv"
              ? "Våra tandläkare är specialister inom sina respektive områden och använder den senaste digitala teknologin för att ge dig bästa möjliga vård."
              : "Our dentists are specialists in their respective fields and use the latest digital technology to provide you with the best possible care.",
          staff: locale === "sv" ? "Vår Personal" : "Our Staff",
          staffSubtitle:
            locale === "sv"
              ? "Vår dedikerade personal säkerställer att din upplevelse hos Baltzar Tandvård är så bekväm och smidig som möjligt."
              : "Our dedicated staff ensures that your experience at Baltzar Tandvård is as comfortable and smooth as possible.",
          values: locale === "sv" ? "Våra Värderingar" : "Our Values",
          valuesSubtitle:
            locale === "sv"
              ? "På Baltzar Tandvård styrs vi av ett antal kärnvärderingar som formar hur vi arbetar och interagerar med våra patienter."
              : "At Baltzar Tandvård, we are guided by a set of core values that shape how we work and interact with our patients.",
        }}
      />
    </div>
  )
}

