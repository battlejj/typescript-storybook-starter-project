import * as React from 'react'
import {storiesOf} from '@storybook/react'

import FirstStory from 'src/index'

storiesOf('Basic', module).add('with text', () => (
  <FirstStory title="First story!" />
))
