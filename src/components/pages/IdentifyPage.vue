<template>
  <base-card>
    <section>
      <div>
        <div>
          <Form @submit="onSubmit">
            <div class="flex h-[690px]">
              <div class="w-[513px] max-w-[513px]">
                <div class="mb-12">
                  <label for="firstName" class="text-[22px] font-bold"
                    >სახელი *</label
                  >
                  <Field
                    v-model="setFirstName"
                    class="border border-[#232323] w-full text-[18px] pl-5 py-2.5"
                    type="text"
                    name="firstName"
                    rules="required|min:2"
                    label="სახელი"
                  />
                  <ErrorMessage class="text-red-500" name="firstName" />
                </div>
                <div class="mb-12">
                  <label for="lastName" class="text-[22px] font-bold"
                    >გვარი *</label
                  >
                  <Field
                    v-model="setLastName"
                    class="border border-[#232323] w-full text-[18px] pl-5 py-2.5"
                    type="text"
                    name="lastName"
                    rules="required|min:2"
                    label="გვარი"
                  />
                  <ErrorMessage class="text-red-500" name="lastName" />
                </div>
                <div>
                  <label for="email" class="text-[22px] font-bold"
                    >იმეილი *</label
                  >
                  <Field
                    v-model="setEmail"
                    type="email"
                    name="email"
                    rules="required|email|redberry_email"
                    class="border border-[#232323] w-full text-[18px] pl-[20px] py-2.5"
                  />
                  <ErrorMessage class="text-red-500" name="email" />
                </div>
                <div class="mt-28">
                  <p
                    class="w-[53%] relative before:absolute before:w-[237px] before:h-[1px] before:bg-[#000000] before:top-[-20px]"
                  >
                    *-ით მონიშნული ველების შევსება სავალდებულოა
                  </p>
                </div>
              </div>
              <div class="relative top-[-120px] right-[-100px]">
                <img src="@/assets/images/scan2.png" alt="" />
                <div
                  v-motion
                  :initial="{ opacity: 0, x: -300, y: 20, width: 200 }"
                  :enter="{
                    opacity: 0.5,
                    x: 0,
                    y: 0,
                    width: 558,
                  }"
                  class="bg-yellow-500 w-[558px] h-[70px] duration-700 transition ease-out absolute top-[233px] left-[178px] opacity-50"
                ></div>
              </div>
            </div>
            <div class="flex justify-center">
              <button class="mt-6">
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
import { required, email, min } from "@vee-validate/rules";
import { mapGetters } from "vuex";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapGetters("identification", ["firstName", "lastName", "email"]),
    setFirstName: {
      get() {
        return this.firstName;
      },
      set(value) {
        this.$store.dispatch("identification/setFirstName", value);
      },
    },
    setLastName: {
      get() {
        return this.lastName;
      },
      set(value) {
        this.$store.dispatch("identification/setLastName", value);
      },
    },
    setEmail: {
      get() {
        return this.email;
      },
      set(value) {
        this.$store.dispatch("identification/email", value);
      },
    },
  },

  methods: {
    onSubmit() {
      this.$router.push({ name: "2" });
    },
  },
};
</script>
