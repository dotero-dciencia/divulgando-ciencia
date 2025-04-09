---
title: Learn Arduino from scratch
author: dario-otero
altImage: Image of a hand holding an Arduino Uno board.
description: Learn how to use the Arduino board from scratch without any prior knowledge by following this step-by-step guide.
date: 2022-01-16
tags:
    - Arduino
    - Course
---

## Introduction

In this guide, we’ll cover the basics of Arduino, as the title suggests, focusing on understanding how the board works—not how to program it. Therefore, you won’t need to install any software.

To follow this guide properly, you’ll need the following components:

- Arduino board: it can be an Elegoo board. Arduino is open-source, so many cheaper clones of the original exist. The main difference is their durability, but they function the same.
- Breadboard (testing board).
- Push button.
- Potentiometer.
- LED.
- Two resistors.

You can purchase these from any major online store.

Throughout this guide, we’ll use **Tinkercad** for circuit diagrams. Wires connected to **5V** will be **red**, wires connected to **GND** will be **black**, and **conditional wires** (those depending on input/output or connected to a pin, analog or digital) will be **blue**.

With Arduino, we use three types of jumper wires: male-to-male, female-to-male, and female-to-female. A **“male” connection** refers to the left side (a pin), while a **“female” connection** refers to the right side (a socket). A male wire can be inserted into a female one.

![Image showing male and female connections of Arduino wires.](/images/contenido/aprende-arduino-desde-cero/cables-macho-hembra.webp)  
*Image from [murkyrobot.com](murkyrobot.com)*

---

## Pins: Types and Functions

Every Arduino board has **6 analog pins** and **14 digital pins**.

![Image of the Arduino board in Tinkercad](/images/contenido/aprende-arduino-desde-cero/placa-arduino.webp)

**Analog pins** output numeric values from 0 to 1023, while **digital pins** provide boolean values: `true` or `false`, `1` or `0`, `HIGH` or `LOW`.

![Tinkercad image showing the digital pins of the board.](/images/contenido/aprende-arduino-desde-cero/pines-digitales.webp)

In this image, we can see the digital pins labeled “DIGITAL (PWM),” numbered from 0 to 13.

![Tinkercad image showing the analog pins of the board.](/images/contenido/aprende-arduino-desde-cero/pines-analogicos.webp)

Below “ANALOG IN,” we find the analog pins: A0 through A5.

![Tinkercad image showing the power and ground pins.](/images/contenido/aprende-arduino-desde-cero/power.webp)

Finally, below “POWER,” we find pins that provide 3.3V or 5V or can close a circuit through GND. We’ll cover how to use these in the next section on electrical connections.

---

## Electrical Connections

Let’s understand how a **breadboard** works—an essential tool for Arduino projects.

