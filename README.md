# EasyCSS
The EasyCSS brings several ready-made components using only CSS / SCSS. Just download and use! <br>
[See examples of components on GitHub Pages](https://andraderafa72.github.io/frontend-kit)
# How To Use
EasyCSS can be used in a variety of ways; You can copy and paste the chosen animation, download the file of the chosen animation or download the EasyCSS minified file and reference it in your HTML.

### How To Find Your Component
In this directory you can find Buttons, Inputs and Progressbars (Working to add Cards, Links, Paragraphs and Titles)

```bash
Components/The Component You Want/file.(s)css
```
<br>

### A. Downloading The Specific File

<ol>
<li>
  Download the specific file of the component you chose in the folder: <br>
   We will use the fade-in.css for this example;
  
  ```bash
  # Components/The Component You Want/file.(s)css
  Components/Buttons/fade-in.css
  ```  
  
  </li>
  <br>

  <li>
  Add this to your main CSS file:
  <br>
  
  ```css
  @import './Path/To/fade-in.css';
  ``` 
  
  or this in your HTML file:
  <br>
  
  ```html
  <link href="css/fade-in.css" rel="stylesheet">
  ``` 
  
  </li>

<br>
<li>
  Add the class to your HTML and it's working!

  ```html
  <a href="#" class="fade-in">Hover me</a>
  ```
  
</li>

<br>
</ol>

### B. Copy and Paste

<ol>
<li>Copy the CSS/SASS of the animation that you have chosen and paste into your CSS file.</li>
<br>
  
<br>

File fade-in.scss

```css
/* Components/Buttons/fade-in.scss */

.fade-in{
  position: relative;
  padding: 8px 16px;
  display: inline-block;
  font-size: 1rem;
  border: 1px solid #2F80ED;
  &:hover{
      transition: .7s ease;
      background: #2F80ED;
  }
}
```

<br>
<li>
  Add the class to your HTML and it's working!

  ```html
  <a href="#" class="fade-in">Hover me</a>
  ```
  
</li>
</ol>


### C. Download Easy.min.css

<ol>
  <li>Download the file Easy.min.css</li>
  <li>
    Import the Easy.min.css in your HTML or CSS file:
    
   ```css
   @import './Path/To/fade-in.scss';
   ``` 
    
   ```html
   <link href="css/Easy.min.css" rel="stylesheet">
   ```
  
  </li>
  <li>
    Now you have everyting from us!
  
   ```html
   <a href="#" class="fade-in">Hover me</a>
   <input type="text" name="" id="" class="input-text-1">
   <div class="progressbar-infinite"></div>
   ```
   
  </li>
</ol>

# Buttons
## Background Transitions <br>
Buttons with background transitions on hover
<nav style="list-style:none;">
  <h3>Fade</h3>
  <ul>
     <li><a href="">Fade In</a></li>
      <li><a href="">Fade Out</a></li>
    </ul>
  <h3>Slide</h3>
    <ul>
      <li><a href="">Slide Left</a></li>
      <li><a href="">Slide Right</a></li>
      <li><a href="">Slide Top</a></li>
      <li><a href="">Slide Bottom</a></li>
      <li><a href="">Slide Left-Right</a></li>
      <li><a href="">Slide Top-Botom</a></li>
    </ul>
  <h3>Slide Rounded</h3>
    <ul>
      <li><a href="">Slide Left Rounded</a></li>
      <li><a href="">Slide Right Rounded</a></li>
      <li><a href="">Slide Top Rounded</a></li>
      <li><a href="">Slide Bottom Rounded</a></li>
      <li><a href="">Slide Left-Right Rounded</a></li>
      <li><a href="">Slide Rotate Left</a></li>
      <li><a href="">Slide Rotate Right</a></li>
    </ul>
</nav>

<a href="https://www.buymeacoffee.com/andraderafa72" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" width="217" height="51" ></a>
