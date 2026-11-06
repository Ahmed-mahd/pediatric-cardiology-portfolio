import json, re
from pathlib import Path

path = Path('src/app/data.ts')
s = path.read_text(encoding='utf-8')

def js(value):
    return json.dumps(value, ensure_ascii=False, indent=2)

publications = [
{"title":"Screening of Pediatric Patients with Congenital Anomalies of the Kidney and Urinary Tract for Associated Congenital Heart Disease in a Tertiary Care Setting","journal":"Pediatric Nephrology","year":"2026","authors":"","doi":"https://pubmed.ncbi.nlm.nih.gov/42432369/"},
{"title":"Left Atrium Function Study Affection and Myocardial Deformations Before and After Ventricular Septal Defect Surgical Closure","journal":"Journal of Cardiovascular Echography","year":"2026","authors":"","doi":"https://doi.org/10.4103/jcecho.jcecho_56_25"},
{"title":"The Blood Speckle Tracking Fluid Dynamics Before and After Ventricular Septal Defect Surgery","journal":"Journal of Cardiovascular Echography","year":"2026","authors":"","doi":"https://doi.org/10.4103/jcecho.jcecho_169_25"},
{"title":"Prenatal Detection of Interatrial Septal Aneurysm With Postnatal Follow-Up: A Rare Pediatric Case of Arrhythmia in a Two-Year-Old Male","journal":"Cureus","year":"2026","authors":"","doi":"https://doi.org/10.7759/cureus.106728"},
{"title":"Comparative Study Between Oral and Intralesional Injection of Beta-Blocker in the Treatment of Infantile Capillary Hemangioma","journal":"Egyptian Pediatric Association Gazette","year":"2025","authors":"","doi":"https://doi.org/10.1186/s43054-025-00371-w"},
{"title":"Interventional Nutritional Rehabilitation Regimen Impact on Myocardial Function Indices in Infants with Interventricular Septal Defect","journal":"Egyptian Pediatric Association Gazette","year":"2025","authors":"Sahar S. Sheta et al.","doi":"https://doi.org/10.1186/s43054-025-00359-6"},
{"title":"Transcatheter Closure of Ventricular Septal Defects: Early and Midterm Follow-up Results","journal":"CVREP Journal, Volume 8, Issue 1","year":"","authors":"Sahar S. Sheta, Rasha Amar, Mohamed Samir, Samar Hassan","doi":"https://cvrepj.journals.ekb.eg/article_367329.html"},
{"title":"Vitamin D Levels and Its Correlation with the Severity of Mitral Valve Insufficiency in Rheumatic Heart Disease Pediatric Patients: A Case Control Study from Egypt","journal":"African Journal of Biological Sciences","year":"2024","authors":"","doi":"https://www.afjbs.com/uploads/paper/7fe5ec274dcc23136ca021f5d1d6dac1.pdf"},
{"title":"Developmental Assessment of Infants with Congenital Heart Disease: A Cross-Sectional Study","journal":"Egyptian Pediatric Association Gazette","year":"2023","authors":"","doi":"https://doi.org/10.1186/s43054-022-00154-7"},
{"title":"Margin Between Success and Failure of PDA Stenting for Duct-Dependent Pulmonary Circulation","journal":"PLOS ONE","year":"2022","authors":"Agha HM et al.; Sheta SS","doi":"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0265031"},
{"title":"Experience with Balloon Pulmonary Valvuloplasty and Predictors of Outcome: A Ten-Year Study","journal":"Cardiology in the Young","year":"2020","authors":"Sahar Shaker","doi":"https://pubmed.ncbi.nlm.nih.gov/32070441/"},
{"title":"Fetal Heart Examination at the Time of 13 Weeks Scan: A 5 Years' Prospective Study","journal":"Journal of Perinatal Medicine","year":"2019","authors":"","doi":"https://doi.org/10.1515/jpm-2019-0143"},
{"title":"Participation in Research Improves Overall Patient Management: Insights from the Global Rheumatic Heart Disease Registry (REMEDY)","journal":"Cardiovascular Journal of Africa","year":"2018","authors":"","doi":"https://pubmed.ncbi.nlm.nih.gov/29570206/"},
{"title":"Clinical Outcomes in 3343 Children and Adults with Rheumatic Heart Disease from 14 Low- and Middle-Income Countries: Two-Year Follow-Up of the Global Rheumatic Heart Disease Registry (the REMEDY Study)","journal":"Circulation","year":"2016","authors":"REMEDY Study Investigators","doi":"https://pubmed.ncbi.nlm.nih.gov/27702773/"},
{"title":"Inhomogeneous Longitudinal Cardiac Rotation and Impaired Left Ventricular Longitudinal Strain in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis","journal":"Echocardiography","year":"2015","authors":"","doi":"https://pubmed.ncbi.nlm.nih.gov/25441704/"},
{"title":"Characteristics, Complications, and Gaps in Evidence-Based Interventions in Rheumatic Heart Disease: The Global Rheumatic Heart Disease Registry (the REMEDY Study)","journal":"European Heart Journal","year":"2015","authors":"REMEDY Study Investigators","doi":"https://pubmed.ncbi.nlm.nih.gov/25425448/"},
{"title":"Rheumatic Heart Disease in Africa: The Mosi-o-Tunya Call to Action","journal":"The Lancet Global Health","year":"2014","authors":"Collaborative contribution","doi":"https://pubmed.ncbi.nlm.nih.gov/25103507/"},
{"title":"Rationale and Design of a Global Rheumatic Heart Disease Registry: The REMEDY Study","journal":"American Heart Journal","year":"2012","authors":"Collaborative contribution","doi":"https://scholar.cu.edu.eg/?q=sahar_sheta/biocv/cv"},
{"title":"Association of Tumor Necrosis Factor-Alpha Polymorphisms with Susceptibility and Clinical Outcomes of Rheumatic Heart Disease","journal":"Saudi Medical Journal","year":"2010","authors":"Amal A. Mohamed, Laila A. Rashed, Saher M. Shaker, Rasha I. Ammar","doi":"https://pubmed.ncbi.nlm.nih.gov/20563362/"},
{"title":"Early Somatic Catch-Up Growth in Postoperative Cardiac Patients at Cairo University Hospitals","journal":"Egyptian Heart Journal","year":"2008","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Pulsed Doppler-Derived Echocardiographic Assessment of Right Ventricle in Healthy Neonates","journal":"Egyptian Heart Journal","year":"2008","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease","journal":"Egyptian Heart Journal","year":"2008","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Neurocardiogenic Syncope: Head-Up Tilt Test as a Diagnostic Tool in Children","journal":"Egyptian Heart Journal","year":"2008","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Gestational Age-Specific Mortality Rate in NICU at Cairo University Hospitals","journal":"Kasr El Eini Medical Journal","year":"2008","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Evaluation of the Health Educational Program for Type I Diabetes Among Egyptian Children","journal":"Gazette of the Egyptian Pediatric Association","year":"2007","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Protein C Activity, Protein S, Antithrombin III, Factor V Leiden (Q506) and MTHFR 677 C/T Polymorphism in Children with Hepatic Veno-Occlusive Disease","journal":"Alexandria Journal of Pediatrics","year":"2007","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Effects of L-Carnitine on Cardiac Function in Hemodialyzed Children","journal":"Journal of the Egyptian Society for Pediatric Nephrology and Transplantation","year":"2007","authors":"Bahia Mostafa, Sahar Shaker, Fateena Fadel, Mona Farid, Osama Elsayed Geget","doi":"https://applications.emro.who.int/imemrf/"},
{"title":"Study of Adrenomedullin in Children with Heart Failure","journal":"Alexandria Journal of Pediatrics","year":"2005","authors":"Hala Agha, Sahar Shaker, Amal A. Mohamed","doi":"https://applications.emro.who.int/imemrf/Alexandria_j_Pediatrics/2005_19_1_17.pdf"},
{"title":"Optic Nerve Glioma and Colonic Polyposis: Report of a New Association","journal":"Acta Paediatrica","year":"2004","authors":"S. S. Sheta, E. A. El-Toukhy, H. M. Khattab","doi":"https://pubmed.ncbi.nlm.nih.gov/15384896/"},
{"title":"Infants and Children with Protein Energy Malnutrition: Cardiac Aspect and Echocardiographic Systolic, Diastolic and LV Mass Indices","journal":"Egyptian Heart Journal","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Anterior Malaligned Ventricular Septal Defect: An Echocardiographic Finding and Its Clinical Implication","journal":"Alexandria Journal of Pediatrics","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Leaky Mitral Valve in the Pediatric Age Group","journal":"Gazette of the Egyptian Pediatric Association","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Acute Follicular Tonsillitis Among Egyptian Children: Towards New Emerging Pathogens with Changing Therapeutic Strategies","journal":"Gazette of the Egyptian Pediatric Association","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Correlation Between Neurological and Ocular Findings in Craniofacial Anomalies","journal":"Kasr El Eini Medical Journal","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Re-Evaluation of Management Policy of Patients with High Anti-Streptolysin O Titre","journal":"Kasr El Eini Medical Journal","year":"2003","authors":"CV-listed record; author list requires verification","doi":"#"},
{"title":"Valvular Affection in Rheumatic Patients Without Evident Carditis","journal":"Alexandria Journal of Pediatrics","year":"2001","authors":"CV-listed record; author list requires verification","doi":"#"},
]

