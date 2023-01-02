<template>
  <base-card>
    <section>
      <Form @submit="onSubmit">
        <div class="flex h-[800px]">
          <div class="w-[570px]">
            <h2 class="text-[22px] font-bold">გაქვს გადატანილი Covid-19?*</h2>
            <ErrorMessage class="text-red-500" name="radio" />
            <div class="mt-2 flex items-center">
              <Field
                v-model="setHadCovid"
                rules="required"
                name="radio"
                type="radio"
                value="yes"
                label="ველი"
              />
              <label class="ml-5 text-[#232323] text-xl">კი</label>
            </div>
            <div class="flex items-center">
              <Field name="radio" type="radio" value="no" />
              <label class="ml-5 text-[#232323] text-xl">არა</label>
            </div>
            <div class="flex items-center">
              <Field name="radio" type="radio" value="have_right_now" />
              <label class="ml-5 text-[#232323] text-xl">ახლა მაქვს</label>
            </div>
            <div v-if="setHadCovid === 'yes'" class="mt-12">
              <h2 class="text-[22px] font-bold">
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </h2>
              <ErrorMessage class="text-red-500" name="field" />
              <div class="flex items-center">
                <Field
                  v-model="setHadAntibodyTest"
                  name="field"
                  rules="check_value"
                  type="radio"
                  :value="true"
                />
                <label class="ml-5 text-[#232323] text-xl">კი</label>
              </div>
              <div class="flex items-center">
                <Field
                  v-model="setHadAntibodyTest"
                  name="field"
                  type="radio"
                  :value="false"
                />
                <label class="ml-5 text-[#232323] text-xl">არა</label>
              </div>
              <div v-if="setHadAntibodyTest === false" class="mt-[47px]">
                <h2 class="text-[22px] font-bold">
                  მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                  Covid-19*
                </h2>
                <ErrorMessage class="text-red-500" name="date" />
                <div class="mt-[20px]">
                  <Field
                    v-model="setHadCovidDate"
                    class="pl-5 pr-5 w-full h-[50px] border border-[#232323]"
                    type="text"
                    placeholder="დდ/თთ/წწ"
                    onfocus="(this.type='date')"
                    name="date"
                    rules="required"
                    label="თარიღი"
                  />
                </div>
              </div>
              <div v-if="setHadAntibodyTest === true" class="mt-12">
                <h2 class="text-[22px] font-bold">
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა
                </h2>
                <div class="flex flex-col mt-5">
                  <Field
                    v-model="setAntibodiesTestDate"
                    class="h-[50px] pl-5 pr-5 border border-[#232323]"
                    type="text"
                    placeholder="რიცხვი"
                    onfocus="(this.type='date')"
                    name="fullDate"
                  />
                  <Field
                    v-model.number="setAntibodiesNumber"
                    class="h-[50px] pl-5 mt-6 border border-[#232323]"
                    type="number"
                    placeholder="ანტისხეულების რაოდენობა"
                    name="number"
                  />
                  <ErrorMessage class="text-red-500" name="number" />
                </div>
              </div>
            </div>
          </div>
          <div class="relative top-[-55px] right-[-60px]">
            <img src="@/assets/images/vaccinate2.png" alt="vaccinate" />
            <div
              v-motion
              :initial="{ opacity: 0, width: 229, x: 200, y: -100 }"
              :enter="{ opacity: 1, x: 0, y: 0 }"
              class="bg-[#DD3939] w-[229px] h-[229px] transition duration-1000 ease-out rounded-full -z-10 absolute top-[260px] left-[75px]"
            ></div>
          </div>
        </div>
        <div class="flex justify-center mt-9">
          <button class="mr-[117px]" @click="goBack">
            <img src="@/assets/images/prevPage.svg" alt="prev page" />
          </button>
          <button class="mr-[70px]">
            <img src="@/assets/images/nextPage.svg" alt="next page" />
          </button>
        </div>
      </Form>
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
    ...mapGetters("condition", [
      "hadCovid",
      "hadCovidDate",
      "hadAntibodyTest",
      "antibodiesTestDate",
      "antibodiesNumber",
    ]),
    setHadCovid: {
      get() {
        return this.hadCovid;
      },
      set(value) {
        this.$store.dispatch("condition/setHadCovid", value);
      },
    },
    setHadCovidDate: {
      get() {
        return this.hadCovidDate;
      },
      set(value) {
        this.$store.dispatch("condition/setHadCovidDate", value);
      },
    },
    setHadAntibodyTest: {
      get() {
        return this.hadAntibodyTest;
      },
      set(value) {
        this.$store.dispatch("condition/setHadAntibodyTest", value);
      },
    },
    setAntibodiesTestDate: {
      get() {
        return this.antibodiesTestDate;
      },
      set(value) {
        this.$store.dispatch("condition/setAntibodiesTestDate", value);
      },
    },
    setAntibodiesNumber: {
      get() {
        return this.antibodiesNumber;
      },
      set(value) {
        this.$store.dispatch("condition/setAntibodiesNumber", value);
      },
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "3" });
    },
    goBack() {
      this.$router.push({ name: "1" });
    },
  },
};
</script>
