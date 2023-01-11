# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# create a method that takes in a number and determines if that number is even or odd
# input: an integer
# output: a string stating whether that integer is even or odd
# use modulo (%) to determine if the number is evenly divisible by two
# print using string interpolation to dynamically include the number in the string

def even_odd(num)
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end
p even_odd(num1)
# output: "7 is odd"
p even_odd(num2)
# output: "42 is even"
p even_odd(num3)
# output: "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method that takes in a string and returns a new string with no vowel
# input: a string
# output: same string without vowels
# use the .delete method to specify the letters that will be removed from the input strings

def no_vowels(string)
    string.delete "aeiou"
end
p no_vowels(beatles_album1)
# output: "Rbbr Sl"
p no_vowels(beatles_album2)
# output: "Sgt Pppr"
p no_vowels(beatles_album3)
# output: "Abby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create a method that takes in a string and determines whether that string is a palindrome
# input: a string
# output: a string stating whether or not the input string is a palindrome
# compare the original string to string.reverse to determine whether or not it is a palindrome
# since .reverse is case sensitive, set both string and string.reverse to .upcase

def palindromes(string)
    if string.upcase == string.upcase.reverse
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end

p palindromes(palindrome_tester1)
# output: "Racecar is a palindrome"
p palindromes(palindrome_tester2)
# output: "LEARN is not a palindrome"
p palindromes(palindrome_tester3)
# output: "Rotator is a palindrome"
