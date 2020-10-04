<template>
  <div>
    <div class="grey--text text-darken-1 mb-2">
      <h2>Datacenter</h2>
    </div>
    <p class="font-weight-regular">
      provision server instances in KVM.
    </p>
    <FormProvisionVM />
  </div>
</template>

<script>
import FormProvisionVM from "@/components/datacenter/FormProvisionVM";
export default {
  data: () => ({
    model: null,
    classes: [
      ["h1", "Heading 1", "6rem", "300", "-.015625em", -1],
      ["h2", "Heading 2", "3.75rem", "300", "-.0083333333em", 0],
      ["h3", "Heading 3", "3rem", "400", "normal", 1],
      ["h4", "Heading 4", "2.125rem", "400", ".0073529412em", 2],
      ["h5", "Heading 5", "1.5rem", "400", "normal", 2],
      ["h6", "Heading 6", "1.25rem", "500", ".0125em", 3],
      ["subtitle-1", "Subtitle 1", "1rem", "400", ".009375em", 4],
      ["subtitle-2", "Subtitle 2", "0.875rem", "500", ".0071428571em", 4],
      ["body-1", "Body 1", "1rem", "400", ".03125em", 4],
      ["body-2", "Body 2", "0.875rem", "400", ".0178571429em", 4],
      ["button", "Button", "0.875rem", "500", ".0892857143em", 4],
      ["caption", "Caption", "0.75rem", "400", ".0333333333em", 4],
      ["overline", "Overline", "0.75rem", "500", ".1666666667em", 4]
    ]
  }),
  components: {
    FormProvisionVM
  }
};
</script>

<style scoped></style>
