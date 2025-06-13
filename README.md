# Invoice AI System

An AI-powered system for automatic data extraction from scanned invoices. This project aims to replace manual data entry by using OCR, NLP, and Computer Vision to extract structured information from unstructured document images.

---

## 🚀 Project Overview

The system takes invoice images (e.g., scanned invoices), performs preprocessing, extracts the text using OCR, corrects errors, and applies an AI pipeline to generate structured, machine-readable data.

### 🔧 Core Features

- OCR-based extraction from scanned invoice images
- Intelligent preprocessing for enhanced accuracy
- Error correction for OCR outputs
- Structured information extraction using AI models
- Pluggable pipeline components (modular architecture)

---

## 🧱 Project Structure

```

invoice-ai-project/
├── ai\_core/         # All AI logic: preprocessing, OCR, extraction, etc.
│   ├── modules/       # Modular pipeline steps (each as a self-contained unit)
│   ├── models/       # Store any trained models inference or further fine-tuning
│   └── pipline/        # test end-to-end logic
|   ├── data/        # Local-only folder for datasets (gitignored)
│   └── utils/          # Shared helper functions
│
├── backend/              # (Placeholder) Backend APIs for upload and result handling
│   └── README.md
│
├── frontend/             # (Placeholder) Frontend UI for uploading invoices and viewing results
│   └── README.md
│
├── .gitignore
└── README.md             # ← You are here

```

---

## 📦 Installation (Local Development)

> ✅ Requirements: Python 3.9+, pip, virtualenv (recommended)

```bash
# Clone the repo
git clone https://github.com/Ahmad-Abboud/invoice-ai-project.git
cd invoice-ai-project

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r ai_core/requirements.txt
```

---

## 📊 AI Pipeline Steps

1. **Preprocessing**

2. **OCR**

3. **Error Correction**

4. **Information Extraction**

5. **Data Structuring**

---

## 🛠️ Dev Notes

- The `data/` folder is not pushed to the repo due to size/privacy.
- Each `ai_core/module` has a dedicated Jupyter notebook for testing.
- Replace individual steps as new techniques/models emerge.

---

## 👥 Contribution

> Contributions, feedback, and improvements are welcome!

To contribute:

- Fork the repo
- Create a new branch (`feature/your-feature-name`)
- Make your changes
- Submit a pull request

---
