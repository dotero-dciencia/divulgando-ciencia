---
layout: "@/article-en"
titulo: Learn Arduino step by step
autor: Darío O.
fotoDelAutor: /images/autores/dario-o.webp
portada: /images/contenido/aprende-arduino-desde-cero/portada.webp
portadaAlt: Image of a hand holding an Arduino Uno board.
descripcion: Learn how to use the Arduino board from scratch with no prior knowledge by following this step-by-step guide.
ciencia: technology
fechaMostrar: 16 January, 2022
fechaOrdenar: Jan 16, 2022
duracion: 8 
url: /en/learn-arduino-step-by-step
x: https://x.com/tecnomagia_es
instagram: https://instagram.com/tecnomagia_es
github: https://github.com/dotero-dev
rrss: x instagram github
---

## Introduction

In this guide, we will discuss the basic knowledge of Arduino, as the name suggests, focusing on understanding the board's functionality rather than its programming. Therefore, there is no need to install any programs.

To follow this guide, you need the following components:

- Arduino board: it can be Elegoo. Arduino can be edited by anyone, so there are many cheaper copies of the original Arduino. The difference lies in their durability, but the functionality will be the same.
- Breadboard (protoboard).
- Button.
- Potentiometer.
- LED.
- Two resistors.

You can purchase these items from any major online store.

Throughout this guide, we will use Tinkercad for graphical representations, depicting cables connected to 5V in red, cables connected to GND in black, and conditional cables (dependent on something for power) or connected to a pin (analog or digital) in blue.

In Arduino, there are three types of cables: male-male, female-male, and female-female. A "male" connection refers to the left-side connection, while a "female" connection refers to the right-side connection, allowing a male-type cable to be inserted into a female-type cable.

![Image showing male and female connections of Arduino cables.](/images/contenido/aprende-arduino-desde-cero/cables-macho-hembra.webp)
*Image from [murkyrobot.com](murkyrobot.com)*

## Pins, Types, and Functions

Any Arduino board has 6 analog pins (ANALOG) and 14 digital pins (DIGITAL) in total.

![Image of the Arduino board in Tinkercad](/images/contenido/aprende-arduino-desde-cero/placa-arduino.webp)

Analog pins provide numerical outputs from 0 to 1023, while digital pins provide boolean outputs: true or false, 1 or 0, HIGH or LOW...

![Image of the Arduino board in Tinkercad showing the 5 digital pins on the board.](/images/contenido/aprende-arduino-desde-cero/pines-digitales.webp)

In this image, we can observe the digital pins, located above "DIGITAL (PWM)," ranging from 0 to 13.

![Image of the Arduino board in Tinkercad showing the 5 analog pins on the board.](/images/contenido/aprende-arduino-desde-cero/pines-analogicos.webp)

We can also see the analog pins below "ANALOG IN," ranging from A0 to A5.

![Image of the Arduino board in Tinkercad showing voltage and ground pins.](/images/contenido/aprende-arduino-desde-cero/power.webp)

Finally, we can see the pins below "POWER." They can provide a current of 3.3V or 5V or close a circuit at the GND pin. We will see how to connect them in the next section, electrical connections.

## Electrical Connections

Let's understand the operation of a breadboard, an essential element for Arduino practices.

