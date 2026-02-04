export interface Topic {
  id: string;
  number: number;
  title: string;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  topics: Topic[];
}

export const pythonCourse: Course = {
  id: "python-fundamentals",
  title: "Python Fundamentals",
  topics: [
    {
      id: "intro-to-python",
      number: 1,
      title: "Introduction To Python",
      content: `# Introduction To Python

### History

Python is a high-level, interpreted, interactive, and object-oriented scripting language. It was developed by Guido van Rossum in the late 1980s and early 1990s at the National Research Institute for Mathematics and Computer Science in the Netherlands. Python is derived from several languages like C, C++, SmallTalk, Algol-68, and other scripting languages. It is general-purpose, versatile, concise, easy to read, and can be used in web development, software development, and scientific applications.

### Features

- Easy to read, learn, and maintain.
- Comes with a standard library that is portable and cross-platform compatible.
- Strong support for modules and packages.
- Provides extensive support for major databases like MySQL and Oracle.
- Suitable for developing Windows-based applications.
- Supports functional, structured, and object-oriented programming paradigms.
- Offers automatic garbage collection.
- Supports dynamic type checking and conversion.

### Setting Up Python

1. Download the latest version of Python from: [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. Install the Python interpreter.
3. Execute Python code using IDLE (Integrated Development Environment) or via the command prompt.

Python code can be written and executed in several ways:

1. Using the Python shell (IDLE): Type a line of Python code and press Enter. The interpreter processes it and returns the output.
2. Writing Python scripts in a new file within IDLE and executing using 'Run' or pressing F5.
3. Running saved Python files using the 'import' keyword in the shell or executing from the command prompt.

\`\`\`python
# Example: test.py
print('Hello World!')
\`\`\`

\`\`\`python
>>> import test
# Output: Hello World!
\`\`\`

### Identifiers

Naming conventions for identifiers:

- Class names start with an uppercase letter.
- Other identifiers start with a lowercase letter.
- Single leading underscore: indicates a private identifier.
- Double leading underscores: strongly private identifier.
- Leading and trailing double underscores: language-defined special names.

### Keywords

Python has 33 keywords, including:

\`and, exec, not, assert, finally, or, break, for, pass, class, from, print, continue, global, raise, def, if, return, del, import, try, elif, in, while, else, is, with, except, lambda, yield\`

Python uses indentation instead of braces to define blocks of code. All statements within a block must be indented consistently.

Use the '#' symbol to write comments.

\`\`\`python
# This is a comment
# Written by TechLearn Solutions
print('Hello World')
print("Welcome to TechLearn!")
print("""Computer Training & Development
2nd Floor, Surabhi Complex, AS Rao Nagar, ECIL, Hyderabad-500062.""")
\`\`\`

**Variables** are nothing but reserved memory locations to store values. This means, when you create a variable, you reserve some space in memory.

Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. Therefore, by assigning different data types to variables, you can store integers, decimals, or characters in these variables.

### Assigning Values

\`\`\`python
var = 100
var2 = 12.56
var3 = "techlearn solutions"
var4 = 'python programming'

print(var)
print(var2)
print(var3)
print(var4)
\`\`\`

### Multiple Assignment

\`\`\`python
a = b = c = 1
print(a, b, c)

x, y, z = 1, 'tech', 12.5
print(x)
print(y)
print(z)
\`\`\`

### Standard Data Types

Python supports the following data types:

- Numbers (\`int\`, \`float\`, \`complex\`)
- Strings
- List \`[ ]\`
- Tuple \`( )\`
- Set \`{ }\`
- Dictionary \`{key: value}\`
- Boolean (\`True\`/\`False\`)
- None (no value)
`
    },
    {
      id: "general-functions",
      number: 2,
      title: "General Functions",
      content: `# General Functions

### Built-in Functions

Python provides a rich set of built-in functions that are always available for use.

### Input/Output Functions

\`\`\`python
# print() - Display output
print("Hello, World!")
print("Name:", "Python", "Version:", 3.10)

# input() - Get user input
name = input("Enter your name: ")
print("Hello,", name)
\`\`\`

### Type Conversion Functions

\`\`\`python
# int() - Convert to integer
x = int("10")
y = int(3.14)  # Result: 3

# float() - Convert to float
a = float("3.14")
b = float(10)  # Result: 10.0

# str() - Convert to string
s = str(100)
t = str(3.14)

# bool() - Convert to boolean
bool(1)   # True
bool(0)   # False
bool("")  # False
bool("Hi")  # True
\`\`\`

### Math Functions

\`\`\`python
# abs() - Absolute value
abs(-5)  # Result: 5

# pow() - Power
pow(2, 3)  # Result: 8

# round() - Round to nearest integer
round(3.7)  # Result: 4
round(3.14159, 2)  # Result: 3.14

# min() and max()
min(1, 2, 3)  # Result: 1
max(1, 2, 3)  # Result: 3

# sum() - Sum of iterable
sum([1, 2, 3, 4])  # Result: 10
\`\`\`

### Sequence Functions

\`\`\`python
# len() - Length of sequence
len("Hello")  # Result: 5
len([1, 2, 3])  # Result: 3

# range() - Generate sequence
list(range(5))  # [0, 1, 2, 3, 4]
list(range(1, 6))  # [1, 2, 3, 4, 5]
list(range(0, 10, 2))  # [0, 2, 4, 6, 8]

# sorted() - Return sorted list
sorted([3, 1, 2])  # [1, 2, 3]
sorted("python")  # ['h', 'n', 'o', 'p', 't', 'y']

# reversed() - Return reversed iterator
list(reversed([1, 2, 3]))  # [3, 2, 1]
\`\`\`

### Type Checking Functions

\`\`\`python
# type() - Get type of object
type(10)  # <class 'int'>
type("Hello")  # <class 'str'>

# isinstance() - Check instance type
isinstance(10, int)  # True
isinstance("Hello", str)  # True
isinstance(3.14, (int, float))  # True
\`\`\`
`
    },
    {
      id: "operators",
      number: 3,
      title: "Operators",
      content: `# Operators

Operators are special symbols that perform operations on variables and values.

### Arithmetic Operators

\`\`\`python
a = 10
b = 3

print(a + b)   # Addition: 13
print(a - b)   # Subtraction: 7
print(a * b)   # Multiplication: 30
print(a / b)   # Division: 3.333...
print(a // b)  # Floor Division: 3
print(a % b)   # Modulus: 1
print(a ** b)  # Exponent: 1000
\`\`\`

### Comparison Operators

\`\`\`python
a = 10
b = 20

print(a == b)  # Equal: False
print(a != b)  # Not Equal: True
print(a > b)   # Greater than: False
print(a < b)   # Less than: True
print(a >= b)  # Greater or equal: False
print(a <= b)  # Less or equal: True
\`\`\`

### Assignment Operators

\`\`\`python
x = 10    # Assign
x += 5    # Add and assign: x = 15
x -= 3    # Subtract and assign: x = 12
x *= 2    # Multiply and assign: x = 24
x /= 4    # Divide and assign: x = 6.0
x //= 2   # Floor divide and assign: x = 3.0
x %= 2    # Modulus and assign: x = 1.0
x **= 3   # Exponent and assign: x = 1.0
\`\`\`

### Logical Operators

\`\`\`python
a = True
b = False

print(a and b)  # Logical AND: False
print(a or b)   # Logical OR: True
print(not a)    # Logical NOT: False
\`\`\`

### Bitwise Operators

\`\`\`python
a = 5   # 0101 in binary
b = 3   # 0011 in binary

print(a & b)   # AND: 1 (0001)
print(a | b)   # OR: 7 (0111)
print(a ^ b)   # XOR: 6 (0110)
print(~a)      # NOT: -6
print(a << 1)  # Left shift: 10 (1010)
print(a >> 1)  # Right shift: 2 (0010)
\`\`\`

### Identity Operators

\`\`\`python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is c)      # True (same object)
print(a is b)      # False (different objects)
print(a is not b)  # True
\`\`\`

### Membership Operators

\`\`\`python
fruits = ['apple', 'banana', 'cherry']

print('apple' in fruits)      # True
print('grape' in fruits)      # False
print('grape' not in fruits)  # True
\`\`\`
`
    },
    {
      id: "control-statements",
      number: 4,
      title: "Control Statements",
      content: `# Control Statements

Control statements determine the flow of program execution.

### If Statement

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
\`\`\`

### If-Else Statement

\`\`\`python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
\`\`\`

### If-Elif-Else Statement

\`\`\`python
score = 85

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

print(f"Your grade is: {grade}")
\`\`\`

### Nested If Statements

\`\`\`python
num = 15

if num > 0:
    if num % 2 == 0:
        print("Positive even number")
    else:
        print("Positive odd number")
else:
    print("Negative number or zero")
\`\`\`

### Ternary Operator

\`\`\`python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # Output: adult
\`\`\`

### Match-Case Statement (Python 3.10+)

\`\`\`python
day = 3

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6 | 7:
        print("Weekend")
    case _:
        print("Invalid day")
\`\`\`

### Pass Statement

\`\`\`python
# Placeholder for future code
if True:
    pass  # Do nothing
\`\`\`
`
    },
    {
      id: "data-types-methods",
      number: 5,
      title: "Data Types and Methods",
      content: `# Data Types and Methods

### Numbers

Python supports three types of numbers:

\`\`\`python
# Integer
x = 10
y = -5
z = 0b1010  # Binary: 10
o = 0o12    # Octal: 10
h = 0xA     # Hexadecimal: 10

# Float
pi = 3.14159
scientific = 1.5e2  # 150.0

# Complex
c = 3 + 4j
print(c.real)  # 3.0
print(c.imag)  # 4.0
\`\`\`

### Strings

\`\`\`python
s = "Hello, World!"

# String Methods
s.upper()       # "HELLO, WORLD!"
s.lower()       # "hello, world!"
s.strip()       # Remove whitespace
s.replace("H", "J")  # "Jello, World!"
s.split(",")    # ["Hello", " World!"]

# String Slicing
s[0]      # 'H'
s[0:5]    # 'Hello'
s[-1]     # '!'
s[::-1]   # '!dlroW ,olleH' (reversed)

# String Formatting
name = "Python"
version = 3.10
print(f"Welcome to {name} {version}")
\`\`\`

### Lists

\`\`\`python
fruits = ['apple', 'banana', 'cherry']

# List Methods
fruits.append('date')      # Add to end
fruits.insert(1, 'apricot')  # Insert at position
fruits.remove('banana')    # Remove by value
fruits.pop()               # Remove last item
fruits.sort()              # Sort in place
fruits.reverse()           # Reverse in place

# List Comprehension
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
\`\`\`

### Tuples

\`\`\`python
colors = ('red', 'green', 'blue')

# Tuples are immutable
# colors[0] = 'yellow'  # Error!

# Tuple unpacking
r, g, b = colors
print(r)  # 'red'

# Single element tuple
single = ('one',)  # Note the comma
\`\`\`

### Dictionaries

\`\`\`python
person = {
    'name': 'John',
    'age': 30,
    'city': 'New York'
}

# Dictionary Methods
person['email'] = 'john@example.com'  # Add key
person.get('name')          # Get value
person.keys()               # All keys
person.values()             # All values
person.items()              # All key-value pairs
person.pop('age')           # Remove and return
\`\`\`

### Sets

\`\`\`python
numbers = {1, 2, 3, 4, 5}

# Set Methods
numbers.add(6)              # Add element
numbers.remove(1)           # Remove element
numbers.discard(10)         # Remove if exists

# Set Operations
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)  # Union: {1, 2, 3, 4, 5}
print(a & b)  # Intersection: {3}
print(a - b)  # Difference: {1, 2}
\`\`\`
`
    },
    {
      id: "types-of-loops",
      number: 6,
      title: "Types of Loops",
      content: `# Types of Loops

Loops allow you to execute a block of code repeatedly.

### For Loop

\`\`\`python
# Iterate over a list
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)

# Iterate with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Iterate with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
\`\`\`

### While Loop

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1

# Infinite loop with break
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == 'quit':
        break
\`\`\`

### Loop Control Statements

\`\`\`python
# break - Exit the loop
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - Skip current iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# pass - Placeholder
for i in range(5):
    if i == 2:
        pass  # Do nothing
    print(i)
\`\`\`

### Nested Loops

\`\`\`python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
    print("---")
\`\`\`

### Loop with Else

\`\`\`python
# For-else
for i in range(5):
    print(i)
else:
    print("Loop completed!")

# While-else
count = 0
while count < 3:
    print(count)
    count += 1
else:
    print("While loop completed!")
\`\`\`

### List Comprehension

\`\`\`python
# Traditional loop
squares = []
for x in range(5):
    squares.append(x**2)

# List comprehension (more pythonic)
squares = [x**2 for x in range(5)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
\`\`\`
`
    },
    {
      id: "functions",
      number: 7,
      title: "Functions",
      content: `# Functions

Functions are reusable blocks of code that perform a specific task.

### Defining Functions

\`\`\`python
def greet():
    print("Hello, World!")

# Call the function
greet()
\`\`\`

### Functions with Parameters

\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Python")  # Hello, Python!

# Multiple parameters
def add(a, b):
    return a + b

result = add(3, 5)  # 8
\`\`\`

### Default Parameters

\`\`\`python
def greet(name="World"):
    print(f"Hello, {name}!")

greet()          # Hello, World!
greet("Python")  # Hello, Python!
\`\`\`

### Keyword Arguments

\`\`\`python
def describe_pet(name, animal_type):
    print(f"{name} is a {animal_type}")

# Using keyword arguments
describe_pet(animal_type="dog", name="Buddy")
\`\`\`

### Variable-length Arguments

\`\`\`python
# *args - Variable positional arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # 10

# **kwargs - Variable keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=30, city="NYC")
\`\`\`

### Lambda Functions

\`\`\`python
# Anonymous function
square = lambda x: x**2
print(square(5))  # 25

# With multiple arguments
add = lambda a, b: a + b
print(add(3, 5))  # 8

# Commonly used with map, filter
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
\`\`\`

### Docstrings

\`\`\`python
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        The area of the circle
    """
    import math
    return math.pi * radius ** 2

print(calculate_area.__doc__)
\`\`\`

### Recursive Functions

\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
\`\`\`
`
    },
    {
      id: "class-constructor",
      number: 8,
      title: "Class and Constructor",
      content: `# Class and Constructor

Object-Oriented Programming (OOP) allows you to create classes and objects.

### Defining a Class

\`\`\`python
class Dog:
    # Class attribute
    species = "Canis familiaris"
    
    # Constructor
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    def description(self):
        return f"{self.name} is {self.age} years old"
\`\`\`

### Creating Objects

\`\`\`python
# Create instances
buddy = Dog("Buddy", 3)
max = Dog("Max", 5)

# Access attributes
print(buddy.name)    # Buddy
print(buddy.age)     # 3
print(Dog.species)   # Canis familiaris

# Call methods
print(buddy.bark())        # Buddy says Woof!
print(buddy.description()) # Buddy is 3 years old
\`\`\`

### Constructor Types

\`\`\`python
class Person:
    # Default constructor
    def __init__(self):
        self.name = "Unknown"
        self.age = 0

class Student:
    # Parameterized constructor
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
\`\`\`

### Instance vs Class Variables

\`\`\`python
class Counter:
    count = 0  # Class variable
    
    def __init__(self, name):
        self.name = name  # Instance variable
        Counter.count += 1
    
    @classmethod
    def get_count(cls):
        return cls.count

c1 = Counter("First")
c2 = Counter("Second")
print(Counter.get_count())  # 2
\`\`\`

### Special Methods (Dunder Methods)

\`\`\`python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    
    def __str__(self):
        return f"'{self.title}'"
    
    def __repr__(self):
        return f"Book('{self.title}', {self.pages})"
    
    def __len__(self):
        return self.pages
    
    def __eq__(self, other):
        return self.title == other.title

book = Book("Python Guide", 300)
print(str(book))   # 'Python Guide'
print(len(book))   # 300
\`\`\`

### Encapsulation

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500
# print(account.__balance)    # Error!
\`\`\`
`
    },
    {
      id: "oops-inheritance",
      number: 9,
      title: "OOP's - Inheritance",
      content: `# OOP's - Inheritance

Inheritance allows a class to inherit attributes and methods from another class.

### Basic Inheritance

\`\`\`python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

# Child class
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())  # Buddy says Woof!
print(cat.speak())  # Whiskers says Meow!
\`\`\`

### Using super()

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)  # Call parent constructor
        self.employee_id = employee_id
    
    def display(self):
        return f"{self.name} (ID: {self.employee_id})"

emp = Employee("John", 30, "E001")
print(emp.display())  # John (ID: E001)
\`\`\`

### Types of Inheritance

\`\`\`python
# Single Inheritance
class A:
    pass

class B(A):
    pass

# Multiple Inheritance
class C:
    pass

class D(A, C):
    pass

# Multilevel Inheritance
class E(B):
    pass

# Hierarchical Inheritance
class F(A):
    pass

class G(A):
    pass
\`\`\`

### Multiple Inheritance Example

\`\`\`python
class Flyable:
    def fly(self):
        return "Flying!"

class Swimmable:
    def swim(self):
        return "Swimming!"

class Duck(Flyable, Swimmable):
    def quack(self):
        return "Quack!"

duck = Duck()
print(duck.fly())   # Flying!
print(duck.swim())  # Swimming!
print(duck.quack()) # Quack!
\`\`\`

### Method Resolution Order (MRO)

\`\`\`python
class A:
    def show(self):
        return "A"

class B(A):
    def show(self):
        return "B"

class C(A):
    def show(self):
        return "C"

class D(B, C):
    pass

d = D()
print(d.show())  # B (follows MRO: D -> B -> C -> A)
print(D.__mro__) # View the method resolution order
\`\`\`

### Abstract Base Classes

\`\`\`python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

rect = Rectangle(5, 3)
print(rect.area())       # 15
print(rect.perimeter())  # 16
\`\`\`
`
    },
    {
      id: "oops-polymorphism",
      number: 10,
      title: "OOP's - Polymorphism",
      content: `# OOP's - Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common parent class.

### Method Overriding

\`\`\`python
class Animal:
    def sound(self):
        return "Some sound"

class Dog(Animal):
    def sound(self):
        return "Bark!"

class Cat(Animal):
    def sound(self):
        return "Meow!"

class Cow(Animal):
    def sound(self):
        return "Moo!"

# Polymorphic behavior
animals = [Dog(), Cat(), Cow()]
for animal in animals:
    print(animal.sound())
\`\`\`

### Duck Typing

\`\`\`python
class Duck:
    def speak(self):
        return "Quack!"
    
    def fly(self):
        return "Flap flap!"

class Person:
    def speak(self):
        return "Hello!"
    
    def fly(self):
        return "I can't fly!"

def make_it_speak(thing):
    print(thing.speak())

# Both work despite different classes
make_it_speak(Duck())    # Quack!
make_it_speak(Person())  # Hello!
\`\`\`

### Operator Overloading

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(1, 4)

print(v1 + v2)  # Vector(3, 7)
print(v1 - v2)  # Vector(1, -1)
print(v1 * 3)   # Vector(6, 9)
\`\`\`

### Method Overloading (Using Default Args)

\`\`\`python
class Calculator:
    def add(self, a, b=0, c=0):
        return a + b + c

calc = Calculator()
print(calc.add(5))        # 5
print(calc.add(5, 3))     # 8
print(calc.add(5, 3, 2))  # 10
\`\`\`

### Using *args for True Overloading

\`\`\`python
class MathOperations:
    def add(self, *args):
        return sum(args)
    
    def multiply(self, *args):
        result = 1
        for num in args:
            result *= num
        return result

math = MathOperations()
print(math.add(1, 2))           # 3
print(math.add(1, 2, 3, 4, 5))  # 15
print(math.multiply(2, 3, 4))   # 24
\`\`\`

### Polymorphism with Functions

\`\`\`python
class India:
    def capital(self):
        return "New Delhi"
    
    def language(self):
        return "Hindi"

class USA:
    def capital(self):
        return "Washington D.C."
    
    def language(self):
        return "English"

def country_info(country):
    print(f"Capital: {country.capital()}")
    print(f"Language: {country.language()}")

india = India()
usa = USA()

country_info(india)
country_info(usa)
\`\`\`
`
    },
    {
      id: "multitasking",
      number: 11,
      title: "Multitasking",
      content: `# Multitasking

Multitasking in Python involves running multiple tasks concurrently using threads and processes.

### Threading Basics

\`\`\`python
import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: {i}")
        time.sleep(1)

def print_letters():
    for letter in 'ABCDE':
        print(f"Letter: {letter}")
        time.sleep(1)

# Create threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_letters)

# Start threads
t1.start()
t2.start()

# Wait for completion
t1.join()
t2.join()
print("Done!")
\`\`\`

### Thread with Arguments

\`\`\`python
import threading

def greet(name, times):
    for _ in range(times):
        print(f"Hello, {name}!")

# Pass arguments to thread
thread = threading.Thread(target=greet, args=("Python", 3))
thread.start()
thread.join()
\`\`\`

### Thread Class Inheritance

\`\`\`python
import threading

class MyThread(threading.Thread):
    def __init__(self, name, count):
        super().__init__()
        self.name = name
        self.count = count
    
    def run(self):
        for i in range(self.count):
            print(f"{self.name}: {i}")

t1 = MyThread("Thread-1", 5)
t2 = MyThread("Thread-2", 5)

t1.start()
t2.start()
\`\`\`

### Thread Synchronization with Lock

\`\`\`python
import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        lock.acquire()
        counter += 1
        lock.release()

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Final counter: {counter}")  # 200000
\`\`\`

### Multiprocessing

\`\`\`python
from multiprocessing import Process
import os

def worker(name):
    print(f"Process {name}: PID = {os.getpid()}")

if __name__ == "__main__":
    processes = []
    
    for i in range(3):
        p = Process(target=worker, args=(f"Worker-{i}",))
        processes.append(p)
        p.start()
    
    for p in processes:
        p.join()
\`\`\`

### Process Pool

\`\`\`python
from multiprocessing import Pool

def square(n):
    return n ** 2

if __name__ == "__main__":
    with Pool(4) as pool:
        numbers = [1, 2, 3, 4, 5]
        results = pool.map(square, numbers)
        print(results)  # [1, 4, 9, 16, 25]
\`\`\`

### Async/Await (Asyncio)

\`\`\`python
import asyncio

async def fetch_data(delay, data):
    await asyncio.sleep(delay)
    return data

async def main():
    # Run tasks concurrently
    task1 = asyncio.create_task(fetch_data(2, "Data 1"))
    task2 = asyncio.create_task(fetch_data(1, "Data 2"))
    
    result1 = await task1
    result2 = await task2
    
    print(result1, result2)

asyncio.run(main())
\`\`\`

### Concurrent Futures

\`\`\`python
from concurrent.futures import ThreadPoolExecutor, as_completed

def process_item(item):
    return item * 2

with ThreadPoolExecutor(max_workers=3) as executor:
    items = [1, 2, 3, 4, 5]
    futures = [executor.submit(process_item, item) for item in items]
    
    for future in as_completed(futures):
        result = future.result()
        print(f"Result: {result}")
\`\`\`
`
    }
  ]
};

export const getAllTopics = (): Topic[] => {
  return pythonCourse.topics;
};

export const getTopicById = (id: string): Topic | undefined => {
  return pythonCourse.topics.find(topic => topic.id === id);
};

export const getTopicByNumber = (number: number): Topic | undefined => {
  return pythonCourse.topics.find(topic => topic.number === number);
};
