---
layout: page
title: Structured Encryption Scheme Design
description: Research direction in searchable/structured encryption and efficient scheme design.
img: /assets/img/ste_emm_architecture.jpeg
importance: 1
category: research
published: false
---
This project page summarizes my ongoing PhD research in applied cryptography, focused on **structured encryption (STE)**, **encrypted multi-maps**, and **volume-hiding** systems.

Current work includes:

* **Implementing and benchmarking volume-hiding STE/EMM constructions**, including the computational volume-hiding line initiated by **Kamara & Moataz (Eurocrypt 2019)**. ([ACM Digital Library][1])
* **Implementing VH-EMM variants based on hashing techniques (incl. cuckoo hashing)** and evaluating their real-world efficiency/engineering tradeoffs, following later dynamic volume-hiding EMM work (e.g., Amjad et al.). ([ePrint Archive][2])
* **Subliminal EXH (my work):** designing and implementing a queueing-theory–inspired mechanism to mitigate volume leakage under realistic query patterns.
* **Multi-server volume-hiding settings:** studying distributed threat models, identifying an **impossibility result** under the volume-hiding definition we use, and proposing alternative construction ideas. This work is part of an ongoing submission tentatively titled *On the Cost of Volume Hiding Schemes*.

As publications and artifacts mature, this page can be expanded with implementation notes, benchmarks, and reproducible evaluation results.

