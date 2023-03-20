import React, { useEffect} from 'react';
import { Form, Button, Input } from 'antd';

export default function FormShowData() {
	const [form] = Form.useForm();

	useEffect(() => {
		
		fetch('http://localhost/test-api/user.php')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			// ต้องกำหนดชื่อ key ใน json response ให้ตรงกับชื่อฟิลด์ในฟอร์ม
			form.setFieldsValue(data);

			// form.setFieldsValue({
			// 	first_name: data.first_name,
			// 	last_name: data.last_name
			// });
		})

	}, [form]);

	// Case: Submit button out of Form
	const handleFormSubmit = () => {
		form.validateFields()
			.then((values) => {
				// Submit values
				// submitValues(values);
			})
			.catch((errorInfo) => {});
	};

	return (
		<>
			<Form form={form}>
				<Form.Item name="first_name" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name="last_name" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
			</Form>
			<Button onSubmit={handleFormSubmit} />
		</>
	);
};