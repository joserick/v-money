<template lang="html">
  <input type="tel"
         :value="formattedValue"
         v-on="listeners"
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

  computed: {
    formattedValue () {
      const formattedValue = format(this.value, this.$props)
      return formattedValue
    },
    listeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
          input: function (evt) {
            vm.$emit('input', vm.masked ? evt.target.value : unformat(evt.target.value, vm.precision))
          }
        }
      )
    }
  },
}
</script>
