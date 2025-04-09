---
title: Introduction to Python
author: neplod
altImage: Python code fragment.
description: Learn the budding Python programming language from scratch, step by step.
date: 2023-11-15
tags:
    - Python
    - Course
---

# Introduction to Python

## What is Python?

Python is a programming language that is simple, has clear syntax, and no strict typing—meaning you don’t have to define the type of variables you’re using. It’s commonly used in areas like web development, data analysis, and most popularly, artificial intelligence.

## Installation

Although there are several Python editors, the easiest one to use is PyCharm or Python IDE. Even though it has a paid license, for this tutorial, the free version will work just fine.

URL: https://www.jetbrains.com/pycharm

## Basic Functions

### Print

The `print()` function is the first one to learn because it’s the easiest to use and understand. Its job is to write to the console whatever you tell it to.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-1.webp)

In this case, we’re writing the phrase *Hello World* to the console. Quotation marks are necessary to tell Python that “Hello World” is a string, not something else—we’ll talk more about that later. Try writing your own phrase.

### Variables

In Python, we need to store data, whether it’s a number, a boolean, a string... and for that, we use variables.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-2.webp)

In this example, we’ve created two variables: **MyVariable** and **MySecondVariable**, and we’ve given them the values “Hello” and “Goodbye”. A variable name can’t contain spaces or be only a number; for example, we can’t name a variable **A B** or **35**. In these cases, we could use **A_B** and **Var35**.

Variables can be edited at any time, but how do we get their value? Using the `print()` function, we can display the content of any variable in the console.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-3.webp)

That program will display the phrase *My name is:* followed by the value of the **Name** variable, which in this case is “Pepito”.

### Input

If we want the user to input a value into our Python program, we can use the `input()` function. This allows the user to enter data through the console.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-4.webp)

This program asks the user *What is your name?* and then prints *Hello* followed by the value stored in the **Name** variable.

### Math

So far, we've only used strings (text), now let’s use numbers. Numeric values are written without quotation marks, and we can operate on them. Basic operations are: Addition `+`, Subtraction `-`, Multiplication `*`, Division `/`.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-5.webp)

There are also more operations: Remainder `%`, Exponents and Roots `**`, Rounding a number `round()`...

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-6.webp)

### Conditionals

If we want to check whether a variable is equal to, greater than, less than, etc., we can use conditional statements: `if`, `else`, `elif`. They are easy to use: just write `if condition: your code`. If the condition is true, the code runs. They can be grouped in chains: first an `if`, then one or more `elif`, and a final `else`. The `elif` acts like a regular `if`, and the `else` runs only if none of the previous conditions are met. Once a condition is met, the rest of the chain is skipped.

Conditions evaluate to a boolean value **(True || False)** and are made like *Value 1 `(== != > < >= <=)` Value 2*. You can also chain conditions using OR `or` and AND `and`.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-7.webp)

### Lists

**Lists** are collections of variables of any type. They are defined like a variable, but their value looks like *[A, B, “Juan”, 22]*. If we want to access the value at index **X** in a list, we write the list’s name followed by [**X**]. Counting starts at 0: in the list *[1,3,4,5]*, item [0] is 1, item [2] is 4. To get the last element, use [-1]. To get the length of a list, use the `len()` function.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-8.webp)

You can modify any element with *list[x] = V*, add new elements with `append()`, insert with `insert()`, remove an element using `pop()`, or find the position of an element with `index()`.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-9.webp)

### Loops

Loops allow you to repeat a block of code multiple times. Let’s look at two types:

#### For

The `for` loop is used when you know in advance how many times the code should repeat, or when looping through a list. You can use the `range()` function to create a list of numbers from x to y-1.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-10.webp)

#### While

The `while` loop is used when the number of repetitions is unknown and you want to repeat the code while a condition is true. Using `while True` creates an infinite loop.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-11.webp)

### Convert String to Integer and Vice Versa

You can convert a **String** to an **Integer** using the `int()` function. You can convert an **Integer** to a **String** using the `str()` function.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-12.webp)

### Try Except

These are used to handle exceptions or errors during code execution. They allow the program to continue running even if an error occurs, instead of crashing. This is especially useful for anticipating and managing potential problems.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-13.webp)

### CHALLENGE #1

Using everything you’ve learned, try making a calculator in the console that:
- Takes 2 numbers and an operation `(+ - * /)`
- Returns a result

Solution at the end of the article.

## Introduction to Functions

In Python, a function is a reusable block of code that performs a specific task. Functions help organize your code into smaller, modular blocks, making it easier to read, understand, and maintain. By defining functions, you can call them multiple times from different parts of your program without repeating code.

You define a function using `def`, followed by the `function name`, some `parameters` (values you can pass to the function when calling it), the `code the function should run`, and a `return()`, which gives back a value from the function.

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-14.webp)

Using functions in Python promotes code reuse, readability, and organization. You can define functions to perform specific tasks and call them whenever you need in your code.

Functions can also be used for algorithms, such as the **Dijkstra algorithm**.  
**Recursion** is when a function calls itself. It’s not generally a good practice and should be avoided, but in some cases, it can be useful.

### CHALLENGE #2
Password Generator

Create a program that automatically generates passwords based on certain criteria. To do this, implement a function called `generate_password` that takes no parameters and returns a generated password.

The criteria for the password are:
- Use the Random library (look it up on Google)
- The password must be at least 10 characters long.
- It must contain at least one uppercase and one lowercase letter.
- It must include at least one number.
- It may include special characters like '@', '#', '$', '%', '&', '*'.

Solution at the end of the article.

# Libraries

Something that can help you when creating your programs are Python libraries like `Math`, `Tkinter`, `PyGame`... Search on Google for more libraries—they can be extremely useful for your projects.

# Your Turn

It’s your turn to create your own game! Try building a story or adventure in the console using Python and everything you’ve learned and will continue learning.

#### Embark on a coding adventure in Python!

# Solutions

## CHALLENGE #1

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-15.webp)

## CHALLENGE #2

![Python code snippet.](/images/contenido/iniciacion-a-python/codigo-16.webp)