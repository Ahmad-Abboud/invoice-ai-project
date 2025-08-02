import easyocr
import cv2
import numpy as np
import pandas as pd


def extract_text_with_easyocr(image_path, lang_list=['ar'], resize_factor=2):
    # Initialize OCR reader
    reader = easyocr.Reader(lang_list)

    # Read and resize image
    image = cv2.imread(image_path)
    if image is None:
        raise FileNotFoundError(f"Image not found at: {image_path}")

    resized = cv2.resize(image, None, fx=resize_factor, fy=resize_factor, interpolation=cv2.INTER_LINEAR)
    gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)

    # OCR
    results = reader.readtext(gray)

    # Convert to DataFrame
    data = []
    for result in results:
        box, text, confidence = result
        flat_box = [int(pt[0]) for pt in box] + [int(pt[1]) for pt in box]  # [x1, x2, x3, x4, y1, y2, y3, y4]
        entry = flat_box + [text, float(confidence)]
        data.append(entry)

    columns = [
        "top_left_x", "top_right_x", "bottom_right_x", "bottom_left_x",
        "top_left_y", "top_right_y", "bottom_right_y", "bottom_left_y",
        "text", "confidence"
    ]

    df = pd.DataFrame(data, columns=columns)
    return df
