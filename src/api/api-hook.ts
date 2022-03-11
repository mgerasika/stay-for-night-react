import { orders } from './hooks/api-orders.hook';
import { requests } from './hooks/api-request.hook';
import { volunteers } from './hooks/api-volunteer.hook';

export const apiHooks = {
	orders,
	volunteers,
	requests,
};
