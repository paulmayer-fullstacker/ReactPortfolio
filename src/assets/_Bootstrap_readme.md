# Submission: # Migrating a Site to Bootstrap

## Introduction:

Herewith my submission for Week-3's challenge: a multi-page responsive website, refactored to exploit Bootstrap and JQuery widgets. In addition to HTML and CSS styling, the solution features Bootstrap's responsive grid system, components, and utility classes. It also features some JQuery widgets.

The solution is made up of five HTML web pages: the main page, three project pages, and a contact page. There is also a separate CSS styling sheet, and a JS script file. 

Specific solution features are not listed within this document. However, some justification of my solution strategy will be offered. 
The solution has been pushed to my GitHub repository and published to GitHub Pages, for public access and review.  

---

## The Solution:

### The Main Page:

The main page (index.html), fulfils the majority of challenge requirements. As the landing page, it is designed to be most attractive and engaging. It comprises a header and navigation bar (fixed), an Ethos section, a Projects section, and a Contact section. The The Projects section contains links to the project pages, and the Contact section links to a Contact Form.

Employing Bootstrap components, the navigation bar collapses into a burger menu and expands into a full, in-line menu, as the viewport size changes.

Content sections, like the projects and contact areas, employ Bootstrap's responsive grid system. So, components resize and reposition, to accommodate the viewport size.

Where possible, I have tried to embrace the Bootstrap default styling, only adding styling where absolutely necessary. At first glance, this may appear detrimental. Further scrutiny will uncover some quite odd stylistic features.

### The Project Pages:

The project pages now feature two JQuery widgets, for no other function, than to feature JQuery widgets. Once again, I have tried to embrace the JQuery default styling, adding minimal style overwrite. This has resulted in some incongruous features. I have also employed some Bootstrap styling, like the blue read more/less button. You can't miss that button!

The Bootstrap nav-bar, on the project pages, allows the user to return to the Home page.

The same JQuery Java Script calls are made from all three project pages. Thus, a Script file has been employed (./assets/script.js), to reduce duplication.

### The Contact Form:

The Contact is intended to be functional and practical. The form is functional, though it cannot be submitted. To maintain continuity, I have employed Bootstrap styling on the Submit button. Once again, the Bootstrap nav-bar allows the user to return to the Home page.

### script.js

The same JQuery Java Script calls are made from a number os HTML pages. So, a Script file has been employed (./assets/script.js), to reduce duplication.

### Commenting:

I have tried to include relevant comments. I will continue to improve and increase my commenting.

### Poor Design Decisions

I decided to embrace Bootstrap and JQuery default styling, wherever possible. This design decision may appear detrimental to the styling of my Multi-page Responsive Website. That website was designed, based on Week-2's requirements. I am now accommodation new requirements, with the same website as my baseline. Going forward, if continuing to employ Bootstrap and/or JQuery, I would use an appropriate design strategy, to yield the best features and functionality from those frameworks, without significant overwrite.

---

## GitHub

### GitHub repository:

My solution is contained within a project called: W2-Challenge-Mayer.  
The project has now been pushed my GitHub repository: https://github.com/paulmayer-fullstacker/week3/


### GitHub Pages:

The solution has been published to GitHub Pages, and can be found at this URL:  
https://paulmayer-fullstacker.github.io/week3/W3-Challenge-Mayer/

---

## To Conclude:

I hope that that this submission is adequate and appropriate, at this stage of the course.

<br/>

<hr style="height: 5px; background-color: black; border: none;">
