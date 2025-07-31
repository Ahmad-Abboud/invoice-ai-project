import cv2
import numpy as np
import os

def load_image(path):
    return cv2.imread(path)

def convert_to_grayscale(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return gray, gray

def apply_adaptive_threshold(image):
    thresholded = cv2.adaptiveThreshold(image, 255,
                                        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                        cv2.THRESH_BINARY, 11, 2)
    return thresholded, thresholded

def reduce_noise(image):
    denoised = cv2.medianBlur(image, 5)
    return denoised, denoised

def morphological_operations(image):
    kernel = np.ones((1, 1), np.uint8)
    morphed = cv2.dilate(cv2.erode(image, kernel, iterations=1), kernel, iterations=1)
    return morphed

def save_image(image, path):
    cv2.imwrite(path, image)

def ensure_output_dir(path="output"):
    os.makedirs(path, exist_ok=True)

def full_preprocessing_pipeline(image_path, return_all_steps=False, save_steps=False):
    image = load_image(image_path)
    if image is None:
        raise ValueError(f"Image at path '{image_path}' could not be loaded.")

    ensure_output_dir()
    grayscale, _ = convert_to_grayscale(image)
    thresholded, _ = apply_adaptive_threshold(grayscale)
    denoised, _ = reduce_noise(thresholded)
    morphed = morphological_operations(denoised)

    if save_steps:
        save_image(grayscale, "output/1_grayscale.png")
        save_image(thresholded, "output/2_thresholded.png")
        save_image(denoised, "output/3_denoised.png")
        save_image(morphed, "output/4_final.png")

    if return_all_steps:
        return {
            "original": image,
            "grayscale": grayscale,
            "thresholded": thresholded,
            "denoised": denoised,
            "morphed": morphed
        }
    else:
        return morphed
