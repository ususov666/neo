<template>
  <div class="w-3/4 ml-64">
    <span class="ml-5 text-gray-400">Наушники</span>
    <div class="grid grid-cols-3 gap-5 mt-5 ml-5 mb-5">
      <Card
        v-for="product in filteredProducts1"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :imgUrl="product.imgUrl"
        :star="product.star"
        @addToCart="addToCart"
      />
      <Card
        v-for="product in filteredProducts1"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :imgUrl="product.imgUrl"
        :star="product.star"
        @addToCart="addToCart"
      />
    </div>
    <span class="ml-5 text-gray-400">Беспроводные наушники</span>
    <div class="grid grid-cols-3 gap-5 mt-5 ml-5">
      <Card
        v-for="product in filteredProducts2"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :price="product.price"
        :imgUrl="product.imgUrl"
        :star="product.star"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Card from "@/components/Card.vue";
////// товары
const data = [
  {
    title: "Apple BYZ S852l",
    price: 2927,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/087e/6171/64aabe57a3e7a6204314e43f1b2e93f0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJibWRBStfe838v00~~B~7SkJHZdIqorssdE75YXrRV5CPoNb1Nywbp73idx8Si~jGzwEpuXTXq5emH~FnmY~r8ref-DL-3B9tGf4clvBYZ2Zki8pquRYKLFHx~9Jx10jGP9BMlq4uDoqe4O52E8Hq-V1jvCTZ7X8Em3G9FPbvop6Zx891za9tBIwM3WYeUV6TYfycYOQGtIUzSOW3ejA5OKMYvguY1FE2ZhvRVrZ34ObJrIgOXgwwTQiM5nasBIwJYaIm51y8GupSj0vGoiKmwlKz-46alZ0VS2OwFZMuPfyqNi2K2VLEpFAJzrkbz2QqIge2~97LpcCqK3w0XkaA__",
    id: 1,
    star: 4.7,
  },
  {
    title: "Apple EarPods",
    price: 2327,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4c94/c058/dad214a07e3fe8bba69fdc64c01da9be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4QIiIHbr1pcg6kHU8gXlwlzdqS84-rROk16X1bWr8ojmYtuIC0j~OCkATfhuxaw-NalP0dmglpRcy1iDxc5FNj0bhj~t8Ju1UdtMvQhm2fFVIbqHW2w3R~6gNhudbVLXfnc1kalrqE6WOBuPIUVXhf~rHftvozeM6CpIOra-cjLLR4xNUV15mjDojMV~KX7CJinGZN6um8fg2brwPP8c3bSmtU8pG3Vc3fNJwVto3-VfcBZ4O0DE5Eg7iUntii-IXZMDzlwKyjvoC2qVwyqpEjuzGs1qb0OvA15toRFH9tp1zlbKxNdkCZGlWUanlfF81GmXbHkAnf2I4ezrc2q8w__",
    id: 2,
    star: 4.5,
  },
  {
    title: "Apple EarPods",
    price: 2327,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/9a61/d3e6/ebf088b546e3cb83d0fef126b458d80f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YyE2AQvuGOg~xLH-HkQj~8MT2Cs2IOqXjpwhL2y1hMBT0JnnmhhxMedWDbTVT0H1AbBWaZYrOzVlhucj85S6kSvdWCeTH0giYkDnKlYQgxD9rMHF~wWbwKaJ~clrLJ1RbFR17zWpXuP7PY4LMoRuR0kv9Q9UoWNU3eGaPtyIfftECiY-cGCkjdCSeBIbYBssbV~gdokUdaNIuEThVGeB0KozbdKUqDEdjHcGlb6W8AxXtz8rpoW4pjO0cdvhmUzziHMYCEg0VC3OHyYm7KA0M7L0a7qwe-zNh1x2m4DU1-kXThFVL18~5p1PLDujrsWsm4NO96m3V6C5pODp4VVZ4w__",
    id: 3,
    star: 4.5,
  },
  {
    title: "Apple AirPods",
    price: 9527,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/79e9/6576/3612c82723783fd36de4be8792b410c8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOMuh3BA-AQQBhDo1vaI9jhJV2Cio8CiIky0die33rKIgTvcqmlLhYEDvjdGMaFEsksjmMsVah6fOgWg-gqwiw62wj3rBoswVHAYfM7Mo2i1wRZFD5RaDJgeDPbyrY3hHr-VrFxEalDGMRDPo2wyTPMRK7zasGKX1pm3gF9HMznOaK318wmaQ89ZEUAJk5ioYEAR7SmyEms~bl9RJ34d-VcxWMN0wp9Q8ARKoBsP~ZdXJAkyveUWcKON1h4eJuQ54zeHoT24HSGIDPMMqUoTPKGCM26ZRDmih7tWC6M2QPH1OGj3X0mjjJsdRvj~mdDVlH-kYgnD5MSHG3di5gQrGg__",
    id: 4,
    star: 4.7,
  },
  {
    title: "Apple GERLAX GH-04",
    price: 6527,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/8856/1fad/de8774bba5aeb1888e3a4bb69a5d9d6b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLZ6CBl3dfL94-HFmyrvsqhGVF7FhccRBWUn~lYevG6BzgTc7SzPy8G4MphzdnWovpsFN6EbwD9f04XoMyWaV~nUfUDgSe7Jnqo85ODcRt1VRF42TDZ39Z6uww0f2a23ch4jFltkInO~Q93HZI3vgbZK2yiC0g8u979b93LuNusvhgb6C1a8rtS6cUzNrYnM6Sya4q9YuFQEcdgK~OC66lptYleRRUy0ZSrpb4Gmqo2sEzJweTYUma9WvHENVz-~6giYoUqyXRtTm5i6GXSTV0IonExBP9i9FCm9c8fEr6e4JFvEsp7HyCQWaqM-rKwiNdBKTGFtyzrqNYqm3QKNag__",
    id: 5,
    star: 4.7,
  },
  {
    title: "BOROFONE BO4",
    price: 7527,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/6e2a/127e/65528ef2ba5eb346ae0e4abe50fa02ee?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdpEuP1DbJhOR3FoIIqaQc2a2zESd9o3aiHHbVlILmfoLhwsr~P3TrFSpCv9dS6LL3eQrcALdQXaULFC1t087F5pgsRtizza5sKRX944~n7-~U2BKuD7~SLmNmLJK3DJkpzynAbIBeusj9GIgPAC7mgeMikgxgD4FdZBL-fHnJK-y7CUPuydlGbtq~9sCsipQn3YjsHItPl4LiPmDx8O3j7kwX~~9~P59GcpXiBha-LZZTAa25ori1bZB--Fzw5pOzPZGXiq6OyMTMF-oW62nAenISu1K1SZEujmKvCslsmhn9N67vUWrCWIflkO3cnw1G7a5WwNdcKd3r-x4UEIDg__",
    id: 6,
    star: 4.7,
  },
];

const filteredProducts1 = computed(() => {
  return data.filter((product) => product.id <= 3);
});

const filteredProducts2 = computed(() => {
  return data.filter((product) => product.id >= 4);
});
/////////////
</script>
