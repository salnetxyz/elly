const Card = ()=>{
    return(
        <>

<article
  class="rounded-lg border border-gray-300 p-4 shadow-sm transition hover:shadow-lg sm:p-6"
>
  <span class="inline-block rounded-full bg-blue-600 p-2 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-16 w-16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  </span>

  <a href="#">
    <h3 class="mt-0.5 text-lg font-medium text-gray-900">
      Convert Any Website TO An Apk
    </h3>
  </a>

  <p class="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3">
    <span className="font-black text-neutral-700 text-lg">Rs 499</span> one time payment
  </p>

  <a
    href="#"
    class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
  >
    See Plans

    <span
      aria-hidden="true"
      class="block transition group-hover:translate-x-0.5"
    >
      &rarr;
    </span>
  </a>
</article>

        </>
    )
}

export default Card;