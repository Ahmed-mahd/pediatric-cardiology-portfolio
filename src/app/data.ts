// ============================================================
// PROFESSOR PORTFOLIO - DATA CONFIGURATION
// Prof. Sahar Shaker Sheta
// Professor of Pediatrics & Pediatric Cardiology
// Kasr Al Ainy Faculty of Medicine, Cairo University
// ============================================================

export const professorData = {
  // ─── PERSONAL INFO ───────────────────────────────────────
  name: {
    full: "Dr. Sahar Shaker Sheta",
    first: "Sahar",
    last: "Sheta",
    arabic: "د. سحر شاكر شتا",
    credentials: "MD, PhD",
  },

  // ─── TITLE & POSITION ───────────────────────────────────
  title: "Professor of Pediatrics & Pediatric Cardiology",
  titleArabic: "أستاذ طب الأطفال و قلب الأطفال كلية طب القصر العيني",
  department: "Pediatrics & Pediatric Cardiology",
  institution: "Kasr Al Ainy Faculty of Medicine, Cairo University",
  institutionArabic: "كلية طب القصر العيني - جامعة القاهرة",

  // ─── HERO SECTION ────────────────────────────────────────
  hero: {
    tagline: "Excellence in Pediatric Cardiology",
    subtitle:
      "Dedicated to advancing pediatric cardiac care through innovative echocardiographic research, compassionate clinical practice, and shaping the future of pediatric cardiology in Egypt and beyond.",
  },

  // ─── CONTACT INFO ────────────────────────────────────────
  contact: {
    email: "sahar.sheta@kasralainy.edu.eg", // TODO: confirm actual email
    phone: "+20 [Phone Number]", // TODO: Replace with actual phone
    location: "Cairo, Egypt",
    address:
      "Kasr Al Ainy Street, Old Cairo, Cairo, Egypt", // TODO: Replace with actual office address
    officeHours: "Sunday – Thursday, 9:00 AM – 3:00 PM", // TODO: confirm
    appointmentUrl: "#", // TODO: Replace with appointment booking link
  },

  // ─── SOCIAL LINKS ───────────────────────────────────────
  social: {
    linkedin: "#", // TODO: Replace
    researchGate: "#", // TODO: Replace
    googleScholar:
      "https://scholar.google.com/scholar?q=%22Sahar+Shaker+Sheta%22",
    orcid: "#", // TODO: Replace
    scopus: "#", // TODO: Replace
  },

  // ─── ABOUT SECTION ──────────────────────────────────────
  about: {
    bio: [
      "Prof. Sahar Shaker Sheta is a distinguished Professor of Pediatrics and Pediatric Cardiology at Kasr Al Ainy Faculty of Medicine, Cairo University — one of the oldest and most prestigious medical institutions in the Middle East and Africa.",
      "With a career spanning over three decades, she has made significant contributions to pediatric echocardiography, fetal cardiology, rheumatic heart disease research, and congenital heart disease management.",
      "She is an internationally recognized researcher, serving as Egypt's national representative in the landmark Global Rheumatic Heart Disease Registry (REMEDY Study), published in top-tier journals including Circulation, European Heart Journal, and The Lancet Global Health.",
      "Prof. Sheta has supervised more than 20 postgraduate theses and has presented her research at leading international conferences across Europe, the Americas, and Africa.",
    ],
    bioArabic:
      "أستاذ طب الأطفال وقلب الأطفال بكلية طب القصر العيني - جامعة القاهرة. خبرة تمتد لأكثر من ثلاثة عقود في مجال أمراض قلب الأطفال والموجات فوق الصوتية للقلب.",
    image: "/Profile-picture.jpeg",
  },

  // ─── EDUCATION ──────────────────────────────────────────
  education: [
    {
      degree: "MD (Medical Doctorate) in Pediatrics",
      institution: "Cairo University – Kasr Al Ainy",
      year: "1997",
      thesis:
        "Predictive Accuracy of the Different Diagnostic Measures in Neurologically Free Syncope in Children",
    },
    {
      degree: "M.Sc. in Pediatrics",
      institution: "Cairo University – Kasr Al Ainy",
      year: "1994",
      thesis:
        "Screening the Different Underlying Etiologies of Neonatal Cyanosis",
    },
    {
      degree: "MBBCh (Bachelor of Medicine & Surgery)",
      institution: "Cairo University – Kasr Al Ainy",
      year: "", // TODO: Replace
    },
  ],

  // ─── EXPERIENCE / POSITIONS ─────────────────────────────
  experience: [
    {
      title: "Professor of Pediatrics & Pediatric Cardiology",
      institution: "Kasr Al Ainy Faculty of Medicine, Cairo University",
      period: "Present",
      description:
        "Leading clinical practice, research, and training in pediatric cardiology. Specializing in advanced echocardiography, fetal cardiac assessment, and congenital heart disease.",
    },
    {
      title: "National Representative – REMEDY Study (Egypt)",
      institution: "Global Rheumatic Heart Disease Registry",
      period: "2010 – 2016",
      description:
        "Represented Egypt in the landmark multi-country REMEDY study across 14 low- and middle-income countries, yielding publications in Circulation, European Heart Journal, and The Lancet Global Health.",
    },
    {
      title: "Associate Professor of Pediatrics",
      institution: "Kasr Al Ainy Faculty of Medicine, Cairo University",
      period: "Previous",
      description:
        "Conducted research in pediatric echocardiography and supervised multiple M.Sc. and MD postgraduate theses.",
    },
  ],

  // ─── SERVICES / EXPERTISE ───────────────────────────────
  services: [
    {
      icon: "echocardiography",
      title: "Pediatric Echocardiography",
      titleArabic: "الموجات فوق الصوتية لقلب الأطفال",
      description:
        "Advanced echocardiographic assessment including 3D/4D imaging, speckle tracking, tissue Doppler, and blood speckle tracking fluid dynamics for comprehensive cardiac evaluation in children.",
    },
    {
      icon: "fetalCardiology",
      title: "Fetal Cardiology",
      titleArabic: "قلب الجنين",
      description:
        "Expert fetal cardiac assessment from the first trimester, early detection of congenital heart anomalies, and prenatal counseling for high-risk pregnancies.",
    },
    {
      icon: "congenitalHeart",
      title: "Congenital Heart Disease",
      titleArabic: "أمراض القلب الخلقية",
      description:
        "Diagnosis and management of congenital cardiac anomalies including VSD, PDA, pulmonary stenosis, and complex congenital heart defects in neonates and children.",
    },
    {
      icon: "rheumaticHeart",
      title: "Rheumatic Heart Disease",
      titleArabic: "أمراض القلب الروماتيزمية",
      description:
        "Internationally recognized expertise in rheumatic heart disease research, prevention strategies, and long-term management, with contributions to the global REMEDY registry.",
    },
  ],

  // ─── STATISTICS ─────────────────────────────────────────
  statistics: [
    { value: 36, label: "Journal Publications", icon: "publications" },
    { value: 31, label: "Conference Presentations", icon: "conferences" },
    { value: 22, label: "Supervised Theses", icon: "students" },
    { value: 30, label: "Years of Experience", icon: "experience" },
  ],

  // ─── RESEARCH INTERESTS ────────────────────────────────
  researchInterests: [
    "Pediatric Echocardiography",
    "Fetal Cardiology",
    "Rheumatic Heart Disease",
    "Congenital Heart Disease",
    "Speckle Tracking Imaging",
    "3D / 4D Cardiac Imaging",
    "Tissue Doppler Echocardiography",
    "Neonatal Cardiology",
    "PDA Stenting",
    "Cardiac Assessment in Malnutrition",
  ],

  // ─── SELECTED PUBLICATIONS (Journal) ───────────────────
  publications: [
  {
    "title": "Screening of Pediatric Patients with Congenital Anomalies of the Kidney and Urinary Tract for Associated Congenital Heart Disease in a Tertiary Care Setting",
    "journal": "Pediatric Nephrology",
    "year": "2026",
    "authors": "",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/42432369/",
    "type": "journal"
  },
  {
    "title": "Left Atrium Function Study Affection and Myocardial Deformations Before and After Ventricular Septal Defect Surgical Closure",
    "journal": "Journal of Cardiovascular Echography",
    "year": "2026",
    "authors": "",
    "doi": "https://doi.org/10.4103/jcecho.jcecho_56_25",
    "type": "journal"
  },
  {
    "title": "The Blood Speckle Tracking Fluid Dynamics Before and After Ventricular Septal Defect Surgery",
    "journal": "Journal of Cardiovascular Echography",
    "year": "2026",
    "authors": "",
    "doi": "https://doi.org/10.4103/jcecho.jcecho_169_25",
    "type": "journal"
  },
  {
    "title": "Prenatal Detection of Interatrial Septal Aneurysm With Postnatal Follow-Up: A Rare Pediatric Case of Arrhythmia in a Two-Year-Old Male",
    "journal": "Cureus",
    "year": "2026",
    "authors": "",
    "doi": "https://doi.org/10.7759/cureus.106728",
    "type": "journal"
  },
  {
    "title": "Comparative Study Between Oral and Intralesional Injection of Beta-Blocker in the Treatment of Infantile Capillary Hemangioma",
    "journal": "Egyptian Pediatric Association Gazette",
    "year": "2025",
    "authors": "",
    "doi": "https://doi.org/10.1186/s43054-025-00371-w",
    "type": "journal"
  },
  {
    "title": "Interventional Nutritional Rehabilitation Regimen Impact on Myocardial Function Indices in Infants with Interventricular Septal Defect",
    "journal": "Egyptian Pediatric Association Gazette",
    "year": "2025",
    "authors": "Sahar S. Sheta et al.",
    "doi": "https://doi.org/10.1186/s43054-025-00359-6",
    "type": "journal"
  },
  {
    "title": "Transcatheter Closure of Ventricular Septal Defects: Early and Midterm Follow-up Results",
    "journal": "CVREP Journal, Volume 8, Issue 1",
    "year": "",
    "authors": "Sahar S. Sheta, Rasha Amar, Mohamed Samir, Samar Hassan",
    "doi": "https://cvrepj.journals.ekb.eg/article_367329.html",
    "type": "journal"
  },
  {
    "title": "Vitamin D Levels and Its Correlation with the Severity of Mitral Valve Insufficiency in Rheumatic Heart Disease Pediatric Patients: A Case Control Study from Egypt",
    "journal": "African Journal of Biological Sciences",
    "year": "2024",
    "authors": "",
    "doi": "https://www.afjbs.com/uploads/paper/7fe5ec274dcc23136ca021f5d1d6dac1.pdf",
    "type": "journal"
  },
  {
    "title": "Developmental Assessment of Infants with Congenital Heart Disease: A Cross-Sectional Study",
    "journal": "Egyptian Pediatric Association Gazette",
    "year": "2023",
    "authors": "",
    "doi": "https://doi.org/10.1186/s43054-022-00154-7",
    "type": "journal"
  },
  {
    "title": "Margin Between Success and Failure of PDA Stenting for Duct-Dependent Pulmonary Circulation",
    "journal": "PLOS ONE",
    "year": "2022",
    "authors": "Agha HM et al.; Sheta SS",
    "doi": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0265031",
    "type": "journal"
  },
  {
    "title": "Experience with Balloon Pulmonary Valvuloplasty and Predictors of Outcome: A Ten-Year Study",
    "journal": "Cardiology in the Young",
    "year": "2020",
    "authors": "Sahar Shaker",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/32070441/",
    "type": "journal"
  },
  {
    "title": "Fetal Heart Examination at the Time of 13 Weeks Scan: A 5 Years' Prospective Study",
    "journal": "Journal of Perinatal Medicine",
    "year": "2019",
    "authors": "",
    "doi": "https://doi.org/10.1515/jpm-2019-0143",
    "type": "journal"
  },
  {
    "title": "Participation in Research Improves Overall Patient Management: Insights from the Global Rheumatic Heart Disease Registry (REMEDY)",
    "journal": "Cardiovascular Journal of Africa",
    "year": "2018",
    "authors": "",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/29570206/",
    "type": "journal"
  },
  {
    "title": "Clinical Outcomes in 3343 Children and Adults with Rheumatic Heart Disease from 14 Low- and Middle-Income Countries: Two-Year Follow-Up of the Global Rheumatic Heart Disease Registry (the REMEDY Study)",
    "journal": "Circulation",
    "year": "2016",
    "authors": "REMEDY Study Investigators",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/27702773/",
    "type": "journal"
  },
  {
    "title": "Inhomogeneous Longitudinal Cardiac Rotation and Impaired Left Ventricular Longitudinal Strain in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis",
    "journal": "Echocardiography",
    "year": "2015",
    "authors": "",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/25441704/",
    "type": "journal"
  },
  {
    "title": "Characteristics, Complications, and Gaps in Evidence-Based Interventions in Rheumatic Heart Disease: The Global Rheumatic Heart Disease Registry (the REMEDY Study)",
    "journal": "European Heart Journal",
    "year": "2015",
    "authors": "REMEDY Study Investigators",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/25425448/",
    "type": "journal"
  },
  {
    "title": "Rheumatic Heart Disease in Africa: The Mosi-o-Tunya Call to Action",
    "journal": "The Lancet Global Health",
    "year": "2014",
    "authors": "Collaborative contribution",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/25103507/",
    "type": "journal"
  },
  {
    "title": "Rationale and Design of a Global Rheumatic Heart Disease Registry: The REMEDY Study",
    "journal": "American Heart Journal",
    "year": "2012",
    "authors": "Collaborative contribution",
    "doi": "https://scholar.cu.edu.eg/?q=sahar_sheta/biocv/cv",
    "type": "journal"
  },
  {
    "title": "Association of Tumor Necrosis Factor-Alpha Polymorphisms with Susceptibility and Clinical Outcomes of Rheumatic Heart Disease",
    "journal": "Saudi Medical Journal",
    "year": "2010",
    "authors": "Amal A. Mohamed, Laila A. Rashed, Saher M. Shaker, Rasha I. Ammar",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/20563362/",
    "type": "journal"
  },
  {
    "title": "Early Somatic Catch-Up Growth in Postoperative Cardiac Patients at Cairo University Hospitals",
    "journal": "Egyptian Heart Journal",
    "year": "2008",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Pulsed Doppler-Derived Echocardiographic Assessment of Right Ventricle in Healthy Neonates",
    "journal": "Egyptian Heart Journal",
    "year": "2008",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease",
    "journal": "Egyptian Heart Journal",
    "year": "2008",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Neurocardiogenic Syncope: Head-Up Tilt Test as a Diagnostic Tool in Children",
    "journal": "Egyptian Heart Journal",
    "year": "2008",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Gestational Age-Specific Mortality Rate in NICU at Cairo University Hospitals",
    "journal": "Kasr El Eini Medical Journal",
    "year": "2008",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Evaluation of the Health Educational Program for Type I Diabetes Among Egyptian Children",
    "journal": "Gazette of the Egyptian Pediatric Association",
    "year": "2007",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Protein C Activity, Protein S, Antithrombin III, Factor V Leiden (Q506) and MTHFR 677 C/T Polymorphism in Children with Hepatic Veno-Occlusive Disease",
    "journal": "Alexandria Journal of Pediatrics",
    "year": "2007",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Effects of L-Carnitine on Cardiac Function in Hemodialyzed Children",
    "journal": "Journal of the Egyptian Society for Pediatric Nephrology and Transplantation",
    "year": "2007",
    "authors": "Bahia Mostafa, Sahar Shaker, Fateena Fadel, Mona Farid, Osama Elsayed Geget",
    "doi": "https://applications.emro.who.int/imemrf/",
    "type": "journal"
  },
  {
    "title": "Study of Adrenomedullin in Children with Heart Failure",
    "journal": "Alexandria Journal of Pediatrics",
    "year": "2005",
    "authors": "Hala Agha, Sahar Shaker, Amal A. Mohamed",
    "doi": "https://applications.emro.who.int/imemrf/Alexandria_j_Pediatrics/2005_19_1_17.pdf",
    "type": "journal"
  },
  {
    "title": "Optic Nerve Glioma and Colonic Polyposis: Report of a New Association",
    "journal": "Acta Paediatrica",
    "year": "2004",
    "authors": "S. S. Sheta, E. A. El-Toukhy, H. M. Khattab",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/15384896/",
    "type": "journal"
  },
  {
    "title": "Infants and Children with Protein Energy Malnutrition: Cardiac Aspect and Echocardiographic Systolic, Diastolic and LV Mass Indices",
    "journal": "Egyptian Heart Journal",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Anterior Malaligned Ventricular Septal Defect: An Echocardiographic Finding and Its Clinical Implication",
    "journal": "Alexandria Journal of Pediatrics",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Leaky Mitral Valve in the Pediatric Age Group",
    "journal": "Gazette of the Egyptian Pediatric Association",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Acute Follicular Tonsillitis Among Egyptian Children: Towards New Emerging Pathogens with Changing Therapeutic Strategies",
    "journal": "Gazette of the Egyptian Pediatric Association",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Correlation Between Neurological and Ocular Findings in Craniofacial Anomalies",
    "journal": "Kasr El Eini Medical Journal",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Re-Evaluation of Management Policy of Patients with High Anti-Streptolysin O Titre",
    "journal": "Kasr El Eini Medical Journal",
    "year": "2003",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  },
  {
    "title": "Valvular Affection in Rheumatic Patients Without Evident Carditis",
    "journal": "Alexandria Journal of Pediatrics",
    "year": "2001",
    "authors": "CV-listed record; author list requires verification",
    "doi": "#",
    "type": "journal"
  }
],

  // ─── CONFERENCE PRESENTATIONS (selected highlights) ────
  conferences: [
  {
    "title": "PDA Stenting in Duct-Dependent Pulmonary Circulation by Different Approach: Single-Center Experience",
    "venue": "PICS-AICS Virtual Symposium",
    "year": "2020",
    "location": "Virtual"
  },
  {
    "title": "Real-Time Three-Dimensional Echocardiography in Valvular Pulmonary Stenosis Among Pediatric Age Group",
    "venue": "6th International Conference on Clinical & Experimental Cardiology",
    "year": "2015",
    "location": "San Antonio, USA"
  },
  {
    "title": "Longitudinal Cardiac Rotation Abnormalities in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis: A Pilot Study",
    "venue": "Conference abstract",
    "year": "2015",
    "location": "International"
  },
  {
    "title": "Real-Time Three-Dimensional Echocardiography in Valvular Pulmonary Stenosis Among Pediatric Age Group",
    "venue": "19th World Congress on Heart Disease",
    "year": "2014",
    "location": "Boston, USA"
  },
  {
    "title": "Perinatal Changes in Cardiac Function: Improvement from Fetus to Neonate",
    "venue": "24th World Congress on Ultrasound in Obstetrics and Gynecology",
    "year": "2014",
    "location": "Barcelona, Spain"
  },
  {
    "title": "Longitudinal Cardiac Rotation Abnormalities in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis: A Pilot Study",
    "venue": "Annual Congress of the German Society of Pediatric Cardiology",
    "year": "2013",
    "location": "Weimar, Germany"
  },
  {
    "title": "Cardiac Aspect and Echocardiographic Assessment of Systolic, Diastolic and LV Mass Indices Among Infants with Protein Energy Malnutrition",
    "venue": "American Society of Echocardiography meeting",
    "year": "",
    "location": "Washington, DC"
  },
  {
    "title": "Echocardiographic Myocardial Performance (Tei Index) Assessment of Right Ventricle in Healthy Newborns",
    "venue": "16th World Congress on Heart Disease",
    "year": "2011",
    "location": "Vancouver, Canada"
  },
  {
    "title": "Feasibility and Reproducibility of Conventional and Color-Coded Tissue Doppler M-Mode Echocardiography in the Assessment of Septal-to-Posterior Wall Motion Delay in Children with Right Ventricular Pacing",
    "venue": "Association for European Paediatric and Congenital Cardiology meeting",
    "year": "2010",
    "location": "Innsbruck, Austria"
  },
  {
    "title": "Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease",
    "venue": "International Congress of Pediatrics",
    "year": "2007",
    "location": "Athens, Greece"
  },
  {
    "title": "Correlation Between Neurological and Ocular Findings in Craniofacial Anomalies",
    "venue": "6th Ophthalmic Panarab African International Conference",
    "year": "2003",
    "location": "Tunis"
  },
  {
    "title": "Acute Follicular Tonsillitis Among Egyptian Children: Towards New Emerging Pathogens with Changing Therapeutic Strategies",
    "venue": "UMEMPS Congress",
    "year": "2003",
    "location": "Marrakesh, Morocco"
  },
  {
    "title": "Infants and Children with Protein Energy Malnutrition: Cardiac Aspect and Echocardiographic Systolic, Diastolic and LV Mass Indices",
    "venue": "UMEMPS Congress",
    "year": "2003",
    "location": "Marrakesh, Morocco"
  },
  {
    "title": "Turcot Syndrome and Optic Nerve Glioma: A New Association",
    "venue": "American Academy of Ophthalmology meeting",
    "year": "",
    "location": "New Orleans, USA"
  },
  {
    "title": "Three-Dimensional Rotational Angiography in the Catheter Lab",
    "venue": "CardioAlex International Conference",
    "year": "2014",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "Four-Dimensional Echocardiography in Congenital Mitral Stenosis",
    "venue": "CardioAlex International Conference",
    "year": "2014",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "New Modalities of Visualizing the Heart",
    "venue": "1st Annual Scientific Meeting of Pediatric Cardiac Surgery",
    "year": "2013",
    "location": "Health Insurance Hospital"
  },
  {
    "title": "Fetal Echocardiography: Why? When? Where?",
    "venue": "CardioAlex International Conference",
    "year": "2013",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "Early Trimester Fetal Echocardiography",
    "venue": "CardioAlex International Conference",
    "year": "2013",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "Four-Dimensional Fetal Echocardiography in Egypt",
    "venue": "Ramses, Stem Cells & Pediatric Cardiology: Hand in Hand",
    "year": "2013",
    "location": "Egypt"
  },
  {
    "title": "Heterotaxia: Role of Fetal Echocardiography",
    "venue": "CardioAlex International Conference",
    "year": "2012",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "Role of Echocardiography in the NICU",
    "venue": "3rd Scientific Conference of Pediatric Intensive Care, Ain Shams University",
    "year": "2012",
    "location": "Alexandria, Egypt"
  },
  {
    "title": "Neonatal Cardiac Emergencies",
    "venue": "4th Annual Conference, Society of El Galaa Hospital Friends",
    "year": "2011",
    "location": "Egypt"
  },
  {
    "title": "Four-Dimensional Echocardiographic Assessment of Semilunar Valves",
    "venue": "3rd International Meeting of Pediatric Cardiology and Cardiac Surgery",
    "year": "2010",
    "location": "Egypt"
  },
  {
    "title": "Cardiovascular Changes in End-Stage Renal Failure Patients",
    "venue": "21st Annual Conference of the Pediatrics Department, Cairo University",
    "year": "2009",
    "location": "Cairo, Egypt"
  },
  {
    "title": "Neurocardiogenic Syncope: Head-Up Tilt Test as a Diagnostic Tool in Children",
    "venue": "19th Annual Conference of the Pediatrics Department, Cairo University",
    "year": "2007",
    "location": "Cairo, Egypt"
  },
  {
    "title": "Anterior Malaligned Ventricular Septal Defect: An Echocardiographic Finding and Its Clinical Implication",
    "venue": "16th Annual Egyptian Pediatric Conference",
    "year": "2003",
    "location": "Egypt"
  },
  {
    "title": "Neurological and Neuro-Ophthalmological Manifestations of Craniosynostosis Syndromes",
    "venue": "Egyptian Ophthalmology Society annual meeting",
    "year": "2000",
    "location": "Cairo, Egypt"
  },
  {
    "title": "Neonatal Cyanosis",
    "venue": "International Pediatric Congress",
    "year": "1994",
    "location": "Cairo, Egypt"
  },
  {
    "title": "Predictive Accuracy of the Different Diagnostic Measures in Neurologically Free Syncope in Children",
    "venue": "Egyptian Ophthalmology Society annual meeting",
    "year": "2000",
    "location": "Egypt"
  },
  {
    "title": "REMEDY Study / Stop ASAP RHD: National Representative of Egypt",
    "venue": "Continental Stop ASAP RHD meetings",
    "year": "2010–2014",
    "location": "Johannesburg · Cape Town · Senegal · Zambia"
  }
],

  // ─── SUPERVISED THESES ─────────────────────────────────
  supervisedTheses: [
  {
    "title": "Mitral Valve Affection in Rheumatic Activity Without Carditis",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "1999"
  },
  {
    "title": "Interleukin Level in Acute and Congestive Heart Failure",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2001"
  },
  {
    "title": "Re-Evaluation of Management Policy of Patients with High Anti-Streptolysin O Titre",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2002"
  },
  {
    "title": "Prevalence and Epidemiology of New Emerging Organisms Causing Acute Follicular Tonsillitis Among Egyptian Children",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2003"
  },
  {
    "title": "Study of Adrenomedullin in Children with Heart Failure",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2004"
  },
  {
    "title": "Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2005"
  },
  {
    "title": "Evaluation of the Health Educational Program for Type I Diabetes Among Egyptian Children",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2006"
  },
  {
    "title": "Gestational Age-Specific Mortality Rate in NICU at Cairo University Hospitals",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2007"
  },
  {
    "title": "Early Somatic Catch-Up Growth in Postoperative Cardiac Patients at Cairo University Hospitals",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2008"
  },
  {
    "title": "Tissue Doppler Echocardiography Assessment in RV Versus LV Postoperative Pacing",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2009"
  },
  {
    "title": "Association of Polymorphism Within the Promoter Region of Tumor Necrosis Factor Alpha with Development of Rheumatic Heart Disease",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2010"
  },
  {
    "title": "Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease",
    "degree": "M.Sc.",
    "university": "Ain Shams University",
    "year": "2011"
  },
  {
    "title": "Prevalence of Rheumatic Heart Disease in Egypt Among Pediatric Age Group",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2011"
  },
  {
    "title": "Accuracy and Feasibility of Real-Time Three-Dimensional Transthoracic Echocardiography in Valvular Pulmonary Stenosis Pre- and Post-Catheterization",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2012"
  },
  {
    "title": "Tissue Doppler and Speckle Tracking in Children with Rickets",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2013"
  },
  {
    "title": "Early Detection of Congenital Heart Disease in the First Trimester in High-Risk Pregnancy",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2014"
  },
  {
    "title": "Assessment of the Fetal Heart in the First Trimester for Detection of Major Cardiac Anomalies",
    "degree": "M.D.",
    "university": "Cairo University",
    "year": "2014"
  },
  {
    "title": "Fetal Versus Neonatal Echocardiography in Congenital Heart Disease: A Prospective Cross-Sectional Study",
    "degree": "M.D.",
    "university": "Cairo University",
    "year": "2014"
  },
  {
    "title": "Study of the Ductus Venosus in the First Trimester and Its Relation to Fetal Abnormalities",
    "degree": "Postgraduate thesis — degree requires verification",
    "university": "Cairo University",
    "year": "2014"
  },
  {
    "title": "Multimodality Echocardiography in Assessment of Hemodynamically Significant VSD",
    "degree": "M.Sc.",
    "university": "Cairo University",
    "year": "2014"
  }
],
  ownResearch: [
  {
    "title": "Screening the Different Underlying Etiologies of Neonatal Cyanosis",
    "degree": "M.Sc. research thesis",
    "institution": "Cairo University",
    "year": "1994"
  },
  {
    "title": "Predictive Accuracy of the Different Diagnostic Measures in Neurologically Free Syncope in Children",
    "degree": "M.D. research thesis",
    "institution": "Cairo University",
    "year": "1997"
  }
],

  // ─── AWARDS & HONORS ───────────────────────────────────
  awards: [
    {
      title: "National Representative – REMEDY Study",
      organization:
        "Global Rheumatic Heart Disease Registry (14 countries)",
      year: "2010–2016",
    },
    {
      title: "Published in Circulation (Impact Factor ~37)",
      organization: "American Heart Association",
      year: "2016",
    },
    {
      title: "Published in European Heart Journal (Impact Factor ~39)",
      organization: "European Society of Cardiology",
      year: "2015",
    },
    {
      title: "Published in The Lancet Global Health",
      organization: "The Lancet",
      year: "2014",
    },
  ],

  // ─── MEMBERSHIPS & AFFILIATIONS ────────────────────────
  memberships: [
    "Cairo University Children's Hospital – Pediatric Cardiology Unit",
    "REMEDY Study – National Representative for Egypt",
    "Stop ASAP RHD Initiative – Continental Meetings Participant",
    "Egyptian Pediatric Association",
  ],

  // ─── SEO METADATA ──────────────────────────────────────
  seo: {
    title:
      "Prof. Sahar Shaker Sheta – Pediatric Cardiology, Kasr Al Ainy, Cairo University",
    description:
      "Professor of Pediatrics & Pediatric Cardiology at Kasr Al Ainy Faculty of Medicine, Cairo University. Expert in echocardiography, fetal cardiology, congenital heart disease, and rheumatic heart disease. REMEDY Study investigator.",
    keywords:
      "Sahar Shaker Sheta, Kasr Al Ainy, Cairo University, Pediatric Cardiology, Echocardiography, Fetal Cardiology, Rheumatic Heart Disease, REMEDY Study, Congenital Heart Disease",
  },
};
