# HAL9000 Number Analyzer (Beep Boop)

#### This page is designed to analyze numbers entered, and returns a range with given parameters established. Updated as of September 6, 2019

#### By Chase J. Smith

## Description

With this program, you can enter in any set of numbers you like, and when entered, those numbers are returned as a range. Depending on some conditions pre-determined, your numbers may return normal, but may also return some "interesting" results.

## Specifications

When you open the page, an entry bar will be given that allows you to enter any number (or multiple numbers).

As you submit your number(s), the program will analyze each number, and break those numbers down into separate strings. When entering numbers in, a couple exceptions will exist to where your number may be rejected...

* Ex. If your number is a 0, the program will return the prompt, "Please enter a number greater than zero."

* Ex. If your number is not a number (NaN), the program will return the prompt, "Please enter a valid number."  

Once each number is analyzed and broken into strings, the numbers will be returned back as a range of numbers inside of an array.

As part of the program, a few conditions exist where some numbers may not return as actual numbers...

* Ex. If a 0 is detected, the program will return the phrase, "Beep!" in place of the 0.

* Ex. If a 1 is detected, the program will return the phrase, "Boop!" in place of the 1.

* Ex. If a number that is divisible by 3 is detected, the program will return the phrase, "I'm sorry Dave, I'm afraid I can't do that." in place of any numbers that meet this condition.

If none of those conditions are met with numbers in the array, those numbers will return as normal.

## Known bugs

None

## Contact info

If you should have any questions regarding this page's content or structure, please contact me at chasesmithstudios@gmail.com

## Technologies used

* Sublime Text
* Bootstrap
* HTML/CSS
* JavaScript/jQuery
* GitHub

### License

Creative Commons license

Copyright (c) 2019 ** Chase J. Smith