conferences = [
("PDA Stenting in Duct-Dependent Pulmonary Circulation by Different Approach: Single-Center Experience","PICS-AICS Virtual Symposium","2020","Virtual"),
("Real-Time Three-Dimensional Echocardiography in Valvular Pulmonary Stenosis Among Pediatric Age Group","6th International Conference on Clinical & Experimental Cardiology","2015","San Antonio, USA"),
("Longitudinal Cardiac Rotation Abnormalities in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis: A Pilot Study","Conference abstract","2015","International"),
("Real-Time Three-Dimensional Echocardiography in Valvular Pulmonary Stenosis Among Pediatric Age Group","19th World Congress on Heart Disease","2014","Boston, USA"),
("Perinatal Changes in Cardiac Function: Improvement from Fetus to Neonate","24th World Congress on Ultrasound in Obstetrics and Gynecology","2014","Barcelona, Spain"),
("Longitudinal Cardiac Rotation Abnormalities in Children and Young Adults with End-Stage Renal Failure Undergoing Hemodialysis: A Pilot Study","Annual Congress of the German Society of Pediatric Cardiology","2013","Weimar, Germany"),
("Cardiac Aspect and Echocardiographic Assessment of Systolic, Diastolic and LV Mass Indices Among Infants with Protein Energy Malnutrition","American Society of Echocardiography meeting","","Washington, DC"),
("Echocardiographic Myocardial Performance (Tei Index) Assessment of Right Ventricle in Healthy Newborns","16th World Congress on Heart Disease","2011","Vancouver, Canada"),
("Feasibility and Reproducibility of Conventional and Color-Coded Tissue Doppler M-Mode Echocardiography in the Assessment of Septal-to-Posterior Wall Motion Delay in Children with Right Ventricular Pacing","Association for European Paediatric and Congenital Cardiology meeting","2010","Innsbruck, Austria"),
("Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease","International Congress of Pediatrics","2007","Athens, Greece"),
("Correlation Between Neurological and Ocular Findings in Craniofacial Anomalies","6th Ophthalmic Panarab African International Conference","2003","Tunis"),
("Acute Follicular Tonsillitis Among Egyptian Children: Towards New Emerging Pathogens with Changing Therapeutic Strategies","UMEMPS Congress","2003","Marrakesh, Morocco"),
("Infants and Children with Protein Energy Malnutrition: Cardiac Aspect and Echocardiographic Systolic, Diastolic and LV Mass Indices","UMEMPS Congress","2003","Marrakesh, Morocco"),
("Turcot Syndrome and Optic Nerve Glioma: A New Association","American Academy of Ophthalmology meeting","","New Orleans, USA"),
("Three-Dimensional Rotational Angiography in the Catheter Lab","CardioAlex International Conference","2014","Alexandria, Egypt"),
("Four-Dimensional Echocardiography in Congenital Mitral Stenosis","CardioAlex International Conference","2014","Alexandria, Egypt"),
("New Modalities of Visualizing the Heart","1st Annual Scientific Meeting of Pediatric Cardiac Surgery","2013","Health Insurance Hospital"),
("Fetal Echocardiography: Why? When? Where?","CardioAlex International Conference","2013","Alexandria, Egypt"),
("Early Trimester Fetal Echocardiography","CardioAlex International Conference","2013","Alexandria, Egypt"),
("Four-Dimensional Fetal Echocardiography in Egypt","Ramses, Stem Cells & Pediatric Cardiology: Hand in Hand","2013","Egypt"),
("Heterotaxia: Role of Fetal Echocardiography","CardioAlex International Conference","2012","Alexandria, Egypt"),
("Role of Echocardiography in the NICU","3rd Scientific Conference of Pediatric Intensive Care, Ain Shams University","2012","Alexandria, Egypt"),
("Neonatal Cardiac Emergencies","4th Annual Conference, Society of El Galaa Hospital Friends","2011","Egypt"),
("Four-Dimensional Echocardiographic Assessment of Semilunar Valves","3rd International Meeting of Pediatric Cardiology and Cardiac Surgery","2010","Egypt"),
("Cardiovascular Changes in End-Stage Renal Failure Patients","21st Annual Conference of the Pediatrics Department, Cairo University","2009","Cairo, Egypt"),
("Neurocardiogenic Syncope: Head-Up Tilt Test as a Diagnostic Tool in Children","19th Annual Conference of the Pediatrics Department, Cairo University","2007","Cairo, Egypt"),
("Anterior Malaligned Ventricular Septal Defect: An Echocardiographic Finding and Its Clinical Implication","16th Annual Egyptian Pediatric Conference","2003","Egypt"),
("Neurological and Neuro-Ophthalmological Manifestations of Craniosynostosis Syndromes","Egyptian Ophthalmology Society annual meeting","2000","Cairo, Egypt"),
("Neonatal Cyanosis","International Pediatric Congress","1994","Cairo, Egypt"),
("Predictive Accuracy of the Different Diagnostic Measures in Neurologically Free Syncope in Children","Egyptian Ophthalmology Society annual meeting","2000","Egypt"),
("REMEDY Study / Stop ASAP RHD: National Representative of Egypt","Continental Stop ASAP RHD meetings","2010–2014","Johannesburg · Cape Town · Senegal · Zambia"),
]

