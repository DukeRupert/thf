<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { toast } from 'svelte-sonner';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated({ form }) {
			if (form.message) {
				// Display the message using a toast library
				switch (form.message.type) {
					case 'error':
						toast.error(form.message.text)			
						break;
					case 'success':
						toast.success(form.message.text)
					default:
						toast.info(form.message.text)
				}
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form class="mx-auto mt-16 max-w-xl sm:mt-20" method="POST" use:enhance>
	<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
		<div class="sm:col-span-2">
			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input {...attrs} bind:value={$formData.name} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="sm:col-span-2">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="sm:col-span-2">
			<Form.Field {form} name="tel">
				<Form.Control let:attrs>
					<Form.Label>Phone</Form.Label>
					<Input {...attrs} bind:value={$formData.tel} placeholder="optional" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="sm:col-span-2 hidden">
			<label for="password">password</label>
			<input name="password" type="password" />
		</div>
		<div class="sm:col-span-2 hidden">
			<label for="username">username</label>
			<input name="username" type="text" />
		</div>
		<div class="sm:col-span-2">
			<Form.Field {form} name="message">
				<Form.Control let:attrs>
					<Form.Label>Message</Form.Label>
					<Textarea
						{...attrs}
						placeholder="What can we do for you?"
						class="resize-none"
						bind:value={$formData.message}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<div class="mt-10">
			<Form.Button class="w-full">Submit</Form.Button>
		</div>
	</div>
</form>
