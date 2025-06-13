# Data Directory

This folder is used to store input images, synthetic datasets, OCR outputs, and annotated results.

⚠️ The contents of this folder are **not tracked by Git** because:

- The data may be large in size
- Some of it may be sensitive or private
- We use this only for local experimentation and training

## Structure (Locally Expected)

- `raw/`: Unprocessed invoice images (e.g., scanned or photographed)
- `synthetic/`: Auto-generated bills for training or testing
- `annotations/`: Ground truth labels (JSON, XML, or CSV)
- `processed/`: Preprocessed versions of data ready for model input

## Setup

Make sure to place your datasets here according to the structure above before running the pipeline.
