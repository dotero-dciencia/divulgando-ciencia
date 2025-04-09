---
title: What is Dijkstra's Algorithm
author: dario-otero
altImage: Graph representing houses of various people and the distance between them.
description: Understanding Dijkstra's algorithm will help you find the optimal path in a graph. Today, we'll explain it step by step.
date: 2023-10-31
---

Today, we will discuss **Dijkstra's algorithm** and its uses in Graph Theory. But first, let's quickly review what a graph is.

## What is a Graph?

The simplest definition of a graph is a **set of points and lines**, and nothing more in reality. If we get more technical, we can refer to the points as nodes or vertices and the lines as edges.

Thus, we are talking about a **set of nodes connected by edges**.

Below is an example of a graph consisting of 4 nodes and 4 edges.

![Graph with 4 vertices and 4 edges](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo1.webp)

These edges can either be undirected (as in the previous example) or directed (as shown in the next example). This means that one vertex is connected to another, but not necessarily the other way around.

![Graph with 4 vertices and 4 directed edges](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo2.webp)

In this example, vertex A is connected to B, but B is not connected to A. The same is true for B and C, D and B, and D and C.

The final concept we need to remember in Graph Theory is that an edge can have a **weight**. Here’s an example of a graph with directed edges and weights.

![Graph with weights](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

## What is Dijkstra's Algorithm?

This algorithm is fundamental for finding the **optimal path between two nodes in a directed graph with weights**. In other words, it helps us determine the path between two vertices where the sum of the edge weights is as small as possible. 

For example, in the following image, the optimal path between A and B is A-C-B, as it costs only 2, whereas going from A to B directly would cost 4. This is what Dijkstra's algorithm is for — to always ensure we know the optimal path.

![Graph with weights](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

## How Does It Work?

The algorithm works by always choosing the path with the least weight and updating the weights of the edges as we progress. Let's look at an example.

![Graph with weights](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3.webp)

Using the image above, we see that from A there are two paths: one with weight 1 and another with weight 4. So, we currently have two possible paths. Which one do we choose? We select the one with the least weight, which is 1.

Now, we are at vertex C, so we update all the edge weights going out from it by adding the weight of the edge we just traversed. This means that the new weight from C to B will be 2 (1 from the C-B edge plus 1 from the A-C edge).

![Graph with weights](/images/contenido/que-es-el-algoritmo-de-dijkstra/ejemplo3_1.webp)

Now, we have two possible paths again: the path that remains from A, with weight 4, and the new path from C to B, with weight 2. We again choose the path with the least weight, which is from C to B, with weight 2.

We travel the edge and check: have we reached the destination vertex? Yes, we have.

Now, we trace the path backward. In this case, it’s easy. We went from A to C and from C to B. This is how Dijkstra’s algorithm works on a directed graph with weights.

## Problem to Apply This Algorithm

In the following graph, you see the houses of different people: María, Miriam, Javier, Mateo... and my house. You also see the weight of each edge, which represents the distance between each house.

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/portada.webp)

Given the distances between each house, answer the following questions:

1. What is the **optimal path** between my house and Eva’s house? Describe it.

2. How many **houses** do you pass through in total until you reach your destination?

3. Assuming the edge weights represent the kilometers between each house, and the distance between Nerea’s house and Mateo’s house is 4 kilometers, calculate **how much you will spend on fuel**, considering the following data: car fuel efficiency = 8 km/L; fuel price = 1.65 €/L.

### Solution to the Problem

#### Question 1

We need to apply Dijkstra's algorithm to find the optimal path between the two houses.

If we recall, the first step is to see the possible paths currently in the graph. We see that we have 2 possible paths from my house: one to Javier’s house, with weight 2, and one to Miriam’s house, with weight 3.

We choose the one with the least weight, the path to Javier’s house. We check if we’ve reached the destination vertex: have we reached Eva’s house? No, so we need to continue with the algorithm.

Once we’ve chosen the path with the least weight, we update the weights of the edges going out from this vertex, adding the weight of the edge we’ve just traversed. So now, the weight from my house to Eva’s house is 6 + 2 = 8, and from my house to María’s house is 3 + 2 = 5.

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso1.webp)

Now that we’ve updated the weights, we see the possible paths:

- From my house, there is 1 possible path: to Miriam’s house (weight 3).
- From Javier’s house, there are 2 possible paths: to María’s house (weight 5) and to Eva’s house (weight 8).

We choose the path with the least weight (to Miriam’s house, with weight 3). We check if we’ve reached our destination: no. So we continue.

We update the weights from Miriam’s vertex. The weight from Miriam’s house to Mateo’s house goes from 3 to 6, as we add the distance from my house to Miriam’s house (3 + 3).

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso2.webp)

We continue to the next step, which is evaluating the possible paths:

- From Javier’s house, there are 2 possible paths: to María’s house (weight 5) and to Eva’s house (weight 8).
- From Miriam’s house, there is 1 possible path: to Mateo’s house (weight 6).

We choose the path from Javier’s house to María’s house, as it is the path with the least weight (weight 5). We check if we’ve reached the destination: no, we’ve arrived at María’s house.

So, we continue updating the weights. From María’s house, we update the weight of the connection to Eva’s house from 2 to 7, as we add 5 (the weight we’ve just traversed).

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso3.webp)

We evaluate the different paths that are now available:

- From Javier’s house, there is 1 possible path: to Eva’s house (weight 8).
- From Miriam’s house, there is 1 possible path: to Mateo’s house (weight 6).
- From María’s house, there is 1 possible path: to Eva’s house (weight 7).

We choose the path with the least weight, from María’s house to Eva’s house, with weight 7.

We check if we’ve reached our destination, and yes, we’ve arrived at Eva’s house.

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/paso5.webp)

Now we trace the path backward. The path we followed was:

My house -> Javier’s house -> María’s house -> Eva’s house

![Graph representing the houses of various people and the distance between them.](/images/contenido/que-es-el-algoritmo-de-dijkstra/caminofinal.webp)

#### Question 2

From the previous answer, we can now respond to this. We passed through 2 houses, excluding our own and the destination.

#### Question 3

According to the algorithm, we traveled 7 kilometers.

Now, we need to know how much fuel our car would consume for those kilometers. Given that the car’s fuel efficiency is 8 km/L, the car would consume 7/8 L.

Now that we know the consumption is 7/8 L, we calculate the cost, which is 7/8 * 1.65 ≈ 1.44 €.

Thus, the answer to the third question is that we will spend 1.44 € on fuel.

Did you enjoy today’s article? Did you know about Dijkstra’s algorithm?
