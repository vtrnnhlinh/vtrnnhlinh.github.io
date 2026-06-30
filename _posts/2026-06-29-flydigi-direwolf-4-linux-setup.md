---
layout: post
title: How to Set Up the Flydigi Direwolf 4 on Arch Linux
date: 2026-06-29 14:15:00 +0700
categories: Linh-the-Engineer
tags: hobbies gaming english # TAG names should always be lowercase
giscus_comments: true
toc:
   sidebar: right
---
So, despite already owning a PS5 controller, I still bought another one, mainly because it's a Yoimiya collaboration!

{% include figure.liquid loading="eager" path="assets/img/my_controllers.jpg" class="img-fluid rounded z-depth-1" %}
My two controllers!

Unfortunately, my new controller wasn't exactly plug-and-play. It's a Flydigi Direwolf 4, Flydigi doesn't provide official Linux support, I struggled to connect it over Bluetooth, and the Android app is completely useless!!

In this post I will share about how to tame this stubborn controller on archlinux.

## 1. Connect via Bluetooth

0. Install xpadneo first: `yay -S xpadneo-dkms`
1. Toggle into Bluetooth mode (the toggle at the back of the controller)
2. Choose XInput mode by holding Right button (D-pad) + Function (symbol O) button until the light turns white and blink rapidly
3. If the light doesn't blink, hold Power button until it blinks  into pairing mode
4. Connect it with command lines:
```bash
bluetoothctl
scan on
pair <MAC number of the controller>
trust <MAC number of the controller>
connect <MAC number of the controller>
```
5. Plug in cable type C to charge, then remove to retrigger Bluetooth connecting mode, then voila~

## 2. Use M1/M2 Buttons

The extra M1/M2 buttons are only exposed in DInput mode, so XInput won't detect them.

1. Toggle to Receiver/Cable Mode - Note that, we will use DInput mode to use M1/M2 button, and we need to use 2.4G Receiver or Cable for this
2. Switch to DInput mode by holding Left button (D-pad) + Function (symbol O) button until the light turns blue and blink fastly
3. If the light turns off, press Power button again
4.  the button through `antimicrox` or **Steam Input**

## 3. Fix Bluetooth connected but no input detection

It's highly because of your recent kernel update.

1. Remove old xpadneo: `sudo dkms remove hid-xpadneo-* --all`
```bash
sudo rm -rf /usr/src/hid-xpadneo*
sudo rm -rf /usr/share/doc/xpadneo
```
2. Check `dkms` status: `dkms status`. Make sure `hid-xpadneo` is gone
3. Reinstall: `yay -S xpadneo-dkms`
4. Connect bluetooth again!

---

It took me three days to learn this lesson, if you find it useful, please leave a reaction below 😝
