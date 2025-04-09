---
title: The Chess and Wheat Problem
author: dario-otero
altImage: Photograph of a chessboard.
description: Read the full article to discover the surprising story of Sessa and the king of India.
date: 2022-05-01
---

Today we’re going to solve the wheat grain problem that the inventor of chess, Sessa, asked the king of India.

The legend goes that the **creator of chess**, named **Sessa**, showed his invention to the king of India. The king was so impressed that he asked Sessa what reward he wanted for his invention. He, being very wise, told the king that he wanted **one grain of wheat for the first square**, **two grains for the second**, **four for the third**, and so on, **doubling the amount on each square** until reaching square number 64. The king agreed, but he had no idea what was coming his way.

Let’s break down the solution to this problem to its fullest.

## Quick Resolution of the Chess and Wheat Problem

It’s clear that if the amount doubles for each square, we’ll just need to **raise 2 to the power of the number of squares** to find the amount on the last square: **2^64 ≈ 18.5 trillion grains of wheat**.

As many of you may have noticed, this power means the first square doesn’t have one grain of rice, but two. Because we all know that 2^1 = 2 and not 1. But 2^0 = 1 and not 2. Thinking for a moment, we can deduce that we can raise the total number of squares (64) minus one (63) to make the first (it will be the 0th) square have one grain of wheat. Now, **2^63 = 9,223,372,036,854,775,808**.

Great, now we have the grains of wheat for square 64 (or 63 in our power). But the problem asks for the total for the last 63 squares. Quite a challenge, you might think.

Let’s think for a moment. If we start with the first few powers of 2...

- 2^0 = 1
- 2^1 = 2
- 2^2 = 4
- 2^3 = 8
- 2^4 = 16
- ...

If we add these up, we see that the sum of all the powers of 2 from exponents 0 to 4 (1 + 2 + 4 + 8 + 16) equals the next power of 2, raised by one more exponent than the largest in this group.

That is, 2^0 + 2^1 + … + 2^4 = 1 + 2 + 4 + 8 + 16 = 31. The highest exponent in this sum is 2^4, so we do 2^5 and subtract 1, and it should give us 31. Let’s try it: 2^5 – 1 = 32 – 1 = 31.

Knowing this, we can deduce that the sum of all powers of 2 from exponents 0 to 62 will be 2^63 – 1. Now, let’s calculate:

**granosTrigo = 2^63 + (2^63 – 1) = 2^63 * 2 – 1 = 9,223,372,036,854,775,808 * 2 – 1 = 18,446,744,073,709,551,616 – 1 = 18,446,744,073,709,551,615**

Thus, the total number of wheat grains the king must give to Sessa is approximately **18.5 trillion grains**.

## But How Long Does It Take for This to Grow?

In India, according to [this article](https://www.swissinfo.ch/spa/india-trigo_la-india-proh%C3%ADbe-las-exportaciones-de-trigo-por-el-alza-global-de-los-precios) from [swissinfo.ch](http://swissinfo.ch/), **107 million tons of wheat are produced annually**.

According to [this study](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJgYvw9bf6AhWMxoUKHb4CBIwQFnoECAoQAw&url=http%3A%2F%2Fwww.scielo.org.mx%2Fscielo.php%3Fscript%3Dsci_arttext%26pid%3DS2007-09342017000300517&usg=AOvVaw3VMsr8jgahEIN72f8rA2QN), **200 grains of rice weigh between 8.42g and 11.25g**. Taking the average of **9.835g**, we calculate that one ton contains approximately **20,335,000 grains**.

If we multiply this by 107 million tons:

**107,000,000 * 20,335,000 = 2.175845 * 10^15 = 2,175,845,000,000,000 grains of wheat**

Now, how long would it take India to produce 18.5 trillion grains of wheat?

To calculate it, we divide 18.5 (trillions of grains of wheat to be produced) by 0.002175845 (trillions of grains produced annually):

18.5 / 0.002175845 = **8,502 years**.

That is, if the king gave Sessa all the wheat production from India, it would take 8,502 years to fulfill his reward.

## Exponential Function of Wheat Grains

If we remember the solution to the problem from the previous post, we’ll recall that for each square, we increased the exponent of the power of 2 by one:

- Square 1: 2^0 = 1 grain
- Square 2: 2^1 = 2 grains
- Square 3: 2^2 = 4 grains
- ...

This can be described as an exponential function: f(x) = 2^x

With GeoGebra, we can represent it:

![Image of the function 2^x represented in the GeoGebra program.](/images/contenido/el-problema-del-ajedrez-y-el-trigo/2-elevado-a-x.webp)

As we can see, the function grows faster with each step, as it reflects the base of **exponential growth**, which is seen in **exponential functions** like this one.

It’s important to note this because we have two options: we can count the first square as square number 0 and in this way, for the first square, raise 2 to the power of 0 or raise 2 to x-1.

## Why Is This?

If we raise 2 to the power of 1 on the first square, 2^1 = 2 grains of wheat, and we’re supposed to have only one grain on the first square. So, either we count the first square as number 0 and the last one as number 63, or we raise to x (square number) – 1.

In the following image, we see the function **f(x) = 2^(x-1)**

![Image of the function 2^(x-1) represented in the GeoGebra program.](/images/contenido/el-problema-del-ajedrez-y-el-trigo/2-elevado-a-x-1.webp)

## Python Program

To really get the most out of this problem, let’s write a small Python program to calculate how many grains of rice there are in square x and how many grains of rice there are in total up to square x.

![Fragment of Python code](/images/contenido/el-problema-del-ajedrez-y-el-trigo/fragmento.webp)

Let’s analyze the code line by line:

1. The first line creates a variable “n” and assigns it the integer value from the response to the question “Square number:”.

2. The second line creates a variable “gr” that will store the number of grains in square n. It’s assigned the following value: 2^(n – 1). This is the same value we assigned before to our function, but in the program, we need to use ** to indicate a power.

3. The third line creates a variable “tot” which will store the total number of grains up to square n, including it. It’s assigned the following value: gr (number of grains in square n) * 2 – 1. In the other post, we explained that the sum of all values of an exponential function up to n equals that number (n) multiplied by two minus one.

4. The fourth line prints (writes) the following: for example, if we assigned 2 to n: “On square number 2, there are a total of 2 grains of wheat.” In other cases, we would wrap str() around n or gr to make them strings instead of integers, but here, since we’re not adding them, it’s unnecessary.

5. The fifth line prints (writes) the following: for example, if we assigned 2 to n: “Up to square number 2 (including it), there are a total of 3 grains of wheat.” Here, 2 is the value of n and 3 is the value of tot (total grains up to square n).
