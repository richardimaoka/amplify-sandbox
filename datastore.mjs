import { DataStore } from '@aws-amplify/datastore';
import { Blog } from './models';

await DataStore.save(
    new Blog({
		"name": "Lorem ipsum dolor sit amet",
		"posts": []
	})
);
