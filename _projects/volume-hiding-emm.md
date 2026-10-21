---
layout: page
title: Volume-hiding EMMs
description: Java implementations of five volume-hiding encrypted multi-map constructions (PRT, VLH, DST, AVLH, vhMM) on top of the Clusion library, with the test drivers and sample data behind the evaluation.
img: assets/img/volume_hiding_emm.png
importance: 3
category: software
github: https://github.com/Bahi7/volume-hiding-emm
---

A multi-map associates each label with a tuple of values; an encrypted multi-map (EMM)
lets a client outsource it and later retrieve a tuple with a token. Most practical EMMs,
including the two-level scheme in the [Clusion](https://github.com/encryptedsystems/Clusion)
library, reveal the *volume* of every query, the length of the tuple returned, and volume
leakage alone is enough for reconstruction attacks. Padding every tuple to the maximum
volume removes the leakage at a storage cost of `m·t` for `m` labels and maximum volume
`t`. The constructions here hide volumes at a fraction of that cost, each with its own
trade-off between storage, query cost, information loss and what is still leaked.

<div class="row justify-content-center">
  <div class="col-sm-9 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/volume_hiding_emm.png" title="Five volume-hiding constructions on one encrypted-dictionary base" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  PRT, VLH, AVLH and DST follow Kamara and Moataz (EUROCRYPT 2019); vhMM follows Patel, Persiano, Yeo and Yung (CCS 2019). All run on Clusion's response-hiding 2Lev EMM.
</div>

| Class | Construction | Role |
| --- | --- | --- |
| `PRT` | pseudo-random transform | pads or truncates every tuple to a pseudo-random length |
| `VLH` | volume-hiding EMM | PRT composed with Clusion's response-hiding 2Lev EMM |
| `DST` | densest subgraph transform | spreads tuples over bins and stores the densest shared component once |
| `AVLH` | almost volume-hiding EMM | DST composed with the 2Lev EMM; every query reads the same number of bins |
| `vhMM` | volume-hiding multi-map via hashing | cuckoo hashing with a stash over two encrypted tables |

The code was written in a fork of Clusion between 2020 and 2022 and is published here with
its history and the subset of Clusion it needs to compile (Maven, Java 17), together with
the test drivers, a small Enron sample for them, and the performance runs behind the
evaluation. Implementation notes in the repository say what each class does, where the
constructions deviate from the papers, and which bugs were fixed when the code was
extracted.

Code and notes: [github.com/Bahi7/volume-hiding-emm](https://github.com/Bahi7/volume-hiding-emm).
