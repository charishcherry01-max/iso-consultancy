from PIL import Image

def get_dominant_color(image_path):
    img = Image.open(image_path)
    img = img.convert('RGB')
    
    # Resize to a 1x1 pixel to get the average color
    img_avg = img.resize((1, 1))
    avg_color = img_avg.getpixel((0, 0))
    
    # Or count pixel frequencies for more dominant color
    colors = img.getcolors(img.size[0] * img.size[1])
    # sort by frequency
    colors.sort(key=lambda x: x[0], reverse=True)
    # usually background is the most frequent, let's find the top non-white/non-black color
    top_color = None
    for count, color in colors:
        # ignore pure white/black if possible
        if color[0] > 240 and color[1] > 240 and color[2] > 240: continue
        if color[0] < 15 and color[1] < 15 and color[2] < 15: continue
        top_color = color
        break
    
    if not top_color:
        top_color = avg_color
        
    print(f"Average color: #{avg_color[0]:02x}{avg_color[1]:02x}{avg_color[2]:02x}")
    print(f"Dominant non-bg color: #{top_color[0]:02x}{top_color[1]:02x}{top_color[2]:02x}")

get_dominant_color('c:/Users/shipa/ISO/frontend/public/logo-new.jpg')
