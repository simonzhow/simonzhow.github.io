const adjectivesArray = ["box.", "surf.", "design.", "create."];
//Cloud Function
$(document).ready(function() {
    $(".home-intro_typed-text").typed({
        strings: adjectivesArray,
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 75,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
});
