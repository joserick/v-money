<template lang="html">
  <input type="tel"
         v-model="innerValue"
         v-money="{precision, decimal, thousands, prefix, suffix, allowBlank, min, max}"
         v-bind:pattern="pattern"
         v-on:blur="blur"
         class="v-money"
         :placeholder="placeholder"
         :id="id"
         :title="minMaxMessage"
         :maxlength="maxlength"/>
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
    placeholder: {
      type: String,
      default: () => defaults.placeholder
    },
    id: {
      type: String
    },
    minMaxMessage: {
      type: String
    },
    maxlength: {
      type: Number
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
      type: Number
    },
    minMaxBlur: {
      type: Boolean,
      default: () => defaults.minMaxBlur
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

      if (this.masked) {
        this.$emit('input', newVal)
      }else{
        let value = unformat(newVal, this.precision, this.$props)
        if (value > this.$props.max) {
          this.pattern = this.$props.max
        } else if (value < this.$props.min) {
          this.pattern = this.$props.min
        } else {
          this.pattern = ".*"
        }
        this.$emit('input', value)
      }
    },

    value(newVal) {
      this.innerValue = format(newVal, this.$props)
    }
  },

  created() {
    if (this.value) {
      this.innerValue = format(this.value, this.$props);
    }
  },

  methods: {
    blur() {
      if (typeof this.pattern === 'number' && this.$props.minMaxBlur) {
        this.$emit('input', this.pattern)
        this.pattern = ".*"
      }
    }
  }
}
</script>
