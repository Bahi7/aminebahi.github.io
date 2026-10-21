---
layout: page
title: TigroEXH
description: Benchmark harness for the encrypted multi-map behind TIGRO (PETS 2026). C++ client, proxy and Path ORAM server, with the latency and queue-size experiments.
img: assets/img/tigroexh.png
importance: 1
category: software
github: https://github.com/Bahi7/TigroEXH
---

TigroEXH is the experiment harness for the encrypted multi-map (EMM) behind
[TIGRO](https://petsymposium.org/popets/2026/popets-2026-0052.php), our PETS 2026 paper
on trust infrastructure for grassroots organizers. It measures what the EMM's queue-based
query processing (the *EXH* mode) costs in latency and queue size under Poisson query
arrivals, with a Path ORAM storage server as the back end.

Two clients issue keyword queries over an inverted index of _N_ keyword/document pairs with
exponentially distributed inter-arrival times of rate λ. A proxy turns each query into a
stream of fixed-size sub-tokens, real ones padded with dummies, that is served from a queue,
and a storage server answers the resulting Path ORAM accesses over TCP. The harness records
per-client latency and the number of sub-tokens waiting in the queue, for
_N_ ∈ {2¹⁰, 2¹², 2¹⁴} and λ ∈ {2, 4}, plus an asymmetric case with λ₁ = 4 and λ₂ = 2.

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/tigroexh.png" title="Mean latency per client, λ₁ = 4, λ₂ = 2" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Mean query latency per client for the asymmetric arrival rates, as database size grows.
</div>

The repository holds the C++ benchmark driver, the Asio storage server, a gRPC prototype of
the leaf/path exchange, the raw measurements and the plotting script. The EMM core
(the `LAT` client/proxy class and the Path ORAM implementation) lives in a separate module
and is not published, so the repository documents the experimental setup rather than a
build-ready system.

Code and measurements: [github.com/Bahi7/TigroEXH](https://github.com/Bahi7/TigroEXH).
