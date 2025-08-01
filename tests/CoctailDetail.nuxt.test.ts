import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CocktailDetail from '@/components/CocktailDetail.vue';
import { mockDrink } from './mockData';

describe('CocktailDetail', () => {
	it('renders cocktail detail properly', () => {
		const wrapper = mount(CocktailDetail, {
			props: {
				drinks: [mockDrink],
			},
		});
		expect(wrapper.text()).toContain('Test Cocktail');
		expect(wrapper.text()).toContain('Test Category');
		expect(wrapper.text()).toContain('Alcoholic');
		expect(wrapper.text()).toContain('Test Glass');
		expect(wrapper.text()).toContain('Shake well and serve.');
		expect(wrapper.text()).toContain('50ml Vodka');
		expect(wrapper.text()).toContain('100ml Orange Juice');
	});
});
