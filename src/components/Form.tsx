import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/form.module.css';

type FormValues = {
  email: string;
  password: any;
};

export default function Form() {
  const {
    register, // registers the input and applies validation rules
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>

        <input
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', { required: true })}
          type="email"
          name="email"
          placeholder="Email address"
        />
        {errors?.email && errors.email.type === 'required' && (
          // more about role="alert" https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
          <span role="alert" className={styles.error}>
            This field is required
          </span>
        )}
        <label>Password</label>
        <input
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', { required: true })}
          type="password"
          name="password"
          placeholder="Password"
        />
        {errors?.email && errors.email.type === 'required' && (
          // more about role="alert" https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
          <span role="alert" className={styles.error}>
            This field is required
          </span>
        )}
        <button className={styles.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
