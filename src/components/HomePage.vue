<script>
import JumboApp from "./_partials/JumboApp.vue";
import SliderApp from "./_partials/SliderApp.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    JumboApp,
    SliderApp,
  },
};
</script>

<template>
  <JumboApp />
  <!-- SEZIONE 1 -->
  <section class="my-10">
    <!-- TITOLO -->
    <h1 class="text-center font-bold text-6xl">Chi siamo?</h1>

    <!-- MAIN CONTENT -->
    <div class="flex flex-row items-start justify-center my-6 flex-wrap">
      <div class="w-10/12 md:w-8/12 lg:w-7/12 flex flex-col items-center gap-3">
        <p class="text-lg my-5">
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
              src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1047940/pexels-photo-1047940.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pizza"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=600"
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

  <div class="divider mx-8 md:mx-10 lg:mx-12"></div>

  <!-- SEZIONE 2 -->
  <section class="my-10 flex flex-col justify-center items-center">
    <h2 class="text-center font-bold text-6xl">Che cosa facciamo?</h2>

    <div class="w-10/12 md:w-8/12 lg:w-7/12 my-6">
      <div class="flex items-center gap-4">
        <p class="text-lg my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nulla
          sint numquam? Veniam alias dolorem quas ea, quae natus, quidem dicta
          quam facere molestiae sunt reprehenderit commodi, modi aut assumenda.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id
          doloremque ab distinctio molestiae! Similique modi fuga, asperiores,
          nobis porro repellat illo tempora ullam id cum alias impedit numquam
          expedita.
        </p>
        <img
          src="../assets/img/favicon.png"
          class="w-1/6 h-1/6 hidden sm:block"
          alt=""
        />
      </div>

      <div class="faq mt-6">
        <h3 class="text-center font-bold text-3xl my-3">Hai dei dubbi?</h3>
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
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
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

  <div class="divider mx-8 md:mx-10 lg:mx-12"></div>

  <!-- SEZIONE 3 -->
  <section class="my-10 flex flex-col items-center justify-center gap-3">
    <div class="w-10/12 md:w-8/12 lg:w-7/12">
      <h2 class="text-center font-bold text-6xl">Showcase</h2>
      <p class="text-center text-lg my-5">
        Ecco alcuni esempi dei progetti che abbiamo realizzato. Siamo riusciti a
        suscitare la tua curiosità? Esplora il nostro
        <router-link
          to="/portfolio"
          class="font-black underline transition duration-300 hover:text-dark-red"
          >Portfolio</router-link
        >
        per ottenere una visione completa delle nostre competenze e
        realizzazioni!
      </p>
      <div class="w-full flex justify-center items-center my-10">
        <SliderApp />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
