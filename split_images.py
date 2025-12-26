from PIL import Image
import os

def split_image():
    # Load the sprite sheet
    sprite_path = "public/images/band/original_sprite.png"
    if not os.path.exists(sprite_path):
        print(f"Error: {sprite_path} not found")
        return

    img = Image.open(sprite_path)
    width, height = img.size
    
    # Assuming 3x2 grid based on typical generation for "6 separate portraits"
    # Adjust rows/cols if necessary. Usually 1024x1024 or similar.
    # If 6 images, likely 3 cols, 2 rows.
    cols = 3
    rows = 2
    
    w_crop = width // cols
    h_crop = height // rows
    
    count = 1
    for r in range(rows):
        for c in range(cols):
            left = c * w_crop
            top = r * h_crop
            right = left + w_crop
            bottom = top + h_crop
            
            # Crop
            cropped = img.crop((left, top, right, bottom))
            
            # Save
            output_path = f"public/images/band/member{count}.png"
            cropped.save(output_path)
            print(f"Saved {output_path}")
            count += 1

if __name__ == "__main__":
    split_image()
