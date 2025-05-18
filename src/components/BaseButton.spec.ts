import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton.vue', () => {
  it('Renders the BaseButton.vue component', () => {
    const wrapper = mount(BaseButton)

    expect(wrapper.text()).toContain('Hello VueConfUS!')
  })
})
