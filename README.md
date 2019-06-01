# Autobind.js
This is a really simple bit of jQuery code to I created to make it
super-easy to facilitate CSS transitions from user interactions. 
You just add some attributes to HTML elements to describe the 
behaviour and classes will be toggled on specified elements 
based on events, such as click or hover. 

See example here:
https://very-random-man.github.io/autobind.js/example.html

## How to set up
Just add the script in the HEAD tag, after jQuery has been included.
```
<script src="js/autobind.js"></script>
```

## How to control behaviour
Use `data-autobind` attributes to specify behaviour on html elements.

Set the event you want to capture. You can add more than one event
if you want.
```
data-autobind="click"
data-autobind="mouseenter mouseleave"
```
If you want to prevent default behaviour, such as stopping links 
working on `<a>` tags. Only its presence is required so the value 
can be nothing or anything.
```
data-autobind-prevent
```  
Set the class or classes that are toggled when the event is 
triggered.
```
data-autobind-classes="animated"
data-autobind-classes="expanded collapsed"
```
Specify an optional selector if you want to toggle classes on a 
different element or collection of elements elsewhere in the 
document.
```
data-autobind-selector="body"
```
