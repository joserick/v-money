<template lang="html">
  <input type="tel"
         v-model="innerValue"
         v-money="{precision, decimal, thousands, prefix, suffix, allowBlank, min, max}"
         class="v-money"
         :placeholder="placeholder"
         :id="id"
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
      required: true,
      type: [Number, String],
      default: 0
    },
    placeholder: {
      type: String,
      default: ''
    },
    id: {
      type: String
    },
    maxlength: {
      type: Number
    },
    masked: {
      type: Boolean,
      default: false
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
    }
  },

  directives: {money},

  data() {
    return {
      innerValue: 0
    }
  },

  watch: {
    innerValue(newVal, oldVal) {
      this.$emit('input', this.masked ? newVal : unformat(newVal, this.precision));
    },

    value(newVal) {
      this.innerValue = format(newVal, this.$props)
    }
  }
}
</script>
