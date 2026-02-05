export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface Topic {
  id: string;
  number: number;
  title: string;
  content: string;
  quickCheck?: QuizQuestion[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

export const pythonCourse: Course = {
  id: "python-fundamentals",
  title: "Python Fundamentals",
  description: "A comprehensive course covering Python programming from basics to advanced concepts. Perfect for beginners and intermediate programmers looking to master Python.",
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Getting Started with Python",
      description: "Learn the fundamentals of Python programming, including setup, syntax, and basic concepts.",
      topics: [
        {
          id: "intro-to-python",
          number: 1,
          title: "Introduction to Python",
          content: `# Introduction to Python

Welcome to the world of Python programming! In this comprehensive introduction, you'll learn about Python's rich history, its powerful features, and why it has become one of the most popular programming languages in the world.

---

## A Brief History of Python

Python is a high-level, interpreted, interactive, and object-oriented scripting language that has revolutionized the way we think about programming. It was conceived in the late 1980s by **Guido van Rossum** at the National Research Institute for Mathematics and Computer Science (CWI) in the Netherlands.

The name "Python" wasn't inspired by the snake, but by the British comedy group **Monty Python's Flying Circus**. Guido was a big fan of their work, and wanted the language to be fun to use—a philosophy that continues to guide Python's development today.

### Timeline of Python

| Year | Milestone |
|------|-----------|
| 1989 | Guido van Rossum begins working on Python |
| 1991 | First public release (version 0.9.0) |
| 2000 | Python 2.0 released with list comprehensions |
| 2008 | Python 3.0 released with major improvements |
| 2020 | Python 2 reaches end of life |
| 2024 | Python remains #1 in TIOBE Index |

Python draws inspiration from several languages:
- **C and C++** for syntax and performance concepts
- **ABC** for simplicity and readability
- **Modula-3** for exception handling
- **Lisp** for functional programming features

---

## Why Python? Key Features

Python has become the language of choice for millions of developers worldwide. Here's why:

### 1. Easy to Learn and Read

Python's syntax is designed to be intuitive and mirrors natural English. Compare these examples:

\`\`\`python
# Python - Clean and readable
if user.is_authenticated and user.has_permission("edit"):
    document.save()
\`\`\`

\`\`\`java
// Java - More verbose
if (user.isAuthenticated() && user.hasPermission("edit")) {
    document.save();
}
\`\`\`

### 2. Extensive Standard Library

Python comes with a comprehensive standard library that handles everything from web servers to data compression:

\`\`\`python
import json          # JSON parsing
import datetime      # Date/time operations
import os            # Operating system interface
import re            # Regular expressions
import sqlite3       # Database operations
import urllib        # URL handling
import collections   # Specialized data structures
\`\`\`

### 3. Cross-Platform Compatibility

Write once, run anywhere! Python code runs seamlessly on:
- Windows
- macOS
- Linux
- Unix
- Raspberry Pi
- And many more platforms

### 4. Versatile Applications

Python excels in multiple domains:

| Domain | Popular Tools/Frameworks |
|--------|-------------------------|
| Web Development | Django, Flask, FastAPI |
| Data Science | Pandas, NumPy, Matplotlib |
| Machine Learning | TensorFlow, PyTorch, scikit-learn |
| Automation | Selenium, Beautiful Soup |
| Game Development | Pygame, Panda3D |
| Desktop Apps | PyQt, Tkinter, Kivy |

### 5. Dynamic Typing

Python automatically determines variable types at runtime:

\`\`\`python
x = 10        # x is an integer
x = "Hello"   # Now x is a string
x = [1, 2, 3] # Now x is a list
# No type declarations needed!
\`\`\`

### 6. Automatic Memory Management

Python handles memory allocation and garbage collection automatically:

\`\`\`python
# You don't need to worry about freeing memory
data = [1, 2, 3, 4, 5] * 1000000  # Create large list
del data  # Python automatically reclaims the memory
\`\`\`

---

## Setting Up Your Python Environment

Let's get you up and running with Python!

### Step 1: Download Python

Visit the official Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/)

> **Recommendation:** Always download the latest stable version (Python 3.x). Python 2 is no longer supported.

### Step 2: Install Python

**On Windows:**
1. Run the downloaded installer
2. **Important:** Check "Add Python to PATH"
3. Click "Install Now"
4. Verify installation by opening Command Prompt and typing:

\`\`\`bash
python --version
\`\`\`

**On macOS:**
\`\`\`bash
# Using Homebrew (recommended)
brew install python3

# Verify installation
python3 --version
\`\`\`

**On Linux (Ubuntu/Debian):**
\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip

# Verify installation
python3 --version
\`\`\`

### Step 3: Choose Your Development Environment

| Environment | Best For | Pros |
|-------------|----------|------|
| IDLE | Beginners | Comes with Python, simple interface |
| VS Code | General development | Free, extensions, debugging |
| PyCharm | Professional development | Powerful features, refactoring |
| Jupyter Notebook | Data science | Interactive, great for exploration |

---

## Your First Python Program

Let's write the traditional "Hello, World!" program:

\`\`\`python
# hello.py - Your first Python program
print("Hello, World!")
print("Welcome to Python Programming!")
\`\`\`

**Running your program:**

\`\`\`bash
# From command line
python hello.py

# Output:
# Hello, World!
# Welcome to Python Programming!
\`\`\`

### Understanding the Code

- \`print()\` is a built-in function that displays output
- Text inside quotes is called a **string**
- Lines starting with \`#\` are **comments** (ignored by Python)

---

## Python Identifiers and Naming Rules

**Identifiers** are names used to identify variables, functions, classes, and other objects.

### Rules for Identifiers

1. Must start with a letter (a-z, A-Z) or underscore (_)
2. Can contain letters, digits (0-9), and underscores
3. Case-sensitive (\`name\` ≠ \`Name\` ≠ \`NAME\`)
4. Cannot be a Python keyword

\`\`\`python
# Valid identifiers
my_variable = 10
_private = "secret"
userName = "John"
MAX_SIZE = 100

# Invalid identifiers
# 2fast = "error"     # Cannot start with digit
# my-var = "error"    # Hyphens not allowed
# class = "error"     # Reserved keyword
\`\`\`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | \`user_name\`, \`total_count\` |
| Constants | UPPER_SNAKE_CASE | \`MAX_SIZE\`, \`API_KEY\` |
| Functions | snake_case | \`calculate_total()\`, \`get_user()\` |
| Classes | PascalCase | \`UserAccount\`, \`DataProcessor\` |
| Private | Leading underscore | \`_internal_method\` |
| "Very Private" | Double underscore | \`__very_private\` |

---

## Python Keywords

Python has 35 reserved keywords that cannot be used as identifiers:

\`\`\`python
import keyword
print(keyword.kwlist)
\`\`\`

| Category | Keywords |
|----------|----------|
| Logic | \`and\`, \`or\`, \`not\`, \`True\`, \`False\` |
| Control Flow | \`if\`, \`elif\`, \`else\`, \`for\`, \`while\`, \`break\`, \`continue\`, \`pass\` |
| Functions | \`def\`, \`return\`, \`lambda\`, \`yield\` |
| Classes | \`class\`, \`self\` |
| Exception | \`try\`, \`except\`, \`finally\`, \`raise\`, \`assert\` |
| Import | \`import\`, \`from\`, \`as\` |
| Other | \`None\`, \`global\`, \`nonlocal\`, \`with\`, \`async\`, \`await\` |

---

## Indentation: Python's Unique Feature

Unlike other languages that use braces \`{}\`, Python uses **indentation** to define code blocks:

\`\`\`python
# Correct indentation
if True:
    print("This is inside the if block")
    print("So is this")
print("This is outside the if block")

# Incorrect indentation (will cause error!)
if True:
print("Error!")  # IndentationError!
\`\`\`

> **Best Practice:** Use 4 spaces for each indentation level. Most code editors handle this automatically.

---

## Comments in Python

Comments make your code more readable and maintainable:

\`\`\`python
# Single-line comment
x = 10  # Inline comment

# Multi-line comments (convention)
# This is a longer explanation
# that spans multiple lines

"""
This is a docstring.
It can span multiple lines.
Used to document functions, classes, and modules.
"""

def greet(name):
    """
    Greet a user by name.
    
    Args:
        name: The name of the user to greet
    
    Returns:
        A greeting string
    """
    return f"Hello, {name}!"
\`\`\`

---

## Variables and Data Types

In Python, variables are created when you assign a value:

\`\`\`python
# Creating variables
name = "Alice"           # String
age = 25                 # Integer
height = 5.7             # Float
is_student = True        # Boolean
grades = [90, 85, 88]    # List
\`\`\`

### Multiple Assignment

Python allows elegant multiple assignments:

\`\`\`python
# Assign same value to multiple variables
x = y = z = 0

# Assign different values in one line
name, age, city = "Bob", 30, "New York"

# Swap values (Pythonic way!)
a, b = 1, 2
a, b = b, a  # Now a=2, b=1
\`\`\`

### Standard Data Types Overview

| Type | Example | Description |
|------|---------|-------------|
| \`int\` | \`42\`, \`-17\` | Whole numbers |
| \`float\` | \`3.14\`, \`-0.001\` | Decimal numbers |
| \`str\` | \`"Hello"\` | Text |
| \`bool\` | \`True\`, \`False\` | Boolean values |
| \`list\` | \`[1, 2, 3]\` | Ordered, mutable collection |
| \`tuple\` | \`(1, 2, 3)\` | Ordered, immutable collection |
| \`dict\` | \`{"a": 1}\` | Key-value pairs |
| \`set\` | \`{1, 2, 3}\` | Unique, unordered collection |
| \`None\` | \`None\` | Absence of value |

\`\`\`python
# Check the type of any variable
x = 42
print(type(x))  # <class 'int'>

name = "Python"
print(type(name))  # <class 'str'>
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <ul class="list-none pl-0"><p class="mb-2">In this introduction, you've learned:</p><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Python's history and philosophy</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Why Python is popular and its key features</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>How to set up your Python environment</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Writing and running your first program</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Naming conventions and identifiers</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Python keywords and indentation rules</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Variables and basic data types</span></li><p class="mb-2">You're now ready to dive deeper into Python programming!</p></ul>
  </div>
</div>

---

> **Next Topic:** We'll explore Python's built-in functions and how to work with input/output operations.
`,
          quickCheck: [
            {
              id: "q1-1",
              question: "Who created Python and when?",
              options: [
                { id: "a", text: "James Gosling in 1995", isCorrect: false },
                { id: "b", text: "Guido van Rossum in the late 1980s", isCorrect: true },
                { id: "c", text: "Dennis Ritchie in 1972", isCorrect: false },
                { id: "d", text: "Bjarne Stroustrup in 1983", isCorrect: false }
              ],
              explanation: "Python was created by Guido van Rossum at the National Research Institute for Mathematics and Computer Science in the Netherlands in the late 1980s."
            },
            {
              id: "q1-2",
              question: "What is the correct way to define a variable in Python?",
              options: [
                { id: "a", text: "int x = 10;", isCorrect: false },
                { id: "b", text: "var x = 10", isCorrect: false },
                { id: "c", text: "x = 10", isCorrect: true },
                { id: "d", text: "let x = 10", isCorrect: false }
              ],
              explanation: "Python uses dynamic typing, so you simply assign a value with the = operator. No type declaration or keywords like 'var' or 'let' are needed."
            },
            {
              id: "q1-3",
              question: "How does Python define code blocks?",
              options: [
                { id: "a", text: "Using curly braces { }", isCorrect: false },
                { id: "b", text: "Using indentation (whitespace)", isCorrect: true },
                { id: "c", text: "Using begin/end keywords", isCorrect: false },
                { id: "d", text: "Using parentheses ( )", isCorrect: false }
              ],
              explanation: "Python uniquely uses indentation (typically 4 spaces) to define code blocks instead of braces or keywords. This enforces readable, consistent code formatting."
            }
          ]
        },
        {
          id: "general-functions",
          number: 2,
          title: "Built-in Functions",
          content: `# Built-in Functions in Python

Python provides a rich collection of **built-in functions** that are always available without importing any modules. These functions form the foundation of Python programming and are essential tools for every developer.

---

## Understanding Built-in Functions

Built-in functions are pre-defined functions that come with Python. They're loaded automatically when Python starts, so you can use them immediately in any program.

\`\`\`python
# View all built-in functions
print(dir(__builtins__))
\`\`\`

There are approximately **70 built-in functions** in Python 3. Let's explore the most important ones organized by category.

---

## Input and Output Functions

### The print() Function

The \`print()\` function displays output to the console. It's one of the most frequently used functions in Python.

\`\`\`python
# Basic usage
print("Hello, World!")

# Multiple arguments
print("Python", "is", "awesome")  
# Output: Python is awesome

# Custom separator
print("apple", "banana", "cherry", sep=" | ")
# Output: apple | banana | cherry

# Custom end character
print("Loading", end="...")
print("Done!")
# Output: Loading...Done!

# Formatted output
name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")
# Output: Name: Alice, Age: 25
\`\`\`

### The input() Function

The \`input()\` function reads user input from the keyboard:

\`\`\`python
# Basic input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Important: input() always returns a string!
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# Convert to number if needed
age = int(input("Enter your age: "))
print(type(age))  # <class 'int'>
\`\`\`

---

## Type Conversion Functions

Python provides functions to convert between data types:

### Numeric Conversions

\`\`\`python
# int() - Convert to integer
int("42")      # 42 (from string)
int(3.7)       # 3 (truncates decimal)
int("101", 2)  # 5 (from binary string)
int("FF", 16)  # 255 (from hex string)

# float() - Convert to float
float("3.14")  # 3.14
float(10)      # 10.0
float("1e-3")  # 0.001 (scientific notation)

# complex() - Create complex number
complex(3, 4)     # (3+4j)
complex("3+4j")   # (3+4j)
\`\`\`

### String Conversions

\`\`\`python
# str() - Convert to string
str(42)        # "42"
str(3.14)      # "3.14"
str([1, 2, 3]) # "[1, 2, 3]"

# repr() - String representation (with quotes for strings)
repr("Hello")  # "'Hello'"
repr(42)       # "42"

# ascii() - Like repr() but escapes non-ASCII
ascii("Héllo")  # "'H\\xe9llo'"

# chr() and ord() - Character conversions
chr(65)   # 'A' (ASCII code to character)
ord('A')  # 65 (character to ASCII code)
\`\`\`

### Boolean Conversion

\`\`\`python
# bool() - Convert to boolean
bool(1)      # True
bool(0)      # False
bool("")     # False (empty string)
bool("Hi")   # True (non-empty string)
bool([])     # False (empty list)
bool([1])    # True (non-empty list)
bool(None)   # False
\`\`\`

### Collection Conversions

\`\`\`python
# list() - Convert to list
list("hello")      # ['h', 'e', 'l', 'l', 'o']
list((1, 2, 3))    # [1, 2, 3]
list({1, 2, 3})    # [1, 2, 3]
list(range(5))     # [0, 1, 2, 3, 4]

# tuple() - Convert to tuple
tuple([1, 2, 3])   # (1, 2, 3)
tuple("abc")       # ('a', 'b', 'c')

# set() - Convert to set (removes duplicates)
set([1, 2, 2, 3])  # {1, 2, 3}
set("hello")       # {'h', 'e', 'l', 'o'}

# dict() - Create dictionary
dict([("a", 1), ("b", 2)])  # {'a': 1, 'b': 2}
dict(name="Alice", age=25)  # {'name': 'Alice', 'age': 25}
\`\`\`

---

## Mathematical Functions

### Basic Math

\`\`\`python
# abs() - Absolute value
abs(-5)      # 5
abs(-3.14)   # 3.14
abs(3+4j)    # 5.0 (magnitude of complex number)

# pow() - Power
pow(2, 3)       # 8 (2³)
pow(2, 3, 5)    # 3 (2³ mod 5)
2 ** 3          # 8 (equivalent)

# round() - Round to n decimal places
round(3.7)        # 4
round(3.14159, 2) # 3.14
round(2.5)        # 2 (banker's rounding to even)
round(3.5)        # 4

# divmod() - Division and modulus
divmod(17, 5)  # (3, 2) - quotient and remainder
\`\`\`

### Aggregation Functions

\`\`\`python
# min() and max()
min(1, 5, 3)          # 1
max(1, 5, 3)          # 5
min([4, 2, 8, 1])     # 1
max("apple", "banana") # "banana" (lexicographic)
min(students, key=lambda s: s.age)  # Student with min age

# sum() - Sum of iterable
sum([1, 2, 3, 4, 5])      # 15
sum([1, 2, 3], start=10)  # 16 (10 + 1 + 2 + 3)
sum((0.1, 0.2, 0.3))      # 0.6
\`\`\`

---

## Sequence Functions

### Length and Range

\`\`\`python
# len() - Length of object
len("Hello")        # 5
len([1, 2, 3])      # 3
len({"a": 1, "b": 2})  # 2

# range() - Generate sequence of numbers
list(range(5))         # [0, 1, 2, 3, 4]
list(range(1, 6))      # [1, 2, 3, 4, 5]
list(range(0, 10, 2))  # [0, 2, 4, 6, 8]
list(range(5, 0, -1))  # [5, 4, 3, 2, 1]
\`\`\`

### Sorting and Ordering

\`\`\`python
# sorted() - Return new sorted list
sorted([3, 1, 4, 1, 5])           # [1, 1, 3, 4, 5]
sorted([3, 1, 4], reverse=True)   # [4, 3, 1]
sorted("python")                   # ['h', 'n', 'o', 'p', 't', 'y']
sorted(students, key=lambda s: s.name)  # Sort by attribute

# reversed() - Return reversed iterator
list(reversed([1, 2, 3]))   # [3, 2, 1]
list(reversed("hello"))     # ['o', 'l', 'l', 'e', 'h']
"".join(reversed("hello"))  # "olleh"
\`\`\`

### Enumeration and Zipping

\`\`\`python
# enumerate() - Add index to iterable
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# Start from different index
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")

# zip() - Combine iterables
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")

# Create dictionary from two lists
dict(zip(names, ages))  # {'Alice': 25, 'Bob': 30, 'Charlie': 35}
\`\`\`

---

## Type Checking Functions

\`\`\`python
# type() - Get type of object
type(42)           # <class 'int'>
type("Hello")      # <class 'str'>
type([1, 2, 3])    # <class 'list'>
type(lambda x: x)  # <class 'function'>

# isinstance() - Check if object is instance of class
isinstance(42, int)              # True
isinstance("Hello", str)         # True
isinstance(3.14, (int, float))   # True (check multiple types)
isinstance([1, 2], (list, tuple)) # True

# issubclass() - Check class inheritance
issubclass(bool, int)  # True (bool inherits from int)
issubclass(str, object)  # True (all classes inherit from object)
\`\`\`

---

## Functional Programming Functions

### map() - Apply Function to Each Element

\`\`\`python
# Square each number
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
# [1, 4, 9, 16, 25]

# Convert strings to integers
strings = ["1", "2", "3"]
integers = list(map(int, strings))
# [1, 2, 3]

# Multiple iterables
list(map(lambda x, y: x + y, [1, 2, 3], [4, 5, 6]))
# [5, 7, 9]
\`\`\`

### filter() - Select Elements

\`\`\`python
# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4, 6, 8, 10]

# Filter non-empty strings
strings = ["hello", "", "world", "", "python"]
non_empty = list(filter(None, strings))
# ["hello", "world", "python"]
\`\`\`

### reduce() - Accumulate Values (from functools)

\`\`\`python
from functools import reduce

# Sum all numbers
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda acc, x: acc + x, numbers)
# 15

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, numbers)
# 5

# Concatenate strings
words = ["Hello", " ", "World"]
sentence = reduce(lambda a, b: a + b, words)
# "Hello World"
\`\`\`

---

## All and Any Functions

\`\`\`python
# all() - Returns True if all elements are truthy
all([True, True, True])   # True
all([True, False, True])  # False
all([1, 2, 3])            # True
all([1, 0, 3])            # False
all([])                   # True (empty is True)

# Check all conditions
numbers = [2, 4, 6, 8, 10]
all_even = all(n % 2 == 0 for n in numbers)  # True

# any() - Returns True if any element is truthy
any([False, False, True])   # True
any([False, False, False])  # False
any([0, 0, 1])              # True
any([])                     # False (empty is False)

# Check any condition
has_negative = any(n < 0 for n in [1, -2, 3])  # True
\`\`\`

---

## Object Introspection

\`\`\`python
# id() - Unique identifier of object
x = [1, 2, 3]
y = x
z = [1, 2, 3]
print(id(x) == id(y))  # True (same object)
print(id(x) == id(z))  # False (different objects)

# dir() - List attributes and methods
print(dir(""))  # All string methods
print(dir([]))  # All list methods

# hasattr(), getattr(), setattr()
class Person:
    name = "Alice"

hasattr(Person, "name")     # True
getattr(Person, "name")     # "Alice"
setattr(Person, "age", 25)  # Adds 'age' attribute

# callable() - Check if object is callable
callable(print)    # True
callable(42)       # False
callable(len)      # True
\`\`\`

---

## Practical Examples

### Example 1: Data Processing Pipeline

\`\`\`python
# Process sales data
sales = ["100.50", "200.75", "150.25", "300.00", ""]

# Clean and process data
cleaned = filter(None, sales)           # Remove empty strings
numbers = map(float, cleaned)           # Convert to float
total = sum(numbers)                    # Calculate sum
print(f"Total sales: \${total:.2f}")   # Total sales: $751.50
\`\`\`

### Example 2: Input Validation

\`\`\`python
def get_valid_age():
    while True:
        try:
            age = int(input("Enter your age: "))
            if 0 <= age <= 150:
                return age
            print("Please enter a realistic age.")
        except ValueError:
            print("Please enter a valid number.")

age = get_valid_age()
print(f"You are {age} years old.")
\`\`\`

### Example 3: Statistical Analysis

\`\`\`python
def analyze_numbers(numbers):
    if not numbers:
        return None
    
    return {
        "count": len(numbers),
        "sum": sum(numbers),
        "min": min(numbers),
        "max": max(numbers),
        "average": sum(numbers) / len(numbers),
        "sorted": sorted(numbers)
    }

data = [23, 45, 12, 67, 34, 89, 56]
stats = analyze_numbers(data)
print(stats)
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <p class="mb-4">You've learned about Python's essential built-in functions:</p><div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Category</th><th class="px-4 py-2 text-left font-semibold">Key Functions</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">I/O</td><td class="px-4 py-2 border-t border-border">\`print()\`, \`input()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Type Conversion</td><td class="px-4 py-2 border-t border-border">\`int()\`, \`float()\`, \`str()\`, \`bool()\`, \`list()\`, \`tuple()\`, \`set()\`, \`dict()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Math</td><td class="px-4 py-2 border-t border-border">\`abs()\`, \`pow()\`, \`round()\`, \`min()\`, \`max()\`, \`sum()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Sequences</td><td class="px-4 py-2 border-t border-border">\`len()\`, \`range()\`, \`sorted()\`, \`reversed()\`, \`enumerate()\`, \`zip()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Type Checking</td><td class="px-4 py-2 border-t border-border">\`type()\`, \`isinstance()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Functional</td><td class="px-4 py-2 border-t border-border">\`map()\`, \`filter()\`, \`all()\`, \`any()\`</td></tr></table></div><p class="mb-4">These functions are your everyday tools in Python programming!</p>
  </div>
</div>

---

> **Next Topic:** We'll dive into Python operators and learn how to perform calculations and comparisons.
`,
          quickCheck: [
            {
              id: "q2-1",
              question: "What does the input() function always return?",
              options: [
                { id: "a", text: "An integer", isCorrect: false },
                { id: "b", text: "A string", isCorrect: true },
                { id: "c", text: "The type specified by the user", isCorrect: false },
                { id: "d", text: "A boolean", isCorrect: false }
              ],
              explanation: "The input() function always returns a string, even if the user enters a number. You need to explicitly convert it using int() or float() if you need a numeric value."
            },
            {
              id: "q2-2",
              question: "What is the output of: sorted([3, 1, 4, 1, 5], reverse=True)?",
              options: [
                { id: "a", text: "[1, 1, 3, 4, 5]", isCorrect: false },
                { id: "b", text: "[5, 4, 3, 1, 1]", isCorrect: true },
                { id: "c", text: "[5, 4, 1, 3, 1]", isCorrect: false },
                { id: "d", text: "Error", isCorrect: false }
              ],
              explanation: "sorted() with reverse=True returns a new list sorted in descending order. The original list remains unchanged."
            }
          ]
        },
        {
          id: "operators",
          number: 3,
          title: "Operators",
          content: `# Python Operators

Operators are special symbols that perform operations on variables and values. Python provides a comprehensive set of operators for various operations. Understanding operators is fundamental to writing effective Python code.

---

## Categories of Python Operators

Python divides operators into the following categories:

| Category | Purpose | Example Operators |
|----------|---------|-------------------|
| Arithmetic | Mathematical calculations | \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\` |
| Comparison | Compare values | \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` |
| Assignment | Assign values | \`=\`, \`+=\`, \`-=\`, \`*=\`, etc. |
| Logical | Combine conditions | \`and\`, \`or\`, \`not\` |
| Bitwise | Bit-level operations | \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\` |
| Identity | Object identity | \`is\`, \`is not\` |
| Membership | Sequence membership | \`in\`, \`not in\` |

---

## Arithmetic Operators

Arithmetic operators perform mathematical operations:

\`\`\`python
a = 17
b = 5

# Basic operations
print(f"Addition: {a} + {b} = {a + b}")        # 22
print(f"Subtraction: {a} - {b} = {a - b}")     # 12
print(f"Multiplication: {a} * {b} = {a * b}")  # 85
print(f"Division: {a} / {b} = {a / b}")        # 3.4

# Advanced operations
print(f"Floor Division: {a} // {b} = {a // b}")  # 3 (rounds down)
print(f"Modulus: {a} % {b} = {a % b}")           # 2 (remainder)
print(f"Exponent: {a} ** {b} = {a ** b}")        # 1419857
\`\`\`

### Division Types Explained

\`\`\`python
# True Division (/) - Always returns float
print(10 / 3)    # 3.3333333333333335
print(10 / 2)    # 5.0 (still a float!)

# Floor Division (//) - Rounds toward negative infinity
print(10 // 3)   # 3
print(-10 // 3)  # -4 (rounds down, not toward zero!)

# Modulus (%) - Remainder after division
print(10 % 3)    # 1
print(-10 % 3)   # 2 (Python's modulus always matches divisor's sign)
\`\`\`

### Practical Example: Time Conversion

\`\`\`python
def convert_seconds(total_seconds):
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60
    seconds = total_seconds % 60
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"

print(convert_seconds(3661))   # "01:01:01"
print(convert_seconds(7325))   # "02:02:05"
print(convert_seconds(86400))  # "24:00:00"
\`\`\`

---

## Comparison Operators

Comparison operators compare values and return Boolean results:

\`\`\`python
x = 10
y = 20
z = 10

# Equality and inequality
print(f"{x} == {y}: {x == y}")   # False
print(f"{x} == {z}: {x == z}")   # True
print(f"{x} != {y}: {x != y}")   # True

# Relational comparisons
print(f"{x} > {y}: {x > y}")     # False
print(f"{x} < {y}: {x < y}")     # True
print(f"{x} >= {z}: {x >= z}")   # True
print(f"{x} <= {y}: {x <= y}")   # True
\`\`\`

### Chained Comparisons

Python allows elegant chained comparisons:

\`\`\`python
# Traditional way
age = 25
if age >= 18 and age <= 65:
    print("Working age")

# Pythonic way (chained comparison)
if 18 <= age <= 65:
    print("Working age")

# More examples
x = 5
print(1 < x < 10)    # True
print(1 < x and x < 10)  # Equivalent, but less elegant

print(10 > x > 1)    # True
print(x == 5 == 5)   # True (all equal)
\`\`\`

### String Comparisons

\`\`\`python
# Lexicographic (alphabetical) comparison
print("apple" < "banana")   # True
print("Apple" < "apple")    # True (uppercase comes first in ASCII)
print("hello" == "hello")   # True
print("hello" == "Hello")   # False (case-sensitive)

# Case-insensitive comparison
str1 = "Hello"
str2 = "hello"
print(str1.lower() == str2.lower())  # True
\`\`\`

---

## Assignment Operators

Assignment operators assign values to variables:

\`\`\`python
# Simple assignment
x = 10

# Compound assignment operators
x += 5    # x = x + 5    → 15
x -= 3    # x = x - 3    → 12
x *= 2    # x = x * 2    → 24
x /= 4    # x = x / 4    → 6.0
x //= 2   # x = x // 2   → 3.0
x %= 2    # x = x % 2    → 1.0
x **= 3   # x = x ** 3   → 1.0

# With other types
text = "Hello"
text += " World"  # Concatenation
print(text)       # "Hello World"

numbers = [1, 2]
numbers += [3, 4]  # Extend list
print(numbers)     # [1, 2, 3, 4]
\`\`\`

### Walrus Operator (:=) - Python 3.8+

The walrus operator assigns values as part of an expression:

\`\`\`python
# Traditional way
data = input("Enter data: ")
if len(data) > 0:
    print(f"You entered: {data}")

# Using walrus operator
if (data := input("Enter data: ")) and len(data) > 0:
    print(f"You entered: {data}")

# Useful in loops
while (line := input("Enter (q to quit): ")) != "q":
    print(f"Processing: {line}")

# In list comprehensions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = [y for x in numbers if (y := x ** 2) > 25]
print(filtered)  # [36, 49, 64, 81, 100]
\`\`\`

---

## Logical Operators

Logical operators combine conditional statements:

\`\`\`python
x = True
y = False

# and - Returns True if both are True
print(x and y)   # False
print(x and x)   # True

# or - Returns True if at least one is True
print(x or y)    # True
print(y or y)    # False

# not - Inverts the boolean
print(not x)     # False
print(not y)     # True
\`\`\`

### Short-Circuit Evaluation

Python uses short-circuit evaluation for efficiency:

\`\`\`python
# With 'and': stops at first False
def check_a():
    print("Checking A")
    return True

def check_b():
    print("Checking B")
    return False

def check_c():
    print("Checking C")
    return True

result = check_a() and check_b() and check_c()
# Prints: "Checking A", "Checking B"
# check_c() is never called because check_b() returned False

# With 'or': stops at first True
result = check_a() or check_b()
# Prints: "Checking A"
# check_b() is never called because check_a() returned True
\`\`\`

### Practical Examples

\`\`\`python
# Default values using 'or'
def greet(name=None):
    name = name or "Guest"
    return f"Hello, {name}!"

print(greet())         # "Hello, Guest!"
print(greet("Alice"))  # "Hello, Alice!"

# Safe access using 'and'
user = {"name": "Alice", "profile": {"age": 25}}
age = user and user.get("profile") and user["profile"].get("age")
print(age)  # 25

# Complex conditions
age = 25
has_license = True
has_car = False

can_drive = age >= 18 and has_license
can_give_ride = can_drive and has_car
print(f"Can drive: {can_drive}")       # True
print(f"Can give ride: {can_give_ride}")  # False
\`\`\`

---

## Bitwise Operators

Bitwise operators work on bits and perform bit-by-bit operations:

\`\`\`python
a = 12  # Binary: 1100
b = 7   # Binary: 0111

# AND - 1 if both bits are 1
print(f"{a} & {b} = {a & b}")   # 4 (0100)

# OR - 1 if at least one bit is 1
print(f"{a} | {b} = {a | b}")   # 15 (1111)

# XOR - 1 if bits are different
print(f"{a} ^ {b} = {a ^ b}")   # 11 (1011)

# NOT - Inverts all bits (two's complement)
print(f"~{a} = {~a}")           # -13

# Left shift - Multiply by 2^n
print(f"{a} << 2 = {a << 2}")   # 48 (110000)

# Right shift - Divide by 2^n
print(f"{a} >> 2 = {a >> 2}")   # 3 (11)
\`\`\`

### Practical Applications

\`\`\`python
# Flags and permissions
READ = 0b100    # 4
WRITE = 0b010   # 2
EXECUTE = 0b001 # 1

# Combine permissions
user_perms = READ | WRITE  # 6 (110)

# Check permission
can_read = bool(user_perms & READ)     # True
can_execute = bool(user_perms & EXECUTE)  # False

# Toggle permission
user_perms ^= EXECUTE  # 7 (111) - Now has execute

# Fast multiplication/division by powers of 2
x = 5
print(x << 1)  # 10 (multiply by 2)
print(x << 3)  # 40 (multiply by 8)
print(x >> 1)  # 2 (divide by 2)
\`\`\`

---

## Identity Operators

Identity operators check if two variables reference the same object in memory:

\`\`\`python
# 'is' checks identity (same object)
# '==' checks equality (same value)

a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (same value)
print(a is b)   # False (different objects)
print(a is c)   # True (same object)

# Check object IDs
print(id(a))  # e.g., 140234567890
print(id(b))  # e.g., 140234567891 (different)
print(id(c))  # Same as id(a)
\`\`\`

### When to Use 'is' vs '=='

\`\`\`python
# Use 'is' for None
x = None
if x is None:  # Correct
    print("x is None")

if x == None:  # Works but not recommended
    print("x is None")

# Use 'is' for singletons
if value is True:   # Checking exact True
    pass
if value:           # Checking truthiness (usually better)
    pass

# Small integer caching (implementation detail)
a = 256
b = 256
print(a is b)  # True (Python caches small integers)

a = 257
b = 257
print(a is b)  # May be False (not cached)
\`\`\`

---

## Membership Operators

Membership operators test for membership in sequences:

\`\`\`python
# Lists
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True

# Strings
text = "Hello, World!"
print("Hello" in text)   # True
print("hello" in text)   # False (case-sensitive)
print("xyz" not in text) # True

# Dictionaries (checks keys by default)
person = {"name": "Alice", "age": 25}
print("name" in person)    # True
print("Alice" in person)   # False (not a key)
print("Alice" in person.values())  # True

# Sets
colors = {"red", "green", "blue"}
print("red" in colors)     # True (O(1) lookup)
\`\`\`

### Practical Example: Input Validation

\`\`\`python
def validate_command(command):
    valid_commands = {"start", "stop", "pause", "resume", "quit"}
    
    if command.lower() in valid_commands:
        return True, f"Executing: {command}"
    else:
        return False, f"Invalid command. Choose from: {valid_commands}"

# Test
print(validate_command("start"))  # (True, "Executing: start")
print(validate_command("jump"))   # (False, "Invalid command...")
\`\`\`

---

## Operator Precedence

Operators have a defined order of evaluation:

| Priority | Operators | Description |
|----------|-----------|-------------|
| 1 (highest) | \`()\` | Parentheses |
| 2 | \`**\` | Exponentiation |
| 3 | \`+x\`, \`-x\`, \`~x\` | Unary plus, minus, NOT |
| 4 | \`*\`, \`/\`, \`//\`, \`%\` | Multiplication, division |
| 5 | \`+\`, \`-\` | Addition, subtraction |
| 6 | \`<<\`, \`>>\` | Bitwise shifts |
| 7 | \`&\` | Bitwise AND |
| 8 | \`^\` | Bitwise XOR |
| 9 | \`|\` | Bitwise OR |
| 10 | \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`, \`is\`, \`in\` | Comparisons |
| 11 | \`not\` | Logical NOT |
| 12 | \`and\` | Logical AND |
| 13 (lowest) | \`or\` | Logical OR |

\`\`\`python
# Examples of precedence
result = 2 + 3 * 4      # 14, not 20 (multiplication first)
result = (2 + 3) * 4    # 20 (parentheses override)

result = 2 ** 3 ** 2    # 512 (right-to-left: 3**2=9, then 2**9)
result = (2 ** 3) ** 2  # 64 (left-to-right forced)

# Logical precedence
result = True or False and False  # True (and before or)
result = (True or False) and False  # False
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <p class="mb-4">You've mastered Python's operators:</p><div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Operator Type</th><th class="px-4 py-2 text-left font-semibold">Examples</th><th class="px-4 py-2 text-left font-semibold">Use Case</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">Arithmetic</td><td class="px-4 py-2 border-t border-border">\`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`</td><td class="px-4 py-2 border-t border-border">Math calculations</td></tr><tr><td class="px-4 py-2 border-t border-border">Comparison</td><td class="px-4 py-2 border-t border-border">\`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`</td><td class="px-4 py-2 border-t border-border">Value comparison</td></tr><tr><td class="px-4 py-2 border-t border-border">Assignment</td><td class="px-4 py-2 border-t border-border">\`=\`, \`+=\`, \`-=\`, \`:=\`</td><td class="px-4 py-2 border-t border-border">Value assignment</td></tr><tr><td class="px-4 py-2 border-t border-border">Logical</td><td class="px-4 py-2 border-t border-border">\`and\`, \`or\`, \`not\`</td><td class="px-4 py-2 border-t border-border">Boolean logic</td></tr><tr><td class="px-4 py-2 border-t border-border">Bitwise</td><td class="px-4 py-2 border-t border-border">\`&\`, \`</td><td class="px-4 py-2 border-t border-border">\`, \`^\`, \`~\`, \`<<\`, \`>>\`</td><td class="px-4 py-2 border-t border-border">Bit manipulation</td></tr><tr><td class="px-4 py-2 border-t border-border">Identity</td><td class="px-4 py-2 border-t border-border">\`is\`, \`is not\`</td><td class="px-4 py-2 border-t border-border">Object identity</td></tr><tr><td class="px-4 py-2 border-t border-border">Membership</td><td class="px-4 py-2 border-t border-border">\`in\`, \`not in\`</td><td class="px-4 py-2 border-t border-border">Sequence containment</td></tr></table></div>
  </div>
</div>

---

> **Next Topic:** We'll explore control statements to manage program flow with conditions and loops.
`,
          quickCheck: [
            {
              id: "q3-1",
              question: "What is the result of 17 // 5 in Python?",
              options: [
                { id: "a", text: "3.4", isCorrect: false },
                { id: "b", text: "3", isCorrect: true },
                { id: "c", text: "4", isCorrect: false },
                { id: "d", text: "2", isCorrect: false }
              ],
              explanation: "The // operator performs floor division, which divides and rounds down to the nearest integer. 17 / 5 = 3.4, rounded down is 3."
            },
            {
              id: "q3-2",
              question: "What is the difference between 'is' and '==' in Python?",
              options: [
                { id: "a", text: "They are identical", isCorrect: false },
                { id: "b", text: "'is' checks value, '==' checks identity", isCorrect: false },
                { id: "c", text: "'is' checks identity (same object), '==' checks equality (same value)", isCorrect: true },
                { id: "d", text: "'is' is faster than '=='", isCorrect: false }
              ],
              explanation: "The 'is' operator checks if two variables point to the same object in memory, while '==' checks if they have the same value. Two lists with the same values are == but not 'is' (unless they're the same object)."
            }
          ]
        }
      ]
    },
    {
      id: "module-2",
      number: 2,
      title: "Control Flow & Data Structures",
      description: "Master control flow statements and learn to work with Python's powerful data structures.",
      topics: [
        {
          id: "control-statements",
          number: 4,
          title: "Control Statements",
          content: `# Control Statements in Python

Control statements determine the flow of program execution. They allow you to make decisions, repeat actions, and structure your code logically. Mastering control flow is essential for writing dynamic, responsive programs.

---

## Types of Control Statements

Python provides three main types of control statements:

| Type | Purpose | Keywords |
|------|---------|----------|
| **Conditional** | Make decisions | \`if\`, \`elif\`, \`else\` |
| **Looping** | Repeat actions | \`for\`, \`while\` |
| **Transfer** | Alter flow | \`break\`, \`continue\`, \`pass\` |

---

## Conditional Statements

### The if Statement

The simplest form of decision-making:

\`\`\`python
temperature = 25

if temperature > 30:
    print("It's hot outside!")
    print("Remember to stay hydrated.")
\`\`\`

### The if-else Statement

Provides an alternative path:

\`\`\`python
age = 17

if age >= 18:
    print("You are an adult.")
    print("You can vote!")
else:
    print("You are a minor.")
    print(f"You'll be an adult in {18 - age} year(s).")
\`\`\`

### The if-elif-else Statement

Handle multiple conditions:

\`\`\`python
def get_grade(score):
    """Convert numeric score to letter grade."""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Test the function
scores = [95, 82, 73, 65, 45]
for score in scores:
    grade = get_grade(score)
    print(f"Score: {score} → Grade: {grade}")
\`\`\`

### Nested Conditionals

Conditionals can be nested for complex logic:

\`\`\`python
def classify_number(num):
    """Classify a number by sign and parity."""
    if num > 0:
        if num % 2 == 0:
            return "Positive even"
        else:
            return "Positive odd"
    elif num < 0:
        if num % 2 == 0:
            return "Negative even"
        else:
            return "Negative odd"
    else:
        return "Zero"

# Test
for n in [4, -3, 0, 7, -8]:
    print(f"{n}: {classify_number(n)}")
\`\`\`

### Ternary Conditional Expression

A concise one-line conditional:

\`\`\`python
# Syntax: value_if_true if condition else value_if_false

age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"

# Nested ternary (use sparingly - can reduce readability)
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
print(grade)  # "B"

# Practical example
def absolute(n):
    return n if n >= 0 else -n
\`\`\`

---

## Match-Case Statement (Python 3.10+)

Pattern matching provides elegant switching logic:

\`\`\`python
def describe_status_code(code):
    match code:
        case 200:
            return "OK - Request successful"
        case 201:
            return "Created - Resource created"
        case 400:
            return "Bad Request - Invalid input"
        case 401:
            return "Unauthorized - Login required"
        case 403:
            return "Forbidden - Access denied"
        case 404:
            return "Not Found - Resource missing"
        case 500:
            return "Internal Server Error"
        case _:
            return f"Unknown status code: {code}"

# Test
for code in [200, 404, 500, 999]:
    print(f"{code}: {describe_status_code(code)}")
\`\`\`

### Advanced Pattern Matching

\`\`\`python
def analyze_point(point):
    match point:
        case (0, 0):
            return "Origin"
        case (0, y):
            return f"On Y-axis at y={y}"
        case (x, 0):
            return f"On X-axis at x={x}"
        case (x, y) if x == y:
            return f"On diagonal at ({x}, {y})"
        case (x, y):
            return f"Point at ({x}, {y})"

# Test
points = [(0, 0), (0, 5), (3, 0), (4, 4), (2, 7)]
for p in points:
    print(f"{p}: {analyze_point(p)}")
\`\`\`

---

## Looping Statements

### The for Loop

Iterate over sequences:

\`\`\`python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using range()
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# With step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Countdown
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1
print("Liftoff!")

# Enumerate for index and value
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")
\`\`\`

### The while Loop

Repeat while a condition is true:

\`\`\`python
# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# User input validation
while True:
    password = input("Enter password: ")
    if len(password) >= 8:
        print("Password accepted!")
        break
    print("Password must be at least 8 characters.")

# Processing until condition met
import random
attempts = 0
target = random.randint(1, 10)
while True:
    guess = int(input("Guess (1-10): "))
    attempts += 1
    if guess == target:
        print(f"Correct! You got it in {attempts} attempts.")
        break
    elif guess < target:
        print("Too low!")
    else:
        print("Too high!")
\`\`\`

---

## Loop Control Statements

### break - Exit the Loop

\`\`\`python
# Find first even number
numbers = [1, 3, 5, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        print(f"First even number: {num}")
        break
else:
    print("No even number found")

# Search in nested structure
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
target = 5
found = False
for row in matrix:
    for val in row:
        if val == target:
            print(f"Found {target}!")
            found = True
            break
    if found:
        break
\`\`\`

### continue - Skip to Next Iteration

\`\`\`python
# Print only odd numbers
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 1, 3, 5, 7, 9

# Skip invalid data
data = ["10", "abc", "20", "", "30", "xyz"]
total = 0
for item in data:
    if not item.isdigit():
        continue
    total += int(item)
print(f"Total: {total}")  # 60
\`\`\`

### pass - Placeholder

\`\`\`python
# Placeholder for future implementation
def complex_algorithm():
    pass  # TODO: implement this

# Empty class definition
class MyCustomError(Exception):
    pass

# Conditional placeholder
for i in range(10):
    if i < 5:
        pass  # Will handle later
    else:
        print(i)
\`\`\`

---

## else Clause with Loops

Python's unique feature: \`else\` with loops executes when loop completes normally (not via \`break\`):

\`\`\`python
# Search example
def find_number(numbers, target):
    for num in numbers:
        if num == target:
            print(f"Found {target}!")
            break
    else:
        print(f"{target} not found in list")

find_number([1, 2, 3, 4, 5], 3)  # Found 3!
find_number([1, 2, 3, 4, 5], 7)  # 7 not found in list

# Prime number checker
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False  # Found a divisor
    else:
        return True  # No divisor found

for num in [2, 17, 21, 29, 100]:
    result = "prime" if is_prime(num) else "not prime"
    print(f"{num} is {result}")
\`\`\`

---

## Comprehensions: Concise Loops

### List Comprehensions

\`\`\`python
# Basic
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With transformation
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
# ["HELLO", "WORLD", "PYTHON"]

# Nested
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
\`\`\`

### Dictionary and Set Comprehensions

\`\`\`python
# Dictionary comprehension
squares_dict = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Set comprehension
unique_lengths = {len(word) for word in ["hello", "world", "hi", "bye"]}
# {2, 3, 5}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
# {1: "a", 2: "b", 3: "c"}
\`\`\`

---

## Practical Examples

### Example 1: Menu System

\`\`\`python
def show_menu():
    while True:
        print("\\n=== Main Menu ===")
        print("1. Add item")
        print("2. Remove item")
        print("3. View items")
        print("4. Exit")
        
        choice = input("Enter choice (1-4): ")
        
        match choice:
            case "1":
                print("Adding item...")
            case "2":
                print("Removing item...")
            case "3":
                print("Viewing items...")
            case "4":
                print("Goodbye!")
                break
            case _:
                print("Invalid choice. Try again.")
\`\`\`

### Example 2: FizzBuzz

\`\`\`python
def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz(20)
\`\`\`

### Example 3: Password Validator

\`\`\`python
def validate_password(password):
    errors = []
    
    if len(password) < 8:
        errors.append("Must be at least 8 characters")
    
    if not any(c.isupper() for c in password):
        errors.append("Must contain uppercase letter")
    
    if not any(c.islower() for c in password):
        errors.append("Must contain lowercase letter")
    
    if not any(c.isdigit() for c in password):
        errors.append("Must contain a digit")
    
    if not any(c in "!@#$%^&*" for c in password):
        errors.append("Must contain special character")
    
    if errors:
        for error in errors:
            print(f"❌ {error}")
        return False
    else:
        print("✓ Password is valid!")
        return True

# Test
validate_password("weak")
validate_password("Strong@123")
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <p class="mb-4">You've learned Python's control flow mechanisms:</p><div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Statement</th><th class="px-4 py-2 text-left font-semibold">Purpose</th><th class="px-4 py-2 text-left font-semibold">Example</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">\`if/elif/else\`</td><td class="px-4 py-2 border-t border-border">Conditional execution</td><td class="px-4 py-2 border-t border-border">Decision making</td></tr><tr><td class="px-4 py-2 border-t border-border">\`match/case\`</td><td class="px-4 py-2 border-t border-border">Pattern matching</td><td class="px-4 py-2 border-t border-border">Clean switching</td></tr><tr><td class="px-4 py-2 border-t border-border">\`for\`</td><td class="px-4 py-2 border-t border-border">Definite iteration</td><td class="px-4 py-2 border-t border-border">Iterate over sequences</td></tr><tr><td class="px-4 py-2 border-t border-border">\`while\`</td><td class="px-4 py-2 border-t border-border">Indefinite iteration</td><td class="px-4 py-2 border-t border-border">Repeat until condition</td></tr><tr><td class="px-4 py-2 border-t border-border">\`break\`</td><td class="px-4 py-2 border-t border-border">Exit loop early</td><td class="px-4 py-2 border-t border-border">Found what we need</td></tr><tr><td class="px-4 py-2 border-t border-border">\`continue\`</td><td class="px-4 py-2 border-t border-border">Skip iteration</td><td class="px-4 py-2 border-t border-border">Filter out items</td></tr><tr><td class="px-4 py-2 border-t border-border">\`pass\`</td><td class="px-4 py-2 border-t border-border">Placeholder</td><td class="px-4 py-2 border-t border-border">Empty block</td></tr></table></div>
  </div>
</div>

---

> **Next Topic:** We'll explore Python's data types and their powerful built-in methods.
`,
          quickCheck: [
            {
              id: "q4-1",
              question: "What will be printed by: for i in range(3): print(i)?",
              options: [
                { id: "a", text: "1 2 3", isCorrect: false },
                { id: "b", text: "0 1 2", isCorrect: true },
                { id: "c", text: "0 1 2 3", isCorrect: false },
                { id: "d", text: "1 2", isCorrect: false }
              ],
              explanation: "range(3) generates numbers from 0 to 2 (exclusive of 3). Python's range() always starts at 0 by default and excludes the end value."
            },
            {
              id: "q4-2",
              question: "When does the 'else' clause of a for loop execute?",
              options: [
                { id: "a", text: "Always after the loop", isCorrect: false },
                { id: "b", text: "Only if break was used", isCorrect: false },
                { id: "c", text: "Only if the loop completed without hitting break", isCorrect: true },
                { id: "d", text: "If the loop body is empty", isCorrect: false }
              ],
              explanation: "The else clause of a for/while loop executes only when the loop completes normally without encountering a break statement. It's useful for 'search' patterns."
            }
          ]
        },
        {
          id: "data-types-methods",
          number: 5,
          title: "Data Types and Methods",
          content: `# Python Data Types and Methods

Python provides a rich set of built-in data types, each with powerful methods for manipulation. Understanding these types and their methods is crucial for effective Python programming.

---

## Numbers

Python supports three numeric types:

### Integers (int)

Integers have unlimited precision in Python:

\`\`\`python
# Integer literals
decimal = 42
binary = 0b101010    # 42
octal = 0o52         # 42
hexadecimal = 0x2A   # 42

# Large numbers (use underscores for readability)
billion = 1_000_000_000
bytes_in_gb = 1_073_741_824

# Integer operations
x = 17
print(x.bit_length())  # 5 (bits needed to represent)
print(x.bit_count())   # 3 (number of 1 bits)
\`\`\`

### Floating-Point Numbers (float)

\`\`\`python
# Float literals
pi = 3.14159
avogadro = 6.022e23    # Scientific notation
tiny = 1.5e-10

# Float methods
x = 3.7
print(x.is_integer())   # False
print((4.0).is_integer())  # True

# Converting float to fraction
from fractions import Fraction
f = 0.5
print(Fraction(f))  # 1/2
\`\`\`

### Complex Numbers

\`\`\`python
# Complex literals
c = 3 + 4j
d = complex(3, 4)

# Attributes
print(c.real)  # 3.0
print(c.imag)  # 4.0
print(c.conjugate())  # (3-4j)
print(abs(c))  # 5.0 (magnitude)
\`\`\`

---

## Strings

Strings are immutable sequences of Unicode characters.

### Creating Strings

\`\`\`python
# Various ways to create strings
single = 'Hello'
double = "World"
triple = """Multi-line
string here"""
raw = r"C:\\Users\\name"  # Raw string (no escape)
formatted = f"Sum: {2 + 3}"  # f-string

# String from other types
from_int = str(42)
from_list = str([1, 2, 3])
\`\`\`

### Essential String Methods

\`\`\`python
text = "  Hello, World!  "

# Case conversion
print(text.upper())       # "  HELLO, WORLD!  "
print(text.lower())       # "  hello, world!  "
print(text.title())       # "  Hello, World!  "
print(text.capitalize())  # "  hello, world!  "
print(text.swapcase())    # "  hELLO, wORLD!  "

# Whitespace handling
print(text.strip())   # "Hello, World!"
print(text.lstrip())  # "Hello, World!  "
print(text.rstrip())  # "  Hello, World!"

# Searching
print(text.find("World"))    # 9 (index, -1 if not found)
print(text.index("World"))   # 9 (raises error if not found)
print(text.count("l"))       # 3

# Boolean checks
print("hello".isalpha())     # True
print("12345".isdigit())     # True
print("hello123".isalnum())  # True
print("   ".isspace())       # True
print("Hello".istitle())     # True

# Splitting and joining
words = "apple,banana,cherry".split(",")  # ["apple", "banana", "cherry"]
joined = "-".join(words)  # "apple-banana-cherry"

# Replacement
print("Hello World".replace("World", "Python"))  # "Hello Python"

# Padding
print("42".zfill(5))          # "00042"
print("hi".center(10, "-"))   # "----hi----"
print("hi".ljust(10, "-"))    # "hi--------"
print("hi".rjust(10, "-"))    # "--------hi"
\`\`\`

### String Slicing

\`\`\`python
s = "Python Programming"

# Basic slicing [start:end:step]
print(s[0:6])     # "Python"
print(s[7:])      # "Programming"
print(s[:6])      # "Python"
print(s[-11:])    # "Programming"
print(s[::2])     # "Pto rgamn" (every 2nd char)
print(s[::-1])    # "gnimmargorP nohtyP" (reversed)
\`\`\`

### String Formatting

\`\`\`python
name = "Alice"
age = 30
score = 95.5

# f-strings (Python 3.6+) - Recommended
print(f"Name: {name}, Age: {age}")
print(f"Score: {score:.2f}%")
print(f"Binary: {42:b}, Hex: {42:x}")
print(f"{'centered':^20}")  # "      centered      "

# format() method
print("Name: {}, Age: {}".format(name, age))
print("Name: {n}, Age: {a}".format(n=name, a=age))

# % operator (old style)
print("Name: %s, Age: %d" % (name, age))
\`\`\`

---

## Lists

Lists are mutable, ordered sequences.

### Creating and Accessing Lists

\`\`\`python
# Creation
empty = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
nested = [[1, 2], [3, 4], [5, 6]]
from_range = list(range(10))

# Accessing elements
print(numbers[0])    # 1 (first)
print(numbers[-1])   # 5 (last)
print(numbers[1:4])  # [2, 3, 4] (slice)
print(nested[1][0])  # 3 (nested access)
\`\`\`

### List Methods

\`\`\`python
fruits = ["apple", "banana"]

# Adding elements
fruits.append("cherry")       # Add to end
fruits.insert(1, "apricot")   # Insert at index
fruits.extend(["date", "elderberry"])  # Add multiple

# Removing elements
fruits.remove("banana")  # Remove by value
popped = fruits.pop()    # Remove and return last
popped = fruits.pop(0)   # Remove and return at index
fruits.clear()           # Remove all

# Searching and counting
fruits = ["apple", "banana", "apple", "cherry"]
print(fruits.index("banana"))  # 1
print(fruits.count("apple"))   # 2

# Sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()                  # In-place ascending
numbers.sort(reverse=True)      # In-place descending
sorted_copy = sorted(numbers)   # Returns new sorted list

# Custom sorting
words = ["banana", "Apple", "cherry"]
words.sort(key=str.lower)  # Case-insensitive sort
words.sort(key=len)        # Sort by length

# Other operations
numbers.reverse()          # Reverse in-place
copy = numbers.copy()      # Shallow copy
\`\`\`

### List Comprehensions

\`\`\`python
# Basic comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# With transformation
words = ["hello", "world"]
lengths = [len(word) for word in words]

# Nested comprehension
matrix = [[i*j for j in range(1, 5)] for i in range(1, 5)]

# Flattening
nested = [[1, 2], [3, 4], [5, 6]]
flat = [item for sublist in nested for item in sublist]
# [1, 2, 3, 4, 5, 6]
\`\`\`

---

## Tuples

Tuples are immutable sequences (cannot be modified after creation).

\`\`\`python
# Creation
empty = ()
single = (42,)  # Note the comma!
point = (3, 4)
mixed = (1, "hello", 3.14)

# Tuple packing and unpacking
coordinates = 10, 20, 30  # Packing (parentheses optional)
x, y, z = coordinates     # Unpacking

# Extended unpacking
first, *rest = [1, 2, 3, 4, 5]  # first=1, rest=[2,3,4,5]
first, *middle, last = [1, 2, 3, 4, 5]  # first=1, middle=[2,3,4], last=5

# Tuple methods (limited since immutable)
t = (1, 2, 2, 3, 2)
print(t.count(2))  # 3
print(t.index(3))  # 3

# Named tuples (more readable)
from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)  # 3 4
\`\`\`

### When to Use Tuples vs Lists

| Use Tuples When | Use Lists When |
|-----------------|----------------|
| Data shouldn't change | Data needs modification |
| Dictionary keys | Need to add/remove items |
| Function return values | Collecting user input |
| Representing records | Building dynamic collections |

---

## Dictionaries

Dictionaries store key-value pairs with O(1) lookup.

\`\`\`python
# Creation
empty = {}
person = {"name": "Alice", "age": 30}
from_pairs = dict([("a", 1), ("b", 2)])
from_kwargs = dict(name="Bob", age=25)

# Accessing values
print(person["name"])         # "Alice" (raises KeyError if missing)
print(person.get("name"))     # "Alice"
print(person.get("email", "N/A"))  # "N/A" (default if missing)

# Modifying
person["age"] = 31            # Update
person["email"] = "a@b.com"   # Add new
del person["email"]           # Delete

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age'])
print(person.values())  # dict_values(['Alice', 31])
print(person.items())   # dict_items([('name', 'Alice'), ('age', 31)])

# Iteration
for key in person:
    print(f"{key}: {person[key]}")

for key, value in person.items():
    print(f"{key}: {value}")

# Merging dictionaries
defaults = {"color": "blue", "size": "medium"}
custom = {"size": "large", "weight": "heavy"}
merged = {**defaults, **custom}  # Python 3.5+
# {'color': 'blue', 'size': 'large', 'weight': 'heavy'}

# Python 3.9+
merged = defaults | custom
\`\`\`

### Dictionary Comprehensions

\`\`\`python
# Basic
squares = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
people = {name: age for name, age in zip(names, ages)}

# Filtering
original = {"a": 1, "b": 2, "c": 3, "d": 4}
filtered = {k: v for k, v in original.items() if v > 2}
# {'c': 3, 'd': 4}

# Swapping keys and values
swapped = {v: k for k, v in original.items()}
\`\`\`

---

## Sets

Sets are unordered collections of unique elements.

\`\`\`python
# Creation
empty = set()  # Note: {} creates empty dict!
numbers = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}

# Adding and removing
numbers.add(6)
numbers.remove(1)     # Raises KeyError if missing
numbers.discard(10)   # No error if missing
popped = numbers.pop()  # Remove and return arbitrary element
numbers.clear()

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)   # Union: {1, 2, 3, 4, 5, 6}
print(a & b)   # Intersection: {3, 4}
print(a - b)   # Difference: {1, 2}
print(a ^ b)   # Symmetric difference: {1, 2, 5, 6}

# Subset and superset
print({1, 2} <= {1, 2, 3})   # True (subset)
print({1, 2, 3} >= {1, 2})   # True (superset)
print({1, 2}.isdisjoint({3, 4}))  # True (no common elements)
\`\`\`

### Set Comprehensions

\`\`\`python
# Unique squares
squares = {x**2 for x in range(-5, 6)}
# {0, 1, 4, 9, 16, 25}

# Unique word lengths
words = ["hello", "world", "hi", "python", "bye"]
lengths = {len(word) for word in words}
# {2, 3, 5, 6}
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <p class="mb-4">Table</p><div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Type</th><th class="px-4 py-2 text-left font-semibold">Mutable</th><th class="px-4 py-2 text-left font-semibold">Ordered</th><th class="px-4 py-2 text-left font-semibold">Duplicates</th><th class="px-4 py-2 text-left font-semibold">Example</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">\`int\`</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">N/A</td><td class="px-4 py-2 border-t border-border">N/A</td><td class="px-4 py-2 border-t border-border">\`42\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`float\`</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">N/A</td><td class="px-4 py-2 border-t border-border">N/A</td><td class="px-4 py-2 border-t border-border">\`3.14\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`str\`</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">\`"hello"\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`list\`</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">\`[1, 2, 3]\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`tuple\`</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">\`(1, 2, 3)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`dict\`</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">✅*</td><td class="px-4 py-2 border-t border-border">Keys: ❌</td><td class="px-4 py-2 border-t border-border">\`{"a": 1}\`</td></tr><tr><td class="px-4 py-2 border-t border-border">\`set\`</td><td class="px-4 py-2 border-t border-border">✅</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">❌</td><td class="px-4 py-2 border-t border-border">\`{1, 2, 3}\`</td></tr></table></div><p class="mb-4">*Dictionaries maintain insertion order in Python 3.7+</p>
  </div>
</div>

---

> **Next Topic:** We'll explore functions and how to write reusable, modular code.
`,
          quickCheck: [
            {
              id: "q5-1",
              question: "What is the result of 'hello'.upper().replace('L', 'X')?",
              options: [
                { id: "a", text: "'HEXXO'", isCorrect: true },
                { id: "b", text: "'hexxo'", isCorrect: false },
                { id: "c", text: "'HExxO'", isCorrect: false },
                { id: "d", text: "'HELLO'", isCorrect: false }
              ],
              explanation: "'hello'.upper() returns 'HELLO', then .replace('L', 'X') replaces all 'L' characters with 'X', resulting in 'HEXXO'. Method chaining applies left to right."
            },
            {
              id: "q5-2",
              question: "Which of these is the correct way to create an empty set in Python?",
              options: [
                { id: "a", text: "{}", isCorrect: false },
                { id: "b", text: "set()", isCorrect: true },
                { id: "c", text: "[]", isCorrect: false },
                { id: "d", text: "()", isCorrect: false }
              ],
              explanation: "In Python, {} creates an empty dictionary, not a set. To create an empty set, you must use set(). This is a common gotcha for Python developers."
            }
          ]
        }
      ]
    },
    {
      id: "module-3",
      number: 3,
      title: "Functions & Modules",
      description: "Learn to write reusable code with functions and organize your code with modules.",
      topics: [
        {
          id: "functions",
          number: 6,
          title: "Functions",
          content: `# Functions in Python

Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs more maintainable.

---

## Why Use Functions?

| Benefit | Description |
|---------|-------------|
| **Reusability** | Write once, use many times |
| **Modularity** | Break complex problems into smaller pieces |
| **Readability** | Self-documenting code with descriptive names |
| **Testing** | Easier to test isolated units of code |
| **Maintenance** | Change in one place affects all usages |

---

## Defining and Calling Functions

### Basic Function Syntax

\`\`\`python
# Function definition
def greet():
    """Display a greeting message."""
    print("Hello, World!")

# Function call
greet()  # Output: Hello, World!
\`\`\`

### Functions with Parameters

\`\`\`python
def greet(name):
    """Greet a person by name."""
    print(f"Hello, {name}!")

greet("Alice")   # Hello, Alice!
greet("Bob")     # Hello, Bob!

# Multiple parameters
def add(a, b):
    """Return the sum of two numbers."""
    return a + b

result = add(3, 5)
print(result)  # 8
\`\`\`

### The return Statement

\`\`\`python
# Single return value
def square(n):
    return n ** 2

# Multiple return values (as tuple)
def divide_and_remainder(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder

q, r = divide_and_remainder(17, 5)
print(f"17 ÷ 5 = {q} remainder {r}")  # 17 ÷ 5 = 3 remainder 2

# Early return
def get_grade(score):
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    return "F"

# No explicit return = returns None
def print_message(msg):
    print(msg)

result = print_message("Hi")  # Prints "Hi"
print(result)  # None
\`\`\`

---

## Function Arguments

### Positional Arguments

\`\`\`python
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

# Order matters with positional arguments
describe_pet("dog", "Buddy")    # I have a dog named Buddy.
describe_pet("Buddy", "dog")    # I have a Buddy named dog. (Wrong!)
\`\`\`

### Keyword Arguments

\`\`\`python
# Use parameter names explicitly
describe_pet(pet_name="Whiskers", animal_type="cat")
# I have a cat named Whiskers.

# Mix positional and keyword (positional must come first)
describe_pet("hamster", pet_name="Nibbles")
\`\`\`

### Default Parameter Values

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!
greet("Charlie", greeting="Hey")  # Hey, Charlie!

# Important: Default values should be immutable!
# BAD:
def append_to(element, target=[]):  # Mutable default!
    target.append(element)
    return target

# GOOD:
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target
\`\`\`

### Variable-Length Arguments

\`\`\`python
# *args - Variable positional arguments (tuple)
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs - Variable keyword arguments (dict)
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="NYC")
# name: Alice
# age: 30
# city: NYC

# Combining all argument types
def complex_function(required, *args, default=None, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Default: {default}")
    print(f"Kwargs: {kwargs}")

complex_function("hello", 1, 2, 3, default="value", x=10, y=20)
\`\`\`

### Unpacking Arguments

\`\`\`python
# Unpack list/tuple with *
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
print(add(*numbers))  # 6

# Unpack dict with **
def greet(name, greeting):
    print(f"{greeting}, {name}!")

params = {"name": "Alice", "greeting": "Hi"}
greet(**params)  # Hi, Alice!
\`\`\`

---

## Lambda Functions

Lambda functions are small anonymous functions:

\`\`\`python
# Regular function
def square(x):
    return x ** 2

# Equivalent lambda
square = lambda x: x ** 2

print(square(5))  # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Common use cases with built-in functions
numbers = [1, 2, 3, 4, 5]

# With map()
squared = list(map(lambda x: x**2, numbers))
# [1, 4, 9, 16, 25]

# With filter()
evens = list(filter(lambda x: x % 2 == 0, numbers))
# [2, 4]

# With sorted()
pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
sorted_pairs = sorted(pairs, key=lambda x: x[0])
# [(1, 'one'), (2, 'two'), (3, 'three')]

# With max/min
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]
top_student = max(students, key=lambda s: s["grade"])
print(top_student["name"])  # Bob
\`\`\`

---

## Scope and Namespaces

### LEGB Rule

Python looks up names in this order:
1. **L**ocal - Inside current function
2. **E**nclosing - Inside enclosing functions
3. **G**lobal - At module level
4. **B**uilt-in - Python's built-in names

\`\`\`python
x = "global"

def outer():
    x = "enclosing"
    
    def inner():
        x = "local"
        print(x)  # local
    
    inner()
    print(x)  # enclosing

outer()
print(x)  # global
\`\`\`

### The global Keyword

\`\`\`python
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)  # 2
\`\`\`

### The nonlocal Keyword

\`\`\`python
def outer():
    count = 0
    
    def inner():
        nonlocal count
        count += 1
        return count
    
    return inner

counter = outer()
print(counter())  # 1
print(counter())  # 2
print(counter())  # 3
\`\`\`

---

## Docstrings

Document your functions with docstrings:

\`\`\`python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle.
        width (float): The width of the rectangle.
    
    Returns:
        float: The area of the rectangle.
    
    Raises:
        ValueError: If length or width is negative.
    
    Examples:
        >>> calculate_area(5, 3)
        15
        >>> calculate_area(2.5, 4)
        10.0
    """
    if length < 0 or width < 0:
        raise ValueError("Dimensions must be non-negative")
    return length * width

# Access docstring
print(calculate_area.__doc__)
help(calculate_area)
\`\`\`

---

## Higher-Order Functions

Functions that take or return other functions:

\`\`\`python
# Function as argument
def apply_operation(func, x, y):
    return func(x, y)

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

print(apply_operation(add, 3, 4))       # 7
print(apply_operation(multiply, 3, 4))  # 12

# Function returning function
def make_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
\`\`\`

---

## Decorators

Decorators modify or enhance function behavior:

\`\`\`python
# Basic decorator
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase
def greet(name):
    return f"hello, {name}"

print(greet("alice"))  # HELLO, ALICE

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")

say_hello()
# Hello!
# Hello!
# Hello!

# Common decorator: timing
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # slow_function took 1.0012 seconds
\`\`\`

---

## Recursive Functions

Functions that call themselves:

\`\`\`python
# Factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

# Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# With memoization for efficiency
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_fast(n):
    if n <= 1:
        return n
    return fibonacci_fast(n - 1) + fibonacci_fast(n - 2)

print(fibonacci_fast(100))  # 354224848179261915075
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Concept</th><th class="px-4 py-2 text-left font-semibold">Description</th><th class="px-4 py-2 text-left font-semibold">Example</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">Basic function</td><td class="px-4 py-2 border-t border-border">Reusable code block</td><td class="px-4 py-2 border-t border-border">\`def greet(): ...\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Parameters</td><td class="px-4 py-2 border-t border-border">Inputs to function</td><td class="px-4 py-2 border-t border-border">\`def add(a, b): ...\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Return values</td><td class="px-4 py-2 border-t border-border">Output from function</td><td class="px-4 py-2 border-t border-border">\`return result\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Default args</td><td class="px-4 py-2 border-t border-border">Optional parameters</td><td class="px-4 py-2 border-t border-border">\`def f(x=10): ...\`</td></tr><tr><td class="px-4 py-2 border-t border-border">*args</td><td class="px-4 py-2 border-t border-border">Variable positional</td><td class="px-4 py-2 border-t border-border">\`def f(*args): ...\`</td></tr><tr><td class="px-4 py-2 border-t border-border">**kwargs</td><td class="px-4 py-2 border-t border-border">Variable keyword</td><td class="px-4 py-2 border-t border-border">\`def f(**kwargs): ...\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Lambda</td><td class="px-4 py-2 border-t border-border">Anonymous function</td><td class="px-4 py-2 border-t border-border">\`lambda x: x**2\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Decorator</td><td class="px-4 py-2 border-t border-border">Function modifier</td><td class="px-4 py-2 border-t border-border">\`@timer\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Recursion</td><td class="px-4 py-2 border-t border-border">Self-calling function</td><td class="px-4 py-2 border-t border-border">Base case + recursive case</td></tr></table></div>
  </div>
</div>

---

> **Next Topic:** We'll explore modules and packages to organize code across files.
`,
          quickCheck: [
            {
              id: "q6-1",
              question: "What does a function return if there's no return statement?",
              options: [
                { id: "a", text: "0", isCorrect: false },
                { id: "b", text: "An empty string", isCorrect: false },
                { id: "c", text: "None", isCorrect: true },
                { id: "d", text: "It raises an error", isCorrect: false }
              ],
              explanation: "If a function doesn't have a return statement (or has a bare 'return'), it implicitly returns None. This is Python's way of representing 'no value'."
            },
            {
              id: "q6-2",
              question: "What is the purpose of *args in a function definition?",
              options: [
                { id: "a", text: "To accept keyword arguments", isCorrect: false },
                { id: "b", text: "To accept a variable number of positional arguments as a tuple", isCorrect: true },
                { id: "c", text: "To unpack a list", isCorrect: false },
                { id: "d", text: "To make all arguments optional", isCorrect: false }
              ],
              explanation: "*args allows a function to accept any number of positional arguments. They are collected into a tuple. This is useful when you don't know in advance how many arguments will be passed."
            }
          ]
        },
        {
          id: "modules-packages",
          number: 7,
          title: "Modules and Packages",
          content: `# Modules and Packages in Python

Modules and packages help organize Python code into reusable, maintainable units. They're fundamental to Python's philosophy of code reuse and organization.

---

## What is a Module?

A **module** is simply a Python file (\`.py\`) containing code that can be imported and used in other Python files.

### Creating a Module

\`\`\`python
# math_utils.py
"""Mathematical utility functions."""

PI = 3.14159

def add(a, b):
    """Return the sum of two numbers."""
    return a + b

def multiply(a, b):
    """Return the product of two numbers."""
    return a * b

def circle_area(radius):
    """Calculate the area of a circle."""
    return PI * radius ** 2
\`\`\`

### Importing a Module

\`\`\`python
# main.py

# Import entire module
import math_utils

print(math_utils.PI)              # 3.14159
print(math_utils.add(3, 4))       # 7
print(math_utils.circle_area(5))  # 78.53975

# Import with alias
import math_utils as mu
print(mu.add(3, 4))  # 7

# Import specific items
from math_utils import add, PI
print(add(3, 4))  # 7
print(PI)         # 3.14159

# Import all (not recommended for large modules)
from math_utils import *
print(multiply(3, 4))  # 12

# Import with renaming
from math_utils import circle_area as area
print(area(5))  # 78.53975
\`\`\`

---

## The \`__name__\` Variable

Every module has a built-in \`__name__\` variable:

\`\`\`python
# greetings.py
def say_hello():
    print("Hello!")

def say_goodbye():
    print("Goodbye!")

# This block runs only when executed directly
if __name__ == "__main__":
    print("Running greetings.py directly")
    say_hello()
    say_goodbye()
\`\`\`

\`\`\`python
# When run directly:
# python greetings.py
# Output: Running greetings.py directly
#         Hello!
#         Goodbye!

# When imported:
import greetings
# No output - the if block doesn't run
greetings.say_hello()  # Hello!
\`\`\`

---

## Python's Standard Library

Python comes with a rich standard library:

### Common Modules

\`\`\`python
# math - Mathematical functions
import math
print(math.sqrt(16))     # 4.0
print(math.ceil(3.2))    # 4
print(math.floor(3.8))   # 3
print(math.factorial(5)) # 120
print(math.pi)           # 3.141592653589793
print(math.e)            # 2.718281828459045

# random - Random number generation
import random
print(random.random())           # Random float 0-1
print(random.randint(1, 10))     # Random int 1-10
print(random.choice(['a', 'b'])) # Random choice
random.shuffle([1, 2, 3])        # Shuffle in place

# datetime - Date and time
from datetime import datetime, timedelta
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))  # 2024-01-15 14:30
tomorrow = now + timedelta(days=1)
print(tomorrow.date())

# os - Operating system interface
import os
print(os.getcwd())           # Current directory
print(os.listdir('.'))       # List directory
os.makedirs('new_folder', exist_ok=True)  # Create directory

# sys - System-specific parameters
import sys
print(sys.version)           # Python version
print(sys.platform)          # Platform name
print(sys.path)              # Module search path

# json - JSON handling
import json
data = {"name": "Alice", "age": 30}
json_string = json.dumps(data)       # To JSON string
parsed = json.loads(json_string)     # From JSON string

# collections - Specialized containers
from collections import Counter, defaultdict, deque
counter = Counter("abracadabra")     # {'a': 5, 'b': 2, ...}
dd = defaultdict(list)               # Default value factory
queue = deque([1, 2, 3])             # Double-ended queue
\`\`\`

### File Operations

\`\`\`python
import os
import shutil
from pathlib import Path

# Using pathlib (modern approach)
path = Path("my_folder")
path.mkdir(exist_ok=True)          # Create directory
file_path = path / "file.txt"      # Join paths
file_path.write_text("Hello!")     # Write to file
content = file_path.read_text()    # Read from file

# Check file properties
print(file_path.exists())          # True
print(file_path.is_file())         # True
print(file_path.suffix)            # .txt

# Copy and move files
shutil.copy("source.txt", "dest.txt")
shutil.move("old.txt", "new.txt")
\`\`\`

---

## Packages

A **package** is a collection of modules organized in directories with an \`__init__.py\` file.

### Package Structure

\`\`\`
my_package/
├── __init__.py
├── module1.py
├── module2.py
└── subpackage/
    ├── __init__.py
    └── module3.py
\`\`\`

### Creating a Package

\`\`\`python
# my_package/__init__.py
"""My package for demonstration."""

from .module1 import function1
from .module2 import function2

__version__ = "1.0.0"
__all__ = ["function1", "function2"]
\`\`\`

\`\`\`python
# my_package/module1.py
def function1():
    return "Hello from module1"
\`\`\`

\`\`\`python
# my_package/module2.py
def function2():
    return "Hello from module2"
\`\`\`

### Using the Package

\`\`\`python
# Import from package
import my_package
print(my_package.function1())
print(my_package.__version__)

# Import specific module
from my_package import module1
print(module1.function1())

# Import from subpackage
from my_package.subpackage import module3
\`\`\`

---

## Installing Third-Party Packages

### Using pip

\`\`\`bash
# Install a package
pip install requests

# Install specific version
pip install requests==2.28.0

# Install from requirements.txt
pip install -r requirements.txt

# Upgrade a package
pip install --upgrade requests

# Uninstall a package
pip uninstall requests

# List installed packages
pip list

# Show package info
pip show requests

# Create requirements.txt
pip freeze > requirements.txt
\`\`\`

### Virtual Environments

\`\`\`bash
# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (macOS/Linux)
source myenv/bin/activate

# Deactivate
deactivate
\`\`\`

### Popular Third-Party Packages

| Category | Package | Purpose |
|----------|---------|---------|
| Web | requests | HTTP requests |
| Web | flask | Web framework |
| Web | django | Full-stack framework |
| Data | numpy | Numerical computing |
| Data | pandas | Data analysis |
| Data | matplotlib | Plotting |
| Testing | pytest | Testing framework |
| Utility | click | CLI creation |
| Async | aiohttp | Async HTTP |

---

## Module Search Path

Python searches for modules in this order:

1. Current directory
2. PYTHONPATH environment variable
3. Standard library directories
4. Site-packages (third-party)

\`\`\`python
import sys
print(sys.path)

# Add to path programmatically
sys.path.insert(0, '/path/to/my/modules')
\`\`\`

---

## Best Practices

### 1. Module Organization

\`\`\`python
# Good module structure
"""
Module docstring explaining purpose.

Example usage:
    from mymodule import main_function
    result = main_function()
"""

# Standard library imports
import os
import sys

# Third-party imports
import requests

# Local imports
from .utils import helper

# Constants
DEFAULT_TIMEOUT = 30

# Classes
class MyClass:
    pass

# Functions
def main_function():
    pass

# Entry point
if __name__ == "__main__":
    main_function()
\`\`\`

### 2. Import Best Practices

\`\`\`python
# Good: Specific imports
from math import sqrt, ceil

# Good: Module import with alias
import numpy as np

# Avoid: Star imports (pollutes namespace)
# from math import *

# Avoid: Importing too many names
# from module import a, b, c, d, e, f, g, h, i, j
\`\`\`

### 3. \`__all__\` for Public API

\`\`\`python
# mymodule.py
__all__ = ["public_function", "PublicClass"]

def public_function():
    pass

def _private_function():  # Convention: leading underscore
    pass

class PublicClass:
    pass

class _PrivateClass:
    pass
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Concept</th><th class="px-4 py-2 text-left font-semibold">Description</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">Module</td><td class="px-4 py-2 border-t border-border">Single .py file with reusable code</td></tr><tr><td class="px-4 py-2 border-t border-border">Package</td><td class="px-4 py-2 border-t border-border">Directory with __init__.py containing modules</td></tr><tr><td class="px-4 py-2 border-t border-border">import</td><td class="px-4 py-2 border-t border-border">Load entire module</td></tr><tr><td class="px-4 py-2 border-t border-border">from ... import</td><td class="px-4 py-2 border-t border-border">Load specific items</td></tr><tr><td class="px-4 py-2 border-t border-border">pip</td><td class="px-4 py-2 border-t border-border">Package installer for Python</td></tr><tr><td class="px-4 py-2 border-t border-border">venv</td><td class="px-4 py-2 border-t border-border">Virtual environment for isolation</td></tr><tr><td class="px-4 py-2 border-t border-border">\`__name__\`</td><td class="px-4 py-2 border-t border-border">Determines if module is run directly</td></tr><tr><td class="px-4 py-2 border-t border-border">\`__all__\`</td><td class="px-4 py-2 border-t border-border">Controls what's exported with * import</td></tr></table></div>
  </div>
</div>

---

> **Next Topic:** We'll explore file handling and working with external data.
`,
          quickCheck: [
            {
              id: "q7-1",
              question: "What is the purpose of __init__.py in a package directory?",
              options: [
                { id: "a", text: "It initializes variables to zero", isCorrect: false },
                { id: "b", text: "It marks the directory as a Python package", isCorrect: true },
                { id: "c", text: "It runs automatically when Python starts", isCorrect: false },
                { id: "d", text: "It defines the main function", isCorrect: false }
              ],
              explanation: "The __init__.py file (which can be empty) marks a directory as a Python package, allowing its modules to be imported. It can also contain initialization code and define the package's public API."
            },
            {
              id: "q7-2",
              question: "When does the code inside 'if __name__ == \"__main__\":' execute?",
              options: [
                { id: "a", text: "Every time the module is imported", isCorrect: false },
                { id: "b", text: "Only when the file is run directly as a script", isCorrect: true },
                { id: "c", text: "Only when the file is imported", isCorrect: false },
                { id: "d", text: "Never, it's just a convention", isCorrect: false }
              ],
              explanation: "When a Python file is run directly, __name__ is set to '__main__'. When imported, __name__ is set to the module name. This pattern allows code to run only when executed directly, not when imported."
            }
          ]
        }
      ]
    },
    {
      id: "module-4",
      number: 4,
      title: "File Handling & Exceptions",
      description: "Learn to work with files and handle errors gracefully in your Python programs.",
      topics: [
        {
          id: "file-handling",
          number: 8,
          title: "File Handling",
          content: `# File Handling in Python

File handling is essential for reading and writing data to persistent storage. Python provides simple yet powerful tools for working with files.

---

## Opening and Closing Files

### Basic File Operations

\`\`\`python
# Open a file
file = open("example.txt", "r")  # Read mode
content = file.read()
file.close()  # Always close!

# Better: Using context manager (recommended)
with open("example.txt", "r") as file:
    content = file.read()
# File automatically closed after the block
\`\`\`

### File Modes

| Mode | Description |
|------|-------------|
| \`'r'\` | Read (default) - file must exist |
| \`'w'\` | Write - creates new or truncates existing |
| \`'a'\` | Append - adds to end of file |
| \`'x'\` | Exclusive create - fails if file exists |
| \`'r+'\` | Read and write |
| \`'w+'\` | Write and read (truncates) |
| \`'a+'\` | Append and read |
| \`'b'\` | Binary mode (add to any mode) |
| \`'t'\` | Text mode (default) |

\`\`\`python
# Binary mode
with open("image.png", "rb") as file:
    data = file.read()

# Write mode
with open("output.txt", "w") as file:
    file.write("Hello, World!")

# Append mode
with open("log.txt", "a") as file:
    file.write("New log entry\\n")
\`\`\`

---

## Reading Files

### Reading Methods

\`\`\`python
# Read entire file as string
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Read with size limit
with open("large_file.txt", "r") as file:
    chunk = file.read(100)  # Read 100 characters

# Read single line
with open("example.txt", "r") as file:
    first_line = file.readline()
    second_line = file.readline()

# Read all lines into list
with open("example.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())

# Iterate over lines (memory efficient)
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
\`\`\`

### Practical Example: Processing CSV Manually

\`\`\`python
def read_csv(filename):
    """Read CSV file and return list of dictionaries."""
    with open(filename, "r") as file:
        lines = file.readlines()
        headers = lines[0].strip().split(",")
        data = []
        for line in lines[1:]:
            values = line.strip().split(",")
            row = dict(zip(headers, values))
            data.append(row)
        return data

# Usage
students = read_csv("students.csv")
for student in students:
    print(f"{student['name']}: {student['grade']}")
\`\`\`

---

## Writing Files

### Writing Methods

\`\`\`python
# Write string
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Welcome to Python!")

# Write multiple lines
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(line + "\\n" for line in lines)

# Write with print
with open("output.txt", "w") as file:
    print("Hello!", file=file)
    print("Goodbye!", file=file)
\`\`\`

### Practical Example: Logging

\`\`\`python
from datetime import datetime

def log_message(message, log_file="app.log"):
    """Append a timestamped message to log file."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(log_file, "a") as file:
        file.write(f"[{timestamp}] {message}\\n")

# Usage
log_message("Application started")
log_message("User logged in")
log_message("Error: Database connection failed")
\`\`\`

---

## Working with File Paths

### Using pathlib (Modern Approach)

\`\`\`python
from pathlib import Path

# Create path objects
current_dir = Path(".")
home = Path.home()
data_file = Path("data") / "users.json"

# Path operations
print(data_file.name)      # users.json
print(data_file.stem)      # users
print(data_file.suffix)    # .json
print(data_file.parent)    # data
print(data_file.absolute())  # Full absolute path

# Check existence
if data_file.exists():
    print("File exists!")

# Create directories
output_dir = Path("output")
output_dir.mkdir(parents=True, exist_ok=True)

# List directory contents
for item in Path(".").iterdir():
    if item.is_file():
        print(f"File: {item}")
    elif item.is_dir():
        print(f"Dir: {item}")

# Glob patterns
for py_file in Path(".").glob("**/*.py"):
    print(py_file)

# Read and write
file_path = Path("data.txt")
file_path.write_text("Hello, World!")
content = file_path.read_text()
\`\`\`

### Using os.path (Traditional Approach)

\`\`\`python
import os

# Path operations
filename = "data/users.json"
print(os.path.basename(filename))   # users.json
print(os.path.dirname(filename))    # data
print(os.path.splitext(filename))   # ('data/users', '.json')
print(os.path.exists(filename))     # True/False
print(os.path.isfile(filename))     # True/False
print(os.path.isdir("data"))        # True/False
print(os.path.join("data", "file.txt"))  # data/file.txt
\`\`\`

---

## Working with JSON

\`\`\`python
import json

# Python object to JSON
data = {
    "name": "Alice",
    "age": 30,
    "skills": ["Python", "JavaScript"],
    "active": True
}

# Write JSON to file
with open("data.json", "w") as file:
    json.dump(data, file, indent=2)

# Read JSON from file
with open("data.json", "r") as file:
    loaded_data = json.load(file)
    print(loaded_data["name"])  # Alice

# JSON string operations
json_string = json.dumps(data)          # To string
parsed_data = json.loads(json_string)   # From string

# Pretty print
print(json.dumps(data, indent=4, sort_keys=True))
\`\`\`

---

## Working with CSV

\`\`\`python
import csv

# Read CSV
with open("data.csv", "r", newline="") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)  # List of values

# Read CSV as dictionaries
with open("data.csv", "r", newline="") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row["name"], row["age"])

# Write CSV
data = [
    ["Name", "Age", "City"],
    ["Alice", 30, "NYC"],
    ["Bob", 25, "LA"]
]

with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Write CSV from dictionaries
users = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25}
]

with open("users.csv", "w", newline="") as file:
    fieldnames = ["name", "age"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(users)
\`\`\`

---

## Binary Files

\`\`\`python
# Copy binary file
with open("source.jpg", "rb") as src:
    with open("copy.jpg", "wb") as dst:
        dst.write(src.read())

# Read in chunks (memory efficient)
def copy_file(source, destination, chunk_size=1024):
    with open(source, "rb") as src:
        with open(destination, "wb") as dst:
            while True:
                chunk = src.read(chunk_size)
                if not chunk:
                    break
                dst.write(chunk)

# Using shutil for file operations
import shutil
shutil.copy("source.txt", "destination.txt")
shutil.copy2("source.txt", "dest.txt")  # Preserves metadata
shutil.move("old.txt", "new.txt")
\`\`\`

---

## Temporary Files

\`\`\`python
import tempfile

# Create temporary file
with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as tmp:
    tmp.write("Temporary data")
    print(f"Temp file: {tmp.name}")

# Create temporary directory
with tempfile.TemporaryDirectory() as tmpdir:
    print(f"Temp dir: {tmpdir}")
    # Directory and contents deleted when block exits
\`\`\`

---


<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <div class="overflow-x-auto my-4"><table class="min-w-full border border-border rounded-md text-sm"><thead class="bg-muted"><tr><th class="px-4 py-2 text-left font-semibold">Operation</th><th class="px-4 py-2 text-left font-semibold">Method</th></tr></thead><tr><td class="px-4 py-2 border-t border-border">Open file</td><td class="px-4 py-2 border-t border-border">\`with open(path, mode) as f:\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Read all</td><td class="px-4 py-2 border-t border-border">\`f.read()\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Read lines</td><td class="px-4 py-2 border-t border-border">\`f.readlines()\` or iterate</td></tr><tr><td class="px-4 py-2 border-t border-border">Write</td><td class="px-4 py-2 border-t border-border">\`f.write(text)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">JSON read</td><td class="px-4 py-2 border-t border-border">\`json.load(f)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">JSON write</td><td class="px-4 py-2 border-t border-border">\`json.dump(data, f)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">CSV read</td><td class="px-4 py-2 border-t border-border">\`csv.reader(f)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">CSV write</td><td class="px-4 py-2 border-t border-border">\`csv.writer(f)\`</td></tr><tr><td class="px-4 py-2 border-t border-border">Path handling</td><td class="px-4 py-2 border-t border-border">\`pathlib.Path\`</td></tr></table></div>
  </div>
</div>

---

> **Next Topic:** We'll learn about exception handling to make your programs robust.
`,
          quickCheck: [
            {
              id: "q8-1",
              question: "What is the advantage of using 'with open()' over 'open()'?",
              options: [
                { id: "a", text: "It's faster", isCorrect: false },
                { id: "b", text: "It automatically closes the file, even if an error occurs", isCorrect: true },
                { id: "c", text: "It can read larger files", isCorrect: false },
                { id: "d", text: "It uses less memory", isCorrect: false }
              ],
              explanation: "The 'with' statement (context manager) ensures the file is properly closed when the block exits, even if an exception is raised. This prevents resource leaks and is considered best practice."
            },
            {
              id: "q8-2",
              question: "What does mode 'a' do when opening a file?",
              options: [
                { id: "a", text: "Opens file for reading only", isCorrect: false },
                { id: "b", text: "Creates a new file, fails if exists", isCorrect: false },
                { id: "c", text: "Opens file for appending, creates if doesn't exist", isCorrect: true },
                { id: "d", text: "Opens file and deletes its contents", isCorrect: false }
              ],
              explanation: "Mode 'a' opens the file for appending. New content is added to the end of the file. If the file doesn't exist, it's created. Unlike 'w', it doesn't delete existing content."
            }
          ]
        }
      ]
    }
,
    {
      id: "module-dsa",
      number: 2,
      title: "Data Structures & Algorithms",
      description: "Master the fundamental building blocks of efficient software with this comprehensive DSA module.",
      topics: [
        {
          id: "arrays-hashing",
          number: 1,
          title: "Arrays & Hashing",
          content: `# Arrays & Hashing

Arrays are the simplest and most widely used data structure. Hashing allows for O(1) average time complexity lookups. Mastering these is crucial for coding interviews.

---

## Understanding Arrays

An **array** is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

### Key Characteristics

- **Contiguous Memory:** Elements are stored side-by-side.
- **Fixed Size:** In many languages (like C++ or Java), size is fixed. Python lists are dynamic arrays.
- **Random Access:** You can access any element in O(1) time using its index.

### Time Complexity

| Operation | Time Complexity | Note |
|-----------|-----------------|------|
| Access    | O(1)            | Indexing |
| Search    | O(n)            | Linear search |
| Insertion | O(n)            | Shifting elements required |
| Deletion  | O(n)            | Shifting elements required |

\`\`\`python
# Python List (Dynamic Array) operations
arr = [1, 2, 3]

# Access - O(1)
print(arr[0])

# Append - Amortized O(1)
arr.append(4)

# Insert - O(n)
arr.insert(1, 99)
\`\`\`

---

## Hashing (Hash Maps/Sets)

**Hashing** is a technique to convert a range of key values into a range of indexes of an array.

### Hash Map (Dictionary)

Stores key-value pairs. Keys must be unique and hashable (immutable).

\`\`\`python
# Creating a hash map
scores = {"Alice": 95, "Bob": 88}

# Access - O(1) average
print(scores["Alice"])

# Insertion/Update - O(1) average
scores["Charlie"] = 92

# Check existence - O(1) average
if "Alice" in scores:
    print("Found!")
\`\`\`

### Hash Set

Stores only unique keys (no values). Useful for checking presence or removing duplicates.

\`\`\`python
# Creating a set
unique_nums = {1, 2, 3, 2, 1}
print(unique_nums)  # {1, 2, 3}

# O(1) lookup
print(2 in unique_nums)  # True
\`\`\`

---

## Common Patterns

### 1. Two Sum

Given an array of integers and a target, return indices of the two numbers such that they add up to target.

**Naive Approach (O(n²)):** Nested loops.
**Optimal Approach (O(n)):** Use a Hash Map to store complements.

\`\`\`python
def two_sum(nums, target):
    prev_map = {}  # val : index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prev_map:
            return [prev_map[diff], i]
        prev_map[n] = i
    return []
\`\`\`

### 2. Contains Duplicate

Check if any value appears at least twice.

\`\`\`python
def contains_duplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False

    # Or simply:
    # return len(set(nums)) != len(nums)
\`\`\`

---

<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <ul class="list-none pl-0 space-y-2 mb-4"><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span><strong>Arrays</strong> offer O(1) access but O(n) insertion/deletion.</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span><strong>Hash Maps</strong> (Dicts) offer O(1) average lookup, insertion, and deletion.</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Use a <strong>Set</strong> to quickly check for duplicates or existence.</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span><strong>Space-Time Tradeoff:</strong> Using a hash map increases space complexity to O(n) but often reduces time complexity from O(n²) to O(n).</span></li></ul>
  </div>
</div>
`,
          quickCheck: [
            {
              id: "dsa-1-1",
              question: "What is the average time complexity for looking up a key in a Hash Map?",
              options: [
                { id: "a", text: "O(n)", isCorrect: false },
                { id: "b", text: "O(log n)", isCorrect: false },
                { id: "c", text: "O(1)", isCorrect: true },
                { id: "d", text: "O(n^2)", isCorrect: false }
              ],
              explanation: "Hash Maps use a hashing function to map keys to indices, allowing for direct access (O(1)) on average."
            },
            {
              id: "dsa-1-2",
              question: "Which data structure is best for checking if a value exists in a collection?",
              options: [
                { id: "a", text: "Array", isCorrect: false },
                { id: "b", text: "Linked List", isCorrect: false },
                { id: "c", text: "Hash Set", isCorrect: true },
                { id: "d", text: "Queue", isCorrect: false }
              ],
              explanation: "A Hash Set is optimized for membership testing, offering O(1) average time complexity compared to O(n) for lists/arrays."
            }
          ]
        },
        {
          id: "two-pointers",
          number: 2,
          title: "Two Pointers",
          content: `# Two Pointers Technique

The **Two Pointers** pattern is a versatile technique used to solve array and string problems efficiently. It involves using two pointers to iterate through the data structure, often to find a pair, reverse data, or solve partitioning problems.

---

## When to Use Two Pointers

This technique is most effective when:
1.  **Processing Sorted Arrays:** To find pairs that sum to a target.
2.  **Reversing/Swapping:** To reverse strings or arrays in-place.
3.  **Partitioning:** Moving elements based on a condition (e.g., move zeroes to end).
4.  **Comparing Ends:** Checking for palindromes.

---

## Scenario 1: Valid Palindrome

Check if a string is a palindrome (reads the same forwards and backwards), ignoring non-alphanumeric characters.

**Algorithm:**
1.  Initialize \`left\` at start (0) and \`right\` at end (len-1).
2.  While \`left < right\`:
    - Move \`left\` forward if not alphanumeric.
    - Move \`right\` backward if not alphanumeric.
    - Compare characters. If mismatch, return \`False\`.
    - Move both pointers inward.

\`\`\`python
def is_palindrome(s):
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not s[l].isalnum():
            l += 1
        while l < r and not s[r].isalnum():
            r -= 1

        if s[l].lower() != s[r].lower():
            return False

        l, r = l + 1, r - 1

    return True
\`\`\`

---

## Scenario 2: Two Sum II (Sorted Array)

Given a **sorted** array, find two numbers that sum to target.

**Naive:** Nested loop O(n²).
**Hash Map:** O(n) space.
**Two Pointers:** O(n) time, **O(1) space**.

**Logic:**
- If \`sum > target\`: We need a smaller sum. Since array is sorted, decrease \`right\`.
- If \`sum < target\`: We need a larger sum. Increase \`left\`.

\`\`\`python
def two_sum_sorted(numbers, target):
    l, r = 0, len(numbers) - 1

    while l < r:
        cur_sum = numbers[l] + numbers[r]

        if cur_sum > target:
            r -= 1
        elif cur_sum < target:
            l += 1
        else:
            return [l + 1, r + 1]  # 1-indexed

    return []
\`\`\`

---

## Scenario 3: Container With Most Water

Find two lines that form a container such that it holds the most water.

\`\`\`python
def max_area(height):
    l, r = 0, len(height) - 1
    res = 0

    while l < r:
        # Area = width * min_height
        area = (r - l) * min(height[l], height[r])
        res = max(res, area)

        # Move the smaller pointer to potentially find a taller bar
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1

    return res
\`\`\`

---

<div class="bg-card text-card-foreground border border-border rounded-lg p-6 my-8 shadow-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="p-2 bg-primary/10 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    </div>
    <h3 class="text-xl font-semibold m-0">Summary</h3>
  </div>
  <div class="text-muted-foreground leading-relaxed">
    <ul class="list-none pl-0 space-y-2 mb-4"><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>Two Pointers technique reduces time complexity (often O(n²) to O(n)) and space complexity (O(n) to O(1)).</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span>It relies on the structure of the data (e.g., sorted array, palindrome symmetry).</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span><strong>Opposite Directions:</strong> One at start, one at end (Palindrome, Two Sum Sorted).</span></li><li class="flex items-start gap-2 mb-2"><span class="text-primary mt-1">•</span><span><strong>Same Direction:</strong> (Fast/Slow pointers) - Used for cycle detection or sliding windows (covered later).</span></li></ul>
  </div>
</div>
`,
          quickCheck: [
            {
              id: "dsa-2-1",
              question: "The Two Pointers technique is most effective on what kind of array for finding a target sum?",
              options: [
                { id: "a", text: "Any array", isCorrect: false },
                { id: "b", text: "Sorted array", isCorrect: true },
                { id: "c", text: "Reverse sorted array only", isCorrect: false },
                { id: "d", text: "Array with distinct values", isCorrect: false }
              ],
              explanation: "If the array is sorted, we can deterministically decide which pointer to move to increase or decrease the current sum toward the target."
            },
            {
              id: "dsa-2-2",
              question: "What is the typical space complexity of a Two Pointer solution?",
              options: [
                { id: "a", text: "O(n)", isCorrect: false },
                { id: "b", text: "O(log n)", isCorrect: false },
                { id: "c", text: "O(1)", isCorrect: true },
                { id: "d", text: "O(n^2)", isCorrect: false }
              ],
              explanation: "Two pointers usually operate in-place using only a few variables for the pointers themselves, resulting in constant O(1) space complexity."
            }
          ]
        }
      ]
    },
  ]
};