![Image of the Breadboard in Tinkercad.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

We can find two rows with the - sign and two rows with the + sign, and in between them, columns connected to each other. The following image shows how the **columns are connected** to each other. This means that if we connect a cable from 5V to a point, the entire column will have 5V. This also applies to the black (-) and red (+) rows.

![Image of the Breadboard in Tinkercad showing how different columns and rows are connected.](/images/contenido/aprende-arduino-desde-cero/placa-protoboard.webp)

**Stop! Have you understood this scheme well? It's vital to continue!**

Usually, a cable is connected **from 5V to any connection on the two red rows** (+) to ensure that **the entire red row has 5V**.

Also, a cable is connected **from GND to any connection on the two black rows** (-) to ensure that **the entire black row is used to close the circuit**.

***IMPORTANT: If it is connected in one row, the connection only reaches that entire row, not the two rows of the same color.***

As mentioned earlier, their columns are also connected, so any connection in any column will supply the entire column. Thus, if you connect the LED's anode to a connection and in the same column put a cable from 5V, the LED will light up, but **BE CAREFUL**, we'll cover this in section 4. Be cautious, as you can burn out the LED and even get burned.

## Ohm's Law

To perfectly understand the operation of any electrical circuit, it is necessary to know Ohm's Law.

A circuit receives a **voltage**, measured in volts. The circuit's goal is to operate one or more components, but here's the problem: many components cannot handle such **current intensity**. For this, we use **resistance**, measured in ohms. It regulates the **output intensity** (measured in amperes) of the resistance. It could be said that the resistance acts as a **dimmer switch** or, to better understand, as a **faucet**. The faucet receives water (voltage), and depending on the faucet's opening (ohms), the outgoing intensity (amperes) of the resistance can be regulated.

![Drawing of the Ohm's Law triangle, with V at the top and I and R at the bottom.](/images/contenido/aprende-arduino-desde-cero/triangulo-ley-de-ohm.webp)

In the above triangle, **voltage refers to the input volts** of the circuit. **Resistance refers to the number of ohms** imposed on that voltage. Meanwhile, **intensity refers to the outgoing amperes** of the resistance, i.e., what will reach what we want to connect. We can calculate the different parts as follows:

- **Voltage** = Resistance · Intensity
- **Resistance** = Voltage / Intensity
- **Intensity** = Voltage / Resistance

The most interesting calculation is the resistance, as it will allow us to know how many ohms the resistance needs based on the maximum intensity required by what we want to connect.

Let's take an example. The circuit will have an **input voltage of 5V**, and we want to connect an LED with a **maximum intensity of 0.02 amperes**, which will make the LED operate at its maximum power. So we'll calculate the necessary resistance:

Knowing that resistance is equal to voltage over intensity, we perform the following calculation: **5V / 0.02A = 250 ohms.**

To connect an LED, considering that the starting voltage is 5V, a minimum resistance of 250 ohms will be required. This way, we will ensure that it shines as much as possible without burning out/exploding.

## First Practices with an LED

### Turn on an LED

To turn on an LED, we will need: the LED itself, a resistor, the Arduino board, and the breadboard.

![Circuit in Tinkercad connecting an LED to an Arduino board to turn it on.](/images/contenido/aprende-arduino-desde-cero/circuito-led-1.webp)

With this setup, we could already turn it on, but below is a detailed setup:

- A cable is connected from **5V to a connection on the red line** (+).
- A cable is connected from **GND to a connection on the black line** (-).
- An LED is connected in two different columns:
    - The column of the **anode*** has a connection to the red line, **so the LED receives power**.
    - The column of the **cathode*** has a connection to the black line, **to close the LED circuit**.
    - **IMPORTANT: one of these two connections must be with a resistor to prevent the LED from burning out.**

*The anode is the longer leg of the LED, while the cathode is the shorter leg of the LED.

### Turn on the LED by touching a button

To turn on an LED by touching a button, we will need: the LED itself, a resistor, the button itself, the Arduino board, and the breadboard.

![Circuit in Tinkercad connecting an LED to an Arduino board to turn it on by touching a button.](/images/contenido/aprende-arduino-desde-cero/circuito-led-2.webp)

With this setup, we could already turn it on, but below is a detailed setup:

- A cable is connected from **5V to a connection on the red line** (+).
- A cable is connected from **GND to a connection on the black line** (-).
- A button is connected by:
    - In the column of one of its legs, by a **resistor to the red line** (+), which delivers power to the button.
    - In the column of the other leg, by a **cable to the LED anode** we want to turn on. This cable carries the output current from the button.
- The LED is connected by:
    - In the anode column, by a **cable from the button** that will turn it on when we touch the button.
    - In the cathode column, by a **cable** connected to a **resistor connected to the black line** (-) to close the circuit.

### Adjust the LED with a potentiometer

A potentiometer is like a faucet because depending on its tilt, it will allow more or less voltage to pass through. This is explained in Ohm's Law (section 3).

![Circuit in Tinkercad connecting an LED to an Arduino board to turn it on according to the intensity set by the potentiometer.](/images/contenido/aprende-arduino-desde-cero/circuito-led-3.webp)

To adjust the power of an LED with a potentiometer, we will need: the LED itself, the potentiometer itself, a resistor, the Arduino board, and the breadboard.

With this setup, we could already turn it on and adjust it, but below is a detailed setup:

- A cable is connected from **5V to a connection on the red line** (+).
- A cable is connected from **GND to a connection on the black line** (-).
- A potentiometer is connected by:
    - In the **center column** by a **cable that will connect to the LED anode column** we want to turn on.
    - In one of the two **side columns** by a **cable connected from the red line** (+) to deliver current to the potentiometer.
    - In the other **side column** by a **cable connected from the black line** (-) to close the circuit.
- The LED is connected by:
    - The anode column **is connected to the potentiometer output**.
    - The cathode column has a **cable** connected to a **resistor connected to the black line** (-) to close the circuit.

## Components, What Can You Do?

The beauty of Arduino is that it has an immense variety of components, as well as possible utilities and programs.

There is a wide range of projects you can do with Arduino, from games to home automation. In [this link, you can see 46 projects you can do](https://www.xataka.com/makers/46-proyectos-makers-para-hacer-verano-arduino-raspberry-pi).

If you want to know more about these components, stay tuned for section 6 of this guide, where we explain where you can learn more.

## Where to Learn More? Reference Websites

This guide has been a small **introduction to the world of Arduino and the world of electricity**, but if you liked it, you can explore further.

There is a highly recommended website for learning Arduino and handling some components, which is Luis Llamas' website in the Arduino tutorials section: [https://www.luisllamas.es/tutoriales-de-arduino/](https://www.luisllamas.es/tutoriales-de-arduino/).
