<template>
  <base-card>
    <section>
      <div>
        <div>
          <Form @submit="onSubmit">
            <div class="flex justify-between">
              <div class="w-[622px]">
                <div class="w-[606px] text-[#232323] text-[21px]">
                  <p>
                    რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                    გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის
                    და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
                    მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                  </p>
                  <p class="mt-5">
                    პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
                    და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
                  </p>
                </div>
                <div class="mt-11">
                  <h2 class="font-bold text-[22px]">
                    რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                    შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
                  </h2>
                  <ErrorMessage
                    class="text-red-500"
                    name="non_formal_meetings"
                  />
                  <div class="mt-[17px] flex items-center">
                    <Field
                      v-model="setMeetings"
                      type="radio"
                      name="non_formal_meetings"
                      value="twice_a_week"
                      rules="required"
                      label="პასუხის არჩევა"
                    />
                    <label class="text-xl ml-5">კვირაში ორჯერ</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="non_formal_meetings"
                      value="once_a_week"
                    />
                    <label class="text-xl ml-5">კვირაში ერთხელ</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="non_formal_meetings"
                      value="once_in_a_two_weeks"
                    />
                    <label class="text-xl ml-5">ორ კვირაში ერთხელ</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="non_formal_meetings"
                      value="once_in_a_month"
                    />
                    <label class="text-xl ml-5">თვეში ერთხელ</label>
                  </div>
                </div>
                <div class="mt-11">
                  <h2 class="font-bold text-[21px]">
                    კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
                  </h2>
                  <ErrorMessage
                    class="text-red-500"
                    name="number_of_days_from_office"
                  />
                  <div class="mt-[17px] flex items-center">
                    <Field
                      v-model="setOfficeDays"
                      type="radio"
                      name="number_of_days_from_office"
                      value="0"
                      rules="required"
                      label="პასუხის არჩევა"
                    />
                    <label class="text-xl ml-5">0</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="number_of_days_from_office"
                      value="1"
                    />
                    <label class="text-xl ml-5">1</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="number_of_days_from_office"
                      value="2"
                    />
                    <label class="text-xl ml-5">2</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="number_of_days_from_office"
                      value="3"
                    />
                    <label class="text-xl ml-5">3</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="number_of_days_from_office"
                      value="4"
                    />
                    <label class="text-xl ml-5">4</label>
                  </div>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      type="radio"
                      name="number_of_days_from_office"
                      value="5"
                    />
                    <label class="text-xl ml-5">5</label>
                  </div>
                </div>
                <div class="mt-11">
                  <h2 class="font-bold text-[22px]">
                    რას ფიქრობ ფიზიკურ შეკრებებზე?
                  </h2>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      v-model="setLiveMeetings"
                      as="textarea"
                      name="what_about_meetings_in_live"
                      class="border w-full border-[#232323] h-[184px] pt-2 pl-2"
                    />
                  </div>
                </div>
                <div class="mt-11">
                  <h2 class="font-bold text-[22px]">
                    რას ფიქრობ არსებულ გარემოზე:
                  </h2>
                  <h2 class="font-bold text-[22px]">
                    რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                  </h2>
                  <div class="mt-[17px] flex items-center">
                    <Field
                      v-model="setOpinion"
                      as="textarea"
                      name="ell_us_your_opinion_about_us"
                      class="border w-full border-[#232323] h-[184px] pt-2 pl-2"
                    />
                  </div>
                </div>
                <div class="mt-14 flex justify-end">
                  <button
                    class="bg-[#208298] py-[17px] px-[29px] text-white text-lg font-bold rounded-[42px]"
                  >
                    დასრულება
                  </button>
                </div>
              </div>
              <div class="relative">
                <img src="@/assets/images/bike.png" alt="doctor" />
                <img
                  v-motion
                  :initial="{ opacity: 0, x: -50, y: -50 }"
                  :enter="{ opacity: 1, x: 0, y: 0 }"
                  class="absolute top-[63px] left-[94px] transition ease-out duration-1000 -z-10"
                  src="@/assets/images/heart.svg"
                  alt="heart"
                />
              </div>
            </div>
            <div class="flex justify-center mt-[91px] pb-[100px]">
              <button @click="goBack">
                <img src="@/assets/images/prevPage.svg" alt="prev page" />
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
import axios from "axios";
defineRule("required", required);
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapGetters("policy", [
      "meetings",
      "officeDays",
      "liveMeetings",
      "opinion",
    ]),
    ...mapGetters("identification", ["firstName", "lastName", "email"]),
    ...mapGetters("condition", [
      "hadCovid",
      "hadCovidDate",
      "hadAntibodyTest",
      "antibodiesTestDate",
      "antibodiesNumber",
    ]),
    ...mapGetters("vaccinate", ["hadVaccine", "vaccinationStage", "waiting"]),
    setMeetings: {
      get() {
        return this.meetings;
      },
      set(value) {
        this.$store.dispatch("policy/setMeetings", value);
      },
    },
    setOfficeDays: {
      get() {
        return this.officeDays;
      },
      set(value) {
        this.$store.dispatch("policy/setOfficeDays", value);
      },
    },
    setLiveMeetings: {
      get() {
        return this.liveMeetings;
      },
      set(value) {
        this.$store.dispatch("policy/setLiveMeetings", value);
      },
    },
    setOpinion: {
      get() {
        return this.opinion;
      },
      set(value) {
        this.$store.dispatch("policy/setOpinion", value);
      },
    },
    formData() {
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        had_covid: this.hadCovid,
        had_antibody_test: this.hadAntibodyTest,
        had_vaccine: this.hadVaccine,
        non_formal_meetings: this.meetings,
        number_of_days_from_office: this.officeDays,
      };
      if (this.hadAntibodyTest === false) {
        data["covid_sickness_date"] = new Date(
          this.hadCovidDate
        ).toLocaleDateString("en-GB");
      } else {
        data["antibodies"] = {
          test_date: this.antibodiesTestDate,
          number: this.antibodiesNumber,
        };
      }
      if (this.hadVaccine === true) {
        data["vaccination_stage"] = this.vaccinationStage;
      } else {
        data["i_am_waiting"] = this.waiting;
      }

      if (this.liveMeetings) {
        data["what_about_meetings_in_live"] = this.liveMeetings;
      }
      if (this.opinion) {
        data["tell_us_your_opinion_about_us"] = this.opinion;
      }
      return data;
    },
  },

  methods: {
    onSubmit() {
      axios
        .post("https://covid19.devtest.ge/api/create", this.formData)
        .catch((error) => console.log(error));
      this.$router.push({ name: "5" });
    },
    goBack() {
      this.$router.push({ name: "3" });
    },
  },
};
</script>
