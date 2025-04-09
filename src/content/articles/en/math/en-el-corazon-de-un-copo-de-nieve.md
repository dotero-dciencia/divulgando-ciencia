---
title: In the Heart of a Snowflake  
author: dario-otero  
altImage: Photograph of a man drinking water on the beach.  
description: Explore the surprising world of mathematics in snowflakes in this article.  
date: 2022-01-09  
---

A snowflake, as basic as it is cold and as quickly as it melts when touched, is **full of mathematics**, although it may not seem like it. Today, we will dive into the heart of a snowflake to explain the mathematics it contains, create a small Python program to automate the mathematical part, and an interactive representation in Geogebra. Let's dive into the mathematics of a snowflake!

## Mathematical Explanation of the Snowflake

A snowflake has six long arms, each of which has small sticks protruding from it. Each long arm has a length, which we will call “l”. Between each pair of small sticks, there is a separation distance, which we will call “d”. By knowing “l” and “d”, we can determine the number of small sticks in a snowflake.

There is a calculation that we could use to find the small sticks in each snowflake. It is as follows:

l/d //the number of pairs of small sticks in each long arm// * 2 //to find the total number of small sticks in each arm, we multiply the pairs by 2 to get the total// * 6 //to find the total number of small sticks in the snowflake since it has 6 long arms//

Let’s take an example:

- L (length): 5
- D (distance): 1

Now we can do the following calculation:

5/1·2·6 = 60

With these values, there will be a total of 60 small sticks in the snowflake.

## Python Program

Next, we will show the Python program that can automatically calculate the number of small sticks per long arm, the total number of small sticks, and their positions relative to each long arm.

![Fragment of Python code](/images/contenido/en-el-corazon-de-un-copo-de-nieve/fragmento.webp)

This is the explanation of the code line by line:

1. Create a list called `p`, referring to the small sticks. In it, we will write the positions of the small sticks on each long arm. **IMPORTANT: therefore, this list will have as many elements as pairs of small sticks.**

2. Create a variable called `l`, which will refer to the length of each long arm. The value will be what the user responds to the question: “Enter the length of each long arm of the snowflake:”.

3. Create a variable called `d`, which will refer to the distance between each pair of small sticks. The value will be what the user responds to the question: “Enter the distance between each pair of small sticks:”.

4. Repeat line 5 as many times as the result of the following calculation: `l/d-1`. In other words, it will repeat line 5 as many times as there are pairs of small sticks in each long arm, and we subtract one to avoid counting the last stick. To avoid confusion, we will truncate it using the `int()` function, which truncates any number.

5. Add to the list from step 1 the position of each pair of small sticks. As mentioned before, this action will repeat as many times as pairs there are. The calculation it does is `d*(i+1)`. `i` is a counter that belongs to the `for i in range()` function in line 4. This function repeats what follows (in this case, line 5) if `i` is less than the number inside the parentheses. Since `i` is part of a Python function, it updates at the end of each repetition, but also starts at 0, not 1. Therefore, we will add 1 to `i` to multiply it correctly. Otherwise, the first time would be 0 because `d·i = d·0 = 0`.

6. Create a variable called `pPalo`, which refers to the number of small sticks that fit into each long arm. The value of this variable will be the length of the `p` list * 2. Recall that the list `p` refers to the positions of each pair of small sticks on each long arm, so the length of the list will be the number of pairs in total. We just need to multiply it by 2 to get the total, not just each pair.

7. OPTIONAL PART. Repeat the program from lines 8 and 9 as many times as the result of `pPalo/2`. That is, it repeats the program as many times as there are pairs.

8. OPTIONAL PART. Apply a conditional “if” statement. In the case that the element `i` of the `p` list (the position of the pairs) is an integer, line 9 will be executed; otherwise, it will be omitted. Remember that `i` changes with each repetition, as it is part of the `for i in range()` function. **IMPORTANT: when gathering the data from the two variables as “float”, decimals are sometimes unnecessary, such as 2.0 or 1.0... they are still integers, but with decimals.**

9. OPTIONAL PART. Transform the element `i` of the `p` list (position of the pairs) into an integer without decimals to make its representation more aesthetic.

10. Print “Number of small sticks per long arm: ” followed by the number of small sticks per long arm, the variable `pPalo`.

11. Print “Positions of the small sticks on each long arm: ” followed by the positions of the small sticks on each long arm, the list `p`.

12. Print “Total number of small sticks: ” followed by the multiplication of `pPalo` (number of small sticks on each long arm) * 6 (long arms).

## Interactive Representation in Geogebra of the Snowflake

In [this Geogebra applet](https://www.geogebra.org/m/keemj7ka), you can modify the previously discussed parameters and, with them, the snowflake.

![Preview of the Geogebra applet where you can recreate your mathematical snowflake.](/images/contenido/en-el-corazon-de-un-copo-de-nieve/previsualizacion-del-copo-de-nieve-en-geogebra.webp)

## Creating the Snowflake in Geogebra

### Preparation Step

First, let’s create the variables, two sliders: one for “Length” and the other for “Distance.” I recommend a max of 10 and 5, respectively.

### Step 1

To create the snowflake, you need to start with a hexagon (a snowflake with 6 arms). One way to make the hexagon is to inscribe it in a circle. To do this, create a circle with radius `n` and center at `A`. Call one endpoint of the diameter `B` and the other `C`. Now, create a circle centered at `B` with radius `r` (the same as before) and another circle centered at `C` with radius `r` (just like the other two times).

### Step 2

After drawing these two circles, we have four intersection points between these circles on the main circle. Mark these points and hide all the circles.

### Step 3

Now create six segments based on their length. All of them will start at point `A`, and their length will be the variable “Length”. Just make sure to orient them so that they pass through the points from step 2.

### Step 4

Next, create as many circles as the maximum value of the “Length” slider. All of these will have their center at `A`, and their radius will increase progressively, meaning: the first circle will have a radius of `Distance·1`; the second, `Distance·2`... as many times as the maximum value of the “Length” slider.

### Step 5

Set the “Length” slider to its maximum and the “Distance” slider to its minimum, as this would simulate the maximum number of small sticks that can be represented. Now, we will have many intersection points between these circles and the segments from step 3. Mark all these points and hide all the circles.

### Step 6

Notice that if we decrease the “Length” slider or increase the “Distance” slider, the points that don’t fit into the segments from step 2 will automatically hide. Now, with the sliders the same as in step 5, create angles based on their width for all the points, starting from the end.

![Preview of the Geogebra applet showing snowflake sticks at 45 degrees.](/images/contenido/en-el-corazon-de-un-copo-de-nieve/palos-en-45-grados.webp)

### Step 7

Hide everything except the sticks (long and small). Hide all the points, circles, and angles. Now, we will have our final result.

![Preview of step 7.](/images/contenido/en-el-corazon-de-un-copo-de-nieve/previsualizacion-del-copo-de-nieve-en-geogebra.webp)

### Extra Step

Color your snowflake and upload it to the Geogebra web to share it. If you do so, remember to hide the “Algebra View” sidebar.

Although it may not seem like it, there’s a lot of mathematics in a small snowflake. What about you? Have you dared to create the snowflake in Geogebra?
