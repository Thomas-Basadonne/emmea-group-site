<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <input type="radio" name="slide" id="c1" checked />
      <label for="c1" class="card">
        <div class="row">
          <div class="icon bg-light-primary dark:bg-[#223]">1</div>
          <div class="description">
            <h4>Winter</h4>
            <p>Winter has so much to offer - creative activities</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c2" />
      <label for="c2" class="card">
        <div class="row">
          <div class="icon bg-light-primary dark:bg-[#223]">2</div>
          <div class="description">
            <h4>Digital Technology</h4>
            <p>Gets better every day - stay tuned</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c3" />
      <label for="c3" class="card">
        <div class="row">
          <div class="icon bg-light-primary dark:bg-[#223]">3</div>
          <div class="description">
            <h4>Globalization</h4>
            <p>Help people all over the world</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c4" />
      <label for="c4" class="card">
        <div class="row">
          <div class="icon bg-light-primary dark:bg-[#223]">4</div>
          <div class="description">
            <h4>New technologies</h4>
            <p>Space engineering becomes more advanced</p>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* // .wrapper {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// } */

.container {
  height: 400px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.card {
  width: 80px;
  border-radius: 0.75rem;
  background-size: cover;
  overflow: hidden;
  border-radius: 2rem;
  margin: 0 10px;
  display: flex;
  align-items: flex-end;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
}

.card > .row {
  color: white;
  display: flex;
  flex-wrap: nowrap;
}

.card > .row > .icon {
  color: white;
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.card > .row > .description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 80px;
  width: 520px;
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 0.3s;
  transition: all 0.3s ease;
}

.description p {
  color: #b0b0ba;
  padding-top: 5px;
}

.description h4 {
  text-transform: uppercase;
}

input {
  display: none;
}

input:checked + label {
  width: 600px;
}

input:checked + label .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.card[for="c1"] {
  background-image: url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D");
}
.card[for="c2"] {
  background-image: url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlc3RpdmFsfGVufDB8fDB8fHww");
}
.card[for="c3"] {
  background-image: url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZlc3RpdmFsfGVufDB8fDB8fHww");
}
.card[for="c4"] {
  background-image: url("https://images.unsplash.com/photo-1564634747412-791dd0782ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhc2VyfGVufDB8fDB8fHww");
}

/* Media query per schermi larghi */
@media screen and (max-width: 1036px) {
  .container {
    height: 300px;
  }

  .card {
    width: 40px;
    margin: 0 5px;
  }
}

/* Media query per schermi medi */
@media screen and (max-width: 768px) {
  .container {
    height: 250px;
  }

  .card > .row > .description {
    width: 230px;
    margin-top: 5px;
  }

  input:checked + label {
    width: 300px;
  }
}

/* Media query per schermi piccoli */
@media screen and (max-width: 600px) {
  .container {
    height: 200px;
  }

  .card {
    width: 20px;
    margin: 0 3px;
  }

  .card > .row {
    align-items: center;
  }

  .card > .row > .icon {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 15px;
    margin: 15px;
  }

  .card > .row > .description {
    width: 200px;
    margin-top: 0;
  }

  .card > .row > .description > p {
    display: none;
  }

  input:checked + label {
    width: 250px;
  }
}

/* // Effetto figo ma non cio che cerco
// @media (max-width: 766px) {
//   .wrapper {
//     margin-top: 400px;
//   }

//   .container {
//     height: 1200px;
//     flex-direction: column;
//   }

//   .slide {
//     width: 400px;
//     align-items: flex-start;
//   }

//   .slide > .row {
//     flex-direction: column;
//   }

//   .slide > .row > .icon-1,
//   .icon-2,
//   .icon-3 {
//     width: 50px;
//   }

//   .slide {
//     height: 80px;
//   }

//   .slide > .row > .description {
//     height: 500px;
//     width: 400px;
//   }

//   input:checked + label {
//     height: 600px;
//     width: 400px;
//   }
// }*/
</style>
