<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operation Theatre List - OT 3</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f0f5ff;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .institution-header {
            background: linear-gradient(135deg, #1a5f7a, #159895);
            color: white;
            padding: 20px;
            text-align: center;
            border-bottom: 3px solid #0d4557;
        }
        
        .institution-name {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .institution-subtitle {
            font-size: 16px;
            margin-bottom: 8px;
            opacity: 0.9;
        }
        
        .institution-address {
            font-size: 14px;
            opacity: 0.8;
        }
        
        .ot-header {
            background: linear-gradient(to right, #2c80c5, #57a0d3);
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        h1 {
            font-size: 28px;
            margin-bottom: 15px;
            font-weight: 700;
        }
        
        .header-details {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 15px;
            background-color: rgba(255, 255, 255, 0.15);
            padding: 15px;
            border-radius: 8px;
        }
        
        .detail-item {
            margin: 8px 15px;
            font-size: 16px;
        }
        
        .detail-item strong {
            color: #e0f7fa;
        }
        
        .detail-item input, .detail-item select {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #b2ebf2;
            border-radius: 4px;
            padding: 8px 12px;
            font-size: 15px;
            color: #006064;
            width: 180px;
        }
        
        .table-container {
            overflow-x: auto;
            padding: 25px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 1200px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        th {
            background: linear-gradient(to bottom, #57a0d3, #2c80c5);
            color: white;
            text-align: left;
            padding: 14px 16px;
            font-weight: 600;
            font-size: 15px;
            position: sticky;
            top: 0;
        }
        
        td {
            padding: 12px 16px;
            border-bottom: 1px solid #e1e1e1;
            vertical-align: top;
        }
        
        tr:nth-child(even) {
            background-color: #f8fcff;
        }
        
        tr:hover {
            background-color: #e8f4fc;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #d1e3f6;
            border-radius: 4px;
            font-size: 14px;
            transition: all 0.3s;
        }
        
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #57a0d3;
            box-shadow: 0 0 5px rgba(87, 160, 211, 0.5);
        }
        
        /* Column width adjustments */
        .sno-col {
            width: 4%;
        }
        
        .name-col {
            width: 10%;
        }
        
        .age-col {
            width: 5%;
        }
        
        .sex-col {
            width: 5%;
        }
        
        .ip-col {
            width: 7%;
        }
        
        .ward-col {
            width: 7%;
        }
        
        .comorbidity-col {
            width: 12%;
        }
        
        .diagnosis-col {
            width: 12%;
            word-wrap: break-word;
            white-space: normal;
        }
        
        .procedure-col {
            width: 12%;
            word-wrap: break-word;
            white-space: normal;
        }
        
        .serology-col {
            width: 8%;
        }
        
        .anesthesia-col {
            width: 7%;
        }
        
        .surgeon-col {
            width: 10%;
        }
        
        .action-col {
            width: 5%;
            text-align: center;
        }
        
        .action-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            padding: 25px;
            border-top: 1px solid #e1e1e1;
            background-color: #f8fcff;
        }
        
        button {
            padding: 12px 25px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .btn-print {
            background: linear-gradient(to bottom, #2ecc71, #27ae60);
            color: white;
        }
        
        .btn-print:hover {
            background: linear-gradient(to bottom, #27ae60, #219653);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(39, 174, 96, 0.3);
        }
        
        .btn-save {
            background: linear-gradient(to bottom, #3498db, #2980b9);
            color: white;
        }
        
        .btn-save:hover {
            background: linear-gradient(to bottom, #2980b9, #1f6aa5);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
        }
        
        .btn-add {
            background: linear-gradient(to bottom, #9b59b6, #8e44ad);
            color: white;
        }
        
        .btn-add:hover {
            background: linear-gradient(to bottom, #8e44ad, #7d3c98);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(155, 89, 182, 0.3);
        }
        
        .btn-reset {
            background: linear-gradient(to bottom, #e74c3c, #c0392b);
            color: white;
        }
        
        .btn-reset:hover {
            background: linear-gradient(to bottom, #c0392b, #a93226);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
        }
        
        .btn-download {
            background: linear-gradient(to bottom, #f39c12, #e67e22);
            color: white;
        }
        
        .btn-download:hover {
            background: linear-gradient(to bottom, #e67e22, #d35400);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(243, 156, 18, 0.3);
        }
        
        .btn-delete {
            background: linear-gradient(to bottom, #e74c3c, #c0392b);
            color: white;
            padding: 8px 12px;
            font-size: 13px;
            width: 100%;
        }
        
        .btn-delete:hover {
            background: linear-gradient(to bottom, #c0392b, #a93226);
            transform: translateY(-2px);
            box-shadow: 0 2px 5px rgba(231, 76, 60, 0.3);
        }
        
        @media print {
            body {
                background-color: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
            }
            
            .action-buttons, .action-col {
                display: none;
            }
            
            th {
                background: #2c80c5 !important;
                color: white !important;
                -webkit-print-color-adjust: exact;
            }
        }
        
        @media (max-width: 768px) {
            .header-details {
                flex-direction: column;
            }
            
            .detail-item {
                margin: 8px 0;
            }
            
            .detail-item input, .detail-item select {
                width: 100%;
            }
            
            .action-buttons {
                flex-direction: column;
            }
        }
        
        .footer-note {
            padding: 15px 25px;
            background-color: #e8f4fc;
            border-top: 1px solid #d1e3f6;
            font-size: 14px;
            color: #2c80c5;
            text-align: center;
        }
        
        /* Diagnosis and Procedure textarea styling */
        textarea {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            resize: vertical;
            min-height: 80px;
        }
        
        .comorbidity-more {
            margin-top: 5px;
            font-size: 12px;
            color: #2c80c5;
            cursor: pointer;
        }
        
        .comorbidity-more:hover {
            text-decoration: underline;
        }
        
        .custom-input {
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="institution-header">
            <div class="institution-name">Indira Gandhi Medical College & Research Institute</div>
            <div class="institution-subtitle">(A Government of Puducherry Institution functioning under the Perunthalaivar Kamaraj Medical College Society)</div>
            <div class="institution-address">Vazhudhavur Road, Kathirkamam, Puducherry - 605 009</div>
        </div>
        
        <header class="ot-header">
            <h1>OPERATION THEATRE LIST - OT 3</h1>
            <div class="header-details">
                <div class="detail-item">
                    <strong>Date:</strong> 
                    <input type="date" value="2025-08-26" id="ot-date">
                </div>
                <div class="detail-item">
                    <strong>Time:</strong> 
                    <input type="time" value="08:00" id="ot-time">
                </div>
                <div class="detail-item">
                    <strong>Department:</strong> 
                    <input type="text" value="Surgery Unit - 6" id="ot-dept">
                </div>
                <div class="detail-item">
                    <strong>Consultant:</strong> 
                    <select id="consultant">
                        <option value="Dr. Ray">Dr. Ray</option>
                        <option value="Dr. Govardhanan R">Dr. Govardhanan R</option>
                        <option value="Dr. Mugundan D">Dr. Mugundan D</option>
                    </select>
                </div>
            </div>
        </header>
        
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th class="sno-col">S.No.</th>
                        <th class="name-col">Name</th>
                        <th class="age-col">Age</th>
                        <th class="sex-col">Sex</th>
                        <th class="ip-col">IP No.</th>
                        <th class="ward-col">Ward</th>
                        <th class="comorbidity-col">Co-Morbidity</th>
                        <th class="diagnosis-col">Diagnosis</th>
                        <th class="procedure-col">Procedure</th>
                        <th class="serology-col">Serology (HIV, HBsAg)</th>
                        <th class="anesthesia-col">Anesthesia</th>
                        <th class="surgeon-col">Surgeon</th>
                        <th class="action-col">Action</th>
                    </tr>
                </thead>
                <tbody id="patient-table-body">
                    <tr>
                        <td class="sno-col">1</td>
                        <td class="name-col"><input type="text" placeholder="Patient Name" class="patient-name"></td>
                        <td class="age-col"><input type="number" placeholder="Age" min="0" max="120" class="patient-age"></td>
                        <td class="sex-col">
                            <select class="patient-sex">
                                <option value="">Select</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                                <option value="Other">Other</option>
                            </select>
                        </td>
                        <td class="ip-col"><input type="text" placeholder="IP Number" class="patient-ip"></td>
                        <td class="ward-col"><input type="text" placeholder="Ward" class="patient-ward"></td>
                        <td class="comorbidity-col">
                            <select class="patient-comorbidity" onchange="toggleCustomInput(this)">
                                <option value="">Select Co-Morbidity</option>
                                <optgroup label="Cardiovascular">
                                    <option value="Hypertension">Hypertension</option>
                                    <option value="Ischemic heart disease">Ischemic heart disease</option>
                                    <option value="Heart failure">Heart failure</option>
                                    <option value="Arrhythmias (e.g., AF)">Arrhythmias (e.g., AF)</option>
                                </optgroup>
                                <optgroup label="Respiratory">
                                    <option value="COPD">COPD</option>
                                    <option value="Asthma">Asthma</option>
                                    <option value="Obstructive sleep apnea">Obstructive sleep apnea</option>
                                </optgroup>
                                <optgroup label="Endocrine / Metabolic">
                                    <option value="Diabetes mellitus (Type 1 / 2)">Diabetes mellitus (Type 1 / 2)</option>
                                    <option value="Obesity">Obesity</option>
                                    <option value="Thyroid disease">Thyroid disease</option>
                                </optgroup>
                                <optgroup label="Renal">
                                    <option value="Chronic kidney disease">Chronic kidney disease</option>
                                    <option value="ESRD on dialysis">ESRD on dialysis</option>
                                </optgroup>
                                <optgroup label="Liver">
                                    <option value="Chronic liver disease / cirrhosis">Chronic liver disease / cirrhosis</option>
                                    <option value="Hepatitis B/C">Hepatitis B/C</option>
                                </optgroup>
                                <optgroup label="Neurological">
                                    <option value="Stroke / TIA">Stroke / TIA</option>
                                    <option value="Epilepsy">Epilepsy</option>
                                </optgroup>
                                <optgroup label="Hematologic">
                                    <option value="Anemia">Anemia</option>
                                    <option value="Coagulopathy">Coagulopathy</option>
                                </optgroup>
                                <optgroup label="Psychiatric">
                                    <option value="Depression">Depression</option>
                                    <option value="Anxiety">Anxiety</option>
                                </optgroup>
                                <optgroup label="Lifestyle">
                                    <option value="Smoking">Smoking</option>
                                    <option value="Alcohol use">Alcohol use</option>
                                    <option value="Drug use">Drug use</option>
                                </optgroup>
                                <option value="Other">Other (Specify)</option>
                            </select>
                            <input type="text" class="custom-input custom-comorbidity" placeholder="Specify other comorbidity" style="display: none; margin-top: 5px;">
                            <div class="comorbidity-more" onclick="addComorbidityField(this)">+ Add more comorbidities</div>
                        </td>
                        <td class="diagnosis-col">
                            <select class="patient-diagnosis" onchange="toggleCustomDiagnosis(this)">
                                <option value="">Select Diagnosis</option>
                                <optgroup label="1. UPPER GI / STOMACH / DUODENUM">
                                    <option value="Peptic ulcer disease">Peptic ulcer disease</option>
                                    <option value="Perforated peptic ulcer">Perforated peptic ulcer</option>
                                    <option value="Gastric outlet obstruction">Gastric outlet obstruction</option>
                                    <option value="Gastric cancer">Gastric cancer</option>
                                    <option value="Gastrointestinal stromal tumor (GIST)">Gastrointestinal stromal tumor (GIST)</option>
                                    <option value="Hiatal hernia">Hiatal hernia</option>
                                    <option value="Gastric volvulus">Gastric volvulus</option>
                                    <option value="Upper GI bleeding (non-variceal)">Upper GI bleeding (non-variceal)</option>
                                    <option value="Mallory-Weiss tear">Mallory-Weiss tear</option>
                                    <option value="Cameron lesions (hiatal hernia–related)">Cameron lesions (hiatal hernia–related)</option>
                                </optgroup>
                                <optgroup label="2. SMALL BOWEL">
                                    <option value="Small bowel obstruction (SBO)">Small bowel obstruction (SBO)</option>
                                    <option value="Intussusception">Intussusception</option>
                                    <option value="Small bowel ischemia">Small bowel ischemia</option>
                                    <option value="Mesenteric ischemia">Mesenteric ischemia</option>
                                    <option value="Small bowel perforation">Small bowel perforation</option>
                                    <option value="Meckel’s diverticulum">Meckel’s diverticulum</option>
                                    <option value="Crohn’s disease complications">Crohn’s disease complications</option>
                                    <option value="Small bowel tumors">Small bowel tumors</option>
                                </optgroup>
                                <optgroup label="3. COLON & RECTUM">
                                    <option value="Large bowel obstruction">Large bowel obstruction</option>
                                    <option value="Colonic volvulus">Colonic volvulus</option>
                                    <option value="Diverticulitis">Diverticulitis</option>
                                    <option value="Diverticular abscess">Diverticular abscess</option>
                                    <option value="Colorectal cancer">Colorectal cancer</option>
                                    <option value="Ulcerative colitis complications">Ulcerative colitis complications</option>
                                    <option value="Lower GI bleeding">Lower GI bleeding</option>
                                    <option value="Anorectal abscess">Anorectal abscess</option>
                                    <option value="Anal fistula">Anal fistula</option>
                                    <option value="Hemorrhoids">Hemorrhoids</option>
                                    <option value="Anal fissure">Anal fissure</option>
                                    <option value="Rectal prolapse">Rectal prolapse</option>
                                    <option value="Fecal impaction / stercoral colitis">Fecal impaction / stercoral colitis</option>
                                    <option value="Toxic megacolon">Toxic megacolon</option>
                                </optgroup>
                                <optgroup label="4. APPENDIX">
                                    <option value="Acute appendicitis">Acute appendicitis</option>
                                    <option value="Complicated appendicitis">Complicated appendicitis</option>
                                    <option value="Appendicular abscess">Appendicular abscess</option>
                                    <option value="Appendicular mass">Appendicular mass</option>
                                    <option value="Mucocele of appendix">Mucocele of appendix</option>
                                    <option value="Appendiceal cancer">Appendiceal cancer</option>
                                </optgroup>
                                <optgroup label="5. HEPATOBILIARY SYSTEM">
                                    <option value="Liver laceration">Liver laceration</option>
                                    <option value="Hepatocellular carcinoma">Hepatocellular carcinoma</option>
                                    <option value="Liver abscess">Liver abscess</option>
                                    <option value="Hemangioma">Hemangioma</option>
                                    <option value="Focal nodular hyperplasia">Focal nodular hyperplasia</option>
                                    <option value="Adenoma">Adenoma</option>
                                    <option value="Hydatid disease">Hydatid disease</option>
                                    <option value="Hepatic cysts">Hepatic cysts</option>
                                    <option value="Budd-Chiari">Budd-Chiari</option>
                                    <option value="Acute calculous cholecystitis">Acute calculous cholecystitis</option>
                                    <option value="Acute acalculous cholecystitis">Acute acalculous cholecystitis</option>
                                    <option value="Chronic cholecystitis">Chronic cholecystitis</option>
                                    <option value="Cholelithiasis">Cholelithiasis</option>
                                    <option value="Choledocholithiasis">Choledocholithiasis</option>
                                    <option value="Cholangitis">Cholangitis</option>
                                    <option value="Mirizzi syndrome">Mirizzi syndrome</option>
                                    <option value="Gallstone ileus">Gallstone ileus</option>
                                    <option value="Gallbladder perforation">Gallbladder perforation</option>
                                    <option value="Gallbladder carcinoma">Gallbladder carcinoma</option>
                                    <option value="Bile duct injury">Bile duct injury</option>
                                    <option value="Primary sclerosing cholangitis">Primary sclerosing cholangitis</option>
                                </optgroup>
                                <optgroup label="6. PANCREAS">
                                    <option value="Acute pancreatitis">Acute pancreatitis</option>
                                    <option value="Necrotizing pancreatitis">Necrotizing pancreatitis</option>
                                    <option value="Pancreatic pseudocyst">Pancreatic pseudocyst</option>
                                    <option value="Pancreatic abscess">Pancreatic abscess</option>
                                    <option value="Chronic pancreatitis">Chronic pancreatitis</option>
                                    <option value="Pancreatic adenocarcinoma">Pancreatic adenocarcinoma</option>
                                    <option value="Pancreatic neuroendocrine tumor">Pancreatic neuroendocrine tumor</option>
                                    <option value="Pancreatic trauma">Pancreatic trauma</option>
                                    <option value="IPMN">IPMN</option>
                                    <option value="Serous / mucinous cystadenoma">Serous / mucinous cystadenoma</option>
                                </optgroup>
                                <optgroup label="7. HERNIA">
                                    <option value="Inguinal hernia">Inguinal hernia</option>
                                    <option value="Femoral hernia">Femoral hernia</option>
                                    <option value="Umbilical hernia">Umbilical hernia</option>
                                    <option value="Epigastric hernia">Epigastric hernia</option>
                                    <option value="Incisional hernia">Incisional hernia</option>
                                    <option value="Spigelian hernia">Spigelian hernia</option>
                                    <option value="Obturator hernia">Obturator hernia</option>
                                    <option value="Richter’s hernia">Richter’s hernia</option>
                                    <option value="Parastomal hernia">Parastomal hernia</option>
                                    <option value="Diaphragmatic hernia">Diaphragmatic hernia</option>
                                    <option value="Hiatal hernia">Hiatal hernia</option>
                                    <option value="Strangulated hernia">Strangulated hernia</option>
                                    <option value="Incarcerated hernia">Incarcerated hernia</option>
                                </optgroup>
                                <optgroup label="8. BREAST">
                                    <option value="Breast cancer">Breast cancer</option>
                                    <option value="Fibroadenoma">Fibroadenoma</option>
                                    <option value="Breast abscess">Breast abscess</option>
                                    <option value="Mastitis">Mastitis</option>
                                    <option value="Ductal carcinoma in situ (DCIS)">Ductal carcinoma in situ (DCIS)</option>
                                    <option value="Lobular carcinoma in situ (LCIS)">Lobular carcinoma in situ (LCIS)</option>
                                    <option value="Phyllodes tumor">Phyllodes tumor</option>
                                    <option value="Fibrocystic disease">Fibrocystic disease</option>
                                    <option value="Nipple discharge evaluations">Nipple discharge evaluations</option>
                                </optgroup>
                                <optgroup label="9. ENDOCRINE SURGERY">
                                    <option value="Multinodular goiter">Multinodular goiter</option>
                                    <option value="Graves’ disease">Graves’ disease</option>
                                    <option value="Thyroid cancer">Thyroid cancer</option>
                                    <option value="Thyroid cyst">Thyroid cyst</option>
                                    <option value="Thyroiditis complications">Thyroiditis complications</option>
                                    <option value="Primary hyperparathyroidism">Primary hyperparathyroidism</option>
                                    <option value="Secondary hyperparathyroidism">Secondary hyperparathyroidism</option>
                                    <option value="Parathyroid adenoma">Parathyroid adenoma</option>
                                    <option value="Adrenal adenoma">Adrenal adenoma</option>
                                    <option value="Pheochromocytoma">Pheochromocytoma</option>
                                    <option value="Adrenocortical carcinoma">Adrenocortical carcinoma</option>
                                    <option value="Adrenal incidentaloma">Adrenal incidentaloma</option>
                                    <option value="Cushing’s syndrome">Cushing’s syndrome</option>
                                    <option value="Conn’s syndrome">Conn’s syndrome</option>
                                </optgroup>
                                <optgroup label="10. VASCULAR">
                                    <option value="Peripheral arterial disease">Peripheral arterial disease</option>
                                    <option value="Acute limb ischemia">Acute limb ischemia</option>
                                    <option value="Varicose veins">Varicose veins</option>
                                    <option value="Chronic venous insufficiency">Chronic venous insufficiency</option>
                                    <option value="DVT requiring surgical treatment">DVT requiring surgical treatment</option>
                                    <option value="Aortic aneurysm">Aortic aneurysm</option>
                                    <option value="Arteriovenous fistula creation">Arteriovenous fistula creation</option>
                                </optgroup>
                                <optgroup label="11. THORACIC">
                                    <option value="Pneumothorax">Pneumothorax</option>
                                    <option value="Hemothorax">Hemothorax</option>
                                    <option value="Empyema">Empyema</option>
                                    <option value="Lung abscess">Lung abscess</option>
                                    <option value="Mediastinal masses">Mediastinal masses</option>
                                    <option value="Esophageal perforation">Esophageal perforation</option>
                                    <option value="Esophageal cancer">Esophageal cancer</option>
                                </optgroup>
                                <optgroup label="12. TRAUMA & EMERGENCY">
                                    <option value="Blunt abdominal trauma">Blunt abdominal trauma</option>
                                    <option value="Penetrating abdominal trauma">Penetrating abdominal trauma</option>
                                    <option value="Splenic injury">Splenic injury</option>
                                    <option value="Liver injury">Liver injury</option>
                                    <option value="Kidney/ureter injury">Kidney/ureter injury</option>
                                    <option value="Bowel perforation">Bowel perforation</option>
                                    <option value="Diaphragmatic rupture">Diaphragmatic rupture</option>
                                    <option value="Retroperitoneal hematoma">Retroperitoneal hematoma</option>
                                    <option value="Hemorrhagic shock">Hemorrhagic shock</option>
                                </optgroup>
                                <optgroup label="13. SOFT TISSUE & SKIN">
                                    <option value="Soft tissue abscess">Soft tissue abscess</option>
                                    <option value="Necrotizing fasciitis">Necrotizing fasciitis</option>
                                    <option value="Cellulitis requiring surgery">Cellulitis requiring surgery</option>
                                    <option value="Lipoma">Lipoma</option>
                                    <option value="Sebaceous cyst">Sebaceous cyst</option>
                                    <option value="Soft tissue sarcoma">Soft tissue sarcoma</option>
                                    <option value="Pilonidal sinus">Pilonidal sinus</option>
                                    <option value="Pressure ulcers">Pressure ulcers</option>
                                    <option value="Fournier’s gangrene">Fournier’s gangrene</option>
                                </optgroup>
                                <optgroup label="14. ONCOLOGIC SURGERY">
                                    <option value="Sarcomas">Sarcomas</option>
                                    <option value="Melanoma">Melanoma</option>
                                    <option value="Metastatic disease">Metastatic disease</option>
                                    <option value="Abdominal wall tumors">Abdominal wall tumors</option>
                                    <option value="Retroperitoneal tumors">Retroperitoneal tumors</option>
                                </optgroup>
                                <optgroup label="15. PERITONEAL & MISCELLANEOUS">
                                    <option value="Peritonitis">Peritonitis</option>
                                    <option value="Intra-abdominal abscess">Intra-abdominal abscess</option>
                                    <option value="Adhesions">Adhesions</option>
                                    <option value="Foreign body ingestion">Foreign body ingestion</option>
                                    <option value="Enterocutaneous fistula">Enterocutaneous fistula</option>
                                    <option value="Anastomotic leak">Anastomotic leak</option>
                                    <option value="Hemorrhage">Hemorrhage</option>
                                    <option value="Surgical site infection">Surgical site infection</option>
                                    <option value="Wound dehiscence">Wound dehiscence</option>
                                    <option value="Burst abdomen">Burst abdomen</option>
                                    <option value="Ileus">Ileus</option>
                                    <option value="Seroma / hematoma">Seroma / hematoma</option>
                                </optgroup>
                                <option value="Other">Other (Specify)</option>
                            </select>
                            <input type="text" class="custom-input custom-diagnosis" placeholder="Specify other diagnosis" style="display: none; margin-top: 5px;">
                        </td>
                        <td class="procedure-col"><textarea placeholder="Procedure" class="patient-procedure"></textarea></td>
                        <td class="serology-col">
                            <select class="patient-serology">
                                <option value="">Select</option>
                                <option value="Negative">Negative</option>
                                <option value="HIV Positive">HIV Positive</option>
                                <option value="HBsAg Positive">HBsAg Positive</option>
                                <option value="Both Positive">Both Positive</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </td>
                        <td class="anesthesia-col">
                            <select class="patient-anesthesia">
                                <option value="">Select</option>
                                <option value="GA">GA</option>
                                <option value="SA">SA</option>
                                <option value="LA">LA</option>
                                <option value="Regional">Regional</option>
                            </select>
                        </td>
                        <td class="surgeon-col">
                            <select class="surgeon-select">
                                <option value="">Select Surgeon</option>
                                <option value="Dr. Ray">Dr. Ray</option>
                                <option value="Dr. Govardhanan R">Dr. Govardhanan R</option>
                                <option value="Dr. Mugundan D">Dr. Mugundan D</option>
                                <option value="Dr. Ray, Dr. Govardhanan R">Dr. Ray, Dr. Govardhanan R</option>
                                <option value="Dr. Ray, Dr. Mugundan D">Dr. Ray, Dr. Mugundan D</option>
                                <option value="Dr. Govardhanan R, Dr. Mugundan D">Dr. Govardhanan R, Dr. Mugundan D</option>
                                <option value="Dr. Ray, Dr. Govardhanan R, Dr. Mugundan D">Dr. Ray, Dr. Govardhanan R, Dr. Mugundan D</option>
                            </select>
                        </td>
                        <td class="action-col">
                            <button class="btn-delete" onclick="deleteRow(this)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="footer-note">
            <p>Note: Only filled rows will be included in the downloaded Word document. For emergency cases, contact the OT in-charge immediately.</p>
        </div>
        
        <div class="action-buttons">
            <button class="btn-reset" onclick="resetForm()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
                Reset Form
            </button>
            <button class="btn-add" onclick="addRow()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add Row
            </button>
            <button class="btn-download" onclick="downloadAsWord()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Download as Word
            </button>
            <button class="btn-save" onclick="saveData()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                </svg>
                Save Data
            </button>
            <button class="btn-print" onclick="window.print()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                </svg>
                Print List
            </button>
        </div>
    </div>

    <script>
        // Function to toggle custom input fields
        function toggleCustomInput(selectElement) {
            const customInput = selectElement.parentElement.querySelector('.custom-comorbidity');
            if (selectElement.value === 'Other') {
                customInput.style.display = 'block';
            } else {
                customInput.style.display = 'none';
                customInput.value = '';
            }
        }
        
        function toggleCustomDiagnosis(selectElement) {
            const customInput = selectElement.parentElement.querySelector('.custom-diagnosis');
            if (selectElement.value === 'Other') {
                customInput.style.display = 'block';
            } else {
                customInput.style.display = 'none';
                customInput.value = '';
            }
        }
        
        // Function to add more comorbidity fields
        function addComorbidityField(element) {
            const container = element.parentElement;
            const newSelect = document.createElement('select');
            newSelect.className = 'patient-comorbidity';
            newSelect.innerHTML = document.querySelector('.patient-comorbidity').innerHTML;
            newSelect.onchange = function() { toggleCustomInput(this); };
            
            const newCustomInput = document.createElement('input');
            newCustomInput.type = 'text';
            newCustomInput.className = 'custom-input custom-comorbidity';
            newCustomInput.placeholder = 'Specify other comorbidity';
            newCustomInput.style.display = 'none';
            newCustomInput.style.marginTop = '5px';
            
            container.insertBefore(newCustomInput, element);
            container.insertBefore(newSelect, element);
        }
        
        function addRow() {
            const tableBody = document.getElementById('patient-table-body');
            const rowCount = tableBody.rows.length;
            const newRow = tableBody.insertRow();
            newRow.innerHTML = `
                <td class="sno-col">${rowCount + 1}</td>
                <td class="name-col"><input type="text" placeholder="Patient Name" class="patient-name"></td>
                <td class="age-col"><input type="number" placeholder="Age" min="0" max="120" class="patient-age"></td>
                <td class="sex-col">
                    <select class="patient-sex">
                        <option value="">Select</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="Other">Other</option>
                    </select>
                </td>
                <td class="ip-col"><input type="text" placeholder="IP Number" class="patient-ip"></td>
                <td class="ward-col"><input type="text" placeholder="Ward" class="patient-ward"></td>
                <td class="comorbidity-col">
                    <select class="patient-comorbidity" onchange="toggleCustomInput(this)">
                        <option value="">Select Co-Morbidity</option>
                        <optgroup label="Cardiovascular">
                            <option value="Hypertension">Hypertension</option>
                            <option value="Ischemic heart disease">Ischemic heart disease</option>
                            <option value="Heart failure">Heart failure</option>
                            <option value="Arrhythmias (e.g., AF)">Arrhythmias (e.g., AF)</option>
                        </optgroup>
                        <optgroup label="Respiratory">
                            <option value="COPD">COPD</option>
                            <option value="Asthma">Asthma</option>
                            <option value="Obstructive sleep apnea">Obstructive sleep apnea</option>
                        </optgroup>
                        <optgroup label="Endocrine / Metabolic">
                            <option value="Diabetes mellitus (Type 1 / 2)">Diabetes mellitus (Type 1 / 2)</option>
                            <option value="Obesity">Obesity</option>
                            <option value="Thyroid disease">Thyroid disease</option>
                        </optgroup>
                        <optgroup label="Renal">
                            <option value="Chronic kidney disease">Chronic kidney disease</option>
                            <option value="ESRD on dialysis">ESRD on dialysis</option>
                        </optgroup>
                        <optgroup label="Liver">
                            <option value="Chronic liver disease / cirrhosis">Chronic liver disease / cirrhosis</option>
                            <option value="Hepatitis B/C">Hepatitis B/C</option>
                        </optgroup>
                        <optgroup label="Neurological">
                            <option value="Stroke / TIA">Stroke / TIA</option>
                            <option value="Epilepsy">Epilepsy</option>
                        </optgroup>
                        <optgroup label="Hematologic">
                            <option value="Anemia">Anemia</option>
                            <option value="Coagulopathy">Coagulopathy</option>
                        </optgroup>
                        <optgroup label="Psychiatric">
                            <option value="Depression">Depression</option>
                            <option value="Anxiety">Anxiety</option>
                        </optgroup>
                        <optgroup label="Lifestyle">
                            <option value="Smoking">Smoking</option>
                            <option value="Alcohol use">Alcohol use</option>
                            <option value="Drug use">Drug use</option>
                        </optgroup>
                        <option value="Other">Other (Specify)</option>
                    </select>
                    <input type="text" class="custom-input custom-comorbidity" placeholder="Specify other comorbidity" style="display: none; margin-top: 5px;">
                    <div class="comorbidity-more" onclick="addComorbidityField(this)">+ Add more comorbidities</div>
                </td>
                <td class="diagnosis-col">
                    <select class="patient-diagnosis" onchange="toggleCustomDiagnosis(this)">
                        <option value="">Select Diagnosis</option>
                        <optgroup label="1. UPPER GI / STOMACH / DUODENUM">
                            <option value="Peptic ulcer disease">Peptic ulcer disease</option>
                            <option value="Perforated peptic ulcer">Perforated peptic ulcer</option>
                            <option value="Gastric outlet obstruction">Gastric outlet obstruction</option>
                            <option value="Gastric cancer">Gastric cancer</option>
                            <option value="Gastrointestinal stromal tumor (GIST)">Gastrointestinal stromal tumor (GIST)</option>
                            <option value="Hiatal hernia">Hiatal hernia</option>
                            <option value="Gastric volvulus">Gastric volvulus</option>
                            <option value="Upper GI bleeding (non-variceal)">Upper GI bleeding (non-variceal)</option>
                            <option value="Mallory-Weiss tear">Mallory-Weiss tear</option>
                            <option value="Cameron lesions (hiatal hernia–related)">Cameron lesions (hiatal hernia–related)</option>
                        </optgroup>
                        <optgroup label="2. SMALL BOWEL">
                            <option value="Small bowel obstruction (SBO)">Small bowel obstruction (SBO)</option>
                            <option value="Intussusception">Intussusception</option>
                            <option value="Small bowel ischemia">Small bowel ischemia</option>
                            <option value="Mesenteric ischemia">Mesenteric ischemia</option>
                            <option value="Small bowel perforation">Small bowel perforation</option>
                            <option value="Meckel’s diverticulum">Meckel’s diverticulum</option>
                            <option value="Crohn’s disease complications">Crohn’s disease complications</option>
                            <option value="Small bowel tumors">Small bowel tumors</option>
                        </optgroup>
                        <optgroup label="3. COLON & RECTUM">
                            <option value="Large bowel obstruction">Large bowel obstruction</option>
                            <option value="Colonic volvulus">Colonic volvulus</option>
                            <option value="Diverticulitis">Diverticulitis</option>
                            <option value="Diverticular abscess">Diverticular abscess</option>
                            <option value="Colorectal cancer">Colorectal cancer</option>
                            <option value="Ulcerative colitis complications">Ulcerative colitis complications</option>
                            <option value="Lower GI bleeding">Lower GI bleeding</option>
                            <option value="Anorectal abscess">Anorectal abscess</option>
                            <option value="Anal fistula">Anal fistula</option>
                            <option value="Hemorrhoids">Hemorrhoids</option>
                            <option value="Anal fissure">Anal fissure</option>
                            <option value="Rectal prolapse">Rectal prolapse</option>
                            <option value="Fecal impaction / stercoral colitis">Fecal impaction / stercoral colitis</option>
                            <option value="Toxic megacolon">Toxic megacolon</option>
                        </optgroup>
                        <optgroup label="4. APPENDIX">
                            <option value="Acute appendicitis">Acute appendicitis</option>
                            <option value="Complicated appendicitis">Complicated appendicitis</option>
                            <option value="Appendicular abscess">Appendicular abscess</option>
                            <option value="Appendicular mass">Appendicular mass</option>
                            <option value="Mucocele of appendix">Mucocele of appendix</option>
                            <option value="Appendiceal cancer">Appendiceal cancer</option>
                        </optgroup>
                        <optgroup label="5. HEPATOBILIARY SYSTEM">
                            <option value="Liver laceration">Liver laceration</option>
                            <option value="Hepatocellular carcinoma">Hepatocellular carcinoma</option>
                            <option value="Liver abscess">Liver abscess</option>
                            <option value="Hemangioma">Hemangioma</option>
                            <option value="Focal nodular hyperplasia">Focal nodular hyperplasia</option>
                            <option value="Adenoma">Adenoma</option>
                            <option value="Hydatid disease">Hydatid disease</option>
                            <option value="Hepatic cysts">Hepatic cysts</option>
                            <option value="Budd-Chiari">Budd-Chiari</option>
                            <option value="Acute calculous cholecystitis">Acute calculous cholecystitis</option>
                            <option value="Acute acalculous cholecystitis">Acute acalculous cholecystitis</option>
                            <option value="Chronic cholecystitis">Chronic cholecystitis</option>
                            <option value="Cholelithiasis">Cholelithiasis</option>
                            <option value="Choledocholithiasis">Choledocholithiasis</option>
                            <option value="Cholangitis">Cholangitis</option>
                            <option value="Mirizzi syndrome">Mirizzi syndrome</option>
                            <option value="Gallstone ileus">Gallstone ileus</option>
                            <option value="Gallbladder perforation">Gallbladder perforation</option>
                            <option value="Gallbladder carcinoma">Gallbladder carcinoma</option>
                            <option value="Bile duct injury">Bile duct injury</option>
                            <option value="Primary sclerosing cholangitis">Primary sclerosing cholangitis</option>
                        </optgroup>
                        <optgroup label="6. PANCREAS">
                            <option value="Acute pancreatitis">Acute pancreatitis</option>
                            <option value="Necrotizing pancreatitis">Necrotizing pancreatitis</option>
                            <option value="Pancreatic pseudocyst">Pancreatic pseudocyst</option>
                            <option value="Pancreatic abscess">Pancreatic abscess</option>
                            <option value="Chronic pancreatitis">Chronic pancreatitis</option>
                            <option value="Pancreatic adenocarcinoma">Pancreatic adenocarcinoma</option>
                            <option value="Pancreatic neuroendocrine tumor">Pancreatic neuroendocrine tumor</option>
                            <option value="Pancreatic trauma">Pancreatic trauma</option>
                            <option value="IPMN">IPMN</option>
                            <option value="Serous / mucinous cystadenoma">Serous / mucinous cystadenoma</option>
                        </optgroup>
                        <optgroup label="7. HERNIA">
                            <option value="Inguinal hernia">Inguinal hernia</option>
                            <option value="Femoral hernia">Femoral hernia</option>
                            <option value="Umbilical hernia">Umbilical hernia</option>
                            <option value="Epigastric hernia">Epigastric hernia</option>
                            <option value="Incisional hernia">Incisional hernia</option>
                            <option value="Spigelian hernia">Spigelian hernia</option>
                            <option value="Obturator hernia">Obturator hernia</option>
                            <option value="Richter’s hernia">Richter’s hernia</option>
                            <option value="Parastomal hernia">Parastomal hernia</option>
                            <option value="Diaphragmatic hernia">Diaphragmatic hernia</option>
                            <option value="Hiatal hernia">Hiatal hernia</option>
                            <option value="Strangulated hernia">Strangulated hernia</option>
                            <option value="Incarcerated hernia">Incarcerated hernia</option>
                        </optgroup>
                        <optgroup label="8. BREAST">
                            <option value="Breast cancer">Breast cancer</option>
                            <option value="Fibroadenoma">Fibroadenoma</option>
                            <option value="Breast abscess">Breast abscess</option>
                            <option value="Mastitis">Mastitis</option>
                            <option value="Ductal carcinoma in situ (DCIS)">Ductal carcinoma in situ (DCIS)</option>
                            <option value="Lobular carcinoma in situ (LCIS)">Lobular carcinoma in situ (LCIS)</option>
                            <option value="Phyllodes tumor">Phyllodes tumor</option>
                            <option value="Fibrocystic disease">Fibrocystic disease</option>
                            <option value="Nipple discharge evaluations">Nipple discharge evaluations</option>
                        </optgroup>
                        <optgroup label="9. ENDOCRINE SURGERY">
                            <option value="Multinodular goiter">Multinodular goiter</option>
                            <option value="Graves’ disease">Graves’ disease</option>
                            <option value="Thyroid cancer">Thyroid cancer</option>
                            <option value="Thyroid cyst">Thyroid cyst</option>
                            <option value="Thyroiditis complications">Thyroiditis complications</option>
                            <option value="Primary hyperparathyroidism">Primary hyperparathyroidism</option>
                            <option value="Secondary hyperparathyroidism">Secondary hyperparathyroidism</option>
                            <option value="Parathyroid adenoma">Parathyroid adenoma</option>
                            <option value="Adrenal adenoma">Adrenal adenoma</option>
                            <option value="Pheochromocytoma">Pheochromocytoma</option>
                            <option value="Adrenocortical carcinoma">Adrenocortical carcinoma</option>
                            <option value="Adrenal incidentaloma">Adrenal incidentaloma</option>
                            <option value="Cushing’s syndrome">Cushing’s syndrome</option>
                            <option value="Conn’s syndrome">Conn’s syndrome</option>
                        </optgroup>
                        <optgroup label="10. VASCULAR">
                            <option value="Peripheral arterial disease">Peripheral arterial disease</option>
                            <option value="Acute limb ischemia">Acute limb ischemia</option>
                            <option value="Varicose veins">Varicose veins</option>
                            <option value="Chronic venous insufficiency">Chronic venous insufficiency</option>
                            <option value="DVT requiring surgical treatment">DVT requiring surgical treatment</option>
                            <option value="Aortic aneurysm">Aortic aneurysm</option>
                            <option value="Arteriovenous fistula creation">Arteriovenous fistula creation</option>
                        </optgroup>
                        <optgroup label="11. THORACIC">
                            <option value="Pneumothorax">Pneumothorax</option>
                            <option value="Hemothorax">Hemothorax</option>
                            <option value="Empyema">Empyema</option>
                            <option value="Lung abscess">Lung abscess</option>
                            <option value="Mediastinal masses">Mediastinal masses</option>
                            <option value="Esophageal perforation">Esophageal perforation</option>
                            <option value="Esophageal cancer">Esophageal cancer</option>
                        </optgroup>
                        <optgroup label="12. TRAUMA & EMERGENCY">
                            <option value="Blunt abdominal trauma">Blunt abdominal trauma</option>
                            <option value="Penetrating abdominal trauma">Penetrating abdominal trauma</option>
                            <option value="Splenic injury">Splenic injury</option>
                            <option value="Liver injury">Liver injury</option>
                            <option value="Kidney/ureter injury">Kidney/ureter injury</option>
                            <option value="Bowel perforation">Bowel perforation</option>
                            <option value="Diaphragmatic rupture">Diaphragmatic rupture</option>
                            <option value="Retroperitoneal hematoma">Retroperitoneal hematoma</option>
                            <option value="Hemorrhagic shock">Hemorrhagic shock</option>
                        </optgroup>
                        <optgroup label="13. SOFT TISSUE & SKIN">
                            <option value="Soft tissue abscess">Soft tissue abscess</option>
                            <option value="Necrotizing fasciitis">Necrotizing fasciitis</option>
                            <option value="Cellulitis requiring surgery">Cellulitis requiring surgery</option>
                            <option value="Lipoma">Lipoma</option>
                            <option value="Sebaceous cyst">Sebaceous cyst</option>
                            <option value="Soft tissue sarcoma">Soft tissue sarcoma</option>
                            <option value="Pilonidal sinus">Pilonidal sinus</option>
                            <option value="Pressure ulcers">Pressure ulcers</option>
                            <option value="Fournier’s gangrene">Fournier’s gangrene</option>
                        </optgroup>
                        <optgroup label="14. ONCOLOGIC SURGERY">
                            <option value="Sarcomas">Sarcomas</option>
                            <option value="Melanoma">Melanoma</option>
                            <option value="Metastatic disease">Metastatic disease</option>
                            <option value="Abdominal wall tumors">Abdominal wall tumors</option>
                            <option value="Retroperitoneal tumors">Retroperitoneal tumors</option>
                        </optgroup>
                        <optgroup label="15. PERITONEAL & MISCELLANEOUS">
                            <option value="Peritonitis">Peritonitis</option>
                            <option value="Intra-abdominal abscess">Intra-abdominal abscess</option>
                            <option value="Adhesions">Adhesions</option>
                            <option value="Foreign body ingestion">Foreign body ingestion</option>
                            <option value="Enterocutaneous fistula">Enterocutaneous fistula</option>
                            <option value="Anastomotic leak">Anastomotic leak</option>
                            <option value="Hemorrhage">Hemorrhage</option>
                            <option value="Surgical site infection">Surgical site infection</option>
                            <option value="Wound dehiscence">Wound dehiscence</option>
                            <option value="Burst abdomen">Burst abdomen</option>
                            <option value="Ileus">Ileus</option>
                            <option value="Seroma / hematoma">Seroma / hematoma</option>
                        </optgroup>
                        <option value="Other">Other (Specify)</option>
                    </select>
                    <input type="text" class="custom-input custom-diagnosis" placeholder="Specify other diagnosis" style="display: none; margin-top: 5px;">
                </td>
                <td class="procedure-col"><textarea placeholder="Procedure" class="patient-procedure"></textarea></td>
                <td class="serology-col">
                    <select class="patient-serology">
                        <option value="">Select</option>
                        <option value="Negative">Negative</option>
                        <option value="HIV Positive">HIV Positive</option>
                        <option value="HBsAg Positive">HBsAg Positive</option>
                        <option value="Both Positive">Both Positive</option>
                        <option value="Pending">Pending</option>
                    </select>
                </td>
                <td class="anesthesia-col">
                    <select class="patient-anesthesia">
                        <option value="">Select</option>
                        <option value="GA">GA</option>
                        <option value="SA">SA</option>
                        <option value="LA">LA</option>
                        <option value="Regional">Regional</option>
                    </select>
                </td>
                <td class="surgeon-col">
                    <select class="surgeon-select">
                        <option value="">Select Surgeon</option>
                        <option value="Dr. Ray">Dr. Ray</option>
                        <option value="Dr. Govardhanan R">Dr. Govardhanan R</option>
                        <option value="Dr. Mugundan D">Dr. Mugundan D</option>
                        <option value="Dr. Ray, Dr. Govardhanan R">Dr. Ray, Dr. Govardhanan R</option>
                        <option value="Dr. Ray, Dr. Mugundan D">Dr. Ray, Dr. Mugundan D</option>
                        <option value="Dr. Govardhanan R, Dr. Mugundan D">Dr. Govardhanan R, Dr. Mugundan D</option>
                        <option value="Dr. Ray, Dr. Govardhanan R, Dr. Mugundan D">Dr. Ray, Dr. Govardhanan R, Dr. Mugundan D</option>
                    </select>
                </td>
                <td class="action-col">
                    <button class="btn-delete" onclick="deleteRow(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        Delete
                    </button>
                </td>
            `;
        }
        
        function deleteRow(button) {
            const row = button.closest('tr');
            if (confirm('Are you sure you want to delete this patient record?')) {
                row.remove();
                updateRowNumbers();
            }
        }
        
        function updateRowNumbers() {
            const rows = document.querySelectorAll('#patient-table-body tr');
            rows.forEach((row, index) => {
                row.cells[0].textContent = index + 1;
            });
        }
        
        function saveData() {
            alert('Operation Theatre list saved successfully!');
            // In a real application, you would collect all the form data and send it to a server
        }
        
        function downloadAsWord() {
            // Get header information
            const date = document.getElementById('ot-date').value;
            const time = document.getElementById('ot-time').value;
            const department = document.getElementById('ot-dept').value;
            const consultant = document.getElementById('consultant').value;
            
            // Get only filled rows
            const filledRows = [];
            const rows = document.querySelectorAll('#patient-table-body tr');
            
            rows.forEach(row => {
                const name = row.querySelector('.patient-name').value.trim();
                const age = row.querySelector('.patient-age').value.trim();
                const sex = row.querySelector('.patient-sex').value;
                const ip = row.querySelector('.patient-ip').value.trim();
                const ward = row.querySelector('.patient-ward').value.trim();
                
                // Get comorbidities (handle multiple)
                const comorbiditySelects = row.querySelectorAll('.patient-comorbidity');
                let comorbidities = [];
                comorbiditySelects.forEach(select => {
                    if (select.value) {
                        if (select.value === 'Other') {
                            const customInput = select.parentElement.querySelector('.custom-comorbidity');
                            if (customInput && customInput.value.trim()) {
                                comorbidities.push(customInput.value.trim());
                            }
                        } else {
                            comorbidities.push(select.value);
                        }
                    }
                });
                const comorbidity = comorbidities.join(', ');
                
                // Get diagnosis
                const diagnosisSelect = row.querySelector('.patient-diagnosis');
                let diagnosis = diagnosisSelect.value;
                if (diagnosis === 'Other') {
                    const customInput = diagnosisSelect.parentElement.querySelector('.custom-diagnosis');
                    diagnosis = customInput && customInput.value.trim() ? customInput.value.trim() : '';
                }
                
                const procedure = row.querySelector('.patient-procedure').value.trim();
                const serology = row.querySelector('.patient-serology').value;
                const anesthesia = row.querySelector('.patient-anesthesia').value;
                const surgeon = row.querySelector('.surgeon-select').value;
                
                // Check if at least one field is filled
                if (name || age || sex || ip || ward || comorbidity || diagnosis || procedure || serology || anesthesia || surgeon) {
                    filledRows.push({
                        name, age, sex, ip, ward, comorbidity, diagnosis, procedure, serology, anesthesia, surgeon
                    });
                }
            });
            
            if (filledRows.length === 0) {
                alert('No filled rows to download. Please add patient data first.');
                return;
            }
            
            // Create Word document content
            let wordContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' 
                  xmlns:w='urn:schemas-microsoft-com:office:word' 
                  xmlns='http://www.w3.org/TR/REC-html40'>
            <head>
                <meta charset="utf-8">
                <title>Operation Theatre List - OT 3</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .institution-header { text-align: center; margin-bottom: 20px; }
                    .institution-name { font-size: 18px; font-weight: bold; }
                    .institution-subtitle { font-size: 14px; margin: 5px 0; }
                    .institution-address { font-size: 12px; }
                    .ot-title { text-align: center; font-size: 16px; font-weight: bold; margin: 15px 0; }
                    .header-details { margin: 15px 0; }
                    .detail-item { margin: 5px 0; }
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                    th { background-color: #2c80c5; color: white; padding: 8px; text-align: left; }
                    td { border: 1px solid #ddd; padding: 8px; }
                    tr:nth-child(even) { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <div class="institution-header">
                    <div class="institution-name">Indira Gandhi Medical College & Research Institute</div>
                    <div class="institution-subtitle">(A Government of Puducherry Institution functioning under the Perunthalaivar Kamaraj Medical College Society)</div>
                    <div class="institution-address">Vazhudhavur Road, Kathirkamam, Puducherry - 605 009</div>
                </div>
                
                <div class="ot-title">OPERATION THEATRE LIST - OT 3</div>
                
                <div class="header-details">
                    <div class="detail-item"><strong>Date:</strong> ${date}</div>
                    <div class="detail-item"><strong>Time:</strong> ${time}</div>
                    <div class="detail-item"><strong>Department:</strong> ${department}</div>
                    <div class="detail-item"><strong>Consultant:</strong> ${consultant}</div>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>IP No.</th>
                            <th>Ward</th>
                            <th>Co-Morbidity</th>
                            <th>Diagnosis</th>
                            <th>Procedure</th>
                            <th>Serology</th>
                            <th>Anesthesia</th>
                            <th>Surgeon</th>
                        </tr>
                    </thead>
                    <tbody>`;
            
            // Add filled rows to the table
            filledRows.forEach((row, index) => {
                wordContent += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${row.name || '-'}</td>
                            <td>${row.age || '-'}</td>
                            <td>${row.sex || '-'}</td>
                            <td>${row.ip || '-'}</td>
                            <td>${row.ward || '-'}</td>
                            <td>${row.comorbidity || '-'}</td>
                            <td>${row.diagnosis || '-'}</td>
                            <td>${row.procedure || '-'}</td>
                            <td>${row.serology || '-'}</td>
                            <td>${row.anesthesia || '-'}</td>
                            <td>${row.surgeon || '-'}</td>
                        </tr>`;
            });
            
            wordContent += `
                    </tbody>
                </table>
                <p style="margin-top: 20px; font-size: 12px; text-align: center;">
                    Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                </p>
            </body>
            </html>`;
            
            // Create and trigger download
            const blob = new Blob([wordContent], { type: 'application/msword' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden', '');
            a.setAttribute('href', url);
            a.setAttribute('download', `OT_List_${date.replace(/-/g, '')}.doc`);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            alert(`Operation Theatre list with ${filledRows.length} patient(s) downloaded as Word document!`);
        }
        
        function resetForm() {
            if (confirm('Are you sure you want to reset all form data? This action cannot be undone.')) {
                const inputs = document.querySelectorAll('input');
                const selects = document.querySelectorAll('select');
                const textareas = document.querySelectorAll('textarea');
                
                inputs.forEach(input => {
                    if (input.type === 'date') input.value = '2025-08-26';
                    else if (input.type === 'time') input.value = '08:00';
                    else if (input.type === 'text' && input.id === 'ot-dept') return;
                    else input.value = '';
                });
                
                selects.forEach(select => {
                    select.selectedIndex = 0;
                });
                
                textareas.forEach(textarea => {
                    textarea.value = '';
                });
                
                // Set consultant back to Dr. Ray
                document.getElementById('consultant').value = 'Dr. Ray';
                
                // Hide all custom inputs
                document.querySelectorAll('.custom-input').forEach(input => {
                    input.style.display = 'none';
                    input.value = '';
                });
                
                // Remove additional comorbidity fields
                document.querySelectorAll('.comorbidity-col').forEach(cell => {
                    const selects = cell.querySelectorAll('.patient-comorbidity');
                    const inputs = cell.querySelectorAll('.custom-comorbidity');
                    const moreLinks = cell.querySelectorAll('.comorbidity-more');
                    
                    // Keep only the first select and input, remove others
                    for (let i = 1; i < selects.length; i++) {
                        selects[i].remove();
                    }
                    for (let i = 1; i < inputs.length; i++) {
                        inputs[i].remove();
                    }
                    // Keep only the first more link
                    for (let i = 1; i < moreLinks.length; i++) {
                        moreLinks[i].remove();
                    }
                });
            }
        }
    </script>
</body>
</html>
