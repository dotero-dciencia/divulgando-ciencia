---
title: Calculator with Python
author: dario-otero
altImage: Image of code in Python.
description: Take on the challenge of creating your own calculator today using the famous Python programming language step by step.
date: 2022-10-01
tags:
    - Python
---

In this challenge, we will create a calculator using [Python](https://python.org/). The difficulty level of this challenge is **low**.

It’s important that, if you want to do the challenge, you read each task description without skipping ahead to the solution. That way, you can try to solve each part on your own.

## Creating a Calculator with Python

### Getting 2 Numbers in the Calculator

#### Task

The first step in our Python calculator will be **to collect two numbers**, which will be used for the operation we want to perform.

#### Solution

We’ll declare two variables, called ‘a’ and ‘b’. ‘a’ will store the first number and ‘b’ the second. To do this, we’ll use the ‘input’ function to get the user’s input. It will look like this:

![Python code snippet](/images/contenido/calculadora-con-python/fragmento-1.webp)

Let’s go over what each line of code does:

Declares a variable named ‘a’ which is equal to the ‘int’ (integer) value of what the user types into `input("Number 1: ")`.

Declares a variable named ‘b’ which is equal to the ‘int’ (integer) value of what the user types into `input("Number 2: ")`.

```
// Number 1: 18

// Number 2: 8
```

In this example, 18 and 8 are what the user has typed.

### Getting the Type of Operation

#### Task

The next step of the challenge is **to collect the type of operation the user wants to perform**.

#### Solution

This step is solved just like the previous one. The first thing we do is declare a variable—we’ll call it ‘op’ (short for operation), and it will store the user’s input.

![Python code snippet](/images/contenido/calculadora-con-python/fragmento-2.webp)

Let’s explain what this line of code does:

Declares a variable named ‘op’, which is equal to `input("Operation: ")`, that is, whatever the user types after the text ‘Operation’.

The output on the console would look like this:

```
// Operation: +
```

Just like before, the bold part is what the program prints, and the rest is typed by the user.

### Reading the Type of Operation

#### Task

At this point, we need to make the program recognize what the user has typed so that it knows which operation to perform.

**HINT**: We’ll be working with the operations addition (+), subtraction (-), multiplication (*), and division (/).

To complete this step, we’ll build on what we already have from the previous steps:

```python
a = int(input("Number 1: "))
b = int(input("Number 2: "))
op = input("Operation: ")
```

The goal is that after entering the two numbers and the operation, the console should output **what type of operation was entered**, as follows:

- If ‘+’ is entered, it should say: ‘You have entered an addition.’
- If ‘-’ is entered, it should say: ‘You have entered a subtraction.’
- If ‘*’ is entered, it should say: ‘You have entered a multiplication.’
- If ‘/’ is entered, it should say: ‘You have entered a division.’
- If none of these symbols is entered, it should say the entered symbol is not valid.

#### Solution

This step is a little trickier than the previous ones, as we’ll be adding if-else conditionals.

The code after this step would look like this:

![Python code snippet](/images/contenido/calculadora-con-python/fragmento-3.webp)

Let’s explain each line of code:

1. Declares a variable named ‘a’ which is equal to the ‘int’ (integer) value of what the user types into `input("Number 1: ")`.
2. Declares a variable named ‘b’ which is equal to the ‘int’ (integer) value of what the user types into `input("Number 2: ")`.
3. Declares a variable named ‘op’, equal to the input from `input("Operation: ")`.
4. Compares ‘op’ with the string ‘+’. If they match, it executes line 5; otherwise, it moves to line 6.
5. Prints ‘You have entered an addition.’ to the console.
6. Compares ‘op’ with the string ‘-’. If they match, it executes line 7; otherwise, it moves to line 8.
7. Prints ‘You have entered a subtraction.’ to the console.
8. Compares ‘op’ with the string ‘*’. If they match, it executes line 9; otherwise, it moves to line 10.
9. Prints ‘You have entered a multiplication.’ to the console.
10. Compares ‘op’ with the string ‘/’. If they match, it executes line 11; otherwise, it moves to line 12.
11. Prints ‘You have entered a division.’ to the console.
12. If none of the previous comparisons were true, it goes to line 13.
13. Prints ‘The symbol you have entered is not valid.’ to the console.

This would be the console output so far:

```
// Number 1: 18

// Number 2: 8

// Operation: +

You have entered an addition.
```

### Performing the Operations

#### Task

With the first three steps done, the user has entered the numbers and the operator, and the program, thanks to conditionals, has recognized the chosen operation.

The next step is **to perform the operation based on the entered numbers and operator**.

**HINT**: Conditionals will help here.

#### Solution

If the previous code is working properly, this will be a piece of cake. All we need to do is perform the correct operation within each conditional, like so:

![Python code snippet](/images/contenido/calculadora-con-python/fragmento-4.webp)

Let’s look at what each line does:

1. Declares a variable ‘a’ as the integer from `input("Number 1: ")`.
2. Declares a variable ‘b’ as the integer from `input("Number 2: ")`.
3. Declares a variable ‘op’ as the string from `input("Operation: ")`.
4. If ‘op’ equals ‘+’, it executes line 5; otherwise, goes to line 6.
5. Prints the result of `a + b`.
6. If ‘op’ equals ‘-’, it executes line 7; otherwise, goes to line 8.
7. Prints the result of `a - b`.
8. If ‘op’ equals ‘*’, it executes line 9; otherwise, goes to line 10.
9. Prints the result of `a * b`.
10. If ‘op’ equals ‘/’, it executes line 11; otherwise, goes to line 12.
11. Prints the result of `a / b`.
12. If none of the above conditions are true, it goes to line 13.
13. Prints ‘The symbol you have entered is not valid.’ to the console.

Here is what the console output could look like:

```
// Number 1: 18

// Number 2: 8

// Operation: +

26
```

Or another possible output:

```
// Number 1: 2

// Number 2: 50

// Operation: p

The symbol you have entered is not valid.
```

## Final Thoughts on the Python Calculator

With this final step, the challenge is complete. We now have a working calculator in Python that performs one of four operations (+, -, *, /) on two numbers.

Due to the low difficulty of this challenge, we didn’t expand the program further, but it could be enhanced to **repeat the process as many times as desired**, to **accept more than two numbers**, or to **include powers**, and more.