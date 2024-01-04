<script>
import JumboApp from "./_partials/JumboApp.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    JumboApp,
  },
};
</script>

<template>
  <JumboApp />
  <!-- SEZIONE 1 -->
  <section class="my-3">
    <!-- TITOLO -->
    <h1 class="text-center font-bold text-6xl">STORIA AZIENDA</h1>

    <!-- MAIN CONTENT -->
    <div class="flex flex-row items-start justify-center mt-6 flex-wrap">
      <div class="w-6/12 flex flex-col items-center gap-3">
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis
          iure fugiat mollitia iste exercitationem. In quas voluptatum a, sed
          amet voluptates atque libero quia blanditiis, totam nobis omnis
          expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat, tempora voluptatibus ad quos facere repellendus cumque
          pariatur, possimus nihil quod hic ex minus repudiandae illum
          reprehenderit fugiat voluptas consequuntur ab.
        </p>

        <!-- CAROSELLO -->
        <div class="carousel carousel-center rounded-box">
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Pizza"
            />
          </div>
        </div>

        <!-- TIMELINE -->
        <div class="overflow-x-auto">
          <ul class="timeline">
            <li>
              <div class="timeline-start">1984</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">
                First Macintosh computer
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start">1998</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">iMac</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start">2001</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">iPod</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start">2007</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">iPhone</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start">2015</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Apple Watch</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <hr class="my-10" />

  <!-- SEZIONE 2 -->
  <section class="my-3">
    <h2 class="text-center font-bold text-6xl">SERVIZI AZIENDA</h2>

    <div class="flex justify-center flex-col items-center mt-6">
      <p class="w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla
        sint numquam? Veniam alias dolorem quas ea, quae natus, quidem dicta
        quam facere molestiae sunt reprehenderit commodi, modi aut assumenda.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id
        doloremque ab distinctio molestiae! Similique modi fuga, asperiores,
        nobis porro repellat illo tempora ullam id cum alias impedit numquam
        expedita.
      </p>

      <div class="faq w-1/2">
        <h3 class="text-center font-bold text-3xl">Piu info</h3>
        <div class="collapse collapse-arrow bg-base-200 my-4">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr class="my-10" />

  <!-- SEZIONE 3 -->
  <section class="my-3 flex flex-col items-center justify-center gap-3">
    <h2 class="text-center font-bold text-6xl">Cosa dicono di noi</h2>
    <p class="text-center text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse fuga
      dolore incidunt vero inventore.
    </p>
    <div class="carousel w-1/2 relative">
      <div id="item1" class="carousel-item w-full relative">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          class="w-full"
        />
        <p
          class="carousel-text absolute top-0 left-0 w-full text-black text-center"
        >
          Cliente 1
        </p>
      </div>
      <div id="item2" class="carousel-item w-full relative">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          class="w-full"
        />
        <p
          class="carousel-text absolute top-0 left-0 w-full text-black text-center"
        >
          Cliente 2
        </p>
      </div>
      <div id="item3" class="carousel-item w-full relative">
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          class="w-full"
        />
        <p
          class="carousel-text absolute top-0 left-0 w-full text-black text-center"
        >
          Cliente 3
        </p>
      </div>
      <div id="item4" class="carousel-item w-full relative">
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          class="w-full"
        />
        <p
          class="carousel-text absolute top-0 left-0 w-full text-black text-center"
        >
          Cliente 4
        </p>
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