// Helper functions
export function getAllTopics(): Topic[] {
  return pythonCourse.modules.flatMap(module => 
    module.topics.map((topic, index) => ({
      ...topic,
      // Renumber topics sequentially across all modules
      number: pythonCourse.modules
        .slice(0, pythonCourse.modules.indexOf(module))
        .reduce((sum, m) => sum + m.topics.length, 0) + index + 1
    }))
  );
}

export function getTopicById(topicId: string): Topic | undefined {
  for (const module of pythonCourse.modules) {
    const topic = module.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return undefined;
}

export function getModuleByTopicId(topicId: string): Module | undefined {
  return pythonCourse.modules.find(module => 
    module.topics.some(topic => topic.id === topicId)
  );
}

export function getNextTopic(currentTopicId: string): Topic | undefined {
  const allTopics = getAllTopics();
  const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
  if (currentIndex !== -1 && currentIndex < allTopics.length - 1) {
    return allTopics[currentIndex + 1];
  }
  return undefined;
}

export function getPreviousTopic(currentTopicId: string): Topic | undefined {
  const allTopics = getAllTopics();
  const currentIndex = allTopics.findIndex(t => t.id === currentTopicId);
  if (currentIndex > 0) {
    return allTopics[currentIndex - 1];
  }
  return undefined;
}

export function getCourseProgress(completedTopicIds: string[]): number {
  const allTopics = getAllTopics();
  return Math.round((completedTopicIds.length / allTopics.length) * 100);
}
