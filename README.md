# mostafamahdiyousef.github.io
# Mostafa Mahdi Yousef - Personal Website Template

This is a personal website template that includes a **Main Page** and a **Curriculum Vitae (CV) Page**. It is designed to showcase your professional background and achievements. The template is responsive and easy to customize for both mobile and desktop users.

---

## 🌟 **Features**

- Clean and responsive layout for both **Main** and **CV** pages.
- Rotating multi-language greetings (customizable).
- Easy-to-edit HTML structure.
- Pre-designed styles with CSS (minimal changes required).
- Social media icons (LinkedIn, Twitter) and profile image placeholders.

---

## 🚀 **How to Use**

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/mostafamahdiyousef/mostafamahdiyousef.github.io.git
   ```

2. **Modify the HTML files** to match your personal information.

---

### 🔧 **Customizing the Main Page (`index.html`)**

You can edit the following sections inside the **`index.html`** file:

1. **Profile Details** (Name, Description, Location, Social Links)
   ```html
   <h1>Mostafa Mahdi Yousef</h1>
   <p>
     Electrical Engineer and Ph.D. researcher at York University, specializing in EV on-board chargers with V2X capability and advanced SoC estimation methods.
   </p>
   ```

2. **Multi-language Greetings**
   ```html
   <h2>Hello | Bonjour | नमस्ते | 你好 | سلام!</h2>
   ```
   You can modify or add greetings to match your target audience.

3. **Profile Picture**
   Replace the image file `mostafa.jpeg` with your own image and ensure the file name is updated here:
   ```css
   .profile-photo {
     background-image: url('mostafa.jpeg');
   }
   ```

4. **Social Links**  
   Update the links to your own social media accounts:
   ```html
   <a href="https://x.com/YourTwitterHandle" target="_blank">Twitter</a>
   <a href="https://www.linkedin.com/in/YourLinkedInProfile/" target="_blank">LinkedIn</a>
   ```

---

### 📄 **Customizing the CV Page (`cv.html`)**

You can edit the education and other sections inside the **`cv.html`** file:

1. **Update your name and CV details**
   ```html
   <h1>Mostafa Mahdi Yousef</h1>
   <h2>Curriculum Vitae</h2>
   ```

2. **Modify the education section**
   ```html
   <li>
     <span class="degree-title">Doctor of Philosophy (Ph.D.) in Electrical Engineering</span>, 
     York University, Toronto, Canada <span class="details">(2023 - Present)</span>
     <br />
     <span class="highlight">Research Focus:</span> Development of advanced on-board EV chargers with V2X capability.
   </li>
   ```

3. **Replace the CV download link**
   ```html
   <a href="Your_CV_File.pdf" class="download-cv">Download CV</a>
   ```

4. **Update the supervisor or project details if needed**.

---

## 🎨 **Styling and Layout Changes**

The styles are defined in the **`<style>`** section within each HTML file.  
You can change colors, fonts, and spacing as needed.

Example: To change the navigation bar color:
```css
nav {
  background-color: #87CEEB; /* Sky blue */
}
```

---

## 🖼️ **Replacing Image Files**

You can replace the following image files in the root directory:

- **`mostafa.jpeg`** – Your profile photo.
- **`linkedin.png`**, **`twitter.jpg`**, **`location.png`** – Social and location icons.

Make sure the image names and paths are correctly referenced in the HTML files.

---

## 🛠️ **Deployment**

You can deploy this website on **GitHub Pages** by following these steps:

1. Navigate to your repository **Settings**.
2. Under the **Pages** section, select the branch (e.g., `main`) and save.
3. Your site will be live at `https://yourusername.github.io/`.

---

## 📄 **License**

This project is open-source. Feel free to fork, modify, and use it for personal or professional purposes!

---

## ✨ **Contributors**

- **Mostafa Mahdi Yousef** – Electrical Engineer and Ph.D. researcher at York University.
```
