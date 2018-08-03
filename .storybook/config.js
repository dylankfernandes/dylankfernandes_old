import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/Button/Button.story')
  require('../src/components/Navbar/Navbar.story')
}

configure(loadStories, module)