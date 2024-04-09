import { Meta, StoryObj } from "@storybook/react";

import Counter from "../organisms/counter";

export default{
    title: '3. Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta <typeof Counter>;


export const Primary: StoryObj <typeof Counter> = {
    args: {
        title: 'Counter',
        counter: 0,
        increment: 'Increment',
        decrement:'Decrement'
    },
};

