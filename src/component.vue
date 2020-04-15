<template lang="html">
  <input type="tel"
         v-model="innerValue"
         v-money="{precision, decimal, thousands, prefix, suffix, allowBlank, min, max}"
         v-bind:pattern="pattern"
         v-on:blur="blur"
         class="v-money"
         :title="minMaxMessage"
         />
</template>

<script>
import money from './directive'
import defaults from './options'
import {format, unformat} from './utils'

export default {
  name: 'Money',
  props: {
    value: {
      required: false,
      type: [Number, String]
    },
    minMaxMessage: {
      type: String
    },
    masked: {
      type: Boolean,
      default: () => defaults.masked
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
      type: String,
      default: () => defaults.suffix
    },
    allowBlank: {
      type: Boolean,
      default: () => defaults.allowBlank
    },
    max: {
      type: Number,
      default: () => defaults.max
    },
    min: {
      type: Number,
      default: () => defaults.min
    },
    step: {
      type: Number,
      default: () => defaults.step
    },
    amend: {
      type: Boolean,
      default: () => defaults.amend
    }
  },

  directives: {money},

  data() {
    return {
      pattern: ".*",
      innerValue: 0
    }
  },

  watch: {
    innerValue(newVal, oldVal) {
      if (newVal === oldVal) return
      let value = this.unformat(newVal)

      this.$emit('input', this.masked ? newVal : value)

      if (value > this.$props.max) {
        this.pattern = this.$props.max
      } else if (value < this.$props.min) {
        this.pattern = this.$props.min
      } else {
        this.pattern = ".*"
      }
    },

    value(newVal) {
      this.innerValue = this.format(newVal)
    }
  },

  created() {
    if (this.value) {
      this.innerValue = this.format(this.value);
    }
  },

  methods: {
    blur() {
      if (typeof this.pattern === 'number' && this.$props.amend) {
        this.$emit('input', this.pattern)
        this.pattern = ".*"
      }
    },
    format(value){
      return format(value, this.$props)
    },
    unformat(value){
      return unformat(value, this.precision, this.$props)
    }
  }
}
</script>