![Tinkercad image of the breadboard.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

You’ll see two rows marked **–** and two marked **+**, with columns in the middle connected vertically. The image below shows how **columns are internally connected**: if you connect 5V to one hole, the entire vertical column will have 5V. This also applies to the red (+) and black (–) rows.

![Image of breadboard showing how columns and rows are connected.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

**Stop! Did you understand this diagram? It’s vital before continuing!**

Typically:
- A wire goes from **5V to one of the red (+) rows** to make the entire row carry 5V.
- A wire goes from **GND to one of the black (–) rows** to make the row act as ground.

**IMPORTANT: connections only apply to the specific row they're placed on—not both red rows, for example.**

As mentioned before, columns are also internally connected, so if you connect a wire from 5V and place an LED anode in the same column, it will light up—**BUT BE CAREFUL**, we’ll explain how to do it safely in section 4. Otherwise, you could **burn the LED or even hurt yourself**.

---

## Ohm’s Law

To understand how any circuit works, we must understand **Ohm’s Law**.

A circuit receives **voltage**, measured in volts. Components may not be able to handle high **current**, which is why we use **resistance**, measured in ohms. Resistance regulates the **output current** (in amperes). Think of resistance as a **faucet**: voltage is the water coming in, and the resistance (the faucet’s opening) determines how much water (current) flows out.

![Triangle diagram of Ohm’s Law with V on top, I and R on the bottom.](/images/contenido/aprende-arduino-desde-cero/triangulo-ley-de-ohm.webp)

In this triangle:
- **V** is voltage (volts).
- **R** is resistance (ohms).
- **I** is current (amperes).

The formulas are:
- **Voltage** = Resistance × Current
- **Resistance** = Voltage ÷ Current
- **Current** = Voltage ÷ Resistance

The most useful formula is for resistance. For example:

Let’s say the circuit runs at **5V**, and you want to connect an LED with a **maximum current of 0.02A**. We calculate the resistance needed:

**5V ÷ 0.02A = 250 ohms**

So, to power the LED at full brightness safely, use a **250-ohm resistor**. This way, the LED won’t burn out or explode.

---

## First LED Experiments

### Lighting up an LED

To light up an LED, you’ll need: the **LED**, a **resistor**, the **Arduino board**, and a **breadboard**.

![Tinkercad circuit showing how to light up an LED.](/images/contenido/aprende-arduino-desde-cero/circuito-led-1.webp)

Here’s a breakdown of the setup:
- Wire from **5V to the red (+) rail**.
- Wire from **GND to the black (–) rail**.
- LED connected across two columns:
    - The **anode column** (longer leg) is connected to the red rail for power.
    - The **cathode column** (shorter leg) is connected to the black rail to complete the circuit.
    - **IMPORTANT: One of these connections must include a resistor to avoid burning the LED.**

---

### Lighting the LED with a Button

To light an LED with a button, you’ll need: an **LED**, a **resistor**, a **button**, an **Arduino**, and a **breadboard**.

![Tinkercad circuit showing how to light an LED with a button.](/images/contenido/aprende-arduino-desde-cero/circuito-led-2.webp)

Here’s a breakdown:
- Wire from **5V to the red (+) rail**.
- Wire from **GND to the black (–) rail**.
- Button:
    - One leg connected through a **resistor to the red rail** (power to the button).
    - The opposite leg connected to a **wire going to the LED anode** (sends current to the LED when pressed).
- LED:
    - **Anode** receives current from the button.
    - **Cathode** connected via wire to the black rail (to close the circuit).

---

### Dimming an LED with a Potentiometer

A potentiometer works like a faucet—depending on how it’s turned, it allows **more or less voltage** through. Refer to Ohm’s Law in section 3 for context.

![Tinkercad circuit showing LED dimming with a potentiometer.](/images/contenido/aprende-arduino-desde-cero/circuito-led-3.webp)

To dim an LED with a potentiometer, you’ll need: the **LED**, **potentiometer**, a **resistor**, an **Arduino**, and a **breadboard**.

Setup breakdown:
- Wire from **5V to red rail**, and from **GND to black rail**.
- Potentiometer:
    - **Middle pin** connects to a column that goes to the LED’s **anode**.
    - One **outer pin** connects to the red rail.
    - The other **outer pin** connects to the black rail.
- LED:
    - **Anode** receives signal from the potentiometer.
    - **Cathode** goes through a resistor to the black rail (to close the circuit).

---

## Components: What Can You Do?

One of Arduino’s strengths is the **vast number of components and project possibilities**.

From games to home automation, there are countless Arduino projects. Check out **[this list of 46 maker projects](https://www.xataka.com/makers/46-proyectos-makers-para-hacer-verano-arduino-raspberry-pi)** for inspiration.

Want to explore more components? Keep an eye on **section 6**, where we cover where to learn more.

---

## Where to Learn More: Reference Websites

This guide is a **brief introduction to Arduino and electricity**, but if you enjoyed it, there’s a lot more to explore.

A great website to learn about Arduino and its components is Luis Llamas’s Arduino tutorial section:  
🔗 [https://www.luisllamas.es/tutoriales-de-arduino/](https://www.luisllamas.es/tutoriales-de-arduino/)