theses = [
("Mitral Valve Affection in Rheumatic Activity Without Carditis","M.Sc.","Cairo University","1999"),
("Interleukin Level in Acute and Congestive Heart Failure","M.Sc.","Cairo University","2001"),
("Re-Evaluation of Management Policy of Patients with High Anti-Streptolysin O Titre","M.Sc.","Cairo University","2002"),
("Prevalence and Epidemiology of New Emerging Organisms Causing Acute Follicular Tonsillitis Among Egyptian Children","M.Sc.","Cairo University","2003"),
("Study of Adrenomedullin in Children with Heart Failure","M.Sc.","Cairo University","2004"),
("Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease","M.Sc.","Cairo University","2005"),
("Evaluation of the Health Educational Program for Type I Diabetes Among Egyptian Children","M.Sc.","Cairo University","2006"),
("Gestational Age-Specific Mortality Rate in NICU at Cairo University Hospitals","M.Sc.","Cairo University","2007"),
("Early Somatic Catch-Up Growth in Postoperative Cardiac Patients at Cairo University Hospitals","M.Sc.","Cairo University","2008"),
("Tissue Doppler Echocardiography Assessment in RV Versus LV Postoperative Pacing","M.Sc.","Cairo University","2009"),
("Association of Polymorphism Within the Promoter Region of Tumor Necrosis Factor Alpha with Development of Rheumatic Heart Disease","M.Sc.","Cairo University","2010"),
("Dermatoglyphic Profile Pattern: An Egyptian Study Among Children with Rheumatic Fever and Rheumatic Heart Disease","M.Sc.","Ain Shams University","2011"),
("Prevalence of Rheumatic Heart Disease in Egypt Among Pediatric Age Group","M.Sc.","Cairo University","2011"),
("Accuracy and Feasibility of Real-Time Three-Dimensional Transthoracic Echocardiography in Valvular Pulmonary Stenosis Pre- and Post-Catheterization","M.Sc.","Cairo University","2012"),
("Tissue Doppler and Speckle Tracking in Children with Rickets","M.Sc.","Cairo University","2013"),
("Early Detection of Congenital Heart Disease in the First Trimester in High-Risk Pregnancy","M.Sc.","Cairo University","2014"),
("Assessment of the Fetal Heart in the First Trimester for Detection of Major Cardiac Anomalies","M.D.","Cairo University","2014"),
("Fetal Versus Neonatal Echocardiography in Congenital Heart Disease: A Prospective Cross-Sectional Study","M.D.","Cairo University","2014"),
("Study of the Ductus Venosus in the First Trimester and Its Relation to Fetal Abnormalities","Postgraduate thesis — degree requires verification","Cairo University","2014"),
("Multimodality Echocardiography in Assessment of Hemodynamically Significant VSD","M.Sc.","Cairo University","2014"),
]

