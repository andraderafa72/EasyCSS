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

<ol>
<li>Copy the CSS/SASS of the animation that you have chosen or Download the corresponding file.</li>
<br>
  
<br>

File fade-in.scss

```css
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
<li>Add to the element you want to animate the classes present in the CSS/SASS.</li>
<br>

Add this to your HTML

```html
<a href="#" class="fade-in">Hover me</a>
```

<br>
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
