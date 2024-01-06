<script>
export default {
  data() {
    return {
      title: "Hello world",
      selectedLabel: "",
      projects: [
        {
          imageSrc:
            "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "test 1",
          description: "If a dog chews shoes, whose shoes does he choose?",
          labels: ["Laser"],
        },
        {
          imageSrc:
            "https://images.pexels.com/photos/14866387/pexels-photo-14866387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          title: "test 2",
          description: "If a dog chews shoes, whose shoes does he choose?",
          labels: ["Fiamme", "Laser"],
        },
        {
          imageSrc:
            "https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "test 3",
          description: "If a dog chews shoes, whose shoes does he choose?",
          labels: ["Laser"],
        },
        {
          imageSrc:
            "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "test 4",
          description: "If a dog chews shoes, whose shoes does he choose?",
          labels: ["Fiamme"],
        },
      ],
    };
  },

  computed: {
    // Ottenere tutte le labels univoche da tutti i progetti
    allLabels() {
      const labelsSet = new Set();
      this.projects.forEach((project) => {
        project.labels.forEach((label) => {
          labelsSet.add(label);
        });
      });
      return Array.from(labelsSet);
    },
    // Filtrare i progetti in base alla label selezionata
    filteredProjects() {
      if (!this.selectedLabel) {
        return this.projects;
      }
      return this.projects.filter((project) =>
        project.labels.includes(this.selectedLabel)
      );
    },
  },
};
</script>

<template>
  <div class="flex justify-center sm:justify-end mx-8 md:mx-10 lg:mx-12">
    <select
      v-model="selectedLabel"
      class="select select-bordered w-full max-w-xs text-dark-text cursor-none"
    >
      <option disabled value>Filtra progetti</option>
      <option value="">Mostra tutti i progetti</option>
      <option v-for="label in allLabels" :key="label" :value="label">
        {{ label }}
      </option>
    </select>
  </div>
  <!-- CARDS GROUP -->
  <div
    class="flex justify-center flex-wrap gap-16 my-20 mx-8 md:mx-10 lg:mx-12"
  >
    <div
      v-for="(project, index) in filteredProjects"
      :key="index"
      class="card w-80 bg-base-100 shadow-card text-dark-text"
    >
      <figure>
        <img
          class="w-full h-80 hover:scale-110 transition duration-300 object-cover"
          :src="project.imageSrc"
          :alt="`Image for ${project.title}`"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-bold text-3xl">{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="card-actions justify-end mt-3">
          <div
            v-for="(label, labelIndex) in project.labels"
            :key="labelIndex"
            class="badge badge-outline"
          >
            {{ label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
