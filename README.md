# Responsive Detector
## A project made exclusively to detect screen sizes of a device to have a better understanding of Media query and its breakpoints set on:



### @media

#### Custom (currently using this)
```
/* Small devices (phones, 0px and up) */

/*--------------------------------------------------------------
    @media - Mobile First
--------------------------------------------------------------*/

/* sm - Small devices (landscape phones - 576px and up) */
@media (min-width: 576px) { ... }

/* md - Medium devices (tablets - 768px and up) */
@media (min-width: 768px) { ... }

/* lg - Large devices (laptops - 1024px and up) */
@media (min-width: 1024px) { ... }

/* xl - Extra large devices (desktop & big laptops - 1441px and up) */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - Compressed Screens
--------------------------------------------------------------*/

/* Tablets compressed height */
@media screen and (max-width: 1023px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Laptops compressed height */
@media screen and (max-width: 1440px) and (min-width: 1024px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Desktop compressed height */
@media screen and (max-width: 1441000px) and (min-width: 1441px) and (max-height: 775px) and (min-height: 0px) { ... }
```


#### Apple
```
/* Small devices (phones, 0px and up) */

/*--------------------------------------------------------------
    @media - Apple
--------------------------------------------------------------*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (laptops, 1069px and up) */
@media (min-width: 1069px) { ... }

/* Extra large devices (desktop and macbook 16", 1441px and up) */
@media (min-width: 1441px) { ... }

/*--------------------------------------------------------------
    @media - Compressed Screens
--------------------------------------------------------------*/

/* Tablets compressed height */
@media screen and (max-width: 1068px) and (min-width: 768px) and (max-height: 733px) and (min-height: 0px) { ... }

/* Laptops compressed height */
@media screen and (max-width: 1440px) and (min-width: 1069px) and (max-height: 775px) and (min-height: 0px) { ... }

/* Desktop compressed height */
@media screen and (max-width: 1441000px) and (min-width: 1441px) and (max-height: 775px) and (min-height: 0px) { ... }
```


#### Bootstrap
```
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

/*--------------------------------------------------------------
    @media - Bootstrap
--------------------------------------------------------------*/

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```
