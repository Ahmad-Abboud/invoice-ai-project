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
        return thresholded


def preprocess_invoice(image_path):
    original_image = cv2.imread(image_path)

    # 1. Convert to grayscale
    gray = cv2.cvtColor(original_image, cv2.COLOR_BGR2GRAY)

    # 2. Apply a light blur to reduce noise before thresholding
    # This can help in getting a more uniform background
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # 3. Apply adaptive thresholding with carefully chosen parameters
    # The block_size of 21 and C of 1 are good starting points for many documents
    thresholded = cv2.adaptiveThreshold(blurred, 255,
                                        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                        cv2.THRESH_BINARY, 21, 1)

    # 4. Optional: Morphological Operations
    # You can use a dilation to thicken text if it's too thin
    # or an opening operation to remove small noise artifacts.
    # For this image, let's stick to the thresholded image first.
    # kernel = np.ones((1, 1), np.uint8)
    # final_image = cv2.dilate(thresholded, kernel, iterations=1)

    return blurred

