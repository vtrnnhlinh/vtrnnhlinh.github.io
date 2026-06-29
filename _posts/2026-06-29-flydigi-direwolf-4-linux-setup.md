---
layout: post
title: Setup Flydigi Direwolf 4 on archlinux
date: 2026-06-29 14:15:00 +0700
categories: Linh-the-Engineer
tags: hobbies gaming english # TAG names should always be lowercase
giscus_comments: true
toc:
   sidebar: right
---
So, despite having the PS5 Controller, I still buy one more controller, mainly because it's Yoimiya collaboration!

{% include figure.liquid loading="eager" path="assets/img/my_controllers.jpg" class="img-fluid rounded z-depth-1" %}
My two controllers!

So there are problems with my new controller. It's a Flydigi Direwolf 4, it doesn't have official firmware support for linux, I was struggling hard to connect bluetooth, and android app is pure useless!!

In this post I will share about how to tame this stubborn controller on archlinux.

## 1. Connect via Bluetooth

1. Toggle into Bluetooth mode (the toggle at the back of the controller)
2. Choose XInput mode by holding Right button (D-pad) + Function (symbol O) button until the light turns white and blink fastly
3. If the light doesn't blink fastly, hold Power button until it blinks fastly into pairing mode
4. Connect it with command lines:
```bash
bluetoothctl
scan on
pair <MAC number of the controller>
trust <MAC number of the controller>
connect <MAC number of the controller>
```
5. Plug in and plug off, then voila~

## 2. Use M1/M2 Buttons

1. Toggle to Receiver/Cable Mode - Note that, we will use DInput mode to use M1/M2 button, and we need to use 2.4G Receiver or Cable for this
2. Switch to DInput mode by holding Left button (D-pad) + Function (symbol O) button until the light turns blue and blink fastly
3. If the light turns off, press Power button again
4. Config the button through `antimicrox` or **Steam Input**

---

It took me three days to learn this lesson, if you find it useful, please leave a reaction below 😝
