# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming (sometimes abbreviated to OOP) is a programming style that, as stated in the name, is based largely if not entirely around objects. This means that everything you work with is an instance of a class, rather than with logic based in functions like other programming styles. Ruby is an object-oriented programming language, and even the logic stored in methods relies on objects.

Researched answer: Object-oriented programming (OOP) is a model of computer programming that is designed around objects rather than functionality. An object is data that has unique attributes and behavior, meaning that everything you work with in an OOP language is an instance of a class. This allows the code to be more dynamic and reusable compared to functional programming, which relies more on functionality and logic and is not as intuitive or efficient.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: While incredibly similar, the difference between a Float and an Integer comes down to one point-- a decimal point, that is! Integers are whole numbers, and Floats are partial numbers. This is represented in the math of Ruby. For example, I'll divide 7 and 2. Similar to JavaScript, Ruby intuitively knows math. However, you have to be specific to get specific results. '7 / 2' will give you 3, ignoring the remainder of one, and solely using whole numbers (Integers). Conversely, inputting '7 / 2.0' or otherwise making one of the numbers a decimal will give you 3.5, the mathematically correct answer using partial numbers (Floats).

Researched answer: In Ruby, Floats (floating-point values) and Integers are incredibly similar and have only one key difference: Integers are whole numbers, and Floats are partial numbers. Any number written with a decimal will automatically be read as a Float by Ruby, ensuring accurate mathematical answers rather than the innacurate responses equating with integers can lead to. Even if you write '120.0', which is technically still a whole number, the presence of the decimal point will allow Ruby to return Floats when equating with that number.

1. Ruby has an implicit return. What does that mean?

Your answer: An implicit return simply means that a Ruby method will return the last line of code before the end keyword.

Researched answer: In Ruby, if the last line of code before an end keyword is the desired return, there is no need for a specific return keyword. Ruby reads in line order, and will automatically return the last line of code prior to the ending keyword.

1. What is a block in Ruby?

Your answer: A block in Ruby is similar to an anonymous function in JavaScript. They are passed into methods, and contain the keywords 'do' and 'end'.

Researched answer: Ruby blocks are similar to anonymous functions and are passed into methods. Blocks are enclosed within the keywords 'do' and 'end' if they are multiple lines, and '{}' if single-lined. 

1. How do you extract a value in a Ruby hash?

Your answer: In order to extract a value in a Ruby hash, you need to call upon both the hash name and the key. For example, if you had a hash called dog_colors and wanted to pull the colors for labrador, you would type: p dog_breeds[:labrador]. The output would be "yellow, chocolate, black".

Researched answer: To extract a value from a Ruby hash, you need to use bracket notation to call the hash name followed by the key in square brackets. Both of these things will provide the corresponding value.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance is just as the name says-- in Ruby, a class can "inherit" behavior from other classes. The new class is then known as the subclass, and the former as the superclass.

2. RSpec: RSpec is a framework that allows Ruby code to be tested. It stands for Ruby Specification, and from my research, assumedly runs in a similar manner to jest.

3. CRUD: CRUD is an acryonym that stands for Create, Read, Update, and Delete. These verbs are used when working with data such as hashes.

4. Test-driven development: Test-driven development, sometimes abbreviated to TDD, simply described a development style wherein you write tests in order to guide the creation of the rest of your code.

5. HTTP: HTTP, or HyperText Transfer Protocol, are some rules for transferring various data and files over the web in a web browser.
