<template>
  <base-card>
    <section>
      <div>
        <div>
          <Form @submit="onSubmit">
            <div class="flex justify-between">
              <div>
                <h2 class="text-[22px] font-bold">უკვე აცრილი ხარ?*</h2>
                <ErrorMessage class="text-red-500" name="had_vaccine" />
                <div class="mt-2 flex items-center">
                  <Field
                    v-model="setHadVaccine"
                    rules="check_value"
                    name="had_vaccine"
                    type="radio"
                    :value="true"
                  />
                  <label class="ml-5 text-[#232323] text-xl">კი</label>
                </div>
                <div class="flex items-center">
                  <Field
                    v-model="setHadVaccine"
                    name="had_vaccine"
                    type="radio"
                    :value="false"
                  />
                  <label class="ml-5 text-[#232323] text-xl">არა</label>
                </div>
                <div v-if="setHadVaccine" class="mt-12">
                  <h2 class="text-[22px] font-bold">აირჩიე რა ეტაპზე ხარ*</h2>
                  <ErrorMessage class="text-red-500" name="vaccination_stage" />
                  <div class="flex items-center">
                    <Field
                      v-model="setVaccinationStage"
                      label="ეტაპის არჩევა"
                      name="vaccination"
                      rules="required"
                      type="radio"
                      value="first_dosage_and_registered_on_the_second"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
                    >
                  </div>
                  <div class="flex items-center">
                    <Field
                      name="vaccination"
                      value="fully_vaccinated"
                      type="radio"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >სრულად აცრილი ვარ</label
                    >
                  </div>
                  <div class="flex items-center">
                    <Field
                      v-model="setVaccinationStage"
                      name="vaccination"
                      type="radio"
                      value="first_dosage_and_not_registered_yet"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
                    >
                  </div>
                </div>
                <div
                  v-if="showVaccinateStage"
                  class="w-[337px] ml-6 mt-12 text-xl"
                >
                  <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</p>
                  <a
                    class="text-[#1289AE]"
                    href="https://booking.moh.gov.ge/"
                    target="_blank"
                    >https://booking.moh.gov.ge/</a
                  >
                </div>
                <div v-if="setHadVaccine === false" class="mt-12">
                  <h2 class="text-[22px] font-bold">რას ელოდები?*</h2>
                  <ErrorMessage class="text-red-500" name="question_field" />
                  <div class="mt-2 flex items-center">
                    <Field
                      v-model="setWaiting"
                      rules="required"
                      name="question_field"
                      type="radio"
                      value="registered_and_waiting"
                      label="პასუხის არჩევა"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
                    >
                  </div>
                  <div class="mt-2 flex items-center">
                    <Field
                      name="question_field"
                      type="radio"
                      value="not_planning"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >არ ვგეგმავ</label
                    >
                  </div>
                  <div class="mt-2 flex items-center">
                    <Field
                      name="question_field"
                      type="radio"
                      value="had_covid_and_planning_to_be_vaccinated"
                    />
                    <label class="ml-5 text-[#232323] text-xl"
                      >გადატანილი მაქვს და ვგეგმავ აცრას</label
                    >
                  </div>
                  <div v-if="showVaccinateLink" class="mt-12 w-[492px] ml-5">
                    <p class="text-xl text-[#232323]">
                      ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ
                      შეგიძლიათ ვაქცინის გაკეთება.
                    </p>
                    <span class="text-xl text-[#232323] block mt-8"
                      >👉 რეგისტრაციის ბმული
                    </span>
                    <a
                      class="text-xl text-[#1289AE]"
                      href="https://booking.moh.gov.ge/"
                      target="_blank"
                      >https://booking.moh.gov.ge/</a
                    >
                  </div>
                </div>
              </div>
              <div class="relative top-[0px] right-[0px]">
                <img src="@/assets/images/doctor2.png" alt="doctor" />
                <img
                  v-motion
                  :initial="{ opacity: 0, x: -100, y: 200 }"
                  :enter="{ opacity: 1, x: 0, y: 0 }"
                  class="absolute -z-10 top-[-25px] transition ease-out duration-1000 left-[25px]"
                  src="@/assets/images/star.svg"
                  alt="star"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <button class="mr-[117px]" @click="goBack">
                <img src="@/assets/images/prevPage.svg" alt="prev page" />
              </button>
              <button class="mr-[70px]">
                <img src="@/assets/images/nextPage.svg" alt="next page" />
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </base-card>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
import { mapGetters } from "vuex";
defineRule("required", required);

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapGetters("vaccinate", ["hadVaccine", "vaccinationStage", "waiting"]),
    setHadVaccine: {
      get() {
        return this.hadVaccine;
      },
      set(value) {
        this.$store.dispatch("vaccinate/setHadVaccine", value);
      },
    },
    setWaiting: {
      get() {
        return this.waiting;
      },
      set(value) {
        this.$store.dispatch("vaccinate/setWaiting", value);
      },
    },
    setVaccinationStage: {
      get() {
        return this.vaccinationStage;
      },
      set(value) {
        this.$store.dispatch("vaccinate/setVaccinationStage", value);
      },
    },
    showVaccinateStage() {
      return this.setVaccinationStage === "first_dosage_and_not_registered_yet";
    },
    showVaccinateLink() {
      return this.setWaiting === "had_covid_and_planning_to_be_vaccinated";
    },
  },

  methods: {
    onSubmit() {
      this.$router.push({ name: "4" });
    },
    goBack() {
      this.$router.push({ name: "2" });
    },
  },
};
</script>
