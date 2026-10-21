---
layout: page
title: VTH
description: A volume-hiding encrypted multi-map driven by a proxy queue over a Path ORAM dictionary. C++ prototype (2023) and the Visual Studio evaluation harness (2024), with the queue-length and latency measurements.
img: assets/img/vth_emm.png
importance: 2
category: software
github: https://github.com/Bahi7/vth-emm
---

VTH is an encrypted multi-map whose leakage is controlled by *when* the server is
accessed rather than by padding *how much* is accessed. A standard encrypted multi-map
answers a query for a label by returning all of its encrypted values at once, so the
server learns the volume of every query. VTH puts a proxy between the client and the
server: the proxy turns a query into one sub-token per value and pushes them onto a
queue, and an independent queue process pops one sub-token at a time and performs one
access to a leakage-free encrypted dictionary (an encrypted array behind a Path ORAM),
accessing a fixed dummy address whenever the queue is empty. The server sees a stream of
single ORAM accesses whose timing does not depend on the queries; what varies is the
latency the client experiences, governed by the arrival rate λ of sub-tokens and the
service rate μ of the queue, as in an M/M/1 system. The scheme is joint work with Seny
Kamara and Tarik Moataz; the paper is under submission and will be linked here once it
is public.

<div class="row justify-content-center">
  <div class="col-sm-9 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/vth_emm.png" title="VTH: clients, proxy queue and Path ORAM server" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Two clients issue keyword queries with exponential inter-arrival times; the proxy serves real and dummy sub-tokens from one queue, one Path ORAM access at a time.
</div>

The evaluation measures the per-query latency and the queue length over time and
compares them with two baselines: padding every response to the maximum response length,
and storing each tuple as one block. The repository holds the January 2024 implementation
used for the evaluation (a Visual Studio 2022 C++20 project: the proxy with its sub-token
queue and queue process, the client side of a non-recursive Path ORAM over TCP, the ORAM
tree and storage server, and the plotting scripts), the first prototype from late 2023
over raw sockets, and a simpy simulation of the proxy queue as an M/M/1 and M^X/M/1
system fed with the response-length distribution of a real multi-map.

Code and notes: [github.com/Bahi7/vth-emm](https://github.com/Bahi7/vth-emm).
