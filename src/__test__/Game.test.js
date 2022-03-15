import React from 'react'
import Game from '../components/Game'
import {render, fireEvent, screen} from '@testing-library/react'

test('should add the cheating state by clicking on RoboHead', () => {

  const {getByTestId} = render(<Game />)
  const roboHead = screen.getByTestId('robot-head')

  // console.log(roboHead)
  fireEvent.click(roboHead)

  expect(roboHead).toHaveClass('cheating')
 })