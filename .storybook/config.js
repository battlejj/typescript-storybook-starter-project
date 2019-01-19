import {configure} from '@storybook/react'

const stories = require.context('../stories/', true, /stories\.tsx$/)

function loadStories() {
  stories.keys().forEach(stories)
}

configure(loadStories, module)
