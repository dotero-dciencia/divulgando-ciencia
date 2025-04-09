---
title: Mathematics in a Spider Web  
author: dario-otero  
altImage: Drawing of a spider web with a spider on it.  
description: Discover the fascinating mathematical world of spider webs by reading this article.  
date: 2022-10-31  
---

Today, we will explore the mathematics in a spider web, which may seem simple at first, but once you look closely, it contains *a lot* of math.

## Introduction

In order to understand this article and follow the explanation, we will explain the parts of a spider web. A spider web can be said to be divided into two types of threads: **spiral threads** and **radial threads**. In the image, you can see which thread belongs to which type.

<img src="/images/contenido/las-matematicas-en-una-telarana/partes-de-una-telarana.webp" alt="Drawing explaining the parts of a spider web." class="bg-principal-white">

In this article, we will work with 5 variables related to spider webs, which are:

- **n_e**: Refers to the **number of spiral threads in a spider web**.
- **n_r**: Refers to the **number of radial threads in a spider web**.
- **n_j**: Refers to the **number of junctions in a spider web**.
- **l_e**: Refers to the **length of each spiral thread in a spider web**.
- **d_j**: Refers to the **distance between consecutive junctions in a spider web**, or in other words, the distance between consecutive radial threads in a spider web.

## Explanation of the Mathematics in a Spider Web

Thanks to mathematics, we can deduce one of the five variables mentioned in the introduction by knowing the others. Depending on which variable we want to deduce, more or fewer variables will be needed.

### Finding the Spiral Thread Number (n_e)

To determine the number of spiral threads in a spider web, there are two ways to do it:

1. Knowing the **number of junctions** (n_j). Then **n_e = n_j**.  
This means the number of spiral threads is equal to the number of junctions.

2. Knowing the variables **number of radial threads** (n_r), **length of radial thread** (l_r), and **distance between junctions** (d_j). Then **n_e = n_r · (l_e / d_j)**.  
Here, we are multiplying the number of radial threads by the ratio of the length of each radial thread to the distance between junctions, i.e., the number of spiral threads that come out of each radial thread. In short: radial threads multiplied by spiral threads in each radial thread.

For example, let’s try to find the variable n_e by knowing the variables n_r, l_r, and d_j:

(n_r = 5; l_r = 8; d_j = 2)  
n_e = n_r · (l_r / d_j) = 5 · (8 / 2) = 5 · 4 = 20

### Finding the Radial Thread Number (n_r)

To determine the number of radial threads in a spider web, there is only one way to do it, which is:

Knowing the variables **number of spiral threads** (n_e) or **number of junctions** (n_j), **length of radial thread** (l_r), and **distance between junctions** (d_j). Then **n_r = n_e / (l_r / d_j)**.  
Here, we are dividing the number of spiral threads by the ratio of the length of each radial thread to the distance between the junctions, i.e., the number of spiral threads coming from each radial thread. This allows us to know how many radial threads there are in the web.

For example, let’s try to find the variable n_r by knowing the variables n_e, l_r, and d_j:

(n_e = 40; l_r = 10; d_j = 5):  
n_r = n_e / (l_r / d_j) = 40 / (10 / 5) = 40 / 2 = 20

### Finding the Number of Junctions (n_j)

To determine the number of junctions in a spider web, we have two ways to do it:

1. Knowing the **number of spiral threads** (n_e). Then **n_j = n_e**.  
As mentioned earlier, the number of spiral threads is equal to the number of junctions in a spider web.

2. Knowing the variables **number of radial threads** (n_r), **length of radial thread** (l_r), and **distance between junctions** (d_j). Then **n_j = n_r · (l_e / d_j)**.  
This is the same method we used before to find the number of spiral threads because the number of junctions is the same as the number of spiral threads. So, we use the same explanation for this formula as we did in the previous section.

### Finding the Length of Each Spiral Thread (l_e)

To determine the length of each spiral thread, we need to know three variables: **number of spiral threads** (n_e) or **number of junctions** (n_j), **number of radial threads** (n_r), and **distance between junctions** (d_j). The formula to follow is: **l_e = n_e / n_r · d_j**.

We will now explain why this formula works. We divide the number of spiral threads by the number of radial threads to get the number of spiral threads in each radial thread. Then, we multiply this by the distance between junctions, which is the distance between each consecutive spiral thread starting from the same radial thread. This gives us the length of each spiral thread.

Now, let's try to find the length of a spiral thread (l_e) knowing that n_e = 66; n_r = 11; d_j = 1.

Applying the formula: **l_e = 66 / 11 · 1 = 6 · 1 = 6**

### Finding the Distance Between Junctions (d_j)

Finally, we will attempt to find the distance between junctions. To do this, we will use the following formula, using the variables **length of spiral thread** (l_e), **number of spiral threads** (n_e) or **number of junctions** (n_j), and **number of radial threads** (n_r). The formula is: **d_j = l_e / (n_e / n_r)**.

Here, we divide the length of each spiral thread by the ratio of the number of spiral threads to the number of radial threads. This tells us the distance between each junction, or the distance between each consecutive spiral thread in a radial thread.

For example, let's try to find the distance between junctions (d_j) knowing the following variables: l_e = 10; n_e = 50; n_r = 10.

Applying the formula and substituting the values for the variables: d_j = l_e / (n_e / n_r) = 10 / (50 / 10) = 10 / 5 = 2

## Conclusions

As you can see, spider webs contain a lot of mathematics within them.

Happy *Halloween*!
