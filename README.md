# EasyCSS
The EasyCSS brings several ready-made components using only CSS / SCSS. Just download and use! <br>
[See examples of components on GitHub Pages](https://andraderafa72.github.io/frontend-kit)

# What you will find here

<ol>
  <li>
    <a href="#how-to-use">How To Use</a>
    <ul>
      <li><a href="#how-to-find">How To Find Your Component</a></li>
      <li><a href="#htu-a">Downloading The Specific File</a></li>
      <li><a href="#htu-b">Copy and Paste</a></li>
      <li><a href="#htu-c">Download Easy.min.css</a></li>
    </ul>
  </li>
  <li>
    <a href="#components">Components</a>
    <ul>
      <li>
        <a href="#buttons">Buttons</a>
        <ul>
          <li>
            <a href="#bg-transitions">Background Transitions</a>
          </li>
          <li>
            <a href="#2d-transitions">2D Transitions</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="">Inputs</a>
        <ul>
          <li>
            <a href="">Light</a>
          </li>
          <li>
            <a href="">Dark</a>
          </li>
        </ul>
      </li>
    </ul>    
  </li>
</ol>

<div id="how-to-use" />

# How To Use 
EasyCSS can be used in a variety of ways; You can copy and paste the chosen animation, download the file of the chosen animation or download the EasyCSS minified file and reference it in your HTML.

<div id="how-to-find" />

### How To Find Your Component 
In this directory you can find Buttons, Inputs and Progressbars (Working to add Cards, Links, Paragraphs and Titles)

```bash
Components/The Component You Want/file.(s)css
```

<div id="htu-a" />

### A. Downloading The Specific File 

<ol>
<li>
  Download the specific file of the component you chose in the folder: <br>
   We will use the fade-in.css for this example; <br> <br>
  
  ```bash
  # Components/The Component You Want/file.(s)css
  Components/Buttons/fade-in.css
  ```  
  
  </li>

  <li>
  Add this to your main CSS file:
  <br> <br>
  
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
  Add the class to your HTML and it's working! <br> <br>

  ```html
  <a href="#" class="fade-in">Hover me</a>
  ```
  
</li>
</ol>

<div id="htu-b" />

### B. Copy and Paste 

 
<ol>
<li>Copy the CSS/SASS of the animation that you have chosen and paste into your CSS file.</li>
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
  Add the class to your HTML and it's working! <br> <br>

  ```html
  <a href="#" class="fade-in">Hover me</a>
  ```
  
</li>
</ol>

<div id="htu-c" />

### C. Download Easy.min.css  


<ol>
  <li>Download the file Easy.min.css</li> <br> <br>
  <li>
    Import the Easy.min.css in your HTML or CSS file: <br> <br>
    
   ```css
   @import './Path/To/Easy.min.scss';
   ``` 
    
   ```html
   <link href="css/Easy.min.css" rel="stylesheet">
   ```
  
  </li>
  <li>
    Now you have everyting from us! <br> <br>
  
   ```html
   <a href="#" class="fade-in">Hover me</a>
   <input type="text" name="" id="" class="input-text-1">
   <div class="progressbar-infinite"></div>
   ```
   
  </li>
</ol>

<div id="components" />

# Components 
Here you can see all of our components.

<div id="buttons" />

# Buttons 
Here you can see all of our Buttons.

<div id="bg-transitions" />

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

<div id="2d-transitions" />

## 2D Transitions <br> 
Buttons with background transitions on hover
<nav style="list-style:none;">
  <h3>Skew</h3>
  <ul>
     <li><a href="">Skew Left</a></li>
     <li><a href="">Skew Right</a></li>
     <li><a href="">Skew Top</a></li>
     <li><a href="">Skew Bottom</a></li>
     <li><a href="">Skewed Left</a></li>
     <li><a href="">Skew Right</a></li>
     <li><a href="">Skewed Top</a></li>
     <li><a href="">Skewed Bottom</a></li>
    </ul>
  <h3>Scale</h3>
    <ul>
      <li><a href="">Scale</a></li>
      <li><a href="">Scale X</a></li>
      <li><a href="">Scale Y</a></li>
      <li><a href="">Scale 3D</a></li>
    </ul>
  <h3>Shake</h3>
    <ul>
      <li><a href="">Shake X</a></li>
      <li><a href="">Shake Y</a></li>
      <li><a href="">Shake Rotate Left</a></li>
      <li><a href="">Shake Rotate Right</a></li>
    </ul>
</nav>
  
<a href="https://www.buymeacoffee.com/andraderafa72" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" width="217" height="51" ></a>