own_research = [
{"title":"Screening the Different Underlying Etiologies of Neonatal Cyanosis","degree":"M.Sc. research thesis","institution":"Cairo University","year":"1994"},
{"title":"Predictive Accuracy of the Different Diagnostic Measures in Neurologically Free Syncope in Children","degree":"M.D. research thesis","institution":"Cairo University","year":"1997"},
]

pub_text = '  publications: ' + js([dict(x, type='journal') for x in publications]) + ',\n'
conf_text = '  conferences: ' + js([{"title":a,"venue":b,"year":c,"location":d} for a,b,c,d in conferences]) + ',\n'
thesis_text = '  supervisedTheses: ' + js([{"title":a,"degree":b,"university":c,"year":d} for a,b,c,d in theses]) + ',\n'
own_text = '  ownResearch: ' + js(own_research) + ',\n'

s = re.sub(r'  publications: \[.*?\n  \],\n\n  // ─── CONFERENCE PRESENTATIONS', pub_text + '\n  // ─── CONFERENCE PRESENTATIONS', s, count=1, flags=re.S)
s = re.sub(r'  conferences: \[.*?\n  \],\n\n  // ─── SUPERVISED THESES', conf_text + '\n  // ─── SUPERVISED THESES', s, count=1, flags=re.S)
s = re.sub(r'  supervisedTheses: \[.*?\n  \],\n\n  // ─── AWARDS & HONORS', thesis_text + own_text + '\n  // ─── AWARDS & HONORS', s, count=1, flags=re.S)
s = s.replace('{ value: 31, label: "Conference Presentations", icon: "conferences" }', '{ value: 31, label: "Conference Presentations", icon: "conferences" }')
path.write_text(s, encoding='utf-8')
print(f'Updated publications={len(publications)} conferences={len(conferences)} theses={len(theses)} ownResearch={len(own_research)}')
