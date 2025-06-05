---
title: Home
layout: hextra-home
---

{{< hextra/hero-container
  image="images/hp_logo.jpg"
  imageClass="hx-block hx-overflow-hidden hx-rounded-3xl"
  imageWidth="378" imageHeight="378"
>}}
<div class="hx-mt-12 hx-mb-6">
{{< hextra/hero-headline >}}
  Welcome!!
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-subtitle >}}
  A documentation containing my learning and some blogs :)
{{< /hextra/hero-subtitle >}}
</div>

{{< /hextra/hero-container >}}

<div class="hx-mt-6"></div>

{{< hextra/feature-grid cols="3">}}
  {{< hextra/feature-card
    title="Competitive coding in Java"
    subtitle="Getting started with competitive coding in Java"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[380px]"
    image="/images/comp_coding.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    icon="code"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Learning"
    subtitle="Personal project learnings"
    class="hx-aspect-auto hx:md:hx-aspect-[1.1/1] hx:max-md:hx-min-h-[380px]"
    image="/images/learning.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-90"
    icon="pencil-alt"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(212, 216, 3, 0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Gen AI"
    subtitle="Bits and pieces of interesting info"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[380px]"
    image="/images/gen_ai.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    icon="chip"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(67, 0, 224, 0.58),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="DSA Question Bank"
    subtitle="Questions practiced by me"
    icon="table"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(254, 97, 97, 0.15),hsla(0,0%,100%,0));"
  >}}
{{< /hextra/feature-grid >}